import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import {
  MaterialCommunityIcons,
  Fontisto,
  FontAwesome5,
  AntDesign,
  Entypo,
} from "@expo/vector-icons";
import Logo from "../../assets/images/logo.png";
import { useTheme, Divider } from "react-native-elements";
import { theme } from "../theme";
import { useNavigation } from "@react-navigation/native";

const DrawerContent = ({ ...props }) => {
  const { theme } = useTheme();
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: theme.Colors.primary }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginBottom: 10,
              }}
            >
              <Image source={Logo} />
            </View>
            <View style={styles.row}>
              <View style={styles.section}>
                <Fontisto
                  name="ship"
                  color={theme.Colors.secondary}
                  size={20}
                />
                <Text style={styles.caption}>Only $150 Shipping Fee</Text>
                {/* <Text style={styles.caption}>Following</Text> */}
              </View>
              <View style={styles.section}>
                <FontAwesome5
                  name="user-tie"
                  color={theme.Colors.secondary}
                  size={20}
                />
                <Text style={styles.caption}>Contact +61 450 244 828</Text>
              </View>
            </View>
          </View>
          <Divider style={{ backgroundColor: "#eee", marginTop: 20 }} />
          <View style={styles.drawerSection}>
            <DrawerItem
              labelStyle={{
                color: theme.Colors.White,
              }}
              icon={({ color, size }) => (
                <FontAwesome5
                  name="home"
                  color={theme.Colors.White}
                  size={size}
                />
              )}
              label="Home"
              onPress={() => {
                navigation.navigate("Root");
              }}
            />
            <DrawerItem
              labelStyle={{
                color: theme.Colors.White,
              }}
              icon={({ color, size }) => (
                <AntDesign
                  name="contacts"
                  color={theme.Colors.White}
                  size={size}
                />
              )}
              label="Contact"
              onPress={() => {}}
            />
            <DrawerItem
              labelStyle={{
                color: theme.Colors.White,
              }}
              activeTintColor={"blue"}
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="bookmark-outline"
                  color={theme.Colors.White}
                  size={size}
                />
              )}
              label="About"
              onPress={() => {
                navigation.navigate("About");
              }}
            />
            <DrawerItem
              labelStyle={{
                color: theme.Colors.White,
              }}
              activeTintColor={"blue"}
              icon={({ color, size }) => (
                <Entypo name="book" color={theme.Colors.White} size={size} />
              )}
              label="Blogs"
              onPress={() => {
                navigation.navigate("Blogs");
              }}
            />
          </View>
          {/* <View>
          <Text>@numanbaig_</Text>
        </View> */}
        </View>
      </DrawerContentScrollView>
    </View>
  );
};
export default DrawerContent;
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    height: "100%",
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: "bold",
    color: theme.Colors.White,
  },
  caption: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 10,
    color: theme.Colors.White,
  },
  row: {
    marginTop: 20,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

// import React from "react";
// import {
//   DrawerItemList,
//   DrawerItem,
//   DrawerContentScrollView,
// } from "@react-navigation/drawer";

// const CustomDrawerContent = (props) => {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <DrawerItem label="Home" />
//     </DrawerContentScrollView>
//   );
// };
// export default CustomDrawerContent;
