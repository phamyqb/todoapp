import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { Home } from './pages';
import Counter from './pages/class-components/Counter';
import Counter2 from './pages/functional-components/Counter';
import HomeCls from './pages/class-components/Home';
import Home2 from './pages/functional-components/Home';


import reportWebVitals from './reportWebVitals';

import store from './store'

ReactDOM.createRoot(document.getElementById("root"))
  .render(
    <React.StrictMode>
      <Provider store={store}>
        {/* <Home /> */}
        <Home2 />
        {/* <Counter2 /> */}
      </Provider>
    </React.StrictMode>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
