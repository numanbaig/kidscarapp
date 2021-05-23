import React, { useState } from "react";
import { View } from "react-native";
import { SearchBar } from "react-native-elements";
import { useTheme } from "react-native-elements";
const SearchComponent = () => {
  const { theme } = useTheme();
  const [search, setSearch] = useState("");
  return (
    <View style={{ backgroundColor: theme.Colors.primary }}>
      <SearchBar
        containerStyle={{
          elevation: 5,
          margin: 5,
          paddingTop: 5,
          padding: 0,
          flex: 1,
          height: 50,
          borderTopRightRadius: 5,
          borderBottomLeftRadius: 5,
          borderTopLeftRadius: 5,
          borderBottomRightRadius: 5,
          backgroundColor: "#fff",
          paddingLeft: 0,
          alignItems: "center",
        }}
        inputContainerStyle={{
          margin: 0,
          paddingTop: 5,
          marginBottom: 0,
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
