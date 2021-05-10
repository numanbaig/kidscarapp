import React from "react";
import { View, Text, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTheme } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
const Blog = () => {
  const navigation = useNavigation();
  const { theme } = useTheme();
  return (
    <View
      style={{
        padding: 10,
        borderColor: "#eee",
        borderWidth: 2,
        marginTop: 5,
      }}
    >
      <Text style={{ color: theme.Colors.heading, marginBottom: 5 }}>
        March 4, 2021
      </Text>
      <Text>
        Licensed Mercedes Benz G63 with 6 Wheels Kids Ride On Car Remote control
      </Text>
      <Text>
        2021 Licensed Mercedes Benz AMG G63 Six wheel model has arrived with,
        storage box front and back, powered by 2 motors 45w each. Play your
        kids’ favorite music via the new In-line MP3 port, Bluetooth, USB, or
        memory card with full play/stop and volume control on the dashboard.
        Equipped with LED headlights and taillights, forward and reverse gears,
        side mirrors, and anti-slip tires. Your kid can drive it like a real car
        through a foot pedal and steering wheel or you can take full control of
        the steering, forward, and reverse directions via parental remote
        handset when needed. The sturdy construction and seat belt offer full
        support at speeds up to 7km/h
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("BlogDetails")}>
        <Text
          style={{
            color: theme.Colors.heading,
            marginTop: 10,
            textDecorationLine: "underline",
          }}
        >
          Read more
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Blog;
