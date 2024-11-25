import { StyleSheet, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getMonthCalendar } from "../helpers/calendarHelpers";

const CalendarScreen = () => {
  console.log(getMonthCalendar(2024, 11));

  return (
    <SafeAreaView>
      <Text>CalendarScreen</Text>
    </SafeAreaView>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({});
