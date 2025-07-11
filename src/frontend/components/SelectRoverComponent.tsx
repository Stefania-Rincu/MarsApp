import {useEffect, useState} from "react"
import Select from "react-select"
import axios from "axios";
import type {Rover} from "../../backend/rovers.ts";


const SelectRoverComponent = ({ onSelectRover }) => {
    const [rovers, setRovers] = useState([]);
    const [selectedRover, setSelectedRover] = useState(null);

    useEffect(() => {
        axios.get<Rover[]>("http://localhost:8000/rovers")
            .then((response) => {
                const rovers = response.data.map((rover: Rover) => ({
                    value: rover.name,
                    label: rover.name,
                }));
            setRovers(rovers);
        })
        .catch((error) => {
            console.log("Failed to fetch rovers", error);
        });
    }, []);

    const selectRover = (selectedRover) => {
        setSelectedRover(selectedRover);
        if (onSelectRover && selectedRover) {
            onSelectRover(selectedRover.value);
        }
    };

    return (
        <div className="select-container">
            <h2 className="select-title">Rover</h2>
            <Select className="select-dropdown" options={rovers} value={selectedRover} onChange={selectRover} placeholder={"Select a rover"}/>
        </div>
    );
}

export default SelectRoverComponent;