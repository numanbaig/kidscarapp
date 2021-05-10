import React from "react";
import { useTheme } from "react-native-elements";
import { Button } from "react-native-elements";
import { View, ImageBackground, Text } from "react-native";
import Car from "../../../assets/images/car.jpg";

const Container = () => {
  const { theme } = useTheme();
  return (
    <View
      style={{
        flex: 1,
        marginTop: 20,
        borderWidth: 1,
        paddingTop: 0,
        borderColor: "#eee",                                                                                       
      }}
    >
      <Text style={{ color: "#000", fontSize: 18, padding: 5 }}>
        Licensed Mercedes Benz G63 With 6 Wheels Kids Ride On Car Remote Control
        – Black And White
      </Text>
      <ImageBackground style={{ height: 300 }} source={Car}>
        <View
          style={{
            // backgroundColor: "rgba(27,36, 47, .5)",
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
            padding: 20,
          }}
        ></View>
      </ImageBackground>
      <View>
        <Button
          containerStyle={{
            width: 150,
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
    </View>
  );
};
export default Container;
