import React from "react";
import { View, Text, Image } from "react-native";
import { AntDesign, FontAwesome, Entypo } from "@expo/vector-icons";
import { useTheme } from "react-native-elements";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Logo from "../../../assets/images/logo.png";
const Header = () => {
  const navigation = useNavigation();
  const { theme } = useTheme();
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
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <View
            style={{
              position: "relative",
              zIndex: 5,
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            {/* <View
              style={{
                position: "absolute",
                top: -5,
                right: -10,
                zIndex: 1000,
                backgroundColor: theme.Colors.secondary,
                width: 20,
                height: 20,
                borderRadius: 20,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 12,
                }}
              >
                10
              </Text>
            </View> */}
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
