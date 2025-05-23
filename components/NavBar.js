// components/NavBar.js
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get("window");

const NavBar = ({ active = "home" }) => {
  const navigation = useNavigation();

  const icons = [
    { name: "home", source: require("../assets/icon/home.png"), screen: "Feed" },
    { name: "globe", source: require("../assets/icon/globe.png"), screen: "Map" },
    { name: "dice", source: require("../assets/icon/dice.png"), screen: "Feed" },
    { name: "user", source: require("../assets/icon/user.png"), screen: "Feed" },
  ];

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.navBar}>
      {icons.map((item, index) => (
        <TouchableOpacity
          key={item.name}
          style={[
            styles.navIconWrapper,
            item.name === active && styles.navIconWrapperActive,
            index === icons.length - 1 && { marginRight: 0 },
          ]}
          onPress={() => handleNavigation(item.screen)}
        >
          <Image source={item.source} style={styles.navIcon} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    flexDirection: "row",
    backgroundColor: "#000",
    borderRadius: 50,
    height: 70,
    paddingHorizontal: 8,
    alignItems: "center",
  },
  navIconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 28,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 4,
  },
  navIconWrapperActive: {
    width: 60,
    height: 60,
    borderRadius: 34,
    backgroundColor: "#8B5CF6",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 4,
  },
  navIcon: {
    width: 26,
    height: 26,
    resizeMode: "contain",
    tintColor: "#000",
  },
});

export default NavBar;
