import React from 'react';

class EmptyCard extends React.Component {
  render() {
    return (
      <section className='notes-list-empty'>
        <p className='notes-list__empty'>Tidak ada catatan</p>
      </section>
    );
  }
}

export default EmptyCard;
