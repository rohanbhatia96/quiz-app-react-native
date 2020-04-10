import React, {useState} from 'react';
import QuizHeader from '../../components/QuizHeader';
import QuizQuestion from '../../components/QuizQuestion';
import QuizButton from '../../components/QuizButton';
import {View} from 'react-native';
import styles from './styles';
import questions from '../../questions';
const Quiz = props => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const questionsArray = questions.questionsArray;
  const QuizButtonPressed = () => {
    if (currentIndex === questionsArray.length - 1) {
      console.log('submit quiz');
    }

    if (currentIndex < questionsArray.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <QuizHeader
          currentIndex={currentIndex}
          quizLength={questionsArray.length}
          setQuizStarted={props.setQuizStarted}
        />
      </View>
      <View style={styles.questionContainer}>
        <QuizQuestion
          question={questionsArray[currentIndex].question}
          options={questionsArray[currentIndex].options}
        />
      </View>
      <View style={styles.buttonContainer}>
        <QuizButton title="Check" onPress={QuizButtonPressed} />
      </View>
    </View>
  );
};

export default Quiz;
