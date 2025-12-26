import styled from 'styled-components';

function TextInput({ answer = '', setAnswer, option }) {
  return (
    <Input
      type="text"
      value={answer}
      onChange={(e) => {
        setAnswer(e.target.value);
      }}
      {...(option?.max && { maxLength: option?.max })} // 구조분해할당 방식을 통해 max 값이 있을 때만 maxLength 옵션을 넘겨줌
      // maxLength={option?.max}
      placeholder={option.placeholder}
    ></Input>
  );
}

const Input = styled.input`
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 5px;
  width: 100%;
  font-size: 18px;
  line-height: 21px;
  padding: 12px 18px;
`;
export default TextInput;
