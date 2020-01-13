import { StyleSheet } from 'react-native';

const commonHeader = {
  flexDirection: 'row',
  alignItems: 'flex-end',
  paddingLeft: 20,
  paddingRight: 20,
  paddingBottom: 20,
};

const themeBtnDefault = {
  height: 35,
  width: 60,
  borderRadius: 0,
  paddingTop: 2,
  paddingBottom: 2,
};

const defaultColor = {
  cardColor: '#3b3b75',
  secondaryHeading: '#8f8fb5',
  listHeading: '#e0e0e0',
  darkerColor: '#181a35',
};


const styles = StyleSheet.create({
  mainColor: {
    color: '#e0e0e0',
    backgroundColor: '#3b3b75',
    borderColor: 'gray',
  },

  deviceHead: {
    height: 120,
    justifyContent: 'flex-end',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },

  deviceBody: {
    flexDirection: 'column',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: defaultColor.darkerColor,
  },

  card: {
    backgroundColor: defaultColor.cardColor,
    borderRadius: 6,
    shadowColor: 'grey',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 2,
    padding: 10,
    marginTop: 20,
  },

  mainHeader: {
    ...commonHeader,
    height: 100,
    justifyContent: 'space-between',
    backgroundColor: defaultColor.cardColor,
  },

  mainHeaderModelight: {
    ...commonHeader,
    height: 100,
    justifyContent: 'space-between',
  },

  headerFormat: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: defaultColor.cardColor,
  },

  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: defaultColor.cardColor,
  },

  dateText: {
    color: defaultColor.listHeading,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
  },

  dateNormal: {
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: defaultColor.cardColor,
  },

  dateHighlight: {
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: '#30d29d',
    justifyContent: 'center',
  },

  firstHeading: {
    fontSize: 40,
    fontWeight: '400',
    textAlign: 'center',
    letterSpacing: 5,
    textShadowColor: '#f8f8f8',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },

  secondaryHeading: {
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
    marginBottom: 10,
    color: defaultColor.secondaryHeading,
  },

  listHeading: {
    color: defaultColor.listHeading,
  },

  cardAlign: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  cardHeader: {
    color: defaultColor.secondaryHeading,
    fontSize: 18,
    margin: 10,
  },

  redLargeBtn: {
    marginTop: 20,
    shadowColor: '#f38aa9',
  },

  greenLargeBtn: {
    marginTop: 20,
    shadowColor: '#70ea93',
  },

  largeBtnShadow: {
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.70,
    shadowRadius: 4.65,
    elevation: 8,
  },

  grayBtnShadow: {
    shadowColor: '#cccccc',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.70,
    shadowRadius: 4.65,
    elevation: 8,
  },

  overlayBtn: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 25,
  },

  overlayText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },

  largeBtnHeader: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
    marginTop: 5,
    marginBottom: 5,
  },

  largeBtnFont: {
    color: 'white',
    fontSize: 15,
    fontWeight: '300',
  },

  labelHeader: {
    height: 140,
    justifyContent: 'space-between',
  },

  labelHeaderFont: {
    fontSize: 20,
    fontWeight: '400',
  },

  headerFont: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    color: defaultColor.listHeading,
  },

  themeBtn: {
    ...themeBtnDefault,
    borderColor: '#5C6BC0',
  },

  disabledThemeBtn: {
    ...themeBtnDefault,
    backgroundColor: '#5C6BC0',
  },

});

export default styles;