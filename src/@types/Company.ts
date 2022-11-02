export interface JourneyCompanyProps {
    jobTitles: jobTitlesProps[];
    journeyRules: journeyRulesProps[];
    shift: shiftProps[];
  }
  
  export interface jobTitlesProps {
    active: boolean;
    cboCode: string | null;
    id: string;
    name: string;
  }
  
  export interface journeyRulesProps {
    active: boolean;
    clockInOutMethods: string[];
    compTime: compTimeProps[];
    createdAt: TimeCurrentProps[];
    dsr: DsrProps[];
    editable: boolean;
    enableManagersSelfManagement: boolean;
    enableRequestsAttachments: boolean;
    enableRequestsAttachmentsEdit: boolean;
    id: string;
    name: string;
    nightlyAdditional: nightlyAdditionalProps[];
    nighttime: nighttimeProps[];
    notifications: notificationsProps[];
    overtime: overtimeProps[];
    point: PointProps[];
    updatedAt: TimeCurrentProps[];
  }

  export interface PointProps {
    enableOfflinePoints: boolean;
    needLocation: boolean;
    needPoint: boolean;
  }

  export interface overtimeProps {
    dsr: DsrOvertimeProps[];
    justifyOvertime: boolean;
    saturday: DsrOvertimeProps[];
    workDays: DsrOvertimeProps[];
  }

  export interface DsrOvertimeProps {
    overtimeMinutesLimit: number;
    overtimeMultiplier: number;
    overtimeSurplusMultiplier: number;
  }

  export interface notificationsProps {
    beforePoint: boolean;
    missingBreak: boolean;
    missingRest: boolean;
    overtimeLimit: boolean;
  }

  export interface nighttimeProps {
    enabled: boolean;
    endTime: string;
    startTime: string;
    type: number;
  }

  export interface nightlyAdditionalProps {
    considerBreaks: boolean;
    enabled: boolean;
    endTime: string;
    extendToEndDay: boolean;
    multiplier: number;
    startTime: string;
  }

  export interface DsrProps {
    enabled: boolean;
    onHolidays: boolean;
    onWeekMissingTimeExceed: boolean;
    weekMissingMinutesLimit: number;
  }

  export interface compTimeProps {
    currentExpirationDate: TimeCurrentProps[];
    dailyMinutesLimit: number;
    dsrCompTimeAsOvertime: boolean;
    dsrMultiplier: number;
    enableDailyMinutesLimit: boolean;
    enableMonthlyMinutesLimit: boolean;
    enableMultipliers: boolean;
    enabled: boolean;
    ignoreAbsenceMinutes: boolean;
    initialDate: TimeCurrentProps[];
    monthlyMinutesLimit: number;
    monthsToExpire: number;
    saturdayCompTimeAsOvertime: boolean;
    saturdayMultiplier: number;
    workDaysMultiplier: number;
  }

  export interface TimeCurrentProps {
    nanos: number;
    seconds: number;
  }
  
  export interface JourneyProps {
    Content: JourneyCompanyProps[];
  }


  //  SHIFTPROPS

  export interface shiftProps {
    active: boolean;
    dayOffs: dayOffsProps[];
    editable: boolean;
    flexibleBreak: boolean;
    flexibleJourney: boolean;
    flexibleJourneyTolerance: boolean;
    id: string;
    ignoreHoliday: boolean;
    name: string;
    preMarkedBreak: boolean;
    shiftType: number;
    tolerance: number;
    updatedAt: updatedAtProps;
    workDayss: workDayssProps[];
    workHoliday: workHolidayProps[];
  }

  export interface workHolidayProps {
    endDay: string;
    isOnTheNextDay: boolean;
    mainBreak: null;
    minutesToWork: number;
    periodOfWork: string | number | null | undefined | any;
    periods: periodsProps[];
    weekDay: number;
  }
  
  export interface workDayssProps {
    endDay: string;
    mainBreak: null;
    minutesToWork: number;
    periodOfWork: string | number | null | undefined | any;
    periods: periodsProps[];
    weekDay: number;
  }

  export interface periodsProps {
    entryTime: string;
    exitTime: string;
  }

  export interface updatedAtProps {
    seconds: number;
  }

  export interface dayOffsProps {
    endDay: string;
    mainBreak: null;
    minutesToWork: number;
    periodOfWork: string;
    periods: null;
    weekDay: number;
  }