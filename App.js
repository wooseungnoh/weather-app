import React from "react";
import Loading from "./Loading";
import { Alert } from "react-native";
import * as Location from "expo-location";
import axios from "axios";
const API_KEY = "9d2dc547abdd90969255612b5761cc82";

export default class extends React.Component {
  state = {
    isLoading: true,
  };
  getWeather = async (lat, lon) => {
    console.log(lat, lon)
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );
    console.log(data);
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      console.log(latitude)
      this.getWeather(latitude, longitude);
      this.setState({ isLoading: false });
    } catch (e) {
      Alert.alert("Can't find you");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}
