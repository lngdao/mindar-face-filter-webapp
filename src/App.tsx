import React from 'react';
import FaceTracking from './containers/FaceTracking';
import Controls from './containers/Controls';

import './App.css';
import Layout from './containers/Layout';

function App() {
  return (
    <Layout>
      <Controls />
      <FaceTracking />
    </Layout>
  );
}

export default App;
