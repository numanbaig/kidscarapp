import React, { useState, useContext } from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Button, useTheme } from "react-native-elements";
import { Store } from "../../store";
import { CART } from "../../store/actionType";
const SelectedComponent = ({ currentSelected, setCartVisible }) => {
  let data = currentSelected.data;
  const { state, dispatch } = useContext(Store);
  const { theme } = useTheme();

  const handleRemoveCart = () => {
    setCartVisible(false);
    let newCart = state.cart;
    const filterCart = newCart.filter((item) => data.id !== item.id);

    dispatch({
      type: CART,
      payload: filterCart,
    });
  };
  return (
    <View>
      <Image
        style={{ width: "100%", height: 250, marginTop: 10 }}
        source={{ uri: data.productImage }}
      />

      <View style={{ paddingTop: 10, paddingBottom: 10 }}>
        <Text style={{ overflow: "hidden", height: 50 }}>
          {data.productName}
        </Text>
        {[
          { name: "Price", value: data.productPrice, type: "Price" },
          { name: "Quantity", value: currentSelected.quantity, type: "Number" },
          {
            name: "Subtotal",
            value: currentSelected.quantity * data.productPrice,
            type: "Price",
          },
        ].map((item) => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
              marginBottom: 5,
              borderTopColor: "#eee",
              padding: 2,
            }}
          >
            <Text>{item.name}</Text>
            <Text>
              {item.value}
              {item.type === "Price" && "$"}
            </Text>
          </View>
        ))}
      </View>
      <Button
        onPress={handleRemoveCart}
        buttonStyle={{
          backgroundColor: theme.Colors.primary,
        }}
        title="Remove From Cart"
      />
    </View>
  );
};
export default SelectedComponent;
