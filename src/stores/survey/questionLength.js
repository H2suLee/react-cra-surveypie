import { selector } from 'recoil';

import surveyState from './atom';

const questionLengthState = selector({
  key: 'questionLengthState',
  get: ({ get }) => {
    const questions = get(surveyState).questions;
    return questions.length;
  },
});

export default questionLengthState;
