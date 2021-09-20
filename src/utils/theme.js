import moment from 'moment';
const color = {
  primary: '#65013D',
  primaryBlack: '#000000',
  primaryWhite: '#FFFFFF',
  primaryLight: '#D9D8D8',
  primaryDark: '#707070',
  secondaryLight: '#E9E9E9',
  secondary: '#026978',
  secondaryLight2: '#E1E1E1',
  secondaryLight3: '#B19DC9',
  secondaryDark: '#515C6F',
  secondaryDark2: '#DDDDDD',
  secondaryDark3: '#727C8E',
  lime: '#E7EF00',
  darkGray: '#B4B4B4',
  lightGray: '#E9E9E9',
  red: '#FE0000',
  primaryBouquet: '#B07EAD',
  pink: '#FD6768',
  darkGray2: '#4E4E4E',
  orange: '#FFA500',
  green: '#008000',
  secondaryGreenDark: '#317E78',
  secondaryGreen: '#E0F8F8',
  secondaryRed: '#FF4651',
  secondaryRedLight: '#FFE1DE',
};

export const theme = {
  color,
  borderRadius: {
    xs: 2,
    x: 5,
    m: 10,
    l: 15,
    xl: 20,
  },
  spacing: {
    xs: 4,
    s: 8,
    sm: 10,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    header: {
      fontSize: 20,
      fontFamily: 'Montserrat-Bold',
      lineHeight: 28,
      color: '#20283a',
    },
    bodyLight: {
      fontSize: 16,
      fontFamily: 'Montserrat-Light',
      lineHeight: 19,
      color: '#000000',
    },
    bodyDark: {
      fontSize: 16,
      fontFamily: 'Montserrat-Bold',
      lineHeight: 19,
      color: '#000000',
    },
    bodyBold: {
      fontSize: 16,
      fontFamily: 'Montserrat-Bold',
      lineHeight: 19,
      color: '#000000',
    },
    textMedium: {
      fontSize: 16,
      fontFamily: 'Montserrat-Medium',
      lineHeight: 19,
      color: '#000000',
    },
    textRegular: {
      fontSize: 16,
      fontFamily: 'Montserrat-Regular',
      lineHeight: 19,
      color: '#000000',
    },
    taskBold: {
      fontSize: 19,
      fontFamily: 'Montserrat-Bold',
      lineHeight: 23,
      color: '#000000',
    },
    title: {
      fontSize: 20,
      fontFamily: 'Montserrat-Regular',
    },
    subTitle: {
      fontSize: 14,
    },
    subHeading: {
      fontSize: 18,
      fontFamily: 'Montserrat-Bold',
    },
    taskHeading: {
      fontSize: 20,
      fontFamily: 'Montserrat-Bold',
    },
    calDay: {
      fontSize: 24,
      fontFamily: 'Montserrat-Regular',
    },
    calMonNum: {
      fontSize: 36,
      fontFamily: 'Montserrat-Bold',
    },
  },
  cardShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
};

export const getAppFont = (type = 'Regular') => {
  return {fontFamily: `Montserrat-${type}`};
};
export const monthDayYear = date => {
  return date ? `${moment(date).format('MMMM D, YYYY')}` : null;
  //January 21, 2020
};
export const numberFormat = (value, length = 2) => {
  if (value === undefined || value === null) {
    return 0;
  }
  return parseFloat(value)
    .toFixed(length)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
