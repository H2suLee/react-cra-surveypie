function TextInput({ answer, setAnswer }) {
  return (
    <input
      type="text"
      value={answer}
      onChange={(e) => {
        setAnswer(e.target.value);
      }}
    ></input>
  );
}

export default TextInput;
