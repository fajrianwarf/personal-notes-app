import React from 'react';
import PropTypes from 'prop-types';
import { FiPlus, FiCheck, FiArchive, FiTrash, FiUpload } from 'react-icons/fi';

const actionMap = {
  add: { icon: <FiPlus />, title: 'Tambah' },
  save: { icon: <FiCheck />, title: 'Simpan' },
  archive: { icon: <FiArchive />, title: 'Arsipkan' },
  unarchive: { icon: <FiUpload />, title: 'Aktifkan' },
  delete: { icon: <FiTrash />, title: 'Hapus' },
};

function ActionButton(props) {
  const { type, onClick } = props;
  const action = actionMap[type] || {};

  return (
    <button
      type='button'
      className='action'
      title={action.title}
      onClick={onClick}
    >
      {action.icon}
    </button>
  );
}

ActionButton.propTypes = {
  type: PropTypes.oneOf(['add', 'save', 'archive', 'unarchive', 'delete'])
    .isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ActionButton;
