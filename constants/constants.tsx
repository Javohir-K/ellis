import { Platform, StatusBar, Text } from "react-native";

export const statusBarHeight =
  Platform.OS === "android" ? StatusBar.currentHeight : 0;

export const TextR = (props: { content: any; mixedStyle: any }) => {
  return (
    <Text
      style={[
        props.mixedStyle,
        {
          fontFamily: "Kanit",
        },
      ]}
    >
      {props.content}
    </Text>
  );
};
export const TextB = (props: { content: string; mixedStyle: any }) => {
  return (
    <Text style={[props.mixedStyle, { fontFamily: "KanitBold" }]}>
      {props.content}
    </Text>
  );
};

export const screen_options: any = {
  headerShown: false,
  presentation: "card",
  animation: "fade_from_bottom",
  animationTypeForReplace: "push",
};
