import { useEffect, useState } from "react";
import axios from "axios";

const GetPhotosComponent = ({ selectedRover, selectedCamera }) => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!selectedRover || !selectedCamera) {
            setPhotos([]);
            setLoading(true);
            return;
        }

        axios.get(`http://localhost:8000/rovers/${selectedRover}/photos/${selectedCamera}`)
            .then((response) => {
                const photoSources = response.data.slice(0, 5).map(photo => photo.imgSrc);
                setPhotos(photoSources);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setPhotos([]);
                setLoading(false);
            })
    }, [selectedRover, selectedCamera]);

    if (!loading && photos.length === 0) {
        return (
            <p>No photos found.</p>
        );
    }

    return (
        <div className="photos-gallery">
            {photos.map((src, index) => (
                <img key={index} src={src} alt={`Mars rover photo ${index + 1}`} className="photo-item"/>
            ))}
        </div>
    );
};

export default GetPhotosComponent;
