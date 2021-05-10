import React from "react";
import { View, Text, ImageBackground, Dimensions } from "react-native";
import Img1 from "../../../assets/images/img2.jpg";
import { useTheme } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
const CarsComponent = ({ data }) => {
  const windowWidth = Dimensions.get("window").width;
  const { theme } = useTheme();
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View
        style={{
          marginRight: 10,
          width: 250,
          height: 300,
          borderWidth: 1,
          borderColor: "#eee",
        }}
      >
        <ImageBackground
          resizeMode={"cover"}
          style={{
            flex: 1,

            borderRadius: 10,
          }}
          source={Img1}
        >
          {data === 1 ? (
            <View
              style={{
                flex: 1,
                backgroundColor: "rgba(0,0, 0, .5)",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: theme.Colors.alert,
                  padding: 10,
                  paddingLeft: 30,
                  paddingRight: 30,
                  // borderBottomLeftRadius: 5,
                  // borderBottomRightRadius: 5,
                }}
              >
                <Text
                  style={{ textAlign: "center", color: theme.Colors.White }}
                >
                  Sold Out
                </Text>
              </View>
            </View>
          ) : (
            <View
              style={{
                backgroundColor: theme.Colors.secondary,
                width: 50,
                //   borderBottomLeftRadius: 5,
                //   borderBottomRightRadius: 5,
              }}
            >
              <Text style={{ textAlign: "center" }}>42%</Text>
            </View>
          )}
        </ImageBackground>
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 14, height: 50 }}>
            24 v kids cars, beach buggy, dakar dune buggy, kids ride on cars,
            licensed lexus, parental controll remote kids car, remote controll
            cars, ride on toys, toy vehicle
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default CarsComponent;
