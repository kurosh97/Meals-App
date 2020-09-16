import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
const CategoryMealScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");
  const selectedCategories = CATEGORIES.find((cat) => cat.id === catId);

  return (
    <View style={styles.screen}>
      <Text>Category Meal Screen</Text>
      <Text>{selectedCategories.title}</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
          });
        }}
      />
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.pop("Categories");
        }}
      />
    </View>
  );
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategorie = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategorie.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealScreen;
