import React from 'react';
import PropTypes from 'prop-types';
import _noop from 'lodash/noop';

const Modal = (props) => {
  const { isOpen, title, children, changeVisbility } = props;

  return (
    isOpen && <div className="c-modal">
      <div className="c-modal__view">
        <div className="c-modal__head">
          <legend className="c-modal__title">
            {title}
          </legend>
        </div>
        <div className="c-modal__body">
          {children}
        </div>
        <div className="c-modal__foot">
          <div className="c-modal__actions c-modal__actions--secondary">
            <button className="o-btn u-accent-color" type="button" onClick={changeVisbility}>
              Cancel
            </button>
          </div>
          {!props.saveDisabled && <div className="c-modal__actions">
            <button className="o-btn o-btn--primary" type="submit">
              Save
            </button>
          </div>}
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  changeVisbility: PropTypes.func
};

Modal.defaultProps = {
  children: 'default',
  title: '',
  isOpen: null,
  changeVisbility: _noop
};

export default Modal;
