import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Store from "./App/store";
import Index from "./App/index";

export default function App() {
  return (
    <Store>
      <Index />
    </Store>
  );
}
