import React from "react-native";
import { View, Text, StyleSheet } from "react-native";

const FavoritesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Favorite Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
