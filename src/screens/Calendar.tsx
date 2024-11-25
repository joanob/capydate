import { View, Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getMonthCalendar } from "../helpers/calendarHelpers";
import { CalendarStyles as styles } from "../styles/Calendar.styles";

const CalendarScreen = () => {
  const month = getMonthCalendar(2024, 11);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topbar}>
        <View style={styles.backButton}></View>
        <View style={styles.options}></View>
      </View>
      <View style={styles.calendar}>
        <View style={styles.monthName}>
          <Text style={styles.monthNameText}>
            Noviembre <Text style={styles.yearText}>2024</Text>
          </Text>
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
        {month.weeks.map((week, i) => {
          return (
            <View key={i} style={styles.week}>
              <View style={styles.weekInfo}>
                <Text style={styles.weekInfoText}>40</Text>
              </View>
              {week.map((day) => {
                return (
                  <View key={day.date.getTime()} style={styles.weekDay}>
                    <Text
                      style={
                        day.inMonth
                          ? styles.weekDayText
                          : { ...styles.weekDayText, ...styles.dayNotInMonth }
                      }
                    >
                      {day.number}
                    </Text>
                  </View>
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
