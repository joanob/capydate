export interface MonthCalendar {
  weeks: {
    number: number;
    date: Date;
    inMonth: boolean;
  }[][];
}
