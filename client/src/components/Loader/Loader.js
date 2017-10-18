import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const Loader = () => (
  <div>
    <CircularProgress size={40} thickness={5} />
  </div>
);

export default Loader;