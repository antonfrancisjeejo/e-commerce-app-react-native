import React, { useState } from "react";
import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import axios from "../axios";
import * as authActions from "../store/actions/auth";
import { useDispatch } from "react-redux";
import { loggedUser, fetchUser } from "../helpers/db";

const AuthScreen = () => {
  const [state, setState] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [email1, setEmail1] = useState("");
  const [password1, setPassword1] = useState("");
  const [alert, setAlert] = useState("");

  const dispatch = useDispatch();

  const handleSignUp = async () => {
    setAlert("");
    if (password === "" || email === "" || name === "") {
      setAlert("Please fill all the details");
      return;
    }
    setAlert("");
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const userInfo = {
        name,
        email,
        password,
      };
      const res = await axios.post(
        "/api/user/account/signup",
        userInfo,
        config
      );
      const dbResult = await fetchUser("1");
      if (dbResult.rows._array.length === 0) {
        const result = await loggedUser("1", res.data.token);
      }
      dispatch(authActions.login(res.data.token));
      setName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      setAlert(err.response.data.msg);
    }
  };

  const handleLogin = async () => {
    if (password1 === "" || email1 === "") {
      setAlert("Please fill all the details");
      return;
    }
    setAlert("");
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const userInfo = {
        email: email1,
        password: password1,
      };
      const res = await axios.post("/api/user/account/login", userInfo, config);
      const dbResult = await fetchUser("1");
      if (dbResult.rows._array.length === 0) {
        const result = await loggedUser("1", res.data.token);
      }
      dispatch(authActions.login(res.data.token));
      setEmail1("");
      setPassword1("");
    } catch (err) {
      setAlert(err.response.data.msg);
    }
  };

  if (state) {
    return (
      <View style={styles.screen}>
        <Text style={styles.title}>Login</Text>
        <View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Email"
              onChangeText={(text) => setEmail1(text)}
              value={email1}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Password"
              secureTextEntry
              onChangeText={(text) => setPassword1(text)}
              value={password1}
            />
          </View>
        </View>
        <View style={styles.register}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => setState(false)}
          >
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.alert}>{alert}</Text>
        <Button title="Login" onPress={handleLogin} />
      </View>
    );
  } else {
    return (
      <View style={styles.screen}>
        <Text style={styles.title}>Signup</Text>
        <View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Name"
              onChangeText={(text) => setName(text)}
              value={name}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Email"
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Password"
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
          </View>
        </View>
        <View style={styles.register}>
          <Text>Already have an account?</Text>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => setState(true)}
          >
            <Text style={styles.registerButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.alert}>{alert}</Text>
        <Button title="Signup" onPress={handleSignUp} />
      </View>
    );
  }
};

export default AuthScreen;

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "poppins-medium",
    fontSize: 30,
    color: "#14274e",
  },
  inputContainer: {
    width: width - 100,
    borderWidth: 1,
    borderColor: "#000",
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  register: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 10,
  },
  registerButton: {
    paddingLeft: 5,
  },
  registerButtonText: {
    color: "blue",
  },
  alert: {
    color: "red",
  },
});
