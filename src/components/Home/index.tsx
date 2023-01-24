import { Text, View } from "react-native";

import styles from "./styles";

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Rock</Text>
          <Text style={styles.title}>Paper</Text>
          <Text style={styles.title}>Scissors</Text>
        </View>
        <View style={styles.score_content}>
          <Text style={styles.score_text}>Score</Text>
          <Text style={styles.score}>12</Text>
        </View>
      </View>
    </View>
  );
};
