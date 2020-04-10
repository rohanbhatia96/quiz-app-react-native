import React from 'react';
import {View} from 'react-native';
import QuizHeader from './components/QuizHeader';
import QuizQuestion from './components/QuizQuestion';
import QuizSubmitButton from './components/QuizSubmitButton';

const App = () => {
  return (
    <View>
      <QuizHeader />
      <QuizQuestion />
      <QuizSubmitButton />
    </View>
  );
};

export default App;
