import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getActiveNotes } from '../utils/local-data';
import ActionButton from '../components/ActionButton';
import SearchNotes from '../components/SearchNotes';
import CardWrapper from '../components/CardWrapper';
import EmptyCard from '../components/EmptyCard';
import Title from '../components/Title';
import Card from '../components/Card';

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const keyword = searchParams.get('keyword');

  function changeKeyword(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <Home
      defaultKeyword={keyword}
      keywordChange={changeKeyword}
      navigate={navigate}
    />
  );
}

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
      keyword: props.defaultKeyword || '',
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.toCreatePage = this.toCreatePage.bind(this);
  }

  handleChangeInput(keyword) {
    this.setState({
      notes: getActiveNotes(keyword),
      keyword,
    });
    this.props.keywordChange(keyword);
  }

  toCreatePage() {
    this.props.navigate('/notes/new');
  }

  render() {
    const { keyword, notes } = this.state;
    return (
      <section className='homepage'>
        <Title text='Catatan Aktif' />
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
        <div className='homepage__action'>
          <ActionButton type='add' onClick={this.toCreatePage} />
        </div>
      </section>
    );
  }
}

Home.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default HomePageWrapper;
