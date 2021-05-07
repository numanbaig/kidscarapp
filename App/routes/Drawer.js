import React from "react";
import {
  DrawerItemList,
  DrawerItem,
  DrawerContentScrollView,
} from "@react-navigation/drawer";

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Home" />
    </DrawerContentScrollView>
  );
};
export default CustomDrawerContent;

// import React from "react";
// import { View, StyleSheet, Text, Image } from "react-native";
// import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
// import { MaterialCommunityIcons } from "@expo/vector-icons";

// // import { createDrawerNavigator } from "@react-navigation/drawer";

// // const Drawer = createDrawerNavigator();
// export function DrawerContent(props) {
//   return (
//     <DrawerContentScrollView {...props}>
//       <View style={styles.drawerContent}>
//         <View style={styles.userInfoSection}>
//           {/* <Image
//             source={{
//               uri:
//                 "https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg",
//             }}
//             size={50}
//           /> */}
//           <Text style={styles.title}>Dawid Urbaniak</Text>
//           <Text style={styles.caption}>@trensik</Text>
//           <View style={styles.row}>
//             <View style={styles.section}>
//               <Text style={[styles.paragraph, styles.caption]}>202</Text>
//               <Text style={styles.caption}>Following</Text>
//             </View>
//             <View style={styles.section}>
//               <Text style={[styles.paragraph, styles.caption]}>159</Text>
//               <Text style={styles.caption}>Followers</Text>
//             </View>
//           </View>
//         </View>
//         {/* <Drawer.Section style={styles.drawerSection}>
//           <DrawerItem
//             icon={({ color, size }) => (
//               <MaterialCommunityIcons
//                 name="account-outline"
//                 color={color}
//                 size={size}
//               />
//             )}
//             label="Profile"
//             onPress={() => {}}
//           />
//           <DrawerItem
//             icon={({ color, size }) => (
//               <MaterialCommunityIcons name="tune" color={color} size={size} />
//             )}
//             label="Preferences"
//             onPress={() => {}}
//           />
//           <DrawerItem
//             icon={({ color, size }) => (
//               <MaterialCommunityIcons
//                 name="bookmark-outline"
//                 color={color}
//                 size={size}
//               />
//             )}
//             label="Bookmarks"
//             onPress={() => {}}
//           />
//         </Drawer.Section> */}
//         {/* <Drawer.Section title="Preferences">
//           <TouchableRipple onPress={() => {}}>
//             <View style={styles.preference}>
//               <Text>Dark Theme</Text>
//               <View pointerEvents="none">
//                 <Switch value={false} />
//               </View>
//             </View>
//           </TouchableRipple>
//           <TouchableRipple onPress={() => {}}>
//             <View style={styles.preference}>
//               <Text>RTL</Text>
//               <View pointerEvents="none">
//                 <Switch value={false} />
//               </View>
//             </View>
//           </TouchableRipple>
//         </Drawer.Section> */}
//       </View>
//     </DrawerContentScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   drawerContent: {
//     flex: 1,
//   },
//   userInfoSection: {
//     paddingLeft: 20,
//   },
//   title: {
//     marginTop: 20,
//     fontWeight: "bold",
//   },
//   caption: {
//     fontSize: 14,
//     lineHeight: 14,
//   },
//   row: {
//     marginTop: 20,
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   section: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginRight: 15,
//   },
//   paragraph: {
//     fontWeight: "bold",
//     marginRight: 3,
//   },
//   drawerSection: {
//     marginTop: 15,
//   },
//   preference: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//   },
// });
