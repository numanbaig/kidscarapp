import React, { useState } from "react";
import { View } from "react-native";
import { SearchBar } from "react-native-elements";
const SearchComponent = () => {
  const [search, setSearch] = useState("");
  return (
    <View style={{ marginTop: 10 }}>
      <SearchBar
        containerStyle={{
          elevation: 5,
          height: 50,
          borderTopRightRadius: 20,
          borderBottomLeftRadius: 20,
          borderTopLeftRadius: 20,
          borderBottomRightRadius: 20,
          backgroundColor: "#fff",
          borderWidth: 2,
          borderColor: "#eee",
          borderTopWidth: 0,
          borderBottomWidth: 0,
        }}
        inputContainerStyle={{
          margin: 0,
          flex: 1,
          backgroundColor: "#fff",
        }}
        placeholder="Search Products..."
        onChangeText={(text) => setSearch(text)}
        value={search}
      />
    </View>
  );
};
export default SearchComponent;
