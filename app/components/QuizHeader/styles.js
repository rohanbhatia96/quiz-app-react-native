import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 25,
  },
  closeButtonContainer: {
    marginRight: 10,
  },
  closeButton: {
    backgroundColor: 'transparent',
  },
  closeButtonTitle: {
    color: '#3B0D11',
    fontSize: 20,
    fontWeight: 'bold',
  },
  progressBar: {
    flex: 1,
    flexDirection: 'row',
    height: 20,
    backgroundColor: '#FFFCF9',
    elevation: 1,
    borderWidth: 0.4,
    borderRadius: 5,
    borderColor: 'black',
  },
  progressBarFill: {
    backgroundColor: '#FF6978',
  },
});

export default styles;
