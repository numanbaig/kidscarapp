import React, { useRef, useState } from "react";
import { FlatList } from "react-native";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import SearchComponent from "../../components/User/Search";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import Container from "../../components/User/Container";
import { useTheme } from "react-native-elements";
const Home = () => {
  const scrollComponent = useRef();
  const [scroll, setScroll] = useState(1);
  const { theme } = useTheme();
  return (
    <ScrollView>
      <View style={styles.container}>
        <SearchComponent />
        <View style={{ marginTop: 10, justifyContent: "center" }}>
          <Text
            style={{ fontWeight: "bold", fontSize: 18, textAlign: "center" }}
          >
            Go Quickly to
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              position: "relative",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                scrollComponent.current.scrollTo({ x: -(50 * scroll) });
                setScroll(scroll + 1);
              }}
            >
              <AntDesign
                // color={theme.Colors.secondary}
                color={"#000"}
                size={20}
                name="arrowleft"
              />
            </TouchableOpacity>

            <ScrollView
              ref={scrollComponent}
              pagingEnabled={true}
              horizontal={true}
              style={{ marginRight: 10 }}
            >
              {categories.map((name) => (
                <TouchableOpacity activeOpacity={0.5}>
                  <Text
                    style={{
                      padding: 5,
                      paddingRight: 10,
                      paddingLeft: 10,
                      backgroundColor: "#eee",
                      margin: 2,
                      borderTopRightRadius: 5,
                      borderBottomLeftRadius: 5,
                      borderTopLeftRadius: 5,
                      borderBottomRightRadius: 5,
                    }}
                  >
                    {name}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <TouchableOpacity
              onPress={() => {
                scrollComponent.current.scrollTo({ x: scroll * 50 });
                setScroll(scroll + 1);
              }}
            >
              <AntDesign color={"#000"} size={20} name="arrowright" />
            </TouchableOpacity>
          </View>
        </View>
        <Container />
      </View>
    </ScrollView>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
});

const categories = [
  "Audi",
  "BMW",
  "Lamborghini",
  "Land",
  "Rover",
  "Mercedes",
  "Other",
  "Cars",
  "Range",
  "Rover",
  "Rolls",
  "Royce",
  "RSX",
  "SUVs",
];
