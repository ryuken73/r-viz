import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { ParallaxProvider } from 'react-scroll-parallax';
import {store} from 'store';
import {Provider} from 'react-redux';
import {QueryClient, QueryClientProvider} from 'react-query'

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
    {/* <ParallaxProvider> */}
      <App />
    {/* </ParallaxProvider> */}
    </QueryClientProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
