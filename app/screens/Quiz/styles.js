import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  headerContainer: {
    flex: 0.1,
    backgroundColor: 'red',
  },
  questionContainer: {
    flex: 0.7,
    backgroundColor: 'yellow',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 0.2,
    backgroundColor: 'pink',
    justifyContent: 'flex-end',
  },
});

export default styles;
