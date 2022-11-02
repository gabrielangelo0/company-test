import { ReactNode } from "react";

export interface PointProps {
    createdAt?: Date | string;
    date?: Date | string | ReactNode | any;
    fromApi?: boolean;
    id?: string;
    latLng?: Object;
    localDate?: Date | string;
    userData?: userDataProps | ReactNode | any;
}

export interface userDataProps {
    device?: string;
    gatewayMac?: string;
    ip?: string;
    operatingSystem?: string;
}