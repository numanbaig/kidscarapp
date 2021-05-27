import React, { useContext, useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome, Entypo } from "@expo/vector-icons";
import { useTheme } from "react-native-elements";
import { useNavigation, DrawerActions } from "@react-navigation/native";

import Logo from "../../../assets/images/logo.png";
import { Store } from "../../store/index";

const Header = () => {
  const { state, dispatch } = useContext(Store);
  const navigation = useNavigation();
  const [cartLength, setCartLength] = useState(0);
  const { theme } = useTheme();
  const handleCart = () => {
    let length = 0;
    state.cart.forEach((item) => {
      for (let i = 0; i < item.quantity; i++) {
        length++;
      }
    });
    return length;
  };

  return (
    <View
      style={{
        padding: 20,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: theme.Colors.primary,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <AntDesign color={theme.Colors.White} name="menu-fold" size={24} />
        </TouchableOpacity>
        <Image style={{ height: 40, width: 120 }} source={Logo} />
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            navigation.navigate("Cart");
          }}
        >
          <View
            style={{
              position: "relative",
              flexDirection: "row",
              justifyContent: "flex-end",
              overflow: "visible",
            }}
          >
            {state.cart.length !== 0 && (
              <View
                style={{
                  position: "absolute",
                  right: -10,
                  zIndex: 2000,
                  backgroundColor: theme.Colors.secondary,
                  width: 18,
                  height: 18,
                  borderRadius: 20,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "#000",
                    fontSize: 12,
                  }}
                >
                  {handleCart()}
                </Text>
              </View>
            )}
            <Entypo
              style={{ zIndex: 1 }}
              color={theme.Colors.White}
              name="shopping-cart"
              size={24}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Header;
