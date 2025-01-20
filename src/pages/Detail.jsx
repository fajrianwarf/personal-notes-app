import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import parser from 'html-react-parser';

import ActionButton from '../components/ActionButton';
import PageLoader from '../components/PageLoader';
import NotFound from './NotFound';
import {
  archiveNote,
  deleteNote,
  getNote,
  showFormattedDate,
  unarchiveNote,
} from '../utils';

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchNote = async () => {
      setIsLoading(true);
      const { error, data } = await getNote(id);
      if (!error && data) setNote(data);

      setIsLoading(false);
    };

    fetchNote();
  }, []);

  if (!note && !isLoading) {
    return <NotFound />;
  }

  const handleArchive = async () => {
    setIsLoading(true);
    const { error } = await archiveNote(id);
    if (!error) navigate('/');
    setIsLoading(false);
  };

  const handleUnarchive = async () => {
    setIsLoading(true);
    const { error } = await unarchiveNote(id);
    if (!error) navigate('/archives');
    setIsLoading(false);
  };

  const handleDelete = async () => {
    setIsLoading(true);
    const { error } = await deleteNote(id);
    setIsLoading(false);
    if (!error) {
      if (note.archived) {
        navigate('/archives');
      } else {
        navigate('/');
      }
    }
  };

  return (
    <section className='detail-page'>
      {isLoading && <PageLoader />}
      <h3 className='detail-page__title'>{note?.title}</h3>
      <p className='detail-page__createdAt'>
        {showFormattedDate(note?.createdAt)}
      </p>
      <div className='detail-page__body'>{parser(note?.body ?? '')}</div>
      <div className='detail-page__action'>
        {note?.archived ? (
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
