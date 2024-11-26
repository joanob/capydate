import { View, Text, Pressable, StyleProp, ViewStyle } from "react-native";
import React, {
  useCallback,
  useEffect,
  useInsertionEffect,
  useState,
} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getMonthCalendar } from "../helpers/calendarHelpers";
import { CalendarStyles as styles } from "../styles/Calendar.styles";
import { MonthCalendar } from "../types/MonthCalendar";

const monthTexts = [
  "",
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

const CalendarScreen = () => {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [monthCalendar, setMonthCalendar] = useState<MonthCalendar | null>(
    null
  );
  const [selectedDay, setSelectedDay] = useState(today.getDate());

  useEffect(() => {
    setMonthCalendar(getMonthCalendar(year, month));
  }, [year, month]);

  const changeMonth = (nav: number) => {
    const newMonth = month + nav;
    if (newMonth <= 0) {
      setYear(year - 1);
      setMonth(12);
    } else if (newMonth >= 13) {
      setYear(year + 1);
      setMonth(1);
    } else {
      setMonth(newMonth);
    }
  };

  const selectDay = (date: Date) => {
    if (month === date.getMonth() + 1 && year === date.getFullYear()) {
      setSelectedDay(date.getDate());
    } else {
      const firstOfMonth = new Date(year, month, 1);
      if (date.getTime() < firstOfMonth.getTime()) {
        changeMonth(-1);
      } else {
        changeMonth(1);
      }
      setSelectedDay(date.getDate());
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topbar}>
        <View style={styles.backButton}></View>
        <View style={styles.options}></View>
      </View>
      <View style={styles.calendar}>
        <View style={styles.monthName}>
          <View style={styles.monthNavContainer}>
            <Pressable
              style={styles.monthNav}
              onPress={() => {
                changeMonth(-1);
              }}
            ></Pressable>
          </View>
          <Text style={styles.monthNameText}>
            {monthTexts[month]} <Text style={styles.yearText}>{year}</Text>
          </Text>
          <View style={styles.monthNavContainer}>
            <Pressable
              style={styles.monthNav}
              onPress={() => {
                changeMonth(1);
              }}
            ></Pressable>
          </View>
        </View>
        <View style={styles.week}>
          <View style={styles.weekInfo}>
            <Text style={styles.weekInfoText}>11</Text>
          </View>
          <View style={styles.weekDay}>
            <Text style={styles.weekDayText}>Lun</Text>
          </View>
          <View style={styles.weekDay}>
            <Text style={styles.weekDayText}>Mar</Text>
          </View>
          <View style={styles.weekDay}>
            <Text style={styles.weekDayText}>Mie</Text>
          </View>
          <View style={styles.weekDay}>
            <Text style={styles.weekDayText}>Jue</Text>
          </View>
          <View style={styles.weekDay}>
            <Text style={styles.weekDayText}>Vie</Text>
          </View>
          <View style={styles.weekDay}>
            <Text style={styles.weekDayText}>Sab</Text>
          </View>
          <View style={styles.weekDay}>
            <Text style={styles.weekDayText}>Dom</Text>
          </View>
        </View>
        {monthCalendar?.weeks.map((week, i) => {
          return (
            <View key={i} style={styles.week}>
              <View style={styles.weekInfo}>
                <Text style={styles.weekInfoText}>40</Text>
              </View>
              {week.map((day) => {
                let viewStyle: StyleProp<ViewStyle> = styles.weekDay;

                if (selectedDay === day.number && day.inMonth) {
                  viewStyle = { ...styles.weekDay, ...styles.weekDaySelected };
                } else if (
                  day.number === today.getDate() &&
                  month === today.getMonth() + 1 &&
                  year === today.getFullYear()
                ) {
                  viewStyle = { ...styles.weekDay, ...styles.weekDayToday };
                }

                return (
                  <Pressable
                    key={day.date.getTime()}
                    style={viewStyle}
                    onPress={() => {
                      selectDay(day.date);
                    }}
                  >
                    <Text
                      style={
                        day.inMonth
                          ? styles.weekDayText
                          : { ...styles.weekDayText, ...styles.dayNotInMonth }
                      }
                    >
                      {day.number}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          );
        })}
        <View style={styles.dayContainer}>
          <View style={styles.day}>
            <Text style={styles.dayText}>6 noviembre</Text>
            <View style={styles.dayTasks}>
              <View style={styles.task}>
                <View style={styles.taskTop}>
                  <View style={styles.taskCategory}></View>
                  <View style={styles.taskOptions}></View>
                </View>
                <View style={styles.taskDetails}>
                  <View style={styles.taskDoneContainer}>
                    <Pressable style={styles.taskDone}></Pressable>
                  </View>
                  <View style={styles.taskTextContainer}>
                    <Text style={styles.taskText}>
                      Entregar tarea de música
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.task}>
                <View style={styles.taskTop}>
                  <View style={styles.taskCategory}></View>
                  <View style={styles.taskOptions}></View>
                </View>
                <View style={styles.taskDetails}>
                  <View style={styles.taskDoneContainer}>
                    <View style={styles.taskDone}></View>
                  </View>
                  <View style={styles.taskTextContainer}>
                    <Text style={styles.taskText}>Cumpleaños Bea</Text>
                  </View>
                </View>
              </View>
              <View style={styles.task}>
                <View style={styles.taskTop}>
                  <View style={styles.taskCategory}></View>
                  <View style={styles.taskOptions}></View>
                </View>
                <View style={styles.taskDetails}>
                  <View style={styles.taskDoneContainer}>
                    <View style={styles.taskDone}></View>
                  </View>
                  <View style={styles.taskTextContainer}>
                    <Text style={styles.taskText}>Comprar leche</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CalendarScreen;
