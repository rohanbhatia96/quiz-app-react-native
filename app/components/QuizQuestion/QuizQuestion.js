import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const QuizQuestion = props => {
  return (
    <View>
      <Text>{props.question}</Text>
      <Text>{JSON.stringify(props.options)}</Text>
    </View>
  );
};

export default QuizQuestion;
