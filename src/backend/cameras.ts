export enum CameraTypes {
    FHAZ = 'FHAZ',
    RHAZ = 'RHAZ',
    MAST = 'MAST',
    CHEMCAM = 'CHEMCAM',
    MAHLI = 'MAHLI',
    MARDI = 'MARDI',
    NAVCAM = 'NAVCAM',
    PANCAM = 'PANCAM',
    MINITES = 'MINITES',
}

export interface Camera {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
}