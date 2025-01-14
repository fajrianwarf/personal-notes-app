import React from 'react';
import PropTypes from 'prop-types';
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

function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = getNote(id);

  if (!note) {
    return <NotFound />;
  }

  return <Detail note={note} navigate={navigate} />;
}

class Detail extends React.Component {
  constructor(props) {
    super(props);

    this.handleArchive = this.handleArchive.bind(this);
    this.handleUnarchive = this.handleUnarchive.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleArchive() {
    archiveNote(this.props.note.id);
    this.props.navigate('/');
  }

  handleUnarchive() {
    unarchiveNote(this.props.note.id);
    this.props.navigate('/archives');
  }

  handleDelete() {
    deleteNote(this.props.note.id);
    if (this.props.note.archived) {
      this.props.navigate('/archives');
    } else {
      this.props.navigate('/');
    }
  }

  render() {
    const { note } = this.props;
    const { title, createdAt, body } = note;
    return (
      <section className='detail-page'>
        <h3 className='detail-page__title'>{title}</h3>
        <p className='detail-page__createdAt'>{showFormattedDate(createdAt)}</p>
        <div className='detail-page__body'>{parser(body)}</div>
        <div className='detail-page__action'>
          {note.archived ? (
            <ActionButton type='unarchive' onClick={this.handleUnarchive} />
          ) : (
            <ActionButton type='archive' onClick={this.handleArchive} />
          )}
          <ActionButton type='delete' onClick={this.handleDelete} />
        </div>
      </section>
    );
  }
}

Detail.propTypes = {
  note: PropTypes.object.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default DetailPageWrapper;
