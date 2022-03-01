import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import './menu.css'


function Menu(props){

  //Jane's Tracking Script
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
  
  // This function will return an embedded i heart jane menu with the matching store ID
  const { id } = useParams()
  useEffect(() => {

    const script = document.createElement("script");
    
    script.src = `https://api.iheartjane.com/v1/stores/${id}/embed.js`;
    script.async = true;

    document.body.appendChild(script);

  });

  // This function sends the user back to the Store Finder page
  let history = useHistory();

  function backClick() {
    history.push("/");
  }

  return(
    <>
    <div className="container-fluid">
      <div onClick={backClick} className="menuBackButtonBar">Back</div>

      <div class="test" id="jane-frame-script"></div>
    </div>
    </>
  )

}
export default Menu