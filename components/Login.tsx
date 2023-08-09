import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "@/api/firebase";
import { colors } from "./colors";
import { TextR } from "./constants";
import LoginImage from "@/assets/images/login_image.png";
import { Dimensions } from "react-native";

export default function Login() {
  const [screen, setScreen] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [checkpassword, setCheckPassword] = useState("");
  const [error, setError] = useState("");

  const signIn = async (e: any) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      if (
        error.code === "auth/invalid-email" ||
        error.code === "auth/wrong-password"
      ) {
        setError("Your email or password was incorrect");
      } else if (error.code === "auth/email-already-in-use") {
        setError("An account with this email already exists");
      } else {
        setError("There was a problem with your request");
      }
    }
  };

  const createAccount = async () => {
    try {
      if (password === checkpassword) {
        await createUserWithEmailAndPassword(auth, email, password);
        await db.collection("users").doc(auth.currentUser?.uid).set({
          email: email,
          name: name,
        });
      } else setError("Passwords don't match");
    } catch (e: any) {
      setError(e.message);
    }
  };

  if (screen == "login") {
    return (
      <KeyboardAvoidingView behavior={"height"} style={styles.container}>
        <View style={styles.wrapper}>
          <Image source={LoginImage} style={{ width: 140, height: 140 }} />
          <TextR mixedStyle={styles.header_text} content="Login" />
          <View style={styles.input_wrapper}>
            <TextInput
              placeholder="Email"
              placeholderTextColor={colors._grey}
              value={email}
              onFocus={() => setError("")}
              onChangeText={(text) => {
                setEmail(text);
              }}
              style={styles.input}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor={colors._grey}
              value={password}
              onFocus={() => setError("")}
              onChangeText={(text) => {
                setPassword(text);
              }}
              style={styles.input}
              secureTextEntry={true}
            />

            <TouchableOpacity onPress={signIn} style={styles.button}>
              <TextR content="Sign in" mixedStyle={{}} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ color: "red" }}>{error}</Text>
          </View>
        </View>
        <View style={styles.changer_wrap}>
          <Text style={styles.changer_text}>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              setScreen("register");
              setError("");
            }}
          >
            <Text style={styles.changer_btn_text}>Register</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  } else if (screen == "register") {
    return (
      <KeyboardAvoidingView behavior={"height"} style={styles.container}>
        <View style={styles.wrapper}>
          <Image source={LoginImage} style={{ width: 140, height: 140 }} />
          <TextR
            mixedStyle={styles.header_text}
            content="Create your profile!"
          />
          <View style={styles.input_wrapper}>
            <TextInput
              placeholder="Full Name"
              placeholderTextColor={colors._grey}
              value={name}
              onChangeText={(text) => {
                setName(text);
              }}
              style={styles.input}
            />
            <TextInput
              placeholder="Email"
              placeholderTextColor={colors._grey}
              value={email}
              onFocus={() => setError("")}
              onChangeText={(text) => {
                setEmail(text);
              }}
              style={styles.input}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor={colors._grey}
              value={password}
              onFocus={() => setError("")}
              onChangeText={(text) => {
                setPassword(text);
              }}
              style={styles.input}
              secureTextEntry={true}
            />
            <TextInput
              placeholder="Re-enter password"
              placeholderTextColor={colors._grey}
              value={checkpassword}
              onFocus={() => setError("")}
              onChangeText={(text) => {
                setCheckPassword(text);
              }}
              style={styles.input}
              secureTextEntry={true}
            />
            <TouchableOpacity onPress={createAccount} style={styles.button}>
              <TextR content="Register" mixedStyle={{}} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ color: "red" }}>{error}</Text>
          </View>
        </View>
        <View style={styles.changer_wrap}>
          <Text style={styles.changer_text}>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              setScreen("login");
              setError("");
            }}
          >
            <Text style={styles.changer_btn_text}>Sign in!</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: colors._accent,
    height: height,
    justifyContent: "center",
  },
  wrapper: {
    // flex: 1,
    alignItems: "center",
    gap: 10,
  },
  header_text: {
    color: colors._white,
    fontSize: 22,
    textAlign: "center",
    marginBottom: 24,
  },
  input_wrapper: {
    width: "80%",
    flexDirection: "column",
    gap: 16,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: colors._white,
    borderRadius: 20,
    color: colors._black,
    fontSize: 16,
  },
  button: {
    padding: 10,
    backgroundColor: colors._yellow,
    borderRadius: 20,
    alignItems: "center",
  },
  changer_wrap: {
    flexDirection: "row",
    gap: 10,
    padding: 16,
    justifyContent: "center",
  },
  changer_text: {
    color: colors._white,
    fontSize: 16,
  },
  changer_btn_text: {
    color: colors._yellow,
    fontSize: 16,
  },
});
