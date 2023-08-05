import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../../config/colors';
import AppText from '../AppText';
import App from '../../App';

export default function UserInfo() {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={[colors.primary, colors.secondary]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.background}
      />
      <View style={styles.userInfo}>
        <MaterialCommunityIcons name="account" size={90} color={colors.light} />
        <AppText style={styles.username}>Usuario</AppText>
        <View style={styles.infoIcons}>
          <View style={styles.iconStyle}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <MaterialCommunityIcons
                name="phone"
                size={50}
                color={colors.secondary}
              />
              <AppText style={styles.infoText}>+56123456789</AppText>
            </View>
          </View>
          <View style={styles.iconStyle}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <MaterialCommunityIcons
                name="email"
                size={50}
                color={colors.secondary}
              />
              <AppText style={styles.infoText}>somemail@gmail.com</AppText>
            </View>
          </View>
          <View style={styles.iconStyle}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <MaterialCommunityIcons
                name="information-variant"
                size={50}
                color={colors.secondary}
              />
              <AppText style={styles.infoText}>Actualizar mis datos</AppText>
            </View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={40}
              color={colors.secondary}
            />
          </View>
          <View style={styles.iconStyle}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <MaterialCommunityIcons
                name="history"
                size={50}
                color={colors.secondary}
              />
              <AppText style={styles.infoText}>Historial de citas</AppText>
            </View>
            <View>
              <MaterialCommunityIcons
                name="chevron-right"
                size={40}
                color={colors.secondary}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  iconStyle: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: '50%',
    padding: 10,
    borderColor: colors.secondary,
    marginHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    justifyContent: 'space-between',
  },
  infoIcons: {
    marginTop: 20,
  },
  infoText: {
    marginLeft: 10,
    color: colors.light,
  },
  userInfo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    color: colors.light,
    fontSize: 30,
  },
});
