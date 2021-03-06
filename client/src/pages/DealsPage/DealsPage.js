import React, {useState, useEffect} from "react";
import "./newDealsCSS.css"

// IMPORT PAGE SECTIONS
import StateSelector from './page-setup/StateSelector'
import TopPageDeals from './page-setup/TopPageDeals'
import CouponGrid from './page-setup/WeeklyDeals'

// IMPORT LOGIC FUNCTIONS
import dealsDataController from "./page-setup/logic/dealsDataController"
import dealsGridController from "./page-setup/logic/dealsGridBuilder"

// PAGE START
function CSSGrid() {
    
    // Sets Data Based on State Selected and Logic Functions (Above)
    const [stateSelected, setStateSelected] = useState("");
    const [carouselDeals,setCarouselDeals] = useState([""]);
    const [topRightCoupon, setTopRightCoupon] = useState("")
    const [weeklyDeals, setWeeklyDeals] = useState([""]);
    const [cssGridTemplate, setCssGridTemplate] = useState([""]);

    useEffect(() => {

        // Determines Page Setup Based on State Location Selected
        const chosenStateDealData = dealsDataController()
        // Builds CSS Grid Based on Number of Weekly Coupons for that State
        const chosenCssGrid = dealsGridController(chosenStateDealData.chosenWeeklyDeals.length)

        // Sets All Data Based on Above Logic
        setStateSelected(chosenStateDealData.stateData)
        setCarouselDeals(chosenStateDealData.chosenCarousel)
        setTopRightCoupon(chosenStateDealData.chosenTopRightCoupon)
        setWeeklyDeals(chosenStateDealData.chosenWeeklyDeals)
        setCssGridTemplate(chosenCssGrid)

    }, [])

    return (
        <>

        <div className="dealContainer">
        
            {/* STATE SELECTOR  (Dropdown Menu) */}
            <div id="dealsStateSelectorSection">
                <StateSelector stateSelectedData={stateSelected} />
            </div> 

            {/* TOP OF PAGE (Main Carousel and Right Column) */}   
            <div id="dealsTopPageSection">  
                <TopPageDeals carouselData={carouselDeals} topRight={topRightCoupon} />
            </div>

            {/* WEEKLY DEALS (UPDATED EVERY WEEK) */}
            {/* SEE updateDealsHere folder for details */}
            <div id="dealsWeeklyUpdate">
                <CouponGrid 
                    topRight={topRightCoupon}
                    carouselData={carouselDeals} 
                    couponImages={weeklyDeals} 
                    cssGridTemplate={cssGridTemplate} 
                />
            </div>
        
        </div>
    

    </>
    
    )
    
}
    
    
export default CSSGrid;