import React, { useState, useContext, useEffect } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  CheckBox,
} from "react-native";
import { Formik, Field } from "formik";
import { useTheme, Button } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";
import { Store } from "../../store";
import { FlatList } from "react-native";
import RadioButton from "../../components/Cart/RadioButton";
import { useNavigation } from "@react-navigation/native";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";

const PaymentDetails = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();
  const { state, dispatch } = useContext(Store);
  const [result, setResult] = useState(null);

  const cartTotalAmount = () => {
    let total = 0;

    state.cart.forEach((item) => {
      total += item.data.productPrice * item.quantity;
    });
    return total;
  };
  const getUrl = async () => {
    Linking.addEventListener("url", (link) => {
      console.log("asdsasd", link.url);
      setResult(link.url);
    });
  };
  let redirectUrl = Linking.createURL("/SucessScreen");
  const handlePressButtonAsync = async () => {
    let result = await WebBrowser.openAuthSessionAsync(
      "https://keck.com.au/app/api/paypal/test.php",
      "exp://192.168.18.128:19000"
    );
    // setResult(result);
  };
  const handleUrl = (url) => {
    setResult(url);
    let { path, queryParams } = Linking.parse(url);
    alert(
      `Linked to app with path: ${path} and data: ${JSON.stringify(
        queryParams
      )}`
    );
  };

  useEffect(() => {
    // getUrl();
    handleUrl();
  }, []);

  useEffect(() => {
    console.log("redireact ", redirectUrl);
  }, [redirectUrl]);

  const totalAmount = (selected) => {
    if (selected === "Only for Sydney: $185.00") {
      return cartTotalAmount() + 185;
    }
    if (selected === "Self-pickup") {
      return cartTotalAmount();
    }
    if (selected === "For Queensland: $300.00") {
      return cartTotalAmount() + 300;
    } else {
      return cartTotalAmount() + 300;
    }
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            companyName: "",
            streetAddress: "",
            suburb: "",
            state: "New South Wales",
            postCode: "",
            phoneNumber: "",
            isSelected: false,
            shippingType: "Only for Sydney: $185.00",
          }}
          onSubmit={(values) => console.log(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            setFieldValue,
          }) => (
            <View>
              <TextComponent name="First Name">
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("firstName")}
                  onBlur={handleBlur("firstName")}
                  value={values.firstName}
                  placeholder="e.g James"
                />
              </TextComponent>
              <TextComponent name="Last Name">
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("lastName")}
                  onBlur={handleBlur("lastName")}
                  value={values.lastName}
                  placeholder="e.g Anderson"
                />
              </TextComponent>
              <TextComponent name="Company Name (optional)">
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("companyName")}
                  onBlur={handleBlur("companyName")}
                  value={values.companyName}
                  placeholder="Webloop"
                />
              </TextComponent>
              <Text style={styles.para}>Country / Region * Australia</Text>
              <TextComponent name="Street Address">
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("streetAddress")}
                  onBlur={handleBlur("streetAddress")}
                  value={values.streetAddress}
                  placeholder="House no 876 street 27"
                />
              </TextComponent>
              <TextComponent name="Suburb">
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("suburb")}
                  onBlur={handleBlur("suburb")}
                  value={values.suburb}
                  placeholder="Suburb"
                />
              </TextComponent>
              <TextComponent name="State">
                <View style={styles.input}>
                  <Picker
                    style={{
                      paddingTop: 15,
                      paddingBottom: 15,
                    }}
                    selectedValue={values.state}
                    mode="dialog"
                    onValueChange={handleChange("state")}
                  >
                    <Picker.Item
                      label="New South Wales"
                      value="New South Wales"
                    />
                    <Picker.Item
                      label="Australian Capital Teratory"
                      value="Australian Capital Teratory"
                    />
                    <Picker.Item
                      label="Northern Terotary"
                      value="Northern Terotary"
                    />
                  </Picker>
                </View>
              </TextComponent>
              <TextComponent name="Post Code">
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("postCode")}
                  onBlur={handleBlur("postCode")}
                  value={values.postCode}
                  placeholder="15100"
                />
              </TextComponent>
              <TextComponent name="Phone">
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("phoneNumber")}
                  onBlur={handleBlur("phoneNumber")}
                  value={values.phoneNumber}
                  placeholder="***3112121"
                />
              </TextComponent>
              <TextComponent name="Email Address">
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  placeholder="Email Address"
                />
              </TextComponent>

              <Text
                style={[
                  styles.heading,
                  {
                    marginTop: 10,
                  },
                ]}
              >
                Your Order
              </Text>
              <View
                style={{
                  borderWidth: 2,
                  borderColor: "#eee",
                }}
              >
                <View
                  style={{
                    backgroundColor: "#eee",
                    padding: 10,
                    marginBottom: 2,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text>Product</Text>
                  <Text>Subtotal</Text>
                </View>
                <FlatList
                  data={state.cart}
                  renderItem={({ item }) => {
                    return (
                      <View
                        style={{
                          padding: 10,
                          flex: 1,
                          marginBottom: 2,
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text style={{ flex: 10, height: 20 }}>
                          {item.data.productName}
                        </Text>
                        <Text style={{ flex: 1 }}>x {item.quantity}</Text>

                        <Text
                          style={{
                            flex: 2,
                            borderLeftColor: "#eee",
                            borderLeftWidth: 1,
                            paddingLeft: 10,
                          }}
                        >
                          {item.data.productPrice * item.quantity}$
                        </Text>
                      </View>
                    );
                  }}
                />
                <View
                  style={{
                    padding: 10,
                    borderBottomColor: "#eee",
                    borderBottomWidth: 1,
                    marginBottom: 2,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text>{cartTotalAmount()}$ </Text>
                  <Text>Subtotal</Text>
                </View>

                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 14,
                    paddingTop: 10,
                    paddingBottom: 10,
                  }}
                >
                  Shipping
                </Text>
                {deliveryTypes.map((item) => (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => setFieldValue("shippingType", item.name)}
                  >
                    <View
                      style={{
                        padding: 10,
                        borderWidth: 1,
                        marginBottom: 5,
                        marginTop: 5,
                        borderColor: "#eee",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text>{item.name}</Text>
                      <RadioButton
                        selected={
                          values.shippingType === item.name ? true : false
                        }
                      />
                    </View>
                  </TouchableOpacity>
                ))}
                <View
                  style={{
                    padding: 10,
                    borderBottomColor: "#eee",
                    borderBottomWidth: 1,
                    marginBottom: 2,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text>{totalAmount(values.shippingType)}$ </Text>
                  <Text style={{ fontWeight: "bold" }}>Total</Text>
                </View>
              </View>
              <Text
                style={{
                  color: "#838383",
                  fontSize: 15,
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
              >
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our privacy policy.
              </Text>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={values.isSelected}
                  onValueChange={(nextValue) =>
                    setFieldValue("isSelected", nextValue)
                  }
                  style={{ alignSelf: "center", color: theme.Colors.primary }}
                />
                <Text style={styles.label}>
                  I have read and agree to the website terms and conditions
                </Text>
              </View>

              <Button
                buttonStyle={{
                  padding: 10,

                  backgroundColor: theme.Colors.primary,
                }}
                onPress={() => {
                  handlePressButtonAsync();
                  // navigation.navigate("SucessScreen")
                }}
                title="Submit"
              />
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

const TextComponent = ({ name, children }) => {
  return (
    <View>
      <Text
        style={{
          color: "#000",
          marginBottom: 5,
        }}
      >
        {name}
      </Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 20,
  },
  para: {
    fontSize: 16,
    marginBottom: 10,
    marginTop: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: "#eee",
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    paddingRight: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});

export default PaymentDetails;
const deliveryTypes = [
  {
    name: "Only for Sydney: $185.00",
  },
  {
    name: "Self-pickup",
  },
  {
    name: "For Queensland: $300.00",
  },
  {
    name: "For Melbourne: $300.00",
  },
];
