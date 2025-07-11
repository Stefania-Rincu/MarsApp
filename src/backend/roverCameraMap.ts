import { CameraTypes } from "./cameras.ts";

export const roverCamera: Record<string, CameraTypes[]> = {
    'Curiosity': [
        CameraTypes.FHAZ,
        CameraTypes.RHAZ,
        CameraTypes.MAST,
        CameraTypes.CHEMCAM,
        CameraTypes.MAHLI,
        CameraTypes.MARDI,
        CameraTypes.NAVCAM
    ],
    'Opportunity': [
        CameraTypes.FHAZ,
        CameraTypes.RHAZ,
        CameraTypes.NAVCAM,
        CameraTypes.PANCAM,
        CameraTypes.MINITES
    ],
    'Spirit': [
        CameraTypes.FHAZ,
        CameraTypes.RHAZ,
        CameraTypes.NAVCAM,
        CameraTypes.PANCAM,
        CameraTypes.MINITES
    ],
    'Perseverence': [
        CameraTypes.FHAZ,
    ]
}