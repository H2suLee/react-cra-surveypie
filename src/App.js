import { Route, Routes } from 'react-router-dom';

import SurveyPage from './pages/SurveyPage';
import CompletionPage from './pages/CompletionPage';

import styled from 'styled-components';

import './index.css';

function App() {
  return (
    <div className="App">
      <AppWrapper>
        <Box>
          <Routes>
            <Route path="/done/:surveyId" element={<CompletionPage />}></Route>
            <Route path="/survey/:surveyId" element={<SurveyPage />}>
              <Route path=":step" element={<SurveyPage />} />
            </Route>
          </Routes>
        </Box>
      </AppWrapper>
    </div>
  );
}

const Box = styled.div`
  width: 700px;
  min-height: 500px;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.07);
  border-radius: 16px;
  padding: 60px;
  display: flex;
  box-sizing: border-box;
  position: relative;
`;

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #e5e5e5;
`;
export default App;
/*path를 분리하여 자식 컴포넌트는 상대경로로 navigate 될수 있도록 함 */
