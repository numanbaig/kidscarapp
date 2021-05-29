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
import { useRoute } from "@react-navigation/native";

let deviceHeight = Dimensions.get("window").height;
const Cars = () => {
  const route = useRoute();
  const { theme } = useTheme();

  const {
    data: products,
    isLoading: productsLoading,
    isError,
  } = useFetchByCategory(route.params.data);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {productsLoading === true ? (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <ActivityIndicator size="large" color={theme.Colors.primary} />
          </View>
        ) : (
          <>
            {products.ProductsByCategory.length === 0 ? (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Text>No Cars To Display</Text>
              </View>
            ) : (
              <FlatList
                data={products.ProductsByCategory}
                renderItem={({ item }) => (
                  <View style={{ marginTop: 10 }}>
                    <Products width={false} data={item} />
                  </View>
                )}
              />
            )}
          </>
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
