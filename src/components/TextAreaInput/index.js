import styled from 'styled-components';

function TextAreaInput({ answer, setAnswer, option }) {
  return (
    <TextArea
      type="text"
      value={answer}
      onChange={(e) => {
        setAnswer(e.target.value);
      }}
      placeholder={option.placeholder}
    ></TextArea>
  );
}

const TextArea = styled.input`
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 5px;
  width: 100%;
  font-size: 18px;
  line-height: 21px;
  padding: 12px 18px;
  height: 196px;
  resize: none;
`;
export default TextAreaInput;
