import React from 'react';


function GeolocateScript() {

    const script = document.createElement("script")
    script.src = `https://api.iheartjane.com/v1/operators/236/embed.js`;
    script.async = true

    document.body.appendChild(script);




    return (
        <>
            <div className='container-fluid'>
            {/* <div className='deliveryContainer'> */}
            <div id="jane-frame-script"></div>
            </div>
            {/* </div> */}
        </>
    )
}

export default GeolocateScript