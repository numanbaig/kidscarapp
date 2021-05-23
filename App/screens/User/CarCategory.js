import React, { useState, useEffect } from "react";
import Products from "../../components/User/Cars";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { useTheme } from "react-native-elements";
import useFetchByCategory from "../../hooks/useFetchByCategory";
import { AntDesign } from "@expo/vector-icons";

let deviceHeight = Dimensions.get("window").height;
const Cars = () => {
  const { theme } = useTheme();

  const {
    data: products,
    isLoading: productsLoading,
    isError,
  } = useFetchByCategory();

  useEffect(() => {
    console.log("products", products);
  }, [products]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {/* <View
          style={{
            borderWidth: 1,
            borderColor: "#eee",
            borderRadius: 5,
          }}
        >
          <Picker
            style={{
              paddingTop: 20,
              paddingBottom: 20,
            }}
            selectedValue={filterBy}
            mode="dropdown"
            onValueChange={(itemValue, itemIndex) => setFilterBy(itemValue)}
          >
            <Picker.Item label="All" value="All" />
            <Picker.Item label="Latest" value="Latest" />
            <Picker.Item label="Popular" value="Popular" />
          </Picker>
        </View> */}
        {productsLoading === true ? (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <ActivityIndicator size="large" color={theme.Colors.primary} />
          </View>
        ) : (
          <FlatList
            data={products.allProducts}
            renderItem={({ item }) => (
              <View style={{ marginTop: 10 }}>
                <Products width={false} data={item} />
              </View>
            )}
          />
        )}
      </View>
    </ScrollView>
  );
};

export default Cars;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: deviceHeight,
    padding: 10,
    backgroundColor: "#fff",
  },
});
