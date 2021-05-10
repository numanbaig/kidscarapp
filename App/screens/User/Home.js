import React, { useRef, useState } from "react";
import { FlatList } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Picker,
} from "react-native";
import SearchComponent from "../../components/User/Search";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import Container from "../../components/User/Container";
import { useTheme } from "react-native-elements";
import CarsComponent from "../../components/User/Cars";
const Home = () => {
  const scrollComponent = useRef();
  const windowHeight = Dimensions.get("window").height;
  const [scroll, setScroll] = useState(1);
  const [selectedValue, setSelectedValue] = useState("java");
  const { theme } = useTheme();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ minHeight: windowHeight, backgroundColor: "#fff" }}>
        <SearchComponent />
        <View
          style={{
            justifyContent: "center",
            backgroundColor: theme.Colors.primary,
            paddingBottom: 20,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              textAlign: "center",
              color: "#fff",
            }}
          >
            Go Quickly to
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              position: "relative",
              marginLeft: 10,
              marginRight: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                scrollComponent.current.scrollTo({ x: -(100 * scroll) });
                setScroll(scroll + 1);
              }}
            >
              <AntDesign
                // color={theme.Colors.secondary}
                color={"#fff"}
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
                      backgroundColor: theme.Colors.secondary,
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
                scrollComponent.current.scrollTo({ x: scroll * 100 });
                setScroll(scroll + 1);
              }}
            >
              <AntDesign color={"#fff"} size={20} name="arrowright" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>
          <View
            style={{
              display: "flex",
              marginBottom: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              New Arrival Item
            </Text>
            {/* <Text style={{ fontSize: 16, color: theme.Colors.headingDull }}>
              Filter By
            </Text> */}
          </View>
          <FlatList
            horizontal={true}
            data={[1, 2, 35]}
            renderItem={({ item }) => <CarsComponent data={item} />}
          />

          {/* <View>
            <Text>Cars for Kids at best price</Text>
          </View> */}
          {/* <Container /> */}
        </View>
      </View>
    </ScrollView>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
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
