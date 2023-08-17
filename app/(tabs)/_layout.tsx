import { colors } from "@/constants/colors";
import { Icon } from "@/components/Icon";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        lazy: true,
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarLabelPosition: "below-icon",
        tabBarStyle: {
          paddingBottom: 5,
          paddingTop: 5,
          height: 56,
          borderTopColor: "transparent",
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "Kanit",
        },
        tabBarActiveTintColor: colors._black,
        tabBarInactiveTintColor: colors._grey,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="practice"
        options={{
          tabBarLabel: "Exercises",
          tabBarIcon: ({ color }) => (
            <Icon name="zap" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="vocabulary"
        options={{
          tabBarLabel: "Vocabulary",
          tabBarIcon: ({ color }) => (
            <Icon name="book-open" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          tabBarLabel: "About",
          tabBarIcon: ({ color }) => (
            <Icon name="info" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
