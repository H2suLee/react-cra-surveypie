import { useRecoilState } from 'recoil';

import surveyState from '../stores/survey/selector';
import useStep from './useStep';

function useCurrentQuestion() {
  const step = useStep();
  const [surveyData, setSurvey] = useRecoilState(surveyState);
  const questions = surveyData?.questions || [];
  /**
   * 
  const surveyId = useSurveyId();

  //api 호출을 리액트가 아닌 스토어가 진행할 수 있도록 selector.js 코드 이동
  useEffect(() => {
    axios.get(`http://localhost:3001/surveys/${surveyId}`).then((res) => {
      setSurvey(res.data);
      console.log(res);
    });
  }, [surveyId, setSurvey]);
  */
  return questions[step];
}

export default useCurrentQuestion;
