import React from 'react';
import PropTypes from 'prop-types';
import _noop from 'lodash/noop';
import { FormattedMessage } from 'react-intl';
import CustomBtn from 'src/components/customBtn/customBtn';

import 'src/common/css/mockcss/style.css';

const GridCardOptions = (props) => {
  const { toggleFilter, addButton } = props;

  return (
    <div className="c-content__actions">
      {(addButton && <button className="o-btn o-btn--primary" type="button" style={{ top: '15px' }}>
        {addButton}
      </button>)}
      <ul className="g-list g-list--spacing g-list--inline">
        <li className="g-list__item">
          <CustomBtn className="o-btn o-btn--neutral js-popover-trigger  o-btn has-popover-displayed" onClick={toggleFilter}>
            <svg width="16" height="10" viewBox="0 0 16 10" xmlns="http://www.w3.org/2000/svg" className="o-icon o-icon--prepended">
              <title>filter-icon</title>
              <path d="M1.438 1.5h13.124M3.188 5h9.624M4.938 8.5h6.125" stroke="#4F40F4" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <FormattedMessage id={ 'global.filter' } />
          </CustomBtn>
        </li>
        <li className="g-list__item">
          <div className="c-multi-btn">
            <CustomBtn className="o-btn o-btn--tooltip c-multi-btn__item is-active js-row-cards-view-trigger">
              <svg width="14" height="10" viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg" className="o-icon o-icon--list c-multi-btn__icon">
                <title>Combined Shape</title>
                <path d="M4.136 1.69a.7.7 0 0 1 0-1.4H13.3a.7.7 0 0 1 0 1.4H4.136zm0 4.01a.7.7 0 0 1 0-1.4H13.3a.7.7 0 0 1 0 1.4H4.136zm0 4.01a.7.7 0 0 1 0-1.4H13.3a.7.7 0 0 1 0 1.4H4.136zM.7 1.69a.7.7 0 0 1 0-1.4h.573a.7.7 0 0 1 0 1.4H.7zm0 4.01a.7.7 0 0 1 0-1.4h.573a.7.7 0 0 1 0 1.4H.7zm0 4.01a.7.7 0 0 1 0-1.4h.573a.7.7 0 0 1 0 1.4H.7z" />
              </svg>
            </CustomBtn>

            <CustomBtn className="o-btn o-btn--tooltip c-multi-btn__item is-active js-row-cards-view-trigger">
              <svg width="14" height="10" viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg" className="o-icon o-icon--list c-multi-btn__icon">
                <title>Combined Shape</title>
                <path d="M2.29 13.3a.7.7 0 0 1-1.4 0V.7a.7.7 0 0 1 1.4 0v12.6zm4.41 0a.7.7 0 0 1-1.4 0V.7a.7.7 0 0 1 1.4 0v12.6zm4.41 0a.7.7 0 0 1-1.4 0V.7a.7.7 0 0 1 1.4 0v12.6z" />
              </svg>
            </CustomBtn>
          </div>
        </li>
        <li className="g-list__item">
          <button className="o-btn o-btn--neutral o-btn--tooltip o-btn--tooltip-right" type="button" aria-label="Toggle sidebar">
            <svg title="Toggle sidebar" className="o-icon o-icon--sidebar">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 12" id="sidebar-icon" width="100%" height="100%"><title>Sidebar</title>
                <path d="M9.332 11h-1.33V1h1.33v10zm3.797-.665a.206.206 0 0 0 .206-.206V1.871a.206.206 0 0 0-.206-.206H1.871a.206.206 0 0 0-.206.206v8.258c0 .114.092.206.206.206h11.258zm0 1.33H1.871a1.536 1.536 0 0 1-1.536-1.536V1.871c0-.848.688-1.536 1.536-1.536h11.258c.848 0 1.536.688 1.536 1.536v8.258c0 .848-.688 1.536-1.536 1.536z"></path></svg>
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
}

GridCardOptions.propTypes = {
  toggleFilter: PropTypes.func,
  toggleParameters: PropTypes.func,
  addButton: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ])
}

GridCardOptions.defaultProps = {
  toggleFilter: _noop,
  toggleParameters: _noop,
  addButton: ''
}

export default GridCardOptions;
