import React from 'react';
import {Button} from 'react-native-elements';
import {View} from 'react-native';
import styles from './styles';

const QuizButton = props => {
  return (
    <View>
      <Button
        buttonStyle={styles.quizButton}
        title={props.title}
        onPress={props.onPress}
        disabled={props.disabled}
      />
    </View>
  );
};

export default QuizButton;
