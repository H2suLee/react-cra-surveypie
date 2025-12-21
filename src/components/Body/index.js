import TextInput from '../TextInput';
import TextAreaInput from '../TextAreaInput';
import SelectInput from '../SelectInput';

import styled from 'styled-components';
function Body({ type, answer, setAnswer, option }) {
  let InputComponent = null;
  if (type === 'select') {
    InputComponent = SelectInput;
  } else if (type === 'text') {
    InputComponent = TextInput;
  } else if (type === 'textarea') {
    InputComponent = TextAreaInput;
  }
  return (
    <BodyWrapper>
      <InputComponent answer={answer} setAnswer={setAnswer} option={option} />
    </BodyWrapper>
  );
}

const BodyWrapper = styled.div`
  margin-left: 0 38px;
  flex: 1;
`;

export default Body;
