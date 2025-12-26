//import { Link } from 'react-router-dom';
//import { useState } from 'react';
//import { useParams } from 'react-router-dom';
//import { useRecoilValue } from 'recoil';

import { Suspense } from 'react';
import ProgressIndicator from '../../components/ProgressIndicator';
import QuestionBox from '../../components/QuestionBox';

import styled from 'styled-components';
function SurveyPage() {
  return (
    <Suspense fallback={<div>loading..</div>}>
      <SurveyPageWrapper>
        <ProgressIndicator />
        <QuestionBox />
      </SurveyPageWrapper>
    </Suspense>
  );
}

const SurveyPageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;
export default SurveyPage;
