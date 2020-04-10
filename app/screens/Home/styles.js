import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 50,
    backgroundColor: '#B1EDE8',
  },
  titleContainer: {
    flex: 0.2,
    alignItems: 'center',
  },
  welcomeContainer: {
    flex: 0.6,
  },
  quizzyImage: {
    width: 200,
    height: 200,
    marginBottom: 25,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3B0D11',
  },
  subheading: {
    fontSize: 16,
    color: '#3B0D11',
  },
  welcomeText: {
    fontSize: 18,
    color: '#3B0D11',
    alignSelf: 'center',
  },
  quizButton: {
    marginTop: 25,
    backgroundColor: '#6D435A',
    padding: 15,
    elevation: 5,
    borderRadius: 7,
  },
  buttonTitle: {
    color: '#FFFCF9',
  },
});

export default styles;
