import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { TextR } from "@/constants/constants";
import { Icon } from "../Icon";
import { colors } from "@/constants/colors";
import { router } from "expo-router";

export default function LevelCard(props: { title: string; units: string }) {
  return (
    <TouchableOpacity onPress={() => router.push("/practice")}>
      <View style={styles.container}>
        <View>
          <TextR content={props.title} mixedStyle={{ fontSize: 16 }} />
          <TextR
            content={props.units}
            mixedStyle={{ fontSize: 12, color: colors._grey }}
          />
        </View>
        <View>
          <Icon name="chevron-right" size={24} color={colors._black} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: 'auto',
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 32,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors._white,
  },
});
