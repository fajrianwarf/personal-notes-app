import React from 'react';
import PropTypes from 'prop-types';
import { FiPlus, FiCheck, FiArchive, FiTrash, FiUpload } from 'react-icons/fi';
import { useTranslation } from '../utils/custom-hooks';

const actionMap = {
  add: { icon: <FiPlus />, titleKey: 'add' },
  save: { icon: <FiCheck />, titleKey: 'save' },
  archive: { icon: <FiArchive />, titleKey: 'archive' },
  unarchive: { icon: <FiUpload />, titleKey: 'activate' },
  delete: { icon: <FiTrash />, titleKey: 'delete' },
};

function ActionButton(props) {
  const { type, onClick } = props;
  const { t } = useTranslation();
  const action = actionMap[type] || {};

  return (
    <button
      type='button'
      className='action'
      title={t(action.titleKey)}
      onClick={onClick}
    >
      {action.icon}
    </button>
  );
}

ActionButton.propTypes = {
  type: PropTypes.oneOf([
    'add',
    'save',
    'archive',
    'unarchive',
    'delete',
    'lightMode',
    'darkMode',
    'changeLang',
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ActionButton;
