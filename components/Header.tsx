import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import { Icon } from "./Icon";
import { TextB, TextR, statusBarHeight } from "../constants/constants";
import { colors } from "../constants/colors";

export default function Header(props: { title: string }) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={{
            position: "absolute",
            left: -8,
            padding: 8,
          }}
        >
          <Icon name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <TextB
          content={props.title}
          mixedStyle={{
            fontSize: 16,
            color: colors._white,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors._accent,
    paddingTop: statusBarHeight,
    paddingHorizontal: 16,
    position: "relative",
  },
  wrapper: {
    paddingVertical: 16,
    flexDirection: "row",
    gap: 24,
    alignItems: "center",
    justifyContent: "center",
  },
});
