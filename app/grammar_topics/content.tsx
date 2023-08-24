import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Stack, useGlobalSearchParams } from "expo-router";
import { screen_options } from "@/constants/constants";
import { db } from "@/api/firebase";
import ContentWebView from "@/components/ContentWebView";
import Header from "@/components/Header";
import SkeletonUI from "@/components/SkeletonUI";

export default function Content() {
  const { topic_id, topic_title } = useGlobalSearchParams();
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    db.collection("topics")
      .doc(topic_id?.toString())
      .get()
      .then((res) => setData(res.data()));
  }, []);

  return (
    <>
      <Stack.Screen options={screen_options} />
      <Header title={topic_title.toString()} />
      <ScrollView>
        {data.content ? (
          <ContentWebView webdata={data.content} />
        ) : (
          <Text>Loading...</Text>
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
