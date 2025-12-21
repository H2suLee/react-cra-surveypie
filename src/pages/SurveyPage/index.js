//import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import ProgressIndicator from '../../components/ProgressIndicator';
import QuestionBox from '../../components/QuestionBox';

import styled from 'styled-components';
function SurveyPage() {
  const params = useParams();

  const questions = [
    {
      title: '질문1입니다.',
      desc: '설명1입니다.',
      type: 'text',
      required: false,
      option: { placeholder: 'placeholder 입니다.' },
    },
    {
      title: '질문2입니다.',
      desc: '설명2입니다.',
      type: 'textarea',
      required: true,
      option: { placeholder: 'placeholder 입니다.' },
    },
    {
      title: '질문3입니다.',
      desc: '설명3입니다.',
      type: 'select',
      option: { items: ['답변1', '답변2', '답변3', '답변4', '답변5'] },
      required: true,
    },
  ];

  const step = parseInt(params.step);

  const [answers, setAnswers] = useState([]);

  return (
    <SurveyPageWrapper>
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
    </SurveyPageWrapper>
  );
}

const SurveyPageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;
export default SurveyPage;
