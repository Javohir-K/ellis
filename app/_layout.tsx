import { auth } from "@/api/firebase";
import Login from "@/components/Login";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import * as Font from "expo-font";
import { Stack } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
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
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    ...FontAwesome.font,
  });

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     setLoggedIn(true);
  //   } else {
  //     setLoggedIn(false);
  //   }
  // });

  // useEffect(() => {
  //   async function prepare() {
  //     try {
  //       await SplashScreen.preventAutoHideAsync();
  //       await Font.loadAsync({
  //         Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
  //         PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
  //         ...FontAwesome.font,
  //       });
  //     } catch (e) {
  //       console.warn(e);
  //     } finally {
  //       setAppIsReady(true);
  //     }
  //   }

  //   prepare();
  // }, []);

  // const onLayoutRootView = useCallback(async () => {
  //   if (appIsReady) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [appIsReady]);

  // if (!appIsReady) {
  //   return null;
  // }

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
        <Stack.Screen name="practice" options={screen_options} />
        <Stack.Screen name="quiz" options={screen_options} />
      </Stack>
    </View>
  );
}
