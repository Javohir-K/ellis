import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { TextR } from "@/constants/constants";
import { Icon } from "../Icon";
import { colors } from "@/constants/colors";
import { Link } from "expo-router";

export default function UnitCard(props: { title: string; topic_id: string }) {
  return (
    <Link
      href={{
        pathname: "/grammar_topics/content",
        params: {
          topic_id: props.topic_id,
        },
      }}
      asChild
    >
      <TouchableOpacity>
        <View style={styles.container}>
          <TextR content={props.title} mixedStyle={{ fontSize: 16 }} />
          <Icon name="chevron-right" size={20} color={colors._black} />
        </View>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 32,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors._white,
  },
});
