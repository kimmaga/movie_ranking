import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// 리액트돔은 1개의 컴포넌트를 출력(render)하고,
// 그 다큐먼트안에 엘리먼트가 있는데 엘리먼트 ID는root 이건 인덱스 html에 있다.
registerServiceWorker();
