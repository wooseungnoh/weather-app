import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#232526", "#414345"],
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#00416A", "#E4E5E6"],
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#00416A", "#E4E5E6"],
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#C9D6FF", "#E2E2E2"],
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#f8b500", "#fceabb"],
  },
  Cloudes: {
    iconName: "weather-cloudy",
    gradient: ["#232526", "#414345"],
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#757F9A", "#D7DDE8"],
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#403B4A", "#E7E9BB"],
  },
  Smoke: {
    iconName: "weather-fog",
    gradient: ["#403B4A", "#E7E9BB"],
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#403B4A", "#E7E9BB"],
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#403B4A", "#E7E9BB"],
  },
  Sand: {
    iconName: "weather-fog",
    gradient: ["#403B4A", "#E7E9BB"],
  },
  Squall: {
    iconName: "weather-pouring",
    gradient: ["#bdc3c7", "#2c3e50"],
  },
  Tornado: {
    iconName: "weather-tornado",
    gradient: ["#bdc3c7", "#2c3e50"],
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <MaterialCommunityIcons
        name={weatherOptions[condition].iconName}
        size={96}
        color="white"
      />
      <Text style={styles.temp}>{temp}º</Text>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Cloudes",
    "Haze",
    "Mist",
    "Smoke",
    "Dust",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  harfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
});
