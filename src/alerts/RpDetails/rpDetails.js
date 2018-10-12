import React, { Component } from 'react';

export default class RpDetails extends Component {
	state = { update: false }

	componentWillReceiveProps = (newProps) => {
	  if (this.props !== newProps) {
	    this.setState({ update: true })
	    this.forceUpdate();
	  }
	}

	handleComment = () => {
	  this.props.hideMe();
	  this.props.onCommentModal();
	}
	render() {
	  const { isRpDetailsVisible, toggleRpDetails, rightPaneDetails, onCommentModal, commentsLength, hideMe } = this.props;

	  return (
	    <div className={`c-modal`}>
	      <div className="c-modal__view js-modal-view">
	        <div className="c-modal__head">
	          <legend className="c-modal__title">
	            {this.props.rightPaneDetails.name}
	          </legend>
	        </div>
	        <div className="c-modal__body c-modal__body--scrollable">
	          <div className="c-scroll-box js-scroll-box has-fold">
	            <div className="c-scroll-box__scrollable js-scrollable">
	              <div className="js-scroll-box-content">
	                <ul className="g-list g-list--spacing">
	                  <li className="g-list__item">
	                    <dl aria-label="UID-System: OALE-818001" className="o-attribute o-attribute--inline">
	                      <dt className="o-attribute__term">
													UID-System
	                      </dt>
	                      <dd className="o-attribute__value">
	                        {this.props.rightPaneDetails.uid}
	                      </dd>
	                    </dl>
	                  </li>
	                  <li className="g-list__item">
	                    <dl aria-label="Name: Data Quality" className="o-attribute o-attribute--inline">
	                      <dt className="o-attribute__term">
													Name
	                      </dt>
	                      <dd className="o-attribute__value">
	                        {this.props.rightPaneDetails.name}
	                      </dd>
	                    </dl>
	                  </li>
	                  <li className="g-list__item">
	                    <dl aria-label="Rule name: KY_HYG_100_7" className="o-attribute o-attribute--inline">
	                      <dt className="o-attribute__term">
													Rule name
	                      </dt>
	                      <dd className="o-attribute__value">
	                        {this.props.rightPaneDetails.listId}
	                      </dd>
	                    </dl>
	                  </li>
	                  <li className="g-list__item">
	                    <dl aria-label="Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor tortor eu urna vulputate, ac convallis erat pharetra. Vivamus ac est iaculis, venenatis nunc eu, posuere erat. Nam posuere consectetur fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc scelerisque nunc vitae augue finibus, ac convallis quam vulputate. Praesent et facilisis odio. Donec dignissim nisi dui, quis porttitor leo accumsan mollis. Suspendisse accumsan posuere dui eu tempus. Mauris placerat felis lectus, eget pharetra sapien sodales." className="o-attribute">
	                      <dt className="o-attribute__term">
													Description
	                      </dt>
	                      <dd className="o-attribute__value">
	                        {this.props.rightPaneDetails.description}
	                      </dd>
	                    </dl>
	                  </li>
	                  <li className="g-list__item">
	                    <dl aria-label="Information: Data quality insufficient to ensure proper AML/CTF compliance" className="o-attribute">
	                      <dt className="o-attribute__term">
													Information
	                      </dt>
	                      <dd className="o-attribute__value">
	                        {this.props.rightPaneDetails.information}
	                      </dd>
	                    </dl>
	                  </li>

	                </ul>
	                <div className="o-heading o-heading--secondary">
	                  <h1 className="o-heading__title">Basic information</h1>
	                </div>
	                <ul className="g-list g-list--spacing">
	                  <li className="g-list__item">
	                    <dl aria-label="Score: 100" className="o-attribute o-attribute--inline">
	                      <dt className="o-attribute__term">
													Score
	                      </dt>
	                      <dd className="o-attribute__value">
	                        {this.props.rightPaneDetails.score}
	                      </dd>
	                    </dl>
	                  </li>
	                  <li className="g-list__item">
	                    <dl aria-label="Priority: High" className="o-attribute o-attribute--inline u-attention-required">
	                      <dt className="o-attribute__term">
													Priority
	                      </dt>
	                      <dd className="o-attribute__value">
	                        {this.props.rightPaneDetails.priority}
	                      </dd>
	                    </dl>
	                  </li>
	                  <li className="g-list__item">
	                    <dl aria-label="Date: 21.01.2017 at 11:23:26" className="o-attribute o-attribute--inline">
	                      <dt className="o-attribute__term">
													Date
	                      </dt>
	                      <dd className="o-attribute__value">
	                        {this.props.rightPaneDetails.createdOn}
	                      </dd>
	                    </dl>
	                  </li>
	                  <li className="g-list__item">
	                    <dl aria-label="Status: EDD Required" className="o-attribute o-attribute--inline">
	                      <dt className="o-attribute__term">
													Status
	                      </dt>
	                      <dd className="o-attribute__value">
	                        {this.props.rightPaneDetails.workflowStatusDescription}
	                      </dd>
	                    </dl>
	                  </li>
	                </ul>
	              </div>
	            </div>
	          </div>
	        </div>
	        <div className="c-modal__foot">
	          <div className="c-modal__actions c-modal__actions--secondary">
	            <button className="o-btn u-accent-color" onClick={hideMe}>
								Cancel
	            </button>
	          </div>
	          <div className="c-modal__actions">
	            <button className="o-btn" onClick={this.handleComment}>
								Comments {commentsLength && `(${commentsLength})`}
	            </button>
	            <button className="o-btn o-btn--primary" onClick={hideMe}>
								Analysis
	            </button>
	          </div>
	        </div>
	      </div>
	    </div>
	  );
	}
}
