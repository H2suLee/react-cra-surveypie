import { selector } from 'recoil';

import questionsState from './atom';

const questionLengthState = selector({
  key: 'questionLengthState',
  get: ({ get }) => {
    const questions = get(questionsState).questions;
    return questions.length;
  },
});

export default questionLengthState;
