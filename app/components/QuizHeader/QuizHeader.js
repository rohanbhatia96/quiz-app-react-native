import React, {useState, useEffect} from 'react';
import {View, Animated, Alert} from 'react-native';
import {Button} from 'react-native-elements';
import styles from './styles';

const QuizHeader = props => {
  const [animatedValue] = useState(new Animated.Value(0));

  useEffect(() => {
    startAnimation();
  });

  const startAnimation = () => {
    let toValue = props.currentIndex / props.quizLength;
    if (toValue === 0) {
      toValue = 0.05;
    }
    Animated.timing(animatedValue, {
      toValue: toValue,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const showExitQuizAlert = async () => {
    Alert.alert(
      'Exit Quiz?',
      'Are you sure you want to exit the quiz? All progress will be lost.',
      [
        {text: 'Continue Quiz', onPress: () => {}},
        {
          text: 'Exit',
          onPress: () => {
            props.setQuizStarted(false);
          },
        },
      ],
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.closeButtonContainer}>
        <Button
          title="X"
          onPress={showExitQuizAlert}
          buttonStyle={styles.closeButton}
          titleStyle={styles.closeButtonTitle}
        />
      </View>
      <View style={styles.progressBar}>
        <Animated.View
          style={[styles.progressBarFill, {flex: animatedValue}]}
        />
      </View>
    </View>
  );
};

export default QuizHeader;
