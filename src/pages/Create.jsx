import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import InputNotes from '../components/InputNotes';
import PageLoader from '../components/PageLoader';
import { addNote } from '../utils';

function Create() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async (note) => {
    setIsLoading(true);
    const { error } = await addNote(note);
    if (!error) {
      setIsLoading(false);
      navigate('/');
    }
  };

  return (
    <section className='add-new-page'>
      {isLoading && <PageLoader />}
      <InputNotes handleSave={handleSave} />
    </section>
  );
}

export default Create;
