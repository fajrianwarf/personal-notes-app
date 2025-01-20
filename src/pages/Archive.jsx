import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import SearchNotes from '../components/SearchNotes';
import CardWrapper from '../components/CardWrapper';
import CardLoader from '../components/CardLoader';
import EmptyCard from '../components/EmptyCard';
import Title from '../components/Title';
import Card from '../components/Card';
import { useInput, useTranslation } from '../utils/custom-hooks';
import { getArchivedNotes } from '../utils';

function Archive() {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const keywordParam = searchParams.get('keyword');
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [keyword, onKeywordChange] = useInput(keywordParam || '');

  useEffect(() => {
    const fetchNotes = async () => {
      setIsLoading(true);
      const { error, data } = await getArchivedNotes();
      if (!error && data) setNotes(data);

      setIsLoading(false);
    };

    fetchNotes();
  }, []);

  const handleChangeKeyword = (event) => {
    onKeywordChange(event);
    setSearchParams({ keyword: event.target.value });
  };

  return (
    <section className='archives-page'>
      <Title text={t('archivedNotes')} />
      <SearchNotes value={keyword} onChangeInput={handleChangeKeyword} />
      {isLoading ? (
        <CardLoader />
      ) : notes.length > 0 ? (
        <CardWrapper>
          {[...notes]
            .filter((note) =>
              note.title.toLowerCase().includes(keyword.toLowerCase())
            )
            .map((note) => (
              <Card key={note.id} {...note} />
            ))}
        </CardWrapper>
      ) : (
        <EmptyCard />
      )}
    </section>
  );
}

export default Archive;
