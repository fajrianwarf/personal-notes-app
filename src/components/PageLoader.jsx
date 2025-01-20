import React from 'react';
import { BlinkBlur } from 'react-loading-indicators';

function PageLoader() {
  return (
    <div className='backdrop'>
      <BlinkBlur color='var(--on-background)' size='medium' />
    </div>
  );
}

export default PageLoader;
