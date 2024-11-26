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
    width: "100%",
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  monthNavContainer: {
    marginHorizontal: 20,
    alignItems: "center",
  },
  monthNav: {
    width: 24,
    height: 24,
    backgroundColor: "#eee",
  },
  monthNameText: {
    width: 200,
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
  weekDayToday: {
    backgroundColor: "#eee",
  },
  weekDaySelected: {
    backgroundColor: "#ffc8dd",
  },
  weekDayText: {
    textAlign: "center",
    fontSize: 12,
  },
  dayNotInMonth: {
    fontWeight: "200",
  },
  dayContainer: {
    flex: 1,
    borderRadius: 50,
    backgroundColor: "#da627d",
    paddingTop: 30,
  },
  day: {
    flex: 1,
    borderRadius: 50,
    backgroundColor: "#5f0f40",
    paddingHorizontal: 10,
  },
  dayText: {
    color: "#fff",
    padding: 20,
    paddingTop: 30,
    fontSize: 20,
  },
  dayTasks: {},
  task: {
    borderRadius: 10,
    backgroundColor: "#fff",
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  taskTop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  taskCategory: {
    width: 50,
    height: 8,
    borderRadius: 5,
    backgroundColor: "#427aa1",
  },
  taskOptions: {
    width: 10,
    height: 15,
    backgroundColor: "black",
  },
  taskDetails: {
    flexDirection: "row",
    marginBottom: 10,
  },
  taskDoneContainer: {
    marginRight: 5,
  },
  taskDone: {
    width: 20,
    height: 20,
    backgroundColor: "red",
    borderRadius: "100%",
  },
  taskTextContainer: {},
  taskText: {
    fontSize: 16,
  },
});
