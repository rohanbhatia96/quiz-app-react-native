import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
  },
  questionTitleContainer: {
    flex: 0.2,
  },
  questionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3B0D11',
  },
  optionsContainer: {
    flex: 0.8,
    marginHorizontal: 50,
    justifyContent: 'center',
  },
  optionsContainerInline: {
    flex: 0.8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
  },
  optionSingle: {
    paddingHorizontal: 20,
    paddingVertical: 13,
    marginHorizontal: 6,
    marginVertical: 8,
    borderWidth: 1.2,
    borderColor: '#FFFCF9',
    backgroundColor: '#FFFCF9',
    elevation: 5,
    borderRadius: 25,
    minWidth: 100,
  },
  optionSelected: {
    borderColor: '#3B0D11',
    opacity: 0.9,
    backgroundColor: '#EFFBFA',
  },
  optionTitle: {
    color: '#3B0D11',
  },
  optionTitleSelected: {
    color: '#3B0D11',
  },
});

export default styles;
