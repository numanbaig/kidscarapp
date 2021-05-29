import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import RadioButton from "./RadioButton";
const CartTotals = ({ deliveryTypes, setSelected, selected }) => {
  return (
    <View style={{ marginTop: 10 }}>
      <Text style={{ padding: 10, fontWeight: "bold" }}>Cart Totals</Text>
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
      {deliveryTypes.map((item) => (
        <TouchableOpacity onPress={() => setSelected(item.name)}>
          <View
            style={{
              padding: 10,
              borderWidth: 2,
              borderColor: "#eee",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text>{item.name}</Text>
            <RadioButton selected={selected === item.name ? true : false} />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};
export default CartTotals;
