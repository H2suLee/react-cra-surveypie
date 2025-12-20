//import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import ProgressIndicator from '../../components/ProgressIndicator';
import QuestionBox from '../../components/QuestionBox';

function SurveyPage() {
  const params = useParams();

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

  const step = parseInt(params.step);

  const [answers, setAnswers] = useState([]);
  return (
    <>
      <div>
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
    </>
  );
}
export default SurveyPage;
