import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "react-native-elements";
import { useRoute } from "@react-navigation/native";
const BlogDetails = () => {
  const { theme } = useTheme();
  const route = useRoute();
  let data = route.params.data;
  return (
    <View
      style={{
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,

        marginTop: 10,
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 16 }}>{data.title}</Text>
      <Text style={{ fontSize: 16, marginTop: 10 }}>{data.Description}</Text>
      <Text style={{ color: theme.Colors.heading, marginTop: 5 }}>
        Posted At: {data.createdAt}
      </Text>
    </View>
  );
};
export default BlogDetails;
