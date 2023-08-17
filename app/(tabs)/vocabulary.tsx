import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { words } from "@/api/word_list";
import SearchBar from "@/components/vocabulary/SearchBar";
import WordCard from "@/components/vocabulary/WordCard";

export default function Vocabulary() {
  // console.log(words);

  const data: any = words.split("\n").sort();
  const new_data: Array<string> = [];
  // console.log(data[0,20]);

  for (let i = 0; i < 100; i++) {
    new_data.push(data[i]);
  }

  if (!words) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <SearchBar />
      <ScrollView>
        <View style={styles.words_wrapper}>
          {new_data ? (
            new_data.map((word: string, id: any) => (
              <WordCard key={id} word={word} />
            ))
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  words_wrapper: {
    padding: 16,
    gap: 10,
  },
});
