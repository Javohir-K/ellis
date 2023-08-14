import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import Header from "@/components/Header";
import LevelCard from "@/components/grammar/LevelCard";

export default function grammar_page() {
  return (
    <View style={{ flex: 1 }}>
      <Header title="Grammar" />
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.list}>
          <LevelCard title="Beginner" units="10 Units" />
          <LevelCard title="Beginner" units="10 Units" />
          <LevelCard title="Beginner" units="10 Units" />
          <LevelCard title="Beginner" units="10 Units" />
          <LevelCard title="Beginner" units="10 Units" />
          <LevelCard title="Beginner" units="10 Units" />
          <LevelCard title="Beginner" units="10 Units" />
          <LevelCard title="Beginner" units="10 Units" />
          <LevelCard title="Beginner" units="10 Units" />
          <LevelCard title="Beginner" units="10 Units" />
          <LevelCard title="Beginner" units="10 Units" />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 16,
    flexDirection: "column",
    gap: 16,
  },
});
