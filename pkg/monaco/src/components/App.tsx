import '../index.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Editor } from './Editor';

const root = document.getElementById('root');
const el = (
  <React.StrictMode>
    <Editor />
  </React.StrictMode>
);

ReactDOM.render(el, root);
