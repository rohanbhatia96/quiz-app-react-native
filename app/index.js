import React, {useState} from 'react';
import {View, StatusBar} from 'react-native';
import Quiz from './screens/Quiz';
import Home from './screens/Home';
const App = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const setQuizStartedFromChild = value => {
    setQuizStarted(value);
  };
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor="#B1EDE8" />
      {!quizStarted && <Home setQuizStarted={setQuizStartedFromChild} />}
      {quizStarted && <Quiz setQuizStarted={setQuizStartedFromChild} />}
    </View>
  );
};

export default App;
