import React from 'react';
import { useTranslation } from '../utils/custom-hooks';

function NotFound() {
  const { t } = useTranslation();
  return (
    <section>
      <h2>404</h2>
      <p>{t('pageNotFound')}</p>
    </section>
  );
}

export default NotFound;
