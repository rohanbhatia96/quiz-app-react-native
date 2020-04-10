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
  modalContainer: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContentCorrect: {
    padding: 20,
    paddingBottom: 5,
    backgroundColor: '#013220',
  },
  modalButtonCorrect: {
    backgroundColor: '#90ee90',
    marginTop: 20,
    elevation: 5,
  },
  modalContentIncorrect: {
    padding: 20,
    paddingBottom: 5,
    backgroundColor: '#FF6978',
  },
  modalButtonIncorrect: {
    backgroundColor: '#ffb6bd',
    marginTop: 20,
    elevation: 5,
  },
  modalButtonTitleCorrect: {
    color: '#3B0D11',
  },
  modalButtonTitleIncorrect: {
    backgroundColor: '#ffb6bd',
    color: '#3B0D11',
  },
  modalFeedback: {
    color: '#FFFCF9',
    fontSize: 16,
  },
});

export default styles;
