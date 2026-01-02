import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import useStep from '../../hooks/useStep';
import useSurveyId from '../../hooks/useSurveyId';
import useAnswers from '../../hooks/useAnswers';
import useRequiredOption from '../../hooks/useRequiredOption';

import Button from '../Button';
import questionLengthState from '../../stores/survey/questionLength';
import postAnswers from '../../servivces/postAnswers';
import styled from 'styled-components';

function ActionButtons() {
  const step = useStep();
  const surveyId = useSurveyId();
  const questionLength = useRecoilValue(questionLengthState);
  const [answers, setAnswers] = useAnswers();

  const isLast = questionLength - 1 === step;
  const isRequired = useRequiredOption();
  const isRequiredFailed = isRequired ? !answers[step]?.length : false;

  const [isPosting, setIsPosting] = useState(false);
  const navigate = useNavigate();

  return (
    <ActionButtonsWrapper>
      {step === 0 || (
        <Button
          type="SECONDARY"
          onClick={() => {
            navigate(`${step - 1}`);
          }}
        >
          이전
        </Button>
      )}
      {isLast ? (
        <Button
          type="TERTIARY"
          onClick={() => {
            // 제출
            setIsPosting(true);
            postAnswers(surveyId, answers)
              .then(() => {
                setAnswers([]);
                navigate(`/done/${surveyId}`);
              })
              .catch((err) => {
                alert('에러가 발생했습니다. 다시 시도해 주세요.');
                console.log(err.response);
                setIsPosting(false);
              });
          }}
          disabled={isPosting || isRequiredFailed}
        >
          {isPosting ? '제출 중입니다...' : '제출'}
        </Button>
      ) : (
        <Button
          type="PRIMARY"
          onClick={() => {
            navigate(`${step + 1}`);
          }}
          disabled={isRequired ? isRequiredFailed : false}
        >
          다음
        </Button>
      )}
    </ActionButtonsWrapper>
  );
}

const ActionButtonsWrapper = styled.div`
  margin-top: 72px;
  display: flex;
  gap: 16px;
  justify-content: center;
`;

export default ActionButtons;
