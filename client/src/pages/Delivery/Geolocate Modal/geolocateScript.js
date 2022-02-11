import React from 'react';
import {useHistory} from 'react-router-dom'


function GeolocateScript() {

    const script = document.createElement("script")
    script.src = `https://api.iheartjane.com/v1/operators/236/embed.js`;
    script.async = true

    document.body.appendChild(script);

    let history = useHistory();

    function backClick() {
      history.push("/");
    }

    return (
        <>
            <div className='container-fluid'>
            {/* <div onClick={backClick} className="menuBackButtonBar">Back</div> */}
            <div id="jane-frame-script"></div>
            </div>
        </>
    )
}

export default GeolocateScript