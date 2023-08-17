import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { TextR, statusBarHeight } from "../../constants/constants";
import { colors } from "../../constants/colors";
import HeaderImg from "@/assets/images/homepage_header.png";

export default function HomeHeader() {
  // const [user, setUser] = useState<any>(null);

  // useEffect(() => {
  //   db.collection("users")
  //     .doc(auth.currentUser?.uid)
  //     .get()
  //     .then((res) => {
  //       setUser(res.data());
  //     });
  // }, []);

  return (
    <View style={styles.header}>
      <View style={styles.header_wrapper}>
        <TextR content={"Welcome to ICEL!"} mixedStyle={styles.title} />
        <TextR
          content="Interactive content for english learners!"
          mixedStyle={styles.text}
        />
      </View>
      <View>
        <Image source={HeaderImg} style={{ width: 140, height: 140 }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: statusBarHeight,
    // paddingBottom: 20,
    backgroundColor: colors._accent,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  header_wrapper: {
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: colors._white,
  },
  text: {
    fontSize: 14,
    color: colors._white,
    maxWidth: 200,
  },
});
