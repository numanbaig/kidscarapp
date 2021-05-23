import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TextInput,
  Modal,
} from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useTheme, Button, Overlay } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import Img from "../../../assets/images/img2.jpg";
import { useRoute } from "@react-navigation/native";

const CarDetails = () => {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const route = useRoute();
  const [cartVisible, setCartVisible] = useState(false);
  let width = Dimensions.get("window").width;
  let data = route.params.data;
  return (
    <View style={{ position: "relative", backgroundColor: "#fff" }}>
      <ScrollView>
        <View style={{ paddingBottom: 100 }}>
          <ImageBackground
            style={{
              flex: 1,
              height: 350,
            }}
            source={{ uri: data.productImage }}
          >
            <View style={{ padding: 30, paddingLeft: 20 }}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name="arrowleft" size={25} />
              </TouchableOpacity>
            </View>
          </ImageBackground>

          <View style={styles.wrapper}>
            <Text style={styles.heading}>{data.productName}</Text>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  marginRight: 10,
                  color: theme.Colors.headingDull,
                  textDecorationLine: "line-through",
                }}
              >
                ${data.comparePrice}
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  color: theme.Colors.secondary,
                }}
              >
                ${data.productPrice}
              </Text>
            </View>

            <Text style={{ fontSize: 16 }}>{data.productDescription}</Text>
          </View>
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
            justifyContent: "flex-end",
            flex: 1,
          }}
        >
          <TouchableOpacity
            onPress={() => setCartVisible(true)}
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
            <AntDesign color="#fff" name="shoppingcart" size={25} />
            <Text style={{ color: "#fff", marginLeft: 10 }}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Overlay
        overlayStyle={{}}
        isVisible={cartVisible}
        onBackdropPress={() => setCartVisible(false)}
      >
        <CartComponent setCartVisible={setCartVisible} />
      </Overlay>
    </View>
  );
};

const CartComponent = ({ setCartVisible }) => {
  const { theme } = useTheme();
  const [cartCount, setCartCount] = useState(0);
  return (
    <View>
      <View
        style={{
          padding: 50,
        }}
      >
        <View style={{ paddingBottom: 20 }}>
          <Text>20 In stocks</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Button
            onPress={() => {
              setCartCount(cartCount + 1);
            }}
            containerStyle={{
              elevation: 0,
            }}
            buttonStyle={{
              width: 50,
              backgroundColor: theme.Colors.primary,
              elevation: 0,
              flex: 1,
            }}
            title="+"
          />
          <Text
            style={{
              padding: 10,
              paddingLeft: 20,
              paddingRight: 20,
              marginRight: 10,
              marginLeft: 10,
              borderWidth: 1,
              borderRadius: 5,
              borderColor: "#eee",
            }}
          >
            {cartCount}
          </Text>
          <Button
            onPress={() => {
              if (cartCount !== 0) {
                setCartCount(cartCount - 1);
              }
            }}
            buttonStyle={{
              width: 50,
              flex: 1,
              backgroundColor: theme.Colors.primary,
            }}
            titleStyle={{}}
            title="-"
          />
        </View>
        <View style={{ paddingTop: 20 }}>
          <Button
            onPress={() => setCartVisible(false)}
            title="Confirm"
            buttonStyle={{
              backgroundColor: theme.Colors.secondary,
            }}
          />
        </View>
      </View>
    </View>
  );
};
export default CarDetails;
const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 10,
    padding: 20,
    backgroundColor: "#fff",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
  },
});