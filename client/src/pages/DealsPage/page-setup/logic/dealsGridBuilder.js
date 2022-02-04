export default function cssGridBuilder(chosenStateDealData){

    // THIS FUNCTION CHOOSES A GRID TEMPLATE BASED ON WEEKLY COUPON SIZE
    // HOW IT WORKS
    // --- Before this function happens, data from location has already been set
    // --- This function takes the chosenWeeklyDeals length
    // --- And sets a cssGridTemplate class based on number of deals

    // CURRENT GRIDS
    // --- IF 2: cssGridTemplate1 (breaks columns into HALVES)
    // --- IF 3,6,9: cssGridTemplate2 (breaks into THIRDS)
    // --- IF 4,8,12: cssGridTemplate3 (breaks into FOURTHS)
    // --- IF ELSE: any unmentioned numbers, sets cssGridTemplate2
    // --- All CSS design can be cusomtized in newDealsCSS.css

    // THIS SECTION IS NEW AND CAN BE IMPROVED
    // --- Patsi would like to see more complex designs come out of this
    // --- I recommend starting out by keeping this logic, but adding new custom design combos for numbers not mentioned (5, 7, 10, etc.) 
    // --- Because this data maps through props, specific coupon changes will require a little extra logic for grabbing the coupon and setting the specific css 
    // --- Feel free to change anything
    
    if(chosenStateDealData === 2){
        const cssGridTemp = "cssGridTemplate1"
        return(cssGridTemp)
    } else if (chosenStateDealData === 3 
    || chosenStateDealData === 6 
    || chosenStateDealData === 9)
        {
        const cssGridTemp = "cssGridTemplate2"
        return(cssGridTemp)
    } else if (chosenStateDealData === 4 
    || chosenStateDealData === 8 
    || chosenStateDealData === 12){
        const cssGridTemp = "cssGridTemplate3"
        return(cssGridTemp)
    } else {
        const cssGridTemp = "cssGridTemplate2"
        return(cssGridTemp)
    }
    
}