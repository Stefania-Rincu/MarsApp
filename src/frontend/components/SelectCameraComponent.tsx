import { useEffect, useState } from "react"
import Select from "react-select"
import { roverCamera } from "../../backend/roverCameraMap.ts";


const SelectCameraComponent = ({ selectedRover, onSelectCamera }) => {
    const [cameras, setCameras] = useState([]);
    const [selectedCamera, setSelectedCamera] = useState(null);

    useEffect(() => {
        if (!selectedRover) {
            setCameras([]);
            setSelectedCamera(null);
            return;
        }

        const availableCameras = roverCamera[selectedRover];

        const cameras = availableCameras.map((camera) => ({
            value: camera.toLowerCase(),
            label: camera,
        }));

        setCameras(cameras);
        setSelectedCamera(null);
    }, [selectedRover]);


    const selectCamera = (selectedCamera) => {
        setSelectedCamera(selectedCamera);
        if (onSelectCamera && selectedCamera) {
            onSelectCamera(selectedCamera.value);
        }
    };


    if (!selectedRover) {
        return (
            <div className="select-container">
                <h2 className="select-title">Camera type</h2>
                <Select className="select-dropdown" isDisabled placeholder={"Select a rover first"}/>
            </div>
        );
    }

    return (
        <div className="select-container">
            <h2 className="select-title">Camera type</h2>
            <Select className="select-dropdown" options={cameras} value={selectedCamera} onChange={selectCamera} placeholder={"Select a camera type"}/>
        </div>
    );
}

export default SelectCameraComponent;