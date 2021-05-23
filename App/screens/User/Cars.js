import React, { useState, useEffect } from "react";
import Products from "../../components/User/Cars";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useTheme } from "react-native-elements";
import useFetchProducts from "../../hooks/useProducts";
import moment from "moment";
let deviceHeight = Dimensions.get("window").height;
const Cars = () => {
  const { theme } = useTheme();
  const [filterBy, setFilterBy] = useState("");
  const [sortedData, setSortedData] = useState([]);
  const {
    data: products,
    isLoading: productsLoading,
    isError,
  } = useFetchProducts();

  useEffect(() => {
    if (products.allProducts.length !== 0) {
      let sortDates = (a, b) =>
        moment(b.updatedAt).format("YYYYMMDD") -
        moment(a.updatedAt).format("YYYYMMDD");
      setSortedData(products.allProducts.sort(sortDates));
    }
  }, [products, filterBy]);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#eee",
            borderRadius: 5,
          }}
        >
          <Picker
            style={{
              paddingTop: 20,
              paddingBottom: 20,
            }}
            selectedValue={filterBy}
            mode="dropdown"
            onValueChange={(itemValue, itemIndex) => setFilterBy(itemValue)}
          >
            <Picker.Item label="All" value="All" />
            <Picker.Item label="Latest" value="Latest" />
            <Picker.Item label="Popular" value="Popular" />
          </Picker>
        </View>
        {productsLoading === true ? (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <ActivityIndicator size="large" color={theme.Colors.primary} />
          </View>
        ) : (
          <FlatList
            data={sortedData}
            renderItem={({ item }) => (
              <View style={{ marginTop: 10 }}>
                <Products width={false} data={item} />
              </View>
            )}
          />
        )}
      </View>
    </ScrollView>
  );
};

export default Cars;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: deviceHeight,
    padding: 10,
    backgroundColor: "#fff",
  },
});
