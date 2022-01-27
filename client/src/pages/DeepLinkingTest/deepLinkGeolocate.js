import React from 'react';


function DeepLinkTest() {

    const script = document.createElement("script")
    script.src = `https://api.iheartjane.com/v1/operators/236/embed.js`;
    script.async = true

    document.body.appendChild(script);


    return (
        <>
            <div className='container-fluid'>
            <div class="test" id="jane-frame-script"></div>
            </div>
        </>
    )
}

export default DeepLinkTest
