import React from 'react';
import PropTypes from 'prop-types';
import _noop from 'lodash/noop';
import { FormattedMessage } from 'react-intl';

import CustomBtn from 'src/components/customBtn/customBtn';

import 'src/common/css/mockcss/style.css';

const GridOptions = (props) => {
  const { toggleFilter, selectedItems, toggleParameters, toggleSort, toggleDisplayUp, toggleIconView, sortedCasesListFetch,
    toggleTableView, sortedAlertListFetch, closeRightPane, isRpOpen, isTableView, toggleRightPane, maxRecordPerCasePage, maxRecordPerAlertPage, isCase } = props;
  const isVisible = selectedItems.length !== 0 ? 'is-visible' : '';
  let pageNumer = 0;
  return (
    <div className="c-content__actions  js-content-actions">
      <ul className={`g-list g-list--spacing g-list--inline g-list--will-hide js-will-hide ${isVisible}`}>
        <li className="g-list__item">
          <CustomBtn className="o-btn o-btn--primary js-to-analysis">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" width="100%" height="100%" className="o-icon o-icon--linkchart o-icon--prepended">
              <title>analysis-icon</title>
              <path d="M15.85 13.24a3 3 0 0 0-.66.08l-.24-.32c-.33-.47-.62-.86-.89-1.22a4.89 4.89 0 0 1-1.39-3.18V5.68a2.92 2.92 0 0 0 2-2.75 3 3 0 0 0-5.91 0 2.92 2.92 0 0 0 1.92 2.73v2.87a3.28 3.28 0 0 1-1.12 3l-3.42 3.79a2.91 2.91 0 1 0 2 2.74 2.87 2.87 0 0 0-.42-1.49l2.83-3.13.58-.7c.26-.31.46-.56.64-.8.22.34.47.67.74 1s.53.71.85 1.16l.19.25a2.88 2.88 0 0 0-.62 1.78 3 3 0 1 0 3-2.92zM5.15 19a.95.95 0 1 1 1-.94 1 1 0 0 1-1 .94zm6.56-17a1 1 0 0 1 1 .95 1 1 0 0 1-2 0 1 1 0 0 1 1-.95zm4.13 15.13a.95.95 0 1 1 1-.95 1 1 0 0 1-.99.93z" />
            </svg>
            <FormattedMessage id={ 'global.analysis' } /></CustomBtn>
        </li>
        <li className="g-list__item">
          <CustomBtn className="o-btn o-btn--warning">
            <svg data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.55 12.54" width="100%" height="100%" className="o-icon o-icon--delete o-icon--prepended">
              <title>trash-icon</title>
              <path d="M10.93 2.95H8.11V.62A.62.62 0 0 0 7.49 0H4.06a.62.62 0 0 0-.62.62v2.33H.62a.62.62 0 0 0 0 1.24h.76v6.35a2 2 0 0 0 2 2h4.8a2 2 0 0 0 2-2V4.18h.76a.62.62 0 0 0 0-1.24zM4.67 1.24h2.2v1.71h-2.2zm4.27 9.29a.77.77 0 0 1-.76.78H3.37a.77.77 0 0 1-.76-.78V4.18h6.33z" />
            </svg>
            <FormattedMessage id={ 'global.delete' } />
          </CustomBtn>
        </li>
        <li className="g-list__item js-empty-list-item">
          {selectedItems.length} <FormattedMessage id={ 'global.itemSelected' } />
        </li>
      </ul>
      <ul className="g-list g-list--spacing g-list--inline">
        <li className="g-list__item">
          <CustomBtn className="o-btn o-btn--neutral js-popover-trigger  o-btn has-popover-displayed" onClick={toggleFilter}>
            <svg width="16" height="10" viewBox="0 0 16 10" xmlns="http://www.w3.org/2000/svg" className="o-icon o-icon--prepended">
              <title>filter-icon</title>
              <path d="M1.438 1.5h13.124M3.188 5h9.624M4.938 8.5h6.125" stroke="#4F40F4" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <FormattedMessage id={ 'filter.filter' } />
          </CustomBtn>
        </li>
        <li className="g-list__item">
          <CustomBtn className="o-btn o-btn--neutral" onClick={toggleSort}>
            <svg width="16" height="13" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.37 11.64" className="o-icon o-icon--prepended">
              <title>sort-icon</title>
              <path d="M3.72.23a.7.7 0 0 0-1 0L.2 2.77a.7.7 0 0 0 1 1l1.37-1.39v8.56a.7.7 0 0 0 1.4 0V2.47l1.27 1.29a.7.7 0 0 0 1-1zm9.44 7.56a.7.7 0 0 0-1 0L10.8 9.17V.7a.7.7 0 0 0-1.4 0v8.38L8.12 7.79a.7.7 0 1 0-1 1l2.52 2.54a.7.7 0 0 0 1 0l2.52-2.54a.7.7 0 0 0 0-1z" />
            </svg>
            <FormattedMessage id={ 'global.sort' } /></CustomBtn>
        </li>
        <li className="g-list__item">
          <CustomBtn className="o-btn o-btn--neutral" onClick={toggleDisplayUp}>
            <svg width="16" height="13" viewBox="0 0 16 13" xmlns="http://www.w3.org/2000/svg" className="o-icon o-icon--prepended">
              <title>display-icon</title>
              <g transform="translate(1 1)" stroke="#888D95" fill="none" fillRule="evenodd"><path d="M9 11V0" strokeWidth="1.467" strokeLinejoin="round" /><path d="M5 11V0" strokeWidth="1.467" /><rect strokeWidth="1.283" width="14" height="11" rx=".917" /><path d="M14 1H0" strokeWidth="1.467" strokeLinejoin="round" />
              </g>
            </svg>
            <FormattedMessage id={ 'global.display' } /></CustomBtn>
        </li>
        <li className="g-list__item">
          <div className="c-multi-btn">
            <CustomBtn className={`o-btn o-btn--tooltip c-multi-btn__item ${!isTableView ? 'is-active' : ''} js-row-cards-view-trigger`} ariaLabel="Row cards" 
              onClick={() => {
                toggleIconView();
                closeRightPane();
              }}>
              <svg width="14" height="10" viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg" className="o-icon o-icon--list c-multi-btn__icon">
                <title>Combined Shape</title>
                <path d="M4.136 1.69a.7.7 0 0 1 0-1.4H13.3a.7.7 0 0 1 0 1.4H4.136zm0 4.01a.7.7 0 0 1 0-1.4H13.3a.7.7 0 0 1 0 1.4H4.136zm0 4.01a.7.7 0 0 1 0-1.4H13.3a.7.7 0 0 1 0 1.4H4.136zM.7 1.69a.7.7 0 0 1 0-1.4h.573a.7.7 0 0 1 0 1.4H.7zm0 4.01a.7.7 0 0 1 0-1.4h.573a.7.7 0 0 1 0 1.4H.7zm0 4.01a.7.7 0 0 1 0-1.4h.573a.7.7 0 0 1 0 1.4H.7z" />
              </svg>
            </CustomBtn>

            <CustomBtn className={`o-btn o-btn--tooltip c-multi-btn__item ${isTableView ? 'is-active' : ''} js-row-cards-view-trigger`} ariaLabel="Table view" 
              onClick={() => {
                toggleTableView();
                closeRightPane();
                isCase ? sortedCasesListFetch(pageNumer, maxRecordPerCasePage) : sortedAlertListFetch(pageNumer, maxRecordPerAlertPage);
              }} >
              <svg width="14" height="10" viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg" className="o-icon o-icon--list c-multi-btn__icon">
                <title>Combined Shape</title>
                <path d="M2.29 13.3a.7.7 0 0 1-1.4 0V.7a.7.7 0 0 1 1.4 0v12.6zm4.41 0a.7.7 0 0 1-1.4 0V.7a.7.7 0 0 1 1.4 0v12.6zm4.41 0a.7.7 0 0 1-1.4 0V.7a.7.7 0 0 1 1.4 0v12.6z" />
              </svg>
            </CustomBtn>
          </div>
        </li>
        <li className="g-list__item">
          <CustomBtn className="o-btn o-btn--neutral js-popover-trigger" onClick={toggleParameters}>
            <svg title="Settings" className="o-icon o-icon--parameters">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 14" id="settings-icon" width="100%" height="100%"><title>Settings</title>
                <path d="M9.455 3.28a2.216 2.216 0 0 0-1.31 0V1a.655.655 0 1 1 1.31 0v2.28zm0 4.167V13a.655.655 0 1 1-1.31 0V7.447a2.216 2.216 0 0 0 1.31 0zM8.8 7.016a1.66 1.66 0 0 1-1.67-1.652c0-.912.746-1.653 1.67-1.653.924 0 1.67.741 1.67 1.653A1.66 1.66 0 0 1 8.8 7.016zm-5.945-.463a2.216 2.216 0 0 0-1.31 0V1a.655.655 0 1 1 1.31 0v5.553zm0 4.167V13a.655.655 0 1 1-1.31 0v-2.28a2.216 2.216 0 0 0 1.31 0zm-.655-.431c-.924 0-1.67-.741-1.67-1.653A1.66 1.66 0 0 1 2.2 6.984c.924 0 1.67.74 1.67 1.652 0 .912-.746 1.653-1.67 1.653z" transform="translate(.349)"></path></svg>
            </svg>
          </CustomBtn>
        </li>
        <li className="g-list__item">
          <button className={`o-btn o-btn--neutral o-btn--tooltip ${isRpOpen ? 'is-active' : ''} o-btn--tooltip-right`} type="button" aria-label="Toggle sidebar" onClick={() => toggleRightPane(selectedItems)}>
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

GridOptions.propTypes = {
  toggleFilter: PropTypes.func,
  selectedItems: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  sortedAlertListFetch: PropTypes.func,
  toggleParameters: PropTypes.func,
  toggleSort: PropTypes.func,
  toggleDisplayUp: PropTypes.func,
  toggleRightPane: PropTypes.func,
  toggleIconView: PropTypes.func,
  isCase: PropTypes.bool,
  // Todo one of type to stable one type
  maxRecordPerAlertPage: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  maxRecordPerCasePage: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  toggleTableView: PropTypes.func
}

GridOptions.defaultProps = {
  toggleFilter: _noop,
  selectedItems: null,
  toggleParameters: _noop,
  toggleSort: _noop,
  toggleDisplayUp: _noop,
  toggleRightPane: _noop,
  toggleIconView: _noop,
  toggleTableView: _noop
}

export default GridOptions;
