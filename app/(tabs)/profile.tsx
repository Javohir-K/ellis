import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/api/firebase";
import { colors } from "@/components/colors";

export default function profile() {
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View>
        <Text>{auth.currentUser?.email}</Text>
      </View>
      <TouchableOpacity
        onPress={logout}
        style={{ padding: 10, backgroundColor: colors._black }}
      >
        <Text style={{ color: "white" }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
