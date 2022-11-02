import { jobTitlesProps, journeyRulesProps, shiftProps, TimeCurrentProps } from "./Company";
import { documentationProps } from "./Employees";

export interface EmployeeInfoProps {
    employee: EmployeeProps;
    jobTitle: jobTitlesProps;
    journeyRule: journeyRulesProps;
    shift: shiftProps;
}

export interface EmployeeProps{
    address: string;
    admissionDate: admissionDateProps;
    allocations: allocationsProps[];
    birthdate: admissionDateProps;
    clockBalances: null;
    company: string;
    companyAdmissionDate: admissionDateProps;
    contact: contactProps;
    createdAt: TimeCurrentProps;
    documentation: documentationProps;
    employeeCode: string;
    employeeHistoryChanges: null;
    firstName: string;
    id: string;
    isCLT: boolean;
    lastName: string;
    managerOfTeams: null;
    memberOfTeams: null;
    name: string;
    needPoint: boolean;
    oscilationTimes: null;
    photo: null;
    pictureToRecognition: null;
    pointWithPicture: boolean;
    registeredBy: registeredByProps;
    registration: null;
    rule: string;
    status: number;
    updatedAt: TimeCurrentProps;

}

export interface registeredByProps {
    from: string;
    idFrom: string;
}

export interface contactProps {
    email: string;
    phone: string;
}

export interface allocationsProps {
    admissionDate: admissionDateProps;
    jobTitle: string;
    journeyRule: string;
    shift: string;
    team: null;
}

export interface admissionDateProps {
    seconds: number;
}