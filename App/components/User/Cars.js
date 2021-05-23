import React from "react";
import { View, Text, ImageBackground, Dimensions } from "react-native";
import { useTheme } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
const CarsComponent = ({ data, width }) => {
  const windowWidth = Dimensions.get("window").width;
  const navigation = useNavigation();
  const { theme } = useTheme();

  let percentage = (data.productPrice / data.comparePrice) * 100;
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("CarDetails", {
          data: data,
        })
      }
      activeOpacity={width === true ? (data.sold !== 1 ? 0.8 : 1) : 0.9}
    >
      <View
        style={
          width
            ? {
                marginRight: 10,
                width: 250,
                height: 300,
                borderWidth: 1,
                borderColor: "#eee",
              }
            : {
                flex: 1,
                height: 350,
                borderWidth: 1,
                borderColor: "#eee",
              }
        }
      >
        <ImageBackground
          resizeMode={"cover"}
          style={{
            flex: 1,

            borderRadius: 10,
          }}
          source={{ uri: data.productImage }}
        >
          {data.sold === "1" ? (
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
              }}
            >
              <Text style={{ textAlign: "center" }}>
                -{parseInt(100 - percentage)}%
              </Text>
            </View>
          )}
        </ImageBackground>
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 14, height: 50 }}>{data.productName}</Text>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Text
              style={{
                fontSize: 16,
                color: theme.Colors.heading,
                fontWeight: "bold",
              }}
            >
              ${data.productPrice}
            </Text>
            <Text
              style={{
                textDecorationLine: "line-through",
                fontSize: 16,
                marginLeft: 20,
                color: theme.Colors.headingDull,
              }}
            >
              ${data.comparePrice}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default CarsComponent;
