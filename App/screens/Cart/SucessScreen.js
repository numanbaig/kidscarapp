import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Button, useTheme } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Store } from "../../store/index";
import { CART } from "../../store/actionType";
const SucessScreen = () => {
  const { state, dispatch } = useContext(Store);
  const { theme } = useTheme();
  const navigation = useNavigation();

  const handleGoBack = () => {
    dispatch({
      type: CART,
      payload: [],
    });
    navigation.navigate("Root");
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
      }}
    >
      <Text style={{ fontSize: 20, textAlign: "center", marginBottom: 20 }}>
        Your Transaction has been Completed Sucessfully
      </Text>
      <Button
        onPress={handleGoBack}
        buttonStyle={{
          padding: 10,

          backgroundColor: theme.Colors.primary,
        }}
        title="Go Back To home Screen"
      />
    </View>
  );
};
export default SucessScreen;
