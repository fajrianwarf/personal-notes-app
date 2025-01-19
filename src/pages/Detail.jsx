import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import parser from 'html-react-parser';

import {
  getNote,
  archiveNote,
  unarchiveNote,
  deleteNote,
} from '../utils/local-data';
import { showFormattedDate } from '../utils';
import ActionButton from '../components/ActionButton';
import NotFound from './NotFound';

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = getNote(id);

  if (!note) {
    return <NotFound />;
  }

  const { title, createdAt, body, archived } = note;

  const handleArchive = () => {
    archiveNote(id);
    navigate('/');
  };

  const handleUnarchive = () => {
    unarchiveNote(id);
    navigate('/archives');
  };

  const handleDelete = () => {
    deleteNote(id);
    if (archived) {
      navigate('/archives');
    } else {
      navigate('/');
    }
  };

  return (
    <section className='detail-page'>
      <h3 className='detail-page__title'>{title}</h3>
      <p className='detail-page__createdAt'>{showFormattedDate(createdAt)}</p>
      <div className='detail-page__body'>{parser(body)}</div>
      <div className='detail-page__action'>
        {archived ? (
          <ActionButton type='unarchive' onClick={handleUnarchive} />
        ) : (
          <ActionButton type='archive' onClick={handleArchive} />
        )}
        <ActionButton type='delete' onClick={handleDelete} />
      </div>
    </section>
  );
}

export default Detail;
