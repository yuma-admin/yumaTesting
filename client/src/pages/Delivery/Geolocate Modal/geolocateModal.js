import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import GeolocateScript from './geolocateScript';


    const GeolocateModal = ({ setShowModal }) => {
    // This will close the Modal if clicked outside of it
    const geomodalRef = useRef();
    const closegeoModal = (e) => {
        if (e.target === geomodalRef.current) {
            setShowModal(false);
        }
    };
    // Render the I heart jane geolocator Modal
    return ReactDOM.createPortal(
        <div className="geoContainer" ref={geomodalRef} onClick={closegeoModal}>
        <div onClick={() => setShowModal(false)} className="deliveryBackButtonBar">Back</div>
            <GeolocateScript />
        </div>,
        document.getElementById("root")
    );
};

export default GeolocateModal