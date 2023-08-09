import { auth } from "@/api/firebase";
import { colors } from "@/components/colors";
import { Icon } from "@/components/Icon";
import { TextR, statusBarHeight } from "@/components/constants";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Platform,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import HomeHeader from "@/components/HomeHeader";


export default function Chats() {
  return (
    <View style={styles.container}>
      <HomeHeader />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
