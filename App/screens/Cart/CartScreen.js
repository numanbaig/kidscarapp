import React from "react";
import { FlatList } from "react-native";
import { View, Text, ScrollView } from "react-native";

const CartScreen = () => {
  return (
    // <ScrollView style={{ flex: 1 }}>
    <View style={{ flex: 1, padding: 10 }}>
      <View>
        <FlatList
          data={[1]}
          renderItem={({}) => (
            <View style={{ borderWidth: 2, borderColor: "#eee" }}>
              <View style={{ padding: 10 }}>
                <Text>Product: </Text>
                <Text>New 2021 Dakar Dune Buggy Big 24 Volt - Red</Text>
              </View>
              <View
                style={{
                  padding: 10,
                  borderWidth: 2,
                  borderColor: "#eee",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text>Quantity</Text>
                <Text>3</Text>
              </View>
              <View
                style={{
                  padding: 10,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderWidth: 2,
                  borderColor: "#eee",
                }}
              >
                <Text>Subtotal</Text>
                <Text>539$</Text>
              </View>
              <View
                style={{
                  padding: 10,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderWidth: 2,
                  borderColor: "#eee",
                }}
              >
                <Text>Quantity</Text>
                <Text>3</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
    // </ScrollView>
  );
};
export default CartScreen;
