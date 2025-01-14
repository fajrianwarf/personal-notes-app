import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getArchivedNotes } from '../utils/local-data';

import SearchNotes from '../components/SearchNotes';
import CardWrapper from '../components/CardWrapper';
import EmptyCard from '../components/EmptyCard';
import Title from '../components/Title';
import Card from '../components/Card';

function ArchivePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const keyword = searchParams.get('keyword');

  function changeKeyword(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <Archive
      defaultKeyword={keyword}
      keywordChange={changeKeyword}
      navigate={navigate}
    />
  );
}

class Archive extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes(),
      keyword: props.defaultKeyword || '',
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleChangeInput(keyword) {
    this.setState({
      notes: getArchivedNotes(keyword),
      keyword,
    });
    this.props.keywordChange(keyword);
  }

  render() {
    const { keyword, notes } = this.state;
    return (
      <section className='archives-page'>
        <Title text='Catatan Arsip' />
        <SearchNotes value={keyword} onChangeInput={this.handleChangeInput} />
        {notes.length > 0 ? (
          <CardWrapper>
            {notes.map((note) => (
              <Card key={note.id} {...note} />
            ))}
          </CardWrapper>
        ) : (
          <EmptyCard />
        )}
      </section>
    );
  }
}

Archive.propTypes = {
  defaultKeyword: PropTypes.string,
  navigate: PropTypes.func.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default ArchivePageWrapper;
