import colors from './colors';

export default {
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Helvetica',
    color: colors.dark,
  },
  colors,
  heading: {
    fontSize: 25,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Helvetica',
    fontWeight: 'bold',
  },
};
