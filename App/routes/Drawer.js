import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import {
  DrawerItem,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import {
  MaterialCommunityIcons,
  Fontisto,
  FontAwesome5,
} from "@expo/vector-icons";
import Logo from "../../assets/images/logo.png";
import { useTheme } from "react-native-elements";
import { theme } from "../theme";
const DrawerContent = ({ ...props }) => {
  const { theme } = useTheme();
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
          <View style={styles.drawerSection}>
            <DrawerItem
              labelStyle={{
                color: theme.Colors.White,
              }}
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="account-outline"
                  color={theme.Colors.White}
                  size={size}
                />
              )}
              label="Home"
              onPress={() => {}}
            />
            <DrawerItem
              labelStyle={{
                color: theme.Colors.White,
              }}
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="tune"
                  color={theme.Colors.White}
                  size={size}
                />
              )}
              label="Preferences"
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
              label="Bookmarks"
              onPress={() => {}}
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
