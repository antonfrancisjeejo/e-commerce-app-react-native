import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const PaymentButton = () => {
  const paymentHandler = async (e) => {
    setSpinner(true);
    e.preventDefault();
    try {
      const response = await axios.get(`/api/register/order/${amount}`);
      const { data } = await response;
      const options = {
        key: "rzp_live_2hpMSkgES90P2n",
        name: "E-Commerce App",
        description: "Trusted Bank",
        order_id: data.id,
        handler: async (response) => {
          try {
            const config = {
              headers: {
                ContentType: "application/json",
              },
            };
            const temp = {
              name,
              email,
              contact_no,
              session_date,
              education,
              levels: [level1, level2, level3],
              amount,
              payment: "no",
              course,
              student_id,
              order_id: data.id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            };
            await axios.post("/api/register/verify", temp, config);
            let redirect_url;
            if (
              typeof response.razorpay_payment_id == "undefined" ||
              response.razorpay_payment_id < 1
            ) {
              console.log("failed");
            } else {
              console.log("Success");
            }
          } catch (err) {
            console.log(err);
          }
        },
        theme: {
          color: "#528FF0",
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View>
      <Button onPress={paymentHandler} title="Buy Now" />
    </View>
  );
};

export default PaymentButton;

const styles = StyleSheet.create({});
