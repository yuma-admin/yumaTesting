import React, {useState, useEffect} from "react";
import './storeFinder.css'
import Store from './locations/store'
import { Container, Row, Col} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css'
import Search from './search/search'
import MichiganMap from "./MichiganMap/miMap"
import TargetLocation from './targetLocation/targetLocation'
import miStoreJson from '../StateStoreData/miStoreJson.js'
import {useParams} from 'react-router-dom'

// Similar to The Locations Component, This Page is Returned When User Clicks a Michigan Deal
function miStoreFinder(props) {

    //Jane's Tracking Script, Tracks Users as they Navigate Our Page
    const janescript = document.createElement("script");
    janescript.async = true;
    janescript.src =     
    `document.addEventListener("click", function(e) {
          var linkNode = e.srcElement.href ? e.srcElement : e.srcElement.parentNode;
      if(linkNode.localName !== "a" || linkNode.href.endsWith("#")) return;
      
      e.preventDefault();
      var currentQuery = location.search.substr(1);
      var url = new URL(linkNode.href);
      url.search += (url.search.indexOf('?') > -1 ? '&' : '?') + currentQuery;
      var dst = e.target;
      if (dst.target) {
    window.open(url.toString(), dst);
      } else {
    location.assign(url.toString());
      }
    })`;
    document.head.appendChild(janescript);
    
    // Removes a store menu if its there
    const element = document.getElementById('menu-div')
    if (element){
        element.parentNode.removeChild(element);
    }

    // Id state 
    const [id, setId] = useState({
        id:""
    })    

    // Store distance state
    const [storeDistance,setStoreDistance] = useState({
        stores: [],
        zoom:null,
        center:null
    })

    // Default Map API information state
    const [mapParams,setMapParams] = useState({
        zoom:'5',
        center:{lat: 44.3148, lng: -85.6024}
    })
        
    // This Checks to see if a store should be pre-selected
    const {store} = useParams()
    
     
    useEffect(() => {

        if(store){

            // Converts /StoreName/ Route to ID Number
            let storeNumber;
            console.log(store)
                
            switch(store) {
                case 'cannabay':
                    storeNumber = '2600'
                break;
                case 'courtsidegardens':
                    storeNumber = '2'
                break;
                default:
                    storeNumber = ''

                return storeNumber
            }
            
            const found = miStoreJson.find( ({ id }) => id === storeNumber)
                
                if (found) {
                    setId({id:storeNumber})
                }
                return 
        }
        
    },[store])


    // Has a specific store been selected state
    const [menuChosen,setMenuChosen] = useState({
        menu:''
    })

    console.log(menuChosen)

    // This triggers whenever the id or storeDistance state changes
    // This will then update the map zoom and centering 
    useEffect(() => {
        if(id.id){
            const filteredStores = storeJson.filter(store => store.id === id.id)
            setMapParams({...mapParams,zoom:'14',center:{lat:filteredStores[0].lat,lng:filteredStores[0].lng}})
        }
        if(!id.id && !storeDistance.zoom){
            setMapParams({...mapParams,zoom:'5',center:{lat: 44.3148, lng: -85.6024}})
        }
        if(storeDistance.zoom && storeDistance.center && !id.id){
            setMapParams({...mapParams,zoom:storeDistance.zoom, center: storeDistance.center})
        }
        
    },[id, storeDistance] )

    // Whenvever a menu is chosen this will update the storeId state
    useEffect(() => {
        if(menuChosen.menu){
            props.callBack({storeId:menuChosen.menu})
        }
    },[menuChosen])
  
    // If there is no id return the search component, the store component in locations, and a map component
    if(!id.id){
        return(
            <div className="storePageHeight">
            <Container fluid>
                <Row>
                    <Col xs={{span:12,order:2}} sm={{span:12,order:2}} lg={{span:4,order:1}} className='storeFinderInfo'> 
                        <div className='search'>
                            <Search callBack = {setStoreDistance}></Search>
                        </div>
                        <div className='storeCards'>
                            <Store organizedCards={storeDistance.stores} callBack = {setId}></Store>
                        </div>
                    </Col>
                    <Col xs={{span:12,order:1}} sm={{span:12,order:1}} lg={{span:8,order:2}} className='mapCol'>
                        <div className='mobileSearch'>
                            <Search callBack = {setStoreDistance}></Search>
                        </div>
                        <div className='stickyMap desktopMap'> 
                            <MichiganMap center={mapParams.center} zoom={mapParams.zoom} windowSize={'calc(100vh  - 70px - 55px)'}></MichiganMap>
                        </div>
                         <div className='stickyMap mobileMap'> 
                            <MichiganMap center={mapParams.center} zoom={mapParams.zoom -2} windowSize={'70vh'}></MichiganMap>
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
    // If there is an Id return the Target Location component and a map component
    // Also returns a search component on mobile only
    if(id){
        return(
            <Container fluid>
            <Row>
                <Col xs={{span:12,order:2}} sm={{span:12,order:2}} lg={{span:4,order:1}} className='storeFinderInfo selectedStoreInfo'> 
                    <div className='storeCards'>
                        <TargetLocation  id = {id.id} callBack = {setId} menuChosen={setMenuChosen}></TargetLocation>
                    </div>
                </Col>
                <Col xs={{span:12,order:1}} sm={{span:12,order:1}} lg={{span:8,order:2}} className='stickyMap'>
                    <div className='mobileSearch'>
                            <Search callBack = {setStoreDistance} ></Search>
                        </div>
                    <div className='stickyMap desktopMap'> 
                        <MichiganMap center={mapParams.center} zoom={mapParams.zoom} windowSize={'calc(100vh  - 70px - 55px)'}></MichiganMap>
                    </div>
                    <div className='stickyMap mobileMap'> 
                        <MichiganMap center={mapParams.center} zoom={mapParams.zoom} windowSize={'70vh'}></MichiganMap>
                    </div>
                </Col>
            </Row>
        </Container>
        )
    }
}
export default miStoreFinder;