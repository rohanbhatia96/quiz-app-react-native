import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#B1EDE8',
  },
  headerContainer: {
    flex: 0.1,
  },
  mainQuizContainer: {
    flex: 0.9,
  },
  questionContainer: {
    flex: 0.7,
  },
  buttonContainer: {
    flex: 0.3,
    justifyContent: 'flex-end',
  },
  questionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3B0D11',
  },
  quizEndContainer: {
    flex: 0.7,
    padding: 20,
    justifyContent: 'center',
  },
  endText: {
    flex: 1,
    fontSize: 18,
    color: '#3B0D11',
  },
  quizEndButton: {
    marginTop: 25,
    backgroundColor: '#6D435A',
    padding: 15,
    elevation: 5,
    borderRadius: 7,
  },
  quizEndButtonTitle: {
    color: '#FFFCF9',
  },
  quizzyImage: {
    width: 175,
    height: 175,
    marginBottom: 25,
  },
  quizEndMessage: {
    flex: 0.6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  quizEndButtons: {},
});

export default styles;
