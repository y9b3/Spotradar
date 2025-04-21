import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

const DashBord = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Hey Daniel</Text>
        <View style={styles.headerIconWrapper}>
          <Image
            source={require("../../assets/icon/user.png")}
            style={styles.headerIcon}
          />
        </View>
      </View>

      {/* Contenu */}
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Populaire */}
        <Text style={styles.sectionTitle}>
          Populaire <Text style={styles.iconText}>📈</Text>
        </Text>
        <View style={styles.card}>
          <View style={styles.grayBox} />
          <View style={styles.ratingBadge}>
            <Text style={styles.ratingText}>4.5 ⭐</Text>
          </View>
        </View>

        {/* Récent */}
        <Text style={styles.sectionTitle}>
          Récent <Text style={styles.iconText}>⏱️</Text>
        </Text>
        <View style={styles.card}>
          <View style={styles.grayBox} />
          <View style={styles.noteBadge}>
            <Text style={styles.noteText}>Laisser une note ⭐</Text>
          </View>
        </View>
      </ScrollView>

      {/* Navigation bar */}
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navIconWrapperActive}>
          <Image
            source={require("../../assets/icon/home.png")}
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navIconWrapper}>
          <Image
            source={require("../../assets/icon/globe.png")}
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navIconWrapper}>
          <Image
            source={require("../../assets/icon/dice.png")}
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navIconWrapper}>
          <Image
            source={require("../../assets/icon/user.png")}
            style={styles.navIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#000",
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    position: "relative",
  },
  headerText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },
  headerIconWrapper: {
    position: "absolute",
    top: 60,
    right: 30,
    backgroundColor: "#000",
    borderRadius: 30,
  },
  headerIcon: {
    width: 30,
    height: 30,
    tintColor: "#fff",
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  iconText: {
    fontSize: 18,
  },
  card: {
    backgroundColor: "#E5E5E5",
    borderRadius: 20,
    padding: 20,
    marginBottom: 30,
    position: "relative",
    height: 250,
    justifyContent: "space-between",
  },
  grayBox: {
    height: 170,
    borderRadius: 15,
    backgroundColor: "#D3D3D3",
  },
  ratingBadge: {
    position: "absolute",
    bottom: 16,
    right: 16,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  ratingText: {
    fontWeight: "bold",
    color: "#000",
  },
  noteBadge: {
    position: "absolute",
    bottom: 16,
    right: 16,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  noteText: {
    fontWeight: "bold",
    color: "#000",
  },
  navBar: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    flexDirection: "row",
    backgroundColor: "#000",
    borderRadius: 50,
    padding: 6,
    paddingHorizontal: 8,
  },
  navIconWrapperActive: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: "#8B5CF6",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 4,
  },
  navIconWrapper: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 4,
    marginTop: 4,
    marginBottom: 2,
  },
  navIconLast: {
    marginRight: 0,
  },
  navIcon: {
    width: 26,
    height: 26,
    resizeMode: "contain",
    tintColor: "#000",
  },
});

export default DashBord;
