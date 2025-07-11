import "./App.css"
import SelectRoverComponent from "./components/SelectRoverComponent.tsx";
import SelectCameraComponent from "./components/SelectCameraComponent.tsx";
import { useState } from "react";

function App() {
    const [selectedRover, setSelectedRover] = useState(null);
    const [selectedCamera, setSelectedCamera] = useState(null);

    return (
        <div className="app">
            <SelectRoverComponent onSelectRover={setSelectedRover} />
            <SelectCameraComponent selectedRover={selectedRover} onSelectCamera={setSelectedCamera} />
        </div>
    )
}

export default App
