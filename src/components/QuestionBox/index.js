import ActionButtons from '../ActionButtons';
import Body from '../Body';
import Desc from '../Desc';
import Title from '../Title';

import styled from 'styled-components';
import useCurrentQuestion from '../../hooks/useCurrentQuestion';
import useCurrentAnswer from '../../hooks/useCurrentAnswer';

function QuestionBox() {
  const [answer, setAnswer] = useCurrentAnswer();
  const question = useCurrentQuestion(); // undefined, 데이터 준비가 안된 시간동안 로딩바를 주기 위해, 상위 컴포넌트에서 react-suspense를 줌
  if (question === undefined) {
    return null;
  }

  return (
    <QuestionBoxWrapper>
      <Title>{question.title}</Title>
      <Desc>{question.desc}</Desc>
      <Body
        type={question.type}
        answer={answer}
        setAnswer={setAnswer}
        option={question.options}
      ></Body>
      <ActionButtons />
    </QuestionBoxWrapper>
  );
}

const QuestionBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default QuestionBox;
