import { useParams } from 'react-router-dom';

function useSurveyId() {
  const params = useParams();
  const surveyId = parseInt(params.surveyId);
  console.log('surveyId', surveyId);
  return surveyId;
}

export default useSurveyId;
