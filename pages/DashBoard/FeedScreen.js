import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  StatusBar,
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
  },
  {
    id: '2',
    name: 'SPEED PARK',
    location: 'Boissy',
    backgroundColor: '#3D5AFE',
  },
];

const ActivityCard = ({ item }) => {
  return (
    <View style={styles.activityCard}>
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
    </View>
  );
};

const FeedScreen = () => {
  const [activeTab, setActiveTab] = useState('populaire');

  const renderItem = ({ item }) => (
    <ActivityCard item={item} />
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
});

export default FeedScreen; 