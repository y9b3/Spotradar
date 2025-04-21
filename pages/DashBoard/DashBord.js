import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  Dimensions,
  Modal,
  Pressable,
} from "react-native";
import NavBar from "../../components/NavBar";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

const DashBord = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRating, setSelectedRating] = useState(1);

  const popularItems = [
    { id: "1", rating: "4.5" },
    { id: "2", rating: "4.7" },
    { id: "3", rating: "4.8" },
    { id: "4", rating: "4.6" },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <MaskedView
          maskElement={<Text style={styles.gradientText}>Hey Daniel</Text>}
        >
          <LinearGradient
            colors={["#ffffff", "#999999"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={[styles.gradientText, { opacity: 0 }]}>
              Hey Daniel
            </Text>
          </LinearGradient>
        </MaskedView>

        <Image
          source={require("../../assets/icon/Vector.png")}
          style={styles.vectorIcon}
        />
      </View>

      {/* Body */}
      <View style={styles.body}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* Populaire */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Populaire</Text>
            <Image
              source={require("../../assets/icon/populaire.png")}
              style={styles.popIcon}
            />
          </View>

          <FlatList
            data={popularItems}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingVertical: 10 }}
            renderItem={({ item }) => (
              <View style={[styles.card, { marginRight: 16 }]}>
                <View style={styles.grayBox} />
                <View style={styles.ratingBadge}>
                  <Text style={styles.ratingText}>{item.rating} ⭐</Text>
                </View>
              </View>
            )}
          />

          {/* Récent */}
          <View style={styles.sectionHeaderRecent}>
            <Text style={styles.sectionTitle}>Récent</Text>
            <Image
              source={require("../../assets/icon/recent.png")}
              style={styles.popIcon}
            />
          </View>
          <View style={styles.card}>
            <View style={styles.grayBox} />
            <Pressable
              style={styles.noteBadge}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.noteText}>Laisser une note ⭐</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>

      {/* Modal note */}
      <Modal
        transparent
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>
              Merci d’avoir participé à cette activité !
            </Text>
            <Text style={styles.modalSubtitle}>
              Partagez votre avis en laissant une note afin d’aider d’autre
              utilisateurs à faire leur choix en toute confiance.
            </Text>

            <View style={styles.starsContainer}>
              {[1, 2, 3, 4, 5].map((value) => (
                <Pressable key={value} onPress={() => setSelectedRating(value)}>
                  <Text
                    style={[
                      styles.star,
                      selectedRating >= value && styles.starSelected,
                    ]}
                  >
                    ⭐
                  </Text>
                </Pressable>
              ))}
            </View>
            <Pressable
              onPress={() => {
                console.log("Note envoyée :", selectedRating);
                setModalVisible(false);
              }}
              style={styles.submitButton}
            >
              <Text style={styles.submitButtonText}>Envoyer</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <NavBar active="home" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    paddingTop: 70,
    paddingBottom: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  vectorIcon: {
    width: 60,
    height: 40,
    resizeMode: "contain",
  },
  body: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: -10,
    paddingTop: 5,
    paddingHorizontal: 20,
  },
  scrollContainer: {
    paddingBottom: 120,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 10,
  },
  sectionHeaderRecent: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginRight: 8,
  },
  popIcon: {
    width: 30,
    height: 25,
    resizeMode: "contain",
  },
  card: {
    backgroundColor: "#E5E5E5",
    borderRadius: 20,
    padding: 20,
    marginBottom: 30,
    position: "relative",
    height: 230,
    justifyContent: "space-between",
    width: 300,
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
  gradientText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 24,
    marginHorizontal: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  modalSubtitle: {
    fontSize: 14,
    textAlign: "center",
    color: "#333",
    marginBottom: 20,
  },
  star: {
    fontSize: 30,
    opacity: 0.3,
    marginHorizontal: 5,
  },
  starSelected: {
    opacity: 1,
  },
  starsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#000",
    borderRadius: 30,
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  submitButton: {
    marginTop: 20,
    backgroundColor: "#8B5CF6",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  submitButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default DashBord;
