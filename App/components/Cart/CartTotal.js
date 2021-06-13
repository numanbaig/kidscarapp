import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import RadioButton from "./RadioButton";

const CartTotals = ({
  deliveryTypes,
  setSelected,
  selected,
  cartTotalAmount,
}) => {
  const totalAmount = () => {
    if (selected === "Only for Sydney: $185.00") {
      return cartTotalAmount() + 185;
    }
    if (selected === "Self-pickup") {
      return cartTotalAmount();
    }
    if (selected === "For Queensland: $300.00") {
      return cartTotalAmount() + 300;
    } else {
      return cartTotalAmount() + 300;
    }
  };
  return (
    <View style={{ marginTop: 10 }}>
      <Text style={{ padding: 10, fontWeight: "bold", fontSize: 16 }}>
        Cart Totals
      </Text>
      <View
        style={{
          padding: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          borderWidth: 1,
          borderColor: "#eee",
        }}
      >
        <Text>Subtotal</Text>
        <Text>{cartTotalAmount()}$</Text>
      </View>
      {deliveryTypes.map((item) => (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setSelected(item.name)}
        >
          <View
            style={{
              padding: 10,
              borderWidth: 1,
              marginBottom: 5,
              marginTop: 5,
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
      <View
        style={{
          padding: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          borderWidth: 1,
          borderColor: "#eee",
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Total</Text>
        <Text>{totalAmount()}$</Text>
      </View>
    </View>
  );
};
export default CartTotals;
