import { selector } from 'recoil';
import axios from 'axios';

const surveyState = selector({
  key: 'surveyState',
  get: async () => {
    // surveyId는 window 객체에서 가져오도록 함 (컴포넌트가 아니므로 hook을 쓸 수 없음)
    // await - async를 사용하므로 then은 필요 없음 (Promise 문법)
    const res = await axios.get(
      `http://localhost:3001/surveys/${window.location.pathname.split('/')[2]}`,
    );

    return res.data;
  },
});

export default surveyState;
