import "./App.css"
import SelectRoverComponent from "./components/SelectRoverComponent.tsx";
import SelectCameraComponent from "./components/SelectCameraComponent.tsx";
import { useState } from "react";
import SubmitButton from "./components/SubmitButton.tsx";
import GetPhotosComponent from "./components/GetPhotosComponent.tsx";
import {NasaInfo} from "./components/NasaInfo.tsx";


function App() {
    const [selectedRover, setSelectedRover] = useState(null);
    const [selectedCamera, setSelectedCamera] = useState(null);
    const [displayPhotos, setDisplayPhotos] = useState(false);

    const getPhotos = () => {
        if (selectedRover && selectedCamera) {
            setDisplayPhotos(true);
        }
    };

    return (
        <div className="app">
            <NasaInfo />
            <p className="description"> Select a rover and a camera type to display images taken by them.</p>
            <div className="select-fields">
                <SelectRoverComponent onSelectRover={setSelectedRover} />
                <SelectCameraComponent selectedRover={selectedRover} onSelectCamera={setSelectedCamera} />
            </div>
            <SubmitButton disabled={!selectedRover || !selectedCamera} onClick={getPhotos} />
            {displayPhotos && (
                <GetPhotosComponent selectedRover={selectedRover} selectedCamera={selectedCamera} />)}
        </div>
    )
}

export default App
