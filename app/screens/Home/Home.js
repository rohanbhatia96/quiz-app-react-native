import React from 'react';
import {View} from 'react-native';
import {Text, Button, Image} from 'react-native-elements';
import styles from './styles';
import quizzy from '../../assets/quizzy.png';
const Home = props => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Quiz App</Text>
        <Text style={styles.subheading}>Rohan Bhatia</Text>
      </View>
      <View style={styles.welcomeContainer}>
        <Image source={quizzy} style={styles.quizzyImage} />
        <Text style={styles.welcomeText}>Hello, I'm Quizzy.</Text>
        <Text style={styles.welcomeText}>I'll be your quiz master</Text>
        <Button
          buttonStyle={styles.quizButton}
          titleStyle={styles.buttonTitle}
          title="START QUIZ"
          onPress={() => {
            props.setQuizStarted(true);
          }}
        />
      </View>
    </View>
  );
};

export default Home;
