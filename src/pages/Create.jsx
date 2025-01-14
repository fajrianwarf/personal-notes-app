import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { addNote } from '../utils/local-data';
import InputNotes from '../components/InputNotes';

function CreatePageWrapper() {
  const navigate = useNavigate();
  return <Create navigate={navigate} />;
}

class Create extends React.Component {
  constructor(props) {
    super(props);

    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(note) {
    addNote(note);
    this.props.navigate('/');
  }

  render() {
    return (
      <section className='add-new-page'>
        <InputNotes handleSave={this.handleSave} />
      </section>
    );
  }
}

Create.propTypes = {
  navigate: PropTypes.func.isRequired,
};

export default CreatePageWrapper;
