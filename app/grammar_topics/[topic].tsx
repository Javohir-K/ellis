import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Stack, useGlobalSearchParams } from "expo-router";
import Header from "@/components/Header";
import { screen_options } from "@/constants/constants";
import { db } from "@/api/firebase";
import UnitCard from "@/components/grammar/UnitCard";

export default function Topic() {
  const { topic } = useGlobalSearchParams();
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    db.collection("topics")
      .where("level", "==", topic)
      .onSnapshot((snapshot) => {
        setData(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
      });
  }, []);

  return (
    <>
      <Stack.Screen options={screen_options} />
      <View style={{ flex: 1 }}>
        <Header title={"Level " + topic} />
        <ScrollView>
          <View style={styles.wrapper}>
            {data.length === 0 ? (
              <Text>No posts for this level</Text>
            ) : data ? (
              data.map((item: any) => (
                <UnitCard
                  key={item.id}
                  topic_id={item.id}
                  title={item.data.title}
                />
              ))
            ) : (
              <Text>Loading...</Text>
            )}
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    flexDirection: "column",
    gap: 16,
  },
});
