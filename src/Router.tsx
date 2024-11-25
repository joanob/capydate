import {
  createStaticNavigation,
  StaticParamList,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CalendarScreen from "./screens/Calendar";

export const Screens = {
  Calendar: "Calendar",
};

const RootStack = createNativeStackNavigator({
  initialRouteName: Screens.Calendar,
  screens: {
    [Screens.Calendar]: CalendarScreen,
  },
  screenOptions: {
    headerShown: false,
  },
});

type RootStackParamList = StaticParamList<typeof RootStack>;

export const Navigation = createStaticNavigation(RootStack);

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
