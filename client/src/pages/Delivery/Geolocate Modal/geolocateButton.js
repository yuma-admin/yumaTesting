import React, { useState } from "react";
import GeolocateModal from "./geolocateModal";
import './geolocate.css';

function GeolocateButton() {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
        if(true) {
            //push to history when opened
            window.history.pushState(null, '', window.location.href)

            //closes modal on browser back button
            window.onpopstate = () => {
                window.onpopstate = () => {}
                window.history.back()
                setShowModal(false)
            }
        }
    };

    return (
        <div className="geobuttonContainer">
            <button onClick={openModal}>Lets Locate You</button>
            {showModal ? <GeolocateModal setShowModal={setShowModal} /> : null}
        </div>
    );
}

export default GeolocateButton
