import React from 'react';
import './deliveryJson';

function MenuTest() {
   
    const script = document.createElement("script");

    script.src = `https://api.iheartjane.com/v1/stores/3456/embed.js`;
    script.async = true;

    document.body.appendChild(script);

return (
    <>
        <div className='container-fluid'>
            <div class="test" id='jane-frame-scipt'></div>
        </div>
    </>
)
}

export default MenuTest;
