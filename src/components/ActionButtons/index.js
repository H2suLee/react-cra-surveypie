import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import useStep from '../../hooks/useStep';
import useSurveyId from '../../hooks/useSurveyId';
import useAnswers from '../../hooks/useAnswers';

import Button from '../Button';
import questionLengthState from '../../stores/survey/questionLength';
import postAnswers from '../../servivces/postAnswers';
import styled from 'styled-components';

function ActionButtons() {
  const step = useStep();
  const surveyId = useSurveyId();
  const questionLength = useRecoilValue(questionLengthState);

  const isLast = questionLength - 1 === step;

  const navigate = useNavigate();

  const answers = useAnswers();

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
            postAnswers(surveyId, answers);
            navigate('/done');
          }}
        >
          제출
        </Button>
      ) : (
        <Button
          type="PRIMARY"
          onClick={() => {
            navigate(`${step + 1}`);
          }}
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
