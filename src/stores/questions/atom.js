import { atom } from 'recoil';

const questionsState = atom({
  key: 'questionsState',
  default: [
    {
      title: '질문1입니다.',
      desc: '설명1입니다.',
      type: 'text',
      required: false,
      option: { placeholder: 'placeholder 입니다.' },
    },
    {
      title: '질문2입니다.',
      desc: '설명2입니다.',
      type: 'textarea',
      required: true,
      option: { placeholder: 'placeholder 입니다.' },
    },
    {
      title: '질문3입니다.',
      desc: '설명3입니다.',
      type: 'select',
      option: { items: ['답변1', '답변2', '답변3', '답변4', '답변5'] },
      required: true,
    },
  ],
});

export default questionsState;
