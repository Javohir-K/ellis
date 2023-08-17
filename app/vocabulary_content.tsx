import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack, useGlobalSearchParams } from "expo-router";
import { screen_options } from "@/constants/constants";
import Header from "@/components/Header";
import { Audio } from "expo-av";

export default function vocabulary_content() {
  const { word_name } = useGlobalSearchParams();
  const [data, setData] = useState<any>([]);
  const [sound, setSound] = useState<any>(null);

  useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word_name}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const definition = data[0]?.meanings?.[0].definitions?.[0].definition;

  const audio = data[0]?.phonetics[0]?.audio;

  // console.log(audio);

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      audio
        ? {
            uri: audio,
          }
        : require("../assets/beep.mp3")
    );
    setSound(sound);

    // console.log("Playing Sound");
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          // console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  // console.log(definition);

  return (
    <>
      <Stack.Screen options={screen_options} />
      <View style={{ flex: 1 }}>
        <Header title={word_name?.toString()} />
        <View>
          {data ? (
            <Text>{definition ? definition : "No definition"}</Text>
          ) : (
            <Text>no data</Text>
          )}
          {audio ? (
            <Button title="Play sound" onPress={playSound} />
          ) : (
            <Text>No audio!</Text>
          )}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
