import React, { useRef, useState, useEffect, useContext } from "react";
import { FlatList } from "react-native";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import SearchComponent from "../../components/User/Search";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useTheme } from "react-native-elements";
import CarsComponent from "../../components/User/Cars";
import useFetchProducts from "../../hooks/useProducts";
import useFetchCategories from "../../hooks/useCategories";
import { useNavigation } from "@react-navigation/native";
import { Store } from "../../store";
import { CATEGORY } from "../../store/actionType";
const Home = () => {
  const scrollComponent = useRef();
  const windowHeight = Dimensions.get("window").height;
  const [scroll, setScroll] = useState(1);
  const navigation = useNavigation();
  const { state, dispatch } = useContext(Store);

  const { theme } = useTheme();
  const {
    data: products,
    isLoading: productsLoading,
    isError: productsError,
  } = useFetchProducts();

  const {
    data: categories,
    isLoading: categoriesLoading,
    isError: categoriesError,
  } = useFetchCategories();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          backgroundColor: "#fff",
          paddingBottom: 50,
          minHeight: windowHeight,
        }}
      >
        <SearchComponent />
        <View
          style={{
            justifyContent: "center",
            backgroundColor: theme.Colors.primary,
            paddingBottom: 20,
          }}
        >
          <Text style={styles.heading}>Go Quickly to</Text>
          <View style={styles.scroll}>
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
            {categoriesLoading === true ? (
              <View style={{ flex: 1 }}>
                <Text style={{ textAlign: "center", color: "#fff" }}>
                  Loading...
                </Text>
              </View>
            ) : (
              <ScrollView
                ref={scrollComponent}
                pagingEnabled={true}
                horizontal={true}
                style={{ marginRight: 10 }}
              >
                {categories.allCategories.map((item) => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("CarsCategory", {
                        data: item.id,
                      });
                      dispatch({
                        type: CATEGORY,
                        payload: item.categoryName,
                      });
                    }}
                    activeOpacity={0.5}
                  >
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
                      {item.categoryName}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            )}

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
          <View style={styles.rows}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              New Arrival Item
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Cars")}>
              <Text style={{ fontSize: 16, color: theme.Colors.headingDull }}>
                View All
              </Text>
            </TouchableOpacity>
          </View>

          {productsLoading === true ? (
            <View style={{ flex: 1 }}>
              <Text>Loading...</Text>
            </View>
          ) : (
            <FlatList
              horizontal={true}
              data={products.allProducts}
              renderItem={({ item }) => (
                <CarsComponent width={true} data={item} />
              )}
            />
          )}
          <View style={styles.rows}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Deal of the Day
            </Text>
          </View>

          {productsLoading === true ? (
            <View style={{ flex: 1 }}>
              <Text>Loading...</Text>
            </View>
          ) : (
            <FlatList
              horizontal={true}
              data={products.allProducts}
              renderItem={({ item }) => (
                <CarsComponent width={true} data={item} />
              )}
            />
          )}
        </View>
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
    paddingRight: 20,
    paddingLeft: 20,
  },
  wrapper: {},
  rows: {
    display: "flex",
    marginBottom: 10,
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  categories: {},
  heading: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    color: "#fff",
  },
  scroll: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    marginLeft: 10,
    marginRight: 10,
  },
});

// const categories = [
//   "Audi",
//   "BMW",
//   "Lamborghini",
//   "Land",
//   "Rover",
//   "Mercedes",
//   "Other",
//   "Cars",
//   "Range",
//   "Rover",
//   "Rolls",
//   "Royce",
//   "RSX",
//   "SUVs",
// ];
