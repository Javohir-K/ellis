import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { TextR } from "@/constants/constants";
import { colors } from "@/constants/colors";

export default function WordCard(props: { word: any }) {
  return (
    <Link
      href={{
        pathname: "/vocabulary_content",
        params: { word_name: props.word },
      }}
      asChild
    >
      <TouchableOpacity style={styles.container}>
        <View>
          <TextR content={props.word} mixedStyle={{ fontSize: 16 }} />
        </View>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors._white,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
});
