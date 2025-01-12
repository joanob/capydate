import { useEffect, useState } from "react";
import { useAppStore } from "../../../data";
import "./styles.css";

const CalendarPage = () => {
  const today = new Date();
  const {
    selectedDate,
    selectedMonth,
    selectedYear,
    selectDate,
    selectMonth,
    selectYear,
  } = useAppStore();
  const [monthCalendar, setMonthCalendar] = useState<MonthCalendar | null>(
    null
  );

  useEffect(() => {
    setMonthCalendar(getMonthCalendar(selectedYear, selectedMonth));
  }, [selectedYear, selectedMonth]);

  return (
    <div>
      <h2>Calendar</h2>
      <div className="calendar">
        <div>{monthTexts[selectedMonth]}</div>
      </div>
      {monthCalendar?.weeks.map((week, i) => {
        return (
          <div key={monthCalendar + "" + i} className="week">
            {week.map((day) => {
              return <div className="day">{day.number}</div>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default CalendarPage;

interface MonthCalendar {
  weeks: {
    number: number;
    date: Date;
    inMonth: boolean;
  }[][];
}

const monthTexts = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const getMonthCalendar = (year: number, month: number): MonthCalendar => {
  const monthCalendar: MonthCalendar = {
    weeks: [],
  };

  let monday: number = 1;
  let week: number = 0;
  let monthComplete: boolean = false;

  const firstOfMonth = new Date(year, month, 1);
  const lastOfPreviousMonth = new Date(year, month, 0);
  const lastOfCurrentMonth = new Date(year, month + 1, 0);

  monthCalendar.weeks.push([]);

  // If month doesn't start on monday, get last days of previous month
  if (firstOfMonth.getDay() === 1) {
    for (let i = 1; i <= 7; i++) {
      monthCalendar.weeks[week].push({
        number: i,
        date: new Date(year, month, i),
        inMonth: true,
      });
    }
    monday = 8;
  } else {
    monday = lastOfPreviousMonth.getDate() - lastOfPreviousMonth.getDay() + 1;
    for (let i = monday; i < monday + 7; i++) {
      monthCalendar.weeks[week].push({
        number:
          i > lastOfPreviousMonth.getDate()
            ? i - lastOfPreviousMonth.getDate()
            : i,
        date: new Date(year, month - 1, i),
        inMonth: i > lastOfPreviousMonth.getDate(),
      });
    }
    monday = 8 - lastOfPreviousMonth.getDay();
  }

  // Get middle month weeks
  while (!monthComplete) {
    week++;
    monthCalendar.weeks.push([]);
    for (let i = monday; i < monday + 7; i++) {
      monthCalendar.weeks[week].push({
        number: i,
        date: new Date(year, month, i),
        inMonth: true,
      });
    }
    monday += 7;
    // If monday next week is not in this month, there are no more middle weeks
    if (monday + 7 > lastOfCurrentMonth.getDate()) {
      monthComplete = true;
    }
  }

  // Get last week of month
  week++;
  monthCalendar.weeks.push([]);
  if (monday <= lastOfCurrentMonth.getDate()) {
    for (let i = 0; i < 7; i++) {
      monthCalendar.weeks[week].push({
        number:
          monday + i > lastOfCurrentMonth.getDate()
            ? monday + i - lastOfCurrentMonth.getDate()
            : monday + i,
        date: new Date(year, month, monday + i),
        inMonth: lastOfCurrentMonth.getDate() - monday - i >= 0,
      });
    }
  }

  return monthCalendar;
};
