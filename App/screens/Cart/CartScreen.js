import React, { useState, useContext, useEffect } from "react";
import { FlatList } from "react-native";
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
} from "react-native";
import { Overlay } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTheme } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Store } from "../../store/index";
import SelectedComponent from "../../components/Cart/SelectedItem";
import CartTotals from "../../components/Cart/CartTotal";
let width = Dimensions.get("window").width;

const CartScreen = () => {
  const { state, dispatch } = useContext(Store);
  const [selected, setSelected] = useState("Only for Sydney: $185.00");
  const [cartVisible, setCartVisible] = useState(false);
  const [cartTotalVisible, setCartTotalVisible] = useState(false);
  const [currentSelected, setCurrentSelected] = useState([]);

  const navigation = useNavigation();
  const { theme } = useTheme();
  const deliveryTypes = [
    {
      name: "Only for Sydney: $185.00",
    },
    {
      name: "Self-pickup",
    },
    {
      name: "For Queensland: $300.00",
    },
    {
      name: "For Melbourne: $300.00",
    },
  ];

  const cartTotalAmount = () => {
    let total = 0;

    state.cart.forEach((item) => {
      total += item.data.productPrice * item.quantity;
    });
    return total;
  };
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {state.cart.length === 0 ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Text>No Items In Cart</Text>
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
            <View style={{ flex: 1, padding: 10, backgroundColor: "#fff" }}>
              <View>
                <Text
                  style={{ fontWeight: "bold", fontSize: 18, marginBottom: 10 }}
                >
                  My Cart
                </Text>
                <FlatList
                  data={state.cart}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      onPress={() => {
                        setCurrentSelected(item);
                        setCartVisible(true);
                      }}
                    >
                      <View style={styles.component}>
                        <Image
                          style={{ width: 60, height: 60 }}
                          source={{ uri: item.data.productImage }}
                        />
                        <Text
                          style={{
                            width: 150,
                            overflow: "hidden",
                            height: 50,
                            overflow: "hidden",
                          }}
                        >
                          {item.data.productName}
                        </Text>
                        <Text>{item.quantity * item.data.productPrice}$</Text>
                      </View>
                    </TouchableOpacity>
                  )}
                />
              </View>
              <Overlay
                overlayStyle={{
                  width: 300,
                }}
                isVisible={cartVisible}
                onBackdropPress={() => setCartVisible(false)}
              >
                <SelectedComponent
                  setCartVisible={setCartVisible}
                  currentSelected={currentSelected}
                />
              </Overlay>
              <Overlay
                overlayStyle={{
                  width: 300,
                }}
                isVisible={cartTotalVisible}
                onBackdropPress={() => setCartTotalVisible(false)}
              >
                <CartTotals
                  setSelected={setSelected}
                  selected={selected}
                  deliveryTypes={deliveryTypes}
                />
              </Overlay>
            </View>
          </ScrollView>
          <View
            style={{
              width: width,
              height: 70,
              paddingLeft: 20,
              paddingRight: 20,
              position: "absolute",
              backgroundColor: theme.Colors.primary,
              bottom: 0,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                flex: 1,
              }}
            >
              <Text style={{ color: "#fff" }}>Total: {cartTotalAmount()}$</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("PaymentDetails")}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 10,
                  paddingLeft: 30,
                  paddingRight: 30,
                  backgroundColor: theme.Colors.secondary,
                  borderRadius: 5,
                }}
              >
                <Text style={{ color: "#fff" }}>Proceed to checkout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  component: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },
});
