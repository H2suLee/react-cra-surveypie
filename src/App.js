import ProgressIndicator from './components/ProgressIndicator';
import QuestionBox from './components/QuestionBox';
import { useState } from 'react';

function App() {
  const questions = [
    {
      title: '질문1입니다.',
      desc: '설명1입니다.',
      type: 'text',
      options: {},
      required: false,
    },
    {
      title: '질문2입니다.',
      desc: '설명2입니다.',
      type: 'text',
      options: {},
      required: true,
    },
  ];

  const step = 0;

  const [answers, setAnswers] = useState([]);
  return (
    <div className="App">
      <ProgressIndicator />
      <QuestionBox
        question={questions[step]}
        questionLength={questions.length}
        step={step}
        answer={answers[step]}
        setAnswer={(newAnswer) =>
          setAnswers((answers) => {
            const newAnswers = [...answers];
            newAnswers[step] = newAnswer;
            return newAnswers;
          })
        }
      />
    </div>
  );
}

export default App;
