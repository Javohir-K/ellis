import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "../Icon";
import { TextB, TextR } from "../../constants/constants";
import { colors } from "../../constants/colors";
import { router } from "expo-router";

export default function TopicCard(props: {
  iconName: any;
  title: string;
  desc: string;
  link: any;
}) {
  return (
    <TouchableOpacity
      onPress={() => router.push(props.link)}
      style={styles.container}
    >
      <View>
        <Icon name={props.iconName} color="black" size={36} />
      </View>
      <View style={styles.text_wrapper}>
        <TextB content={props.title} mixedStyle={{ fontSize: 16 }} />
        <TextR content={props.desc} mixedStyle={{ fontSize: 14 }} />
      </View>
      <View
        style={{
          position: "absolute",
          right: 10,
          bottom: 10,
        }}
      >
        <View style={styles.link}>
          <Icon name="chevron-right" size={20} color="white" />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 16,
    backgroundColor: colors._white,
    flexDirection: "row",
    alignItems: "center",
    gap: 32,
    minHeight: 120,
    maxHeight: 120,
    position: "relative",
  },
  text_wrapper: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
  },
  link: {
    width: 40,
    height: 40,
    backgroundColor: colors._yellow,
    // padding: 5,
    justifyContent: "center",
    borderRadius: 50,
    alignItems: "center",
  },
});
