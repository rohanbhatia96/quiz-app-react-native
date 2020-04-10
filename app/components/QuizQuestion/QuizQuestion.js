import React, {useState} from 'react';
import {View} from 'react-native';
import {Text, Button} from 'react-native-elements';
import styles from './styles';

const QuizQuestion = props => {
  const optionsLength = props.options.length;
  const optionsContainerStyle =
    optionsLength < 5 ? styles.optionsContainer : styles.optionsContainerInline;
  const [selectedOption, setSelectedOption] = useState(null);
  const optionsButtons = props.options.map(option => {
    return (
      <Button
        key={option}
        title={option}
        buttonStyle={
          selectedOption === option
            ? [styles.optionSingle, styles.optionSelected]
            : styles.optionSingle
        }
        titleStyle={
          selectedOption === option
            ? [styles.optionTitle, styles.optionTitleSelected]
            : styles.optionTitle
        }
        onPress={() => {
          setSelectedOption(option);
          props.setUserAnswer(option);
        }}
      />
    );
  });
  return (
    <View style={styles.mainContainer}>
      <View style={styles.questionTitleContainer}>
        <Text style={styles.questionTitle}>{props.question}</Text>
      </View>
      <View style={optionsContainerStyle}>{optionsButtons}</View>
    </View>
  );
};

export default QuizQuestion;
