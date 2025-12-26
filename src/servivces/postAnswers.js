import mainApi from './apis/mainApi';

function postAnswers(surveyId, data) {
  mainApi.post('/answers', { surveyId: surveyId, data: data });
}

export default postAnswers;
