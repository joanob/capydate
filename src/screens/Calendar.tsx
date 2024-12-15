import {
  View,
  Text,
  Pressable,
  StyleProp,
  ViewStyle,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getMonthCalendar } from "../helpers/calendarHelpers";
import { CalendarStyles as styles } from "../styles/Calendar.styles";
import { MonthCalendar } from "../types/MonthCalendar";
import { useAppStore } from "../data";

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

const CalendarScreen = () => {
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
  const { tasks, getTasks, addTask } = useAppStore();
  const [newTask, setNewTask] = useState<Task | null>(null);

  useEffect(() => {
    getTasks();
  }, []);

  useEffect(() => {
    setMonthCalendar(getMonthCalendar(selectedYear, selectedMonth));
  }, [selectedYear, selectedMonth]);

  const changeMonth = (nav: number) => {
    const newMonth = selectedMonth + nav;
    if (newMonth <= 0) {
      selectYear(selectedYear - 1);
      selectMonth(11);
    } else if (newMonth >= 13) {
      selectYear(selectedYear + 1);
      selectMonth(0);
    } else {
      selectMonth(newMonth);
    }
    setNewTask(null);
  };

  const selectDay = (date: Date) => {
    if (
      selectedMonth === date.getMonth() &&
      selectedYear === date.getFullYear()
    ) {
      selectDate(date.getDate());
    } else {
      const firstOfMonth = new Date(selectedYear, selectedMonth, 1);
      if (date.getTime() < firstOfMonth.getTime()) {
        changeMonth(-1);
      } else {
        changeMonth(1);
      }
      selectDate(date.getDate());
    }
    setNewTask(null);
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
            {monthTexts[selectedMonth]}{" "}
            <Text style={styles.yearText}>{selectedYear}</Text>
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
                if (selectedDate === day.number && day.inMonth) {
                  viewStyle = { ...styles.weekDay, ...styles.weekDaySelected };
                } else if (
                  day.number === today.getDate() &&
                  selectedMonth === today.getMonth() &&
                  selectedYear === today.getFullYear() &&
                  day.inMonth
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
            <View style={styles.dayHeader}>
              <Text style={styles.dayText}>
                {selectedDate} {monthTexts[selectedMonth].toLowerCase()}
              </Text>
              {newTask === null ? (
                <Pressable
                  onPress={() => {
                    setNewTask({
                      id: 0,
                      date: new Date(selectedYear, selectedMonth, selectedDate),
                      isComplete: false,
                      text: "",
                    });
                  }}
                  style={styles.addTask}
                ></Pressable>
              ) : newTask.text === "" ? (
                <Pressable
                  onPress={() => {
                    setNewTask(null);
                  }}
                  style={styles.addTask}
                ></Pressable>
              ) : (
                <Pressable
                  onPress={() => {
                    addTask(newTask);
                    setNewTask(null);
                  }}
                  style={styles.addTask}
                ></Pressable>
              )}
            </View>
            <View style={styles.dayTasks}>
              {newTask ? (
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
                      <TextInput
                        style={styles.taskTextInput}
                        value={newTask.text}
                        onChangeText={(text) => {
                          setNewTask({ ...newTask, text: text });
                        }}
                        placeholder="Apunta tus tareas"
                      />
                    </View>
                  </View>
                </View>
              ) : null}
              {tasks
                .filter(
                  (t) =>
                    t.date.getTime() ===
                    new Date(
                      selectedYear,
                      selectedMonth,
                      selectedDate
                    ).getTime()
                )
                .map((t) => (
                  <View key={t.id} style={styles.task}>
                    <View style={styles.taskTop}>
                      <View style={styles.taskCategory}></View>
                      <View style={styles.taskOptions}></View>
                    </View>
                    <View style={styles.taskDetails}>
                      <View style={styles.taskDoneContainer}>
                        <Pressable style={styles.taskDone}></Pressable>
                      </View>
                      <View style={styles.taskTextContainer}>
                        <Text style={styles.taskText}>{t.text}</Text>
                      </View>
                    </View>
                  </View>
                ))}
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CalendarScreen;
