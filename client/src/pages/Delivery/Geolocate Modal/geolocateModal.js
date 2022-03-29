import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import GeolocateScript from './geolocateScript';
import { useHistory } from 'react-router';


    const GeolocateModal = ({ setShowModal }) => {
    // This will close the Modal if clicked outside of it
    const geomodalRef = useRef();
    const closegeoModal = (e) => {
        if (e.target === geomodalRef.current) {
            setShowModal(false);
        }
    };

    let history = useHistory();

    function backClick () {
        history.go("/delivery");
    }

    // Render the I heart jane geolocator Modal
    return ReactDOM.createPortal(
        <div className="geoContainer" ref={geomodalRef} onClick={closegeoModal}>
        <div onClick={backClick} className="deliveryBackButtonBar">Back</div>
            <GeolocateScript />
        </div>,
        document.getElementById("root")
    );
};

export default GeolocateModal