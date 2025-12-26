import mainApi from './apis/mainApi';

function postAnswers(surveyId, data) {
  return mainApi.post('/answers', { surveyId: surveyId, data: data }); // 'return' 을 붙이면 요청에 대한 promise 객체를 리턴
}

export default postAnswers;
