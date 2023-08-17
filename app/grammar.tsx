import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import LevelCard from "@/components/grammar/LevelCard";
import { db } from "@/api/firebase";

export default function grammar_page() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    db.collection("topics").onSnapshot((snapshot) => {
      setData(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header title="Grammar" />
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.list}>
          <LevelCard
            title="Beginner"
            units={`${
              data.filter((item: any) => {
                return item.data.level === "beginner";
              }).length
            } Units`}
            level={"beginner"}
          />
          <LevelCard
            title="Elementary"
            units={`${
              data.filter((item: any) => {
                return item.data.level === "elementary";
              }).length
            } Units`}
            level={"elementary"}
          />
          <LevelCard
            title="Pre intermediate"
            units={`${
              data.filter((item: any) => {
                return item.data.level === "pre-intermediate";
              }).length
            } Units`}
            level={"pre-intermediate"}
          />
          <LevelCard
            title="Intermediate"
            units={`${
              data.filter((item: any) => {
                return item.data.level === "intermediate";
              }).length
            } Units`}
            level={"intermediate"}
          />
          <LevelCard
            title="Advanced"
            units={`${
              data.filter((item: any) => {
                return item.data.level === "advanced";
              }).length
            } Units`}
            level={"advanced"}
          />
          <LevelCard
            title="Ielts"
            units={`${
              data.filter((item: any) => {
                return item.data.level === "ielts";
              }).length
            } Units`}
            level={"ielts"}
          />
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
