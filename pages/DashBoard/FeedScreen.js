import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Image,
  Modal,
  Pressable,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import NavBar from '../../components/NavBar';
import Location from '../../components/icons/Location';
import Arrow from '../../components/icons/Arrow';
import Cycle from '../../components/icons/Cycle';

const { width } = Dimensions.get('window');

const activities = [
  {
    id: '1',
    name: 'NIKITO DOMUS',
    location: 'Rosny',
    backgroundColor: '#3D5AFE',
    image: require('../../assets/carrousel/im1.png'),
    description: `Le combat parfait entre fun, défi et adrénaline ! Trampoline, Parcours Ninja, Jeux immersifs et espace détente te promettent une sortie inoubliable entre amis ou en famille. Situé à Domus, ce Spot d'activité te garantit des moments intenses et accessibles à tous les âges.`,
    rating: 4.8,
    isOpen: true,
  },
  {
    id: '2',
    name: 'SPEED PARK',
    location: 'Boissy',
    backgroundColor: '#3D5AFE',
    image: require('../../assets/carrousel/im2.png'),
    description: 'Description à compléter...',
    rating: 4.5,
    isOpen: false,
  },
];

const ActivityCard = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.activityCard} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.activityContent}>
        <View style={styles.activityInfo}>
          <Text style={styles.activityName}>{item.name}</Text>
          <View style={styles.locationContainer}>
            <Text style={styles.locationText}>{item.location}</Text>
            <View style={styles.iconContainer}>
              <Location size={16} color="#FFFFFF" />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const FeedScreen = () => {
  const [activeTab, setActiveTab] = useState('populaire');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);

  const handleActivityPress = (item) => {
    setSelectedActivity(item);
    setModalVisible(true);
  };

  const renderItem = ({ item }) => (
    <ActivityCard item={item} onPress={() => handleActivityPress(item)} />
  );

  return (
    <LinearGradient
      colors={['#3D5AFE', '#FF4E8E']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.header} />

      <View style={styles.tabsContainer}>
        <TouchableOpacity 
          style={styles.popularButton}
          onPress={() => setActiveTab('populaire')}
        >
          <Text style={styles.popularText}>POPULAIRE</Text>
          <Arrow size={16} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.recentButton}
          onPress={() => setActiveTab('recent')}
        >
          <Cycle size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={activities}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      {/* Modal activité */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            {selectedActivity && (
              <>
                <View style={styles.imageContainer}>
                  <Image source={selectedActivity.image} style={styles.activityImage} />
                </View>
                <Text style={styles.modalTitle}>{selectedActivity.name} {selectedActivity.isOpen && <Text style={{color:'#00C853', fontWeight:'bold'}}>OUVERT</Text>}</Text>
                <View style={{flexDirection:'row', alignItems:'center', marginBottom:8}}>
                  <Text style={{fontWeight:'bold'}}>{selectedActivity.location} </Text>
                  <Location size={16} color="#000" />
                  <Text style={{marginLeft:8, fontWeight:'bold', fontSize:16}}>{selectedActivity.rating} <Text style={{color:'#FFD600'}}>★</Text></Text>
                </View>
                <Text style={styles.modalDescription}>{selectedActivity.description}</Text>
                <View style={{flexDirection:'row', marginTop:16, gap:12}}>
                  <Pressable style={styles.siteButton} onPress={() => {}}>
                    <Arrow size={24} color="#3D5AFE" />
                  </Pressable>
                  <Pressable style={styles.reserveButton} onPress={() => {}}>
                    <Text style={styles.reserveText}>RÉSERVER SUR LE SITE</Text>
                    <Cycle size={20} color="#fff" />
                  </Pressable>
                </View>
                <Pressable style={styles.closeButton} onPress={() => setModalVisible(false)}>
                  <Text style={{color:'#3D5AFE', fontWeight:'bold'}}>FERMER</Text>
                </Pressable>
              </>
            )}
          </View>
        </View>
      </Modal>

      <NavBar active="home" />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    paddingBottom: 20,
  },
  popularButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    gap: 8,
  },
  popularText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  recentButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContent: {
    padding: 20,
    gap: 20,
  },
  activityCard: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 20,
    overflow: 'hidden',
    height: 180,
  },
  activityContent: {
    flex: 1,
    padding: 16,
    justifyContent: 'flex-end',
  },
  activityInfo: {
    gap: 8,
  },
  activityName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    color: '#fff',
    fontSize: 14,
    marginRight: 8,
  },
  iconContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 24,
    marginHorizontal: 20,
    alignItems: 'center',
    width: '90%',
    maxWidth: 400,
  },
  imageContainer: {
    width: '100%',
    height: 180,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
  },
  activityImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  modalDescription: {
    fontSize: 14,
    color: '#333',
    marginTop: 8,
    textAlign: 'center',
  },
  siteButton: {
    backgroundColor: '#E3E8FF',
    borderRadius: 16,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reserveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 20,
    gap: 8,
  },
  reserveText: {
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 8,
  },
  closeButton: {
    marginTop: 20,
    padding: 8,
  },
});

export default FeedScreen; 