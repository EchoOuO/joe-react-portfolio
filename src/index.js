import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import GlobalStyles from './styles/GlobalStyle';
import Typography from './styles/Typography';

// 获取 root 元素
const container = document.getElementById('root');

// 使用 createRoot 创建根元素
const root = createRoot(container);

root.render(
  <>
    <GlobalStyles />
    <Typography />
    <App />
  </>
);