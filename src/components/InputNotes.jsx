import React from 'react';
import PropTypes from 'prop-types';
import ActionButton from './ActionButton';

class InputNotes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeBody = this.handleChangeBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeTitle(e) {
    this.setState({ title: e.target.value });
  }

  handleChangeBody(e) {
    this.setState({ body: e.target.innerHTML });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSave(this.state);
  }

  render() {
    return (
      <div className='add-new-page__input'>
        <input
          className='add-new-page__input__title'
          placeholder='Catatan rahasia'
          type='text'
          onChange={this.handleChangeTitle}
          value={this.state.title}
        />
        <div
          className='add-new-page__input__body'
          contentEditable
          data-placeholder='Sebenarnya saya adalah ....'
          onInput={this.handleChangeBody}
        />
        <div className='add-new-page__action'>
          <ActionButton type='save' onClick={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

InputNotes.propTypes = {
  handleSave: PropTypes.func.isRequired,
};

export default InputNotes;
