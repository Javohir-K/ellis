import FontAwesome from "@expo/vector-icons/FontAwesome";
import * as Font from "expo-font";
import { Stack } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { View, Text } from "react-native";
import { screen_options } from "@/constants/constants";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // const [loggedIn, setLoggedIn] = useState(false);
  const [loaded, error] = Font.useFonts({
    Kanit: require("../assets/fonts/Kanit-Regular.ttf"),
    KanitBold: require("../assets/fonts/Kanit-Bold.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  // if (!loggedIn) {
  //   return <Login />;
  // }

  return (
    <View style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="grammar" options={screen_options} />
        <Stack.Screen name="quiz" options={screen_options} />
      </Stack>
    </View>
  );
}
