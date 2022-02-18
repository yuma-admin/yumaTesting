import React from 'react';
import {useHistory} from 'react-router-dom'

// Script From I Heart Jane to Geolocate User.

function GeolocateScript() {

    const script = document.createElement("script")
    script.src = `https://api.iheartjane.com/v1/operators/236/embed.js`;
    script.async = true

    document.body.appendChild(script);




    return (
        <>
            <div className='container-fluid'>
            {/* <div onClick={() => setShowModal(false)} className="deliveryBackButtonBar">Back</div> */}
            <div id="jane-frame-script"></div>
            </div>
        </>
    )
}

export default GeolocateScript