import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import LottieView from 'lottie-react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import appStyles from '../../config/styles';
import Screen from '../../components/Screen';
import colors from '../../config/colors';
import AppText from '../../components/AppText';

export default function RecommendationsScreen() {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <Screen>
      <LinearGradient
        colors={[colors.secondaryOpacity, colors.light]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.background}
      />
      <ScrollView style={styles.container}>
        <View>
          <View style={styles.info}>
            <MaterialCommunityIcons
              name="alert-circle-outline"
              size={30}
              style={styles.icon}
            />
            <AppText>
              No hacer movimientos bruscos con los ojos. Está demostrado que los
              gérmenes que pueden infectar el ojo operado de cataratas suelen
              provenir de párpados y pestañas del propio paciente.
            </AppText>
          </View>
          <View style={styles.info}>
            <MaterialCommunityIcons
              name="alert-circle-outline"
              size={30}
              style={styles.icon}
            />
            <AppText>
              No debes tocar o frotarte el ojo o el párpado operado hasta una
              semana después de la operación de cataratas. Sólo limpiarlo
              palpando suavemente con un pañuelo, sin frotar.
            </AppText>
          </View>

          <View style={styles.info}>
            <MaterialCommunityIcons
              name="alert-circle-outline"
              size={30}
              style={styles.icon}
            />
            <AppText>
              Es normal no ver adecuadamente después de la operación y notar
              molestias como si tuvieras algún objeto extraño dentro del ojo.
              Forma parte del proceso de cicatrización y se aliviará con los
              colirios prescritos por el oftalmólogo.
            </AppText>
          </View>
          <View style={styles.info}>
            <MaterialCommunityIcons
              name="alert-circle-outline"
              size={30}
              style={styles.icon}
            />
            <AppText>
              No duermas boca abajo ni sobre el lado del ojo operado durante al
              menos 3 días. Durante la primera semana, es aconsejable usar un
              protector para evitar un golpe o tocarte el ojo accidentalmente.
            </AppText>
          </View>
          <View style={styles.info}>
            <MaterialCommunityIcons
              name="alert-circle-outline"
              size={30}
              style={styles.icon}
            />
            <AppText>
              No te maquilles. Debes evitar aplicar cualquier cosmético en la
              zona próxima al ojo durante al menos 15 días después de la
              intervención
            </AppText>
          </View>
          <View style={styles.info}>
            <MaterialCommunityIcons
              name="alert-circle-outline"
              size={30}
              style={styles.icon}
            />
            <AppText>
              No realices esfuerzos ni cargues pesos, reduce al máximo las
              actividades cotidianas y descansa. Al día siguiente de la cirugía
              puedes retomar algunas tareas, como ducharte, lavarte la cara o
              coger algún peso ligero, mirar hacia abajo o agacharte ligeramente
              pero de una forma suave y moderada. ¡Y sin tocarte el ojo!
            </AppText>
          </View>
        </View>
        <View style={styles.footer}>
          <View>
            <AppText style={styles.footerText}>
              No dudes en contactarnos en caso de alguna inquietud.
            </AppText>
          </View>
          <View style={styles.animation}>
            <LottieView
              source={require('../../assets/animations/healthcare.json')}
              autoPlay
              loop
            />
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  animation: {
    height: 200,
    width: 200,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: appStyles.gradientBackground,
  container: {
    padding: 10,
    flex: 1,
    alignSelf: 'center',
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    color: colors.primaryOpacity,
  },
  icon: {
    marginRight: 10,
    marginLeft: -10,
  },
  info: {
    flexDirection: 'row',
    padding: 10,
    textAlign: 'justify',
    maxWidth: 300,
  },
});
