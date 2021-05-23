import React from "react";
import { View, Text, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTheme } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
const Blog = ({ data }) => {
  console.log("data", data);
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
        {data.createdAt}
      </Text>
      <Text style={{ fontWeight: "bold" }}>{data.title}</Text>
      <Text>{data.Description}</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("BlogDetails", {
            data: data,
          })
        }
      >
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
