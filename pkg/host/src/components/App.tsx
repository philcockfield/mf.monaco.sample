import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ErrorBoundary } from './ErrorBoundary';

// @ts-ignore
const Editor = React.lazy(() => import('monaco/Editor'));

import '../index.css';

const App = () => {
  console.log('App');
  return (
    <div>
      <ErrorBoundary>
        <div style={{ fontSize: 50 }}>Host</div>
        <React.Suspense fallback={<div />}>
          <Editor />
        </React.Suspense>
      </ErrorBoundary>
    </div>
  );
};

/**
 * Insert into DOM
 */
ReactDOM.render(<App />, document.getElementById('root'));
