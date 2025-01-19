import React from 'react';
import { useNavigate } from 'react-router-dom';

import { addNote } from '../utils/local-data';
import InputNotes from '../components/InputNotes';

function Create() {
  const navigate = useNavigate();

  const handleSave = (note) => {
    addNote(note);
    navigate('/');
  };

  return (
    <section className='add-new-page'>
      <InputNotes handleSave={handleSave} />
    </section>
  );
}

export default Create;
