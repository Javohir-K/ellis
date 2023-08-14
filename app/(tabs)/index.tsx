import { colors } from "@/constants/colors";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView } from "react-native";
import HomeHeader from "@/components/homepage/HomeHeader";
import TopicCard from "@/components/homepage/TopicCard";
import { TextR } from "@/constants/constants";

export default function Chats() {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.topics_wrapper}>
          <TextR
            content={"All topics"}
            mixedStyle={{ fontSize: 16, color: colors._accent }}
          />
          <TopicCard
            iconName={"book"}
            title="Grammar"
            desc="Learn english grammar from the best sources"
            link={"grammar"}
          />
          <TopicCard
            iconName={"edit-3"}
            title="Exercises"
            desc="Practice your knowledge with exercises"
            link={"practice"}
          />
          <TopicCard
            iconName={"zap"}
            title="Quiz and tests"
            desc="Test your knowledge"
            link={"quiz"}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors._white,
  },
  topics_wrapper: {
    padding: 16,
    gap: 16,
  },
});
