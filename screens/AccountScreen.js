import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as authActions from "../store/actions/auth";

const AccountScreen = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  return (
    <View>
      <View>
        <Text style={styles.title}>Account Details</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detailTitle}>Account Name : </Text>
        <Text style={styles.detailContent}>{user.name}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detailTitle}>Email : </Text>
        <Text style={styles.detailContent}>{user.email}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          color="red"
          title="Logout"
          onPress={() => dispatch(authActions.logout())}
        />
      </View>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  title: {
    fontFamily: "poppins-reg",
    fontSize: 30,
    textAlign: "center",
    paddingVertical: 20,
  },
  detailContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  detailTitle: {
    fontFamily: "poppins-medium",
    fontSize: 20,
  },
  detailContent: {
    fontFamily: "poppins-reg",
    fontSize: 20,
    color: "#30475e",
  },
  buttonContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
});
