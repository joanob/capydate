import { StyleSheet } from "react-native";

export const CalendarStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffc8dd",
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  topbar: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  backButton: {
    width: 40,
    height: 40,
    backgroundColor: "#2b2d42",
    borderRadius: "100%",
  },
  options: {
    width: 40,
    height: 40,
    backgroundColor: "#2b2d42",
    borderRadius: "100%",
  },
  calendar: {
    flex: 1,
    backgroundColor: "#f9f7f3",
    borderRadius: 50,
  },
  monthName: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  monthNameText: {
    width: "100%",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  yearText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "300",
  },
  week: {
    height: 50,
    flexDirection: "row",
    paddingHorizontal: 5,
  },
  weekInfo: {
    width: 25,
  },
  weekInfoText: {
    fontWeight: "300",
    textAlign: "center",
    fontSize: 12,
    width: 20,
    height: 20,
    backgroundColor: "#fcb9b2",
  },
  weekDay: {
    flex: 1,
  },
  weekDayText: {
    textAlign: "center",
    fontSize: 12,
  },
  dayNotInMonth: {
    fontWeight: "200",
  },
  day: {},
  tasks: {},
});
