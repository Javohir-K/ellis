import { colors } from "@/components/colors";
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
        tabBarLabelStyle: { fontSize: 12, fontFamily: "Poppins" },
        tabBarActiveTintColor: colors._black,
        tabBarInactiveTintColor: colors._grey,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          // tabBarIconStyle:{marginBottom:12},
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          // tabBarIconStyle:{marginBottom:12},
          tabBarLabel: "Search",
          tabBarIcon: ({ color }) => (
            <Icon name="search" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="vocabulary"
        options={{
          // tabBarIconStyle:{marginBottom:12},
          tabBarLabel: "Vocabulary",
          tabBarIcon: ({ color }) => (
            <Icon name="book-open" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          // tabBarIconStyle:{marginBottom:12},
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Icon name="user" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
