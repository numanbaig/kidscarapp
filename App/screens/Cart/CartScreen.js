import React, { useState, useContext } from "react";
import { FlatList } from "react-native";
import { View, Text, ScrollView, Image, Modal, Dimensions } from "react-native";
import { CheckBox, Overlay } from "react-native-elements";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import Img from "../../../assets/images/car.jpg";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { useTheme } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Store } from "../../store/index";
let width = Dimensions.get("window").width;

const CartScreen = () => {
  const { state, dispatch } = useContext(Store);
  const [selected, setSelected] = useState("Only for Sydney: $185.00");
  const [cartVisible, setCartVisible] = useState(false);
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
  return (
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
                  <View
                    style={{
                      padding: 10,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderBottomColor: "#eee",
                      borderBottomWidth: 1,
                    }}
                  >
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
            {/* <View style={{ marginTop: 10 }}>
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
                  <RadioButton
                    selected={selected === item.name ? true : false}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View> */}
          </View>
          <Overlay
            overlayStyle={{
              width: 300,
            }}
            isVisible={cartVisible}
            onBackdropPress={() => setCartVisible(false)}
          >
            <SelectedComponent currentSelected={currentSelected} />
          </Overlay>
        </View>
      </ScrollView>
      <View
        style={{
          width: width,
          height: 70,
          paddingLeft: 30,
          paddingRight: 30,
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
          <Text style={{ color: "#fff" }}>Total: 300$</Text>
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
            <Text style={{ color: "#fff" }}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const SelectedComponent = ({ currentSelected }) => {
  let data = currentSelected.data;
  return (
    <View>
      <TouchableHighlight>
        <Entypo name="cross" size={25} />
      </TouchableHighlight>
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
    </View>
  );
};
function RadioButton(props) {
  return (
    <View
      style={[
        {
          height: 24,
          width: 24,
          borderRadius: 12,
          borderWidth: 2,
          borderColor: "#000",
          alignItems: "center",
          justifyContent: "center",
        },
        props.style,
      ]}
    >
      {props.selected ? (
        <View
          style={{
            height: 12,
            width: 12,
            borderRadius: 6,
            backgroundColor: "#000",
          }}
        />
      ) : null}
    </View>
  );
}
export default CartScreen;
