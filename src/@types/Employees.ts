// Get All Employees

export interface EmployeesProps {
    address: string;
    admissionDate: Date | string;
    birthdate: Date | string;
    clockBalances: null;
    companyAdmissionDate: Date | string;
    contact: contactProps;
    createdAt: Date | string;
    documentation: documentationProps;
    employeeCode: string;
    firstName: string;
    id: string;
    isCLT: boolean;
    lastName: string;
    name: string;
    needLocation: boolean;
    needPoint: boolean;
    oscilationTimes: null;
    photo: null;
    pictureToRecognition: null;
    pointWithPicture: boolean;
    registration: null;
    selfReference: string;
    status: number;
    updatedAt: Date | string;
}

export interface documentationProps {
    cpf: string;
    pis: string;
}

export interface contactProps {
    email: string;
}