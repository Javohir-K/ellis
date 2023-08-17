import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";
import RenderHTML from "react-native-render-html";

export default function ContentWebView(props: { webdata: any }) {
  const { width } = useWindowDimensions();

  return (
    <RenderHTML
      source={{
        html: props.webdata,
      }}
      contentWidth={width}
      systemFonts={["Kanit", "KanitBold"]}
      enableExperimentalBRCollapsing={true}
      tagsStyles={{
        body: {
          padding: 16,
          whiteSpace: "normal",
          margin: 0,
        },
        p: {
          fontFamily: "Kanit",
          fontSize: 16,
          margin: 0,
        },
        h2: {
          fontFamily: "KanitBold",
          fontWeight: "600",
          fontSize: 18,
        },
        h1: {
          fontFamily: "KanitBold",
          fontWeight: "600",
          fontSize: 18,
        },
        img: {
          maxWidth: width - 32,
        },
      }}
    />
  );
}

const styles = StyleSheet.create({});
