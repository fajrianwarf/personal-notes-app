import React from 'react';
import { BlinkBlur } from 'react-loading-indicators';

function CardLoader() {
  return (
    <div className='card-loader'>
      <BlinkBlur color='var(--on-background)' size='small' />
    </div>
  );
}

export default CardLoader;
