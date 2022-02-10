import React, { useState } from "react";
import GeolocateModal from "./geolocateModal";
import './geolocate.css';

function GeolocateButton() {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    return (
        <div className="geobuttonContainer">
            <button onClick={openModal}>Lets Locate You</button>
            {showModal ? <GeolocateModal setShowModal={setShowModal} /> : null}
        </div>
    );
}

export default GeolocateButton
