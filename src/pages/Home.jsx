import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import ActionButton from '../components/ActionButton';
import SearchNotes from '../components/SearchNotes';
import CardWrapper from '../components/CardWrapper';
import CardLoader from '../components/CardLoader';
import EmptyCard from '../components/EmptyCard';
import Title from '../components/Title';
import Card from '../components/Card';
import { useInput, useTranslation } from '../utils/custom-hooks';
import { getActiveNotes } from '../utils';

function Home() {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const keywordParam = searchParams.get('keyword');
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [keyword, onKeywordChange] = useInput(keywordParam || '');

  useEffect(() => {
    const fetchNotes = async () => {
      setIsLoading(true);
      const { error, data } = await getActiveNotes();
      if (!error && data) setNotes(data);

      setIsLoading(false);
    };

    fetchNotes();
  }, []);

  const handleChangeKeyword = (event) => {
    onKeywordChange(event);
    setSearchParams({ keyword: event.target.value });
  };

  const toCreatePage = () => {
    navigate('/notes/new');
  };

  return (
    <section className='homepage'>
      <Title text={t('activeNotes')} />
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
      <div className='homepage__action'>
        <ActionButton type='add' onClick={toCreatePage} />
      </div>
    </section>
  );
}

export default Home;
