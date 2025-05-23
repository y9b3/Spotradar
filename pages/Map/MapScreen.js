import React from 'react';
import { View, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import NavBar from '../../components/NavBar';

const { width, height } = Dimensions.get('window');

const MapScreen = () => {
  return (
    <LinearGradient
      colors={['#8B5CF6', '#EC4899']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Image
            source={require('../../assets/icon/loupe.png')}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#999"
          />
        </View>

        <TouchableOpacity style={styles.filterButton}>
          <Image
            source={require('../../assets/icon/filtre.png')}
            style={styles.filterIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.centeredMapContainer}>
        {/* La map sera ici plus tard */}
      </View>

      <NavBar active="globe" />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: width - 40,
    alignSelf: 'center',
    zIndex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 25,
    paddingHorizontal: 15,
    flex: 1,
    marginRight: 10,
    height: 50,
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: '#fff',
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
  },
  filterButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  centeredMapContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 130,
    marginBottom: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    overflow: 'hidden',
  },
});

export default MapScreen;