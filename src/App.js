import { Route, Routes } from 'react-router-dom';

import SurveyPage from './pages/SurveyPage';
import CompletionPage from './pages/CompletionPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/done" element={<CompletionPage />}></Route>
        <Route path="/survey/:surveyId" element={<SurveyPage />}>
          <Route path=":step" element={<SurveyPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
/*path를 분리하여 자식 컴포넌트는 상대경로로 navigate 될수 있도록 함 */
