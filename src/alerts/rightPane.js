import React, { Component } from 'react';
import _map from 'lodash/map';
import _isEmpty from 'lodash/isEmpty';
import _noop from 'lodash/noop';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import CustomPopOver from 'src/components/customPopOver/customPopOver';
import Attribute from '../BootstrapComponent/Attribute';
import Accordion from '../BootstrapComponent/Accordion';

export default class RightPane extends Component {
  static propTypes = {
    rightPaneDetails: PropTypes.object,
    rightPaneHistoryFetch: PropTypes.func,
    allRightPaneHistoryData: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array
    ]).isRequired,
    isRpOpen: PropTypes.bool,
    allRightPaneRelatedData: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array
    ]).isRequired
  }

  static defaultProps = {
    rightPaneDetails: {},
    rightPaneHistoryFetch: _noop,
    isRpOpen: false
  }

  state = { visibleTab: 'Related', isRpPopOver: false }

  handleDownload = (filePath) => {
    this.props.onFileDownload(filePath);
  }

  handleUpload = (event) => {
    const { onFileUpload, rightPaneDetails, userId, availableLists } = this.props;

    onFileUpload(rightPaneDetails.uid, event.target.files[0], userId, availableLists);
  }

  renderDetails = () => {
    const { rightPaneDetails, allRightPaneRelatedData, commentsLength, onCommentModal } = this.props;
    const basicInfo = [
      { term: 'Score', value: rightPaneDetails.score },
      { enableAttention: true, term: 'Priority', value: rightPaneDetails.priority },
      { term: 'Date', value: rightPaneDetails.createdOn },
      { term: 'Status', value: rightPaneDetails.workflowStatusDescription }
    ]

    return (
      <div className={`c-tabs__item js-tabs-content ${this.state.visibleTab === 'Details' ? 'is-active' : ''}`}>
        <Attribute state="default" varients="inline" term="UID-System" value={rightPaneDetails.uid}></Attribute>
        <Attribute state="default" varients="inline" term="Name" value={rightPaneDetails.name}></Attribute>
        <Attribute state="default" varients="inline" term="Rule Name" value={rightPaneDetails.listId}></Attribute>
        <Attribute state="default" varients="truncated" term="Description" callback={this.props.onDescPopover} value={rightPaneDetails.description}></Attribute>
        <Attribute state="default" varients="default" term="Information" value={rightPaneDetails.information}></Attribute>
        <Accordion title="Basic informations">
          <div>
            {_map(basicInfo, (item, i) => (
              <Attribute key={i} state="default" varients="inline" enableAttention={item.enableAttention} term={item.term} value={item.value}></Attribute>
            ))}
          </div>
        </Accordion>
        <Accordion title="Events">
          {/* Todo: need requirement */}
        </Accordion>
        <Accordion title="Attachments">
          <div>
            {_map(allRightPaneRelatedData.documentList, (item, i) => (
              <Attribute key={i} varients='inline-icon' maxValue={25} term={item.documentName} refValue={item.orginalFilePath}
                onClick={this.handleDownload} />
            ))}
            <div className="upload-btn-wrapper">
              <button className="o-btn o-btn--neutral o-btn has-popover-displayed ow-expand">Upload a file</button>
              <input placeholder='upload' type='file' onChange={this.handleUpload} />
            </div>
          </div>
        </Accordion>
        <div>
          <button style={{ margin: '0px 5px', float: 'left', width: '45%' }} className="o-btn o-btn--primary" type="button">
            <FormattedMessage id={ 'alert.analysis' } />
          </button>
          <button style={{ margin: '0px 5px', float: 'left', width: '45%' }} className="o-btn u-accent-color" type="button" onClick={onCommentModal}>
            <FormattedMessage id={ 'alert.comments' } /> {commentsLength && `(${commentsLength})`}
          </button>
        </div>
      </div>
    );
  }

  render() {
    const { visibleTab, isRpPopOver } = this.state;
    const changeVisibility = (event) => {
      this.setState({ visibleTab: event.target.name });
    }
    // Rp : Right Pane
    const toggleRpPopOver = () => {
      this.setState({ isRpPopOver: !this.state.isRpPopOver });
    }
    const hidePopOver = () => {
      this.setState({ isRpPopOver: false });
    }
    const { isRpOpen, allRightPaneHistoryData,
      allRightPaneRelatedData } = this.props;

    const rpRelatedPopOver = () => (
      <CustomPopOver hidePopOver={hidePopOver}>
        <div className={`c-popover js-popover is-ready ${isRpPopOver ? '' : 'is-hidden'}`} style={{ top: '150px', left: '120px' }} >
          <div className="c-actions-list">
            <ul className="c-actions-list__list">
              <li className="c-actions-list__item">
                <button className="o-btn o-btn--inline" type="button">
                  <FormattedMessage id={ 'alert.sentToAnalysis' } />
                </button>
              </li>
              <li className="c-actions-list__item">
                <button className="o-btn o-btn--inline" type="button">
                  <FormattedMessage id={ 'alert.proprieties' } />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </CustomPopOver>
    );

    return (
      <div className={`c-content__sidebar js-content__sidebar ${isRpOpen ? '' : 'is-hidden'}`}>
        {rpRelatedPopOver()}
        <div className="c-tabs js-tabs c-sidebar__tabs c-popover-- is-ready">
          <nav className="c-tabs__nav">
            <ul className="c-tabs__list">
              <li className="c-tabs__title">
                <button className={`c-tabs__link u-text-medium js-tabs-link ${visibleTab === 'Related' ? 'is-active' : ''}`}
                  name="Related" onClick={changeVisibility}>
                  <FormattedMessage id={ 'alert.related' } />
                </button>
              </li>
              <li className="c-tabs__title">
                <button className={`c-tabs__link u-text-medium js-tabs-link ${visibleTab === 'Details' ? 'is-active' : ''}`}
                  name="Details" onClick={changeVisibility}>
                  <FormattedMessage id={ 'alert.details' } />
                </button>
              </li>
              <li className="c-tabs__title">
                <button className={`c-tabs__link u-text-medium js-tabs-link ${visibleTab === 'History' ? 'is-active' : ''}`}
                  name="History" onClick={changeVisibility}>
                  <FormattedMessage id={ 'alert.history' } />
                </button>
              </li>
            </ul>
          </nav>
          <div className="c-tabs__content">
            <div className={`c-tabs__item js-tabs-content ${visibleTab === 'Related' ? 'is-active' : ''}`}>
              <nav className="c-explorer">
                <button className="c-explorer__item js-explorer__item">
                  <FormattedMessage id={ 'alert.alertedEntities' } />{'  '}
                  <span className='entity'>{allRightPaneRelatedData.alertEntityCount > 0 ? '' : 0}</span> </button>
                {_map(allRightPaneRelatedData.alertEntityList, (each, i) => {
                  return (
                    <div key={i}>
                      <div className="relatedbar">
                      </div>
                      <div className="c-entity">
                        <div className="c-entity__icon">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" width="21" height="21" className="o-icon o-icon--prepended">
                            <title>analysis-icon</title>
                            <path d="M15.85 13.24a3 3 0 0 0-.66.08l-.24-.32c-.33-.47-.62-.86-.89-1.22a4.89 4.89 0 0 1-1.39-3.18V5.68a2.92 2.92 0 0 0 2-2.75 3 3 0 0 0-5.91 0 2.92 2.92 0 0 0 1.92 2.73v2.87a3.28 3.28 0 0 1-1.12 3l-3.42 3.79a2.91 2.91 0 1 0 2 2.74 2.87 2.87 0 0 0-.42-1.49l2.83-3.13.58-.7c.26-.31.46-.56.64-.8.22.34.47.67.74 1s.53.71.85 1.16l.19.25a2.88 2.88 0 0 0-.62 1.78 3 3 0 1 0 3-2.92zM5.15 19a.95.95 0 1 1 1-.94 1 1 0 0 1-1 .94zm6.56-17a1 1 0 0 1 1 .95 1 1 0 0 1-2 0 1 1 0 0 1 1-.95zm4.13 15.13a.95.95 0 1 1 1-.95 1 1 0 0 1-.99.93z"></path>
                          </svg>
                        </div>
                        <p className="c-entity__label">
                          {each.formattedFullName ? each.formattedFullName : each.name}
                        </p>
                        <button className="o-more-btn c-entity__more-btn o-more-btn--horizontal" type="button" onClick={toggleRpPopOver} >
                          <span className="u-visually-hidden">Actions</span>
                        </button>
                      </div>
                    </div>
                  )
                })}

                <button className="c-explorer__item js-explorer__item">
                  <FormattedMessage id={ 'alert.entities' } />{' '}
                  <span className='entity'> {allRightPaneRelatedData.entityCount > 0 ? '' : 0}</span></button>
                {_map(allRightPaneRelatedData.entityList, (each, i) => {
                  return (
                    <div key={i}>
                      <div className="relatedbar">
                      </div>
                      <div className="c-entity">
                        <div className="c-entity__icon">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" width="21" height="21" className="o-icon o-icon--prepended">
                            <title>analysis-icon</title>
                            <path d="M15.85 13.24a3 3 0 0 0-.66.08l-.24-.32c-.33-.47-.62-.86-.89-1.22a4.89 4.89 0 0 1-1.39-3.18V5.68a2.92 2.92 0 0 0 2-2.75 3 3 0 0 0-5.91 0 2.92 2.92 0 0 0 1.92 2.73v2.87a3.28 3.28 0 0 1-1.12 3l-3.42 3.79a2.91 2.91 0 1 0 2 2.74 2.87 2.87 0 0 0-.42-1.49l2.83-3.13.58-.7c.26-.31.46-.56.64-.8.22.34.47.67.74 1s.53.71.85 1.16l.19.25a2.88 2.88 0 0 0-.62 1.78 3 3 0 1 0 3-2.92zM5.15 19a.95.95 0 1 1 1-.94 1 1 0 0 1-1 .94zm6.56-17a1 1 0 0 1 1 .95 1 1 0 0 1-2 0 1 1 0 0 1 1-.95zm4.13 15.13a.95.95 0 1 1 1-.95 1 1 0 0 1-.99.93z"></path>
                          </svg>
                        </div>
                        <p className="c-entity__label">
                          {each.formattedFullName ? each.formattedFullName : each.name}
                        </p>
                        <button className="o-more-btn c-entity__more-btn o-more-btn--horizontal" type="button" onClick={toggleRpPopOver} >
                          <span className="u-visually-hidden">Actions</span>
                        </button>
                      </div>
                    </div>
                  )
                })}

                <button className="c-explorer__item js-explorer__item">
                  <FormattedMessage id={ 'alert.events' } />{' '}
                  <span className='entity'>{allRightPaneRelatedData.eventCount > 0 ? '' : 0}</span></button>
                {_map(allRightPaneRelatedData.eventList, (each, i) => {
                  return (
                    <div key={i}>
                      <div className="relatedbar">
                      </div>
                      <div className="c-entity">
                        <div className="c-entity__icon">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" width="21" height="21" className="o-icon o-icon--prepended">
                            <title>analysis-icon</title>
                            <path d="M15.85 13.24a3 3 0 0 0-.66.08l-.24-.32c-.33-.47-.62-.86-.89-1.22a4.89 4.89 0 0 1-1.39-3.18V5.68a2.92 2.92 0 0 0 2-2.75 3 3 0 0 0-5.91 0 2.92 2.92 0 0 0 1.92 2.73v2.87a3.28 3.28 0 0 1-1.12 3l-3.42 3.79a2.91 2.91 0 1 0 2 2.74 2.87 2.87 0 0 0-.42-1.49l2.83-3.13.58-.7c.26-.31.46-.56.64-.8.22.34.47.67.74 1s.53.71.85 1.16l.19.25a2.88 2.88 0 0 0-.62 1.78 3 3 0 1 0 3-2.92zM5.15 19a.95.95 0 1 1 1-.94 1 1 0 0 1-1 .94zm6.56-17a1 1 0 0 1 1 .95 1 1 0 0 1-2 0 1 1 0 0 1 1-.95zm4.13 15.13a.95.95 0 1 1 1-.95 1 1 0 0 1-.99.93z"></path>
                          </svg>
                        </div>
                        <p className="c-entity__label">
                          {each.formattedFullName ? each.formattedFullName : each.name}
                        </p>
                        <button className="o-more-btn c-entity__more-btn o-more-btn--horizontal" type="button" onClick={toggleRpPopOver} >
                          <span className="u-visually-hidden">Actions</span>
                        </button>
                      </div>
                    </div>
                  )
                })}

                <button className="c-explorer__item js-explorer__item">
                  <FormattedMessage id={ 'alert.transactions' } />{' '}
                  <span className='entity'>{allRightPaneRelatedData.transactionCount > 0 ? '' : 0}</span></button>
                {_map(allRightPaneRelatedData.transactionList, (each, i) => {
                  return (
                    <div key={i}>
                      <div className="relatedbar">
                      </div>
                      <div className="c-entity">
                        <div className="c-entity__icon">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" width="21" height="21" className="o-icon o-icon--prepended">
                            <title>analysis-icon</title>
                            <path d="M15.85 13.24a3 3 0 0 0-.66.08l-.24-.32c-.33-.47-.62-.86-.89-1.22a4.89 4.89 0 0 1-1.39-3.18V5.68a2.92 2.92 0 0 0 2-2.75 3 3 0 0 0-5.91 0 2.92 2.92 0 0 0 1.92 2.73v2.87a3.28 3.28 0 0 1-1.12 3l-3.42 3.79a2.91 2.91 0 1 0 2 2.74 2.87 2.87 0 0 0-.42-1.49l2.83-3.13.58-.7c.26-.31.46-.56.64-.8.22.34.47.67.74 1s.53.71.85 1.16l.19.25a2.88 2.88 0 0 0-.62 1.78 3 3 0 1 0 3-2.92zM5.15 19a.95.95 0 1 1 1-.94 1 1 0 0 1-1 .94zm6.56-17a1 1 0 0 1 1 .95 1 1 0 0 1-2 0 1 1 0 0 1 1-.95zm4.13 15.13a.95.95 0 1 1 1-.95 1 1 0 0 1-.99.93z"></path>
                          </svg>
                        </div>
                        <p className="c-entity__label">
                          {each.formattedFullName ? each.formattedFullName : each.name}
                        </p>
                        <button className="o-more-btn c-entity__more-btn o-more-btn--horizontal" type="button" onClick={toggleRpPopOver} >
                          <span className="u-visually-hidden">Actions</span>
                        </button>
                      </div>
                    </div>
                  )
                })}

                <button className="c-explorer__item js-explorer__item">
                  <FormattedMessage id={ 'alert.documents' } />{' '}
                  <span className='entity'>{allRightPaneRelatedData.documentCount > 0 ? '' : 0}</span></button>
                {_map(allRightPaneRelatedData.documentList, (each, i) => {
                  return (
                    <div key={i}>
                      <div className="relatedbar">
                      </div>
                      <div className="c-entity">
                        <div className="c-entity__icon">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" width="21" height="21" className="o-icon o-icon--prepended">
                            <title>analysis-icon</title>
                            <path d="M15.85 13.24a3 3 0 0 0-.66.08l-.24-.32c-.33-.47-.62-.86-.89-1.22a4.89 4.89 0 0 1-1.39-3.18V5.68a2.92 2.92 0 0 0 2-2.75 3 3 0 0 0-5.91 0 2.92 2.92 0 0 0 1.92 2.73v2.87a3.28 3.28 0 0 1-1.12 3l-3.42 3.79a2.91 2.91 0 1 0 2 2.74 2.87 2.87 0 0 0-.42-1.49l2.83-3.13.58-.7c.26-.31.46-.56.64-.8.22.34.47.67.74 1s.53.71.85 1.16l.19.25a2.88 2.88 0 0 0-.62 1.78 3 3 0 1 0 3-2.92zM5.15 19a.95.95 0 1 1 1-.94 1 1 0 0 1-1 .94zm6.56-17a1 1 0 0 1 1 .95 1 1 0 0 1-2 0 1 1 0 0 1 1-.95zm4.13 15.13a.95.95 0 1 1 1-.95 1 1 0 0 1-.99.93z"></path>
                          </svg>
                        </div>
                        <p className="c-entity__label">
                          {each.formattedFullName ? each.formattedFullName : each.name}
                        </p>
                        <button className="o-more-btn c-entity__more-btn o-more-btn--horizontal" type="button" onClick={toggleRpPopOver} >
                          <span className="u-visually-hidden">Actions</span>
                        </button>
                      </div>
                    </div>
                  )
                })}

                <button className="c-explorer__item js-explorer__item">
                  <FormattedMessage id={ 'alert.linkCharts' } />{' '}
                  <span className='entity'>{allRightPaneRelatedData.linkChartCount > 0 ? '' : 0} </span></button>
                {_map(allRightPaneRelatedData.linkChartList, (each, i) => {
                  return (
                    <div key={i}>
                      <div className="relatedbar">
                      </div>
                      <div className="c-entity">
                        <div className="c-entity__icon">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" width="21" height="21" className="o-icon o-icon--prepended">
                            <title>analysis-icon</title>
                            <path d="M15.85 13.24a3 3 0 0 0-.66.08l-.24-.32c-.33-.47-.62-.86-.89-1.22a4.89 4.89 0 0 1-1.39-3.18V5.68a2.92 2.92 0 0 0 2-2.75 3 3 0 0 0-5.91 0 2.92 2.92 0 0 0 1.92 2.73v2.87a3.28 3.28 0 0 1-1.12 3l-3.42 3.79a2.91 2.91 0 1 0 2 2.74 2.87 2.87 0 0 0-.42-1.49l2.83-3.13.58-.7c.26-.31.46-.56.64-.8.22.34.47.67.74 1s.53.71.85 1.16l.19.25a2.88 2.88 0 0 0-.62 1.78 3 3 0 1 0 3-2.92zM5.15 19a.95.95 0 1 1 1-.94 1 1 0 0 1-1 .94zm6.56-17a1 1 0 0 1 1 .95 1 1 0 0 1-2 0 1 1 0 0 1 1-.95zm4.13 15.13a.95.95 0 1 1 1-.95 1 1 0 0 1-.99.93z"></path>
                          </svg>
                        </div>
                        <p className="c-entity__label">
                          {each.formattedFullName ? each.formattedFullName : each.name}
                        </p>
                        <button className="o-more-btn c-entity__more-btn o-more-btn--horizontal" type="button" onClick={toggleRpPopOver} >
                          <span className="u-visually-hidden">Actions</span>
                        </button>
                      </div>
                    </div>
                  )
                })}
              </nav>
            </div>

            {this.renderDetails()}

            <div className={`c-tabs__item js-tabs-content ${visibleTab === 'History' ? 'is-active' : ''}`}>
              {_isEmpty(allRightPaneHistoryData) ? 'No History Found'
                : _map(allRightPaneHistoryData, (each, key) => {
                  return (
                    <div className='rp-space' key={key}>
                      <div className="u-well">
                        <div className='rp-font'>
                          {each.userName} <span className='rp-sp'> {' '}  {' '} </span> {new Date(each.auditTimestamp).toLocaleDateString()}
                          {new Date(each.auditTimestamp).toLocaleTimeString()}
                        </div>
                        <div className='rp-font-comment'>{each.auditComment}</div>
                      </div>
                      {'  '}
                      {' '}
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
        {/* <div className="c-content__sidebar-footer">
          <button className="o-btn o-btn--primary c-sidebar__tabs">analysis</button>
          <button className="o-btn c-sidebar__tabs">comments</button>
        </div> */}
      </div>
    );
  }
}
