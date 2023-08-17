import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React from "react";
import { Icon } from "../Icon";
import { colors } from "@/constants/colors";
import { statusBarHeight } from "@/constants/constants";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Icon name="search" size={20} color={colors._dark} />
        <TextInput style={styles.input} placeholder="Search word..." />
        <Pressable>
          <Icon name="delete" size={20} color={colors._dark} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: statusBarHeight,
    backgroundColor: colors._accent,
  },
  wrapper: {
    marginVertical: 10,
    marginHorizontal: 16,
    backgroundColor: colors._white,
    borderRadius: 10,
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    gap: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: "Kanit",
  },
});
