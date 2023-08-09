import colors from './colors';

export default {
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Helvetica',
    color: colors.dark,
  },
  colors,
  heading: {
    fontSize: 33,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Helvetica',
  },
  subHeading: {
    fontSize: 20,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Helvetica',
    textAlign: 'center',
  },
  screenPadding: 35,
};
