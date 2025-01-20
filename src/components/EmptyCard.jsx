import React from 'react';
import { useTranslation } from '../utils/custom-hooks';

function EmptyCard() {
  const { t } = useTranslation();
  return (
    <section className='notes-list-empty'>
      <p className='notes-list__empty'>{t('noNotes')}</p>
    </section>
  );
}

export default EmptyCard;
