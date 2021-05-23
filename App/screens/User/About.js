import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const About = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            If you wanted get model, how would you do it?
          </Text>
          <Text style={{ fontSize: 18, marginTop: 10 }}>
            The Toy Story Is About To Begin!
          </Text>
          <Text style={{ fontSize: 16, marginTop: 10 }}>
            KECK (Kids Electric Cars Kingdom) is the biggest online toy shop in
            Australia, with an extensive range of products, and the only toy
            shop in Australia catering to all age groups. Initially starting as
            a wholesale business, we realized we wanted to provide the same
            products at the same reduced price to everyone, and not just
            retailers. We deliver products at home on Cash on Delivery and Bank
            Transfer using the best Couriers in Australia. The mission is
            simple: we want to provide the best quality toys to our consumers.
            With KECK, parents and other customers can buy all they want from
            one place, instead of going to different shops for different
            products. With a wide range of products, KECK is a one-stop-shop for
            all your toy needs. KECK wants its customers to have an amazing
            online shopping experience; an experience better than onsite
            shopping, which is why we are offering a broad variety of products,
            so that a customer can find everything they want at one place.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
export default About;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingBottom: 30,
  },
});
