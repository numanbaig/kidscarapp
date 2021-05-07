import React from "react";
import { useTheme } from "react-native-elements";
import { Button } from "react-native-elements";
import { View, ImageBackground, Text } from "react-native";
import Car from "../../../assets/images/car.jpg";

const Container = () => {
  const { theme } = useTheme();
  return (
    <View style={{ height: 300, flex: 1, marginTop: 20 }}>
      <ImageBackground style={{ flex: 1 }} source={Car}>
        <View
          style={{
            backgroundColor: "rgba(27,36, 47, .5)",
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 18 }}>
            Licensed Mercedes Benz G63 With 6 Wheels Kids Ride On Car Remote
            Control – Black And White
          </Text>
          <Button
            containerStyle={{
              borderTopRightRadius: 20,
              borderBottomLeftRadius: 20,
              borderTopLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}
            buttonStyle={{
              borderTopRightRadius: 20,
              borderBottomLeftRadius: 20,
              borderTopLeftRadius: 20,
              borderBottomRightRadius: 20,
              paddingRight: 20,
              paddingLeft: 20,
              backgroundColor: theme.Colors.primary,
            }}
            title="Shop Now"
          />
        </View>
      </ImageBackground>
    </View>
  );
};
export default Container;
