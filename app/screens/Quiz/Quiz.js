import React, {useState} from 'react';
import QuizHeader from '../../components/QuizHeader';
import QuizQuestion from '../../components/QuizQuestion';
import QuizButton from '../../components/QuizButton';
import {View} from 'react-native';
import {Image, Text, Button} from 'react-native-elements';
import quizzy from '../../assets/quizzy.png';
import styles from './styles';
import questions from '../../questions';
const Quiz = props => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const questionsArray = questions.questionsArray;
  const QuizButtonPressed = () => {
    if (userAnswer === questionsArray[currentIndex].correctAnswer) {
      console.log('correct answer');
      console.log(questionsArray[currentIndex].correctResponse);
    } else {
      console.log('incorrect answer');
      console.log(questionsArray[currentIndex].incorrectResponse);
    }

    if (currentIndex < questionsArray.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const setUserAnswerFromChild = answer => {
    setUserAnswer(answer);
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
      {currentIndex < questionsArray.length && (
        <View style={styles.mainQuizContainer}>
          <View style={styles.questionContainer}>
            <QuizQuestion
              question={questionsArray[currentIndex].question}
              options={questionsArray[currentIndex].options}
              setUserAnswer={setUserAnswerFromChild}
            />
          </View>
          <View style={styles.buttonContainer}>
            <QuizButton title="Check" onPress={QuizButtonPressed} />
          </View>
        </View>
      )}
      {currentIndex === questionsArray.length && (
        <View style={styles.quizEndContainer}>
          <View style={styles.quizEndMessage}>
            <Image source={quizzy} style={styles.quizzyImage} />
            <Text style={styles.endText}>
              Congratulations! You have completed the quiz.{'\n\n'}Do You want
              to retake the quiz?
            </Text>
          </View>
          <View style={styles.quizEndButtons}>
            <Button
              buttonStyle={styles.quizEndButton}
              titleStyle={styles.quizEndButtonTitle}
              title="Retake Quiz"
              onPress={() => {
                setCurrentIndex(0);
              }}
            />
            <Button
              buttonStyle={styles.quizEndButton}
              titleStyle={styles.quizEndButtonTitle}
              title="End Quiz"
              onPress={() => {
                props.setQuizStarted(false);
              }}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default Quiz;
