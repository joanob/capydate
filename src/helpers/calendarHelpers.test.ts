import { getMonthCalendar } from "./calendarHelpers";

interface MonthCalendar {
  weeks: {
    number: number;
    date: Date;
    inMonth: boolean;
  }[][];
}

describe("Calendar Helpers", () => {
  it("month starts on monday", () => {
    // month 2024
    const month = getMonthCalendar(2024, 4);

    // All weeks should have seven days
    month.weeks.forEach((week) => {
      expect(week.length).toBe(7);
    });

    // April 2024 has 5 weeks
    expect(month.weeks.length).toBe(5);

    // First of month is Monday
    expect(month.weeks[0][0].number).toBe(1);
    expect(month.weeks[0][0].date.getTime()).toBe(
      new Date(2024, 3, 1).getTime()
    );
    expect(month.weeks[0][0].inMonth).toBe(true);

    // Last day of month is Tuesday
    expect(month.weeks[4][1].number).toBe(30);
    expect(month.weeks[4][1].date.getTime()).toBe(
      new Date(2024, 3, 30).getTime()
    );
    expect(month.weeks[4][1].inMonth).toBe(true);

    // Last day is May 5th
    expect(month.weeks[4][6].number).toBe(5);
    expect(month.weeks[4][6].date.getTime()).toBe(
      new Date(2024, 4, 5).getTime()
    );
    expect(month.weeks[4][6].inMonth).toBe(false);
  });

  it("month ends on sunday", () => {
    // March 2024
    const month = getMonthCalendar(2024, 3);

    // All weeks should have seven days
    month.weeks.forEach((week) => {
      expect(week.length).toBe(7);
    });

    // March 2024 has 5 weeks
    expect(month.weeks.length).toBe(5);

    // First monday is February 26th
    expect(month.weeks[0][0].number).toBe(26);
    expect(month.weeks[0][0].date.getTime()).toBe(
      new Date(2024, 1, 26).getTime()
    );
    expect(month.weeks[0][0].inMonth).toBe(false);

    // First of month is Friday
    expect(month.weeks[0][4].number).toBe(1);
    expect(month.weeks[0][4].date.getTime()).toBe(
      new Date(2024, 2, 1).getTime()
    );
    expect(month.weeks[0][4].inMonth).toBe(true);

    // Last day of month is Sunday
    expect(month.weeks[4][6].number).toBe(31);
    expect(month.weeks[4][6].date.getTime()).toBe(
      new Date(2024, 2, 31).getTime()
    );
    expect(month.weeks[4][6].inMonth).toBe(true);
  });

  it("month starts and ends mid week", () => {
    // February 2024
    const month = getMonthCalendar(2024, 2);

    // All weeks should have seven days
    month.weeks.forEach((week) => {
      expect(week.length).toBe(7);
    });

    // February 2024 has 5 weeks
    expect(month.weeks.length).toBe(5);

    // First monday is January 29th
    expect(month.weeks[0][0].number).toBe(29);
    expect(month.weeks[0][0].date.getTime()).toBe(
      new Date(2024, 0, 29).getTime()
    );
    expect(month.weeks[0][0].inMonth).toBe(false);

    // First of month is Thursday
    expect(month.weeks[0][3].number).toBe(1);
    expect(month.weeks[0][3].date.getTime()).toBe(
      new Date(2024, 1, 1).getTime()
    );
    expect(month.weeks[0][3].inMonth).toBe(true);

    // Last day of month is Thursday
    expect(month.weeks[4][3].number).toBe(29);
    expect(month.weeks[4][3].date.getTime()).toBe(
      new Date(2024, 1, 29).getTime()
    );
    expect(month.weeks[4][3].inMonth).toBe(true);

    // Last day is March 3th
    expect(month.weeks[4][6].number).toBe(3);
    expect(month.weeks[4][6].date.getTime()).toBe(
      new Date(2024, 2, 3).getTime()
    );
    expect(month.weeks[4][6].inMonth).toBe(false);
  });

  it("february in non leap year", () => {});

  it("february in leap year", () => {});

  it("january", () => {});

  it("december", () => {});
});
