import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomPopOver from 'src/components/customPopOver/customPopOver';
import _noop from 'lodash/noop';

export default class Attribute extends Component {
  static propTypes = {
    state: PropTypes.string,
    varients: PropTypes.string,
    enableAttention: PropTypes.bool,
    term: PropTypes.string,
    value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    id: PropTypes.string,
    maxValue: PropTypes.number,
    callback: PropTypes.func
  };
  
  static defaultProps = {
    state: 'default',
    varients: 'default',
    enableAttention: false,
    term: null,
    value: null,
    id: 'none',
    maxValue: 100,
    callback: _noop
  };
  
  state = {istrue: false};

  popOverToggleF() {
    this.setState({istrue: false})
  }

  popOverToggle() {
    this.setState({istrue: true})
  }

  onClick = () => {
    this.props.onClick(this.props.refValue);
  }

  popOver() {
    return (
      <div className={`c-modal js-modal ${this.state.istrue ? '' : 'is-hidden'}`} id="full-text" onMouseLeave={this.popOverToggleF}>
        <div className="c-modal__view">
          <form action="">
            <div className="c-modal__head">
              <legend className="c-modal__title">{this.props.term}</legend>
              <button className="o-btn o-btn--concealed c-modal__maximize js-modal-maximize" type="button">
                <svg title="Maximize" className="o-icon o-icon--maximize">
                </svg>
              </button>
            </div>
            <div className="c-modal__body">
              <p>{this.props.value}</p>
            </div>
            <div className="c-modal__foot">
              <div className="c-modal__actions c-modal__actions--secondary">
                <button className="o-btn js-close-modal" type="button">
                  Close
                </button>
              </div>
              <div className="c-modal__actions">
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }

  render() {
    // Todo: need to optimize
    switch (this.props.varients) {
      case 'inline':
        return (
          <dl className={`o-attribute o-attribute--inline ${this.props.enableAttention ? 'u-attention-required' : ''} ow-pad`}>
            <dt className="o-attribute__term">
              {this.props.term}
            </dt>
            <dl className="o-attribute__value">
              {this.props.value}
            </dl>
          </dl>
        );

      case 'inline-icon':
        return (
          <dl style={{ justifyContent: 'left' }} className={`o-attribute o-attribute--inline ${this.props.enableAttention ? 'u-attention-required' : ''} ow-pad`}
            onClick={this.onClick}>
            <svg width="14" height="10" viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.688 8.348l.99.99c-.84.84-2.197.851-3.032.016L.619 7.33a2.144 2.144 0 0 1 .018-3.032L4.238.695A2.144 2.144 0 0 1 7.271.678l2.025 2.026a2.143 2.143 0 0 1-.016 3.032L7.736 7.28l-.99-.99L8.29 4.746a.743.743 0 0 0 .016-1.052L6.28 1.668a.744.744 0 0 0-1.052.017L1.626 5.287A.744.744 0 0 0 1.61 6.34l2.026 2.025a.743.743 0 0 0 1.052-.016zm4.624-6.696l-.99-.99a2.143 2.143 0 0 1 3.032-.016l2.027 2.025a2.144 2.144 0 0 1-.018 3.032L9.762 9.305c-.84.84-2.197.851-3.033.017L4.704 7.296a2.143 2.143 0 0 1 .016-3.032L6.264 2.72l.99.99L5.71 5.254a.743.743 0 0 0-.016 1.052L7.72 8.332a.744.744 0 0 0 1.052-.017l3.603-3.602a.744.744 0 0 0 .016-1.052l-2.026-2.025a.743.743 0 0 0-1.052.016z"/>
            </svg>
            <dt className="o-attribute__term">
              {this.props.term && this.props.term.slice(0, this.props.maxValue)}{this.props.term && this.props.term.length > this.props.maxValue && '...'}
            </dt>
          </dl>
        );

      case 'note':
        return (
          <dl className={`o-attribute o-attribute--note ${this.props.enableAttention ? 'u-attention-required' : ''}`}>
            <dt className="o-attribute__term">
              {this.props.term}
            </dt>
            <dl className="o-attribute__value">
              {this.props.value}
            </dl>
          </dl>
        );

      case 'truncated':
        return (<div>
          {this.popOver()}
          <dl className={`o-attribute ${this.props.enableAttention ? 'u-attention-required' : ''} ow-pad`}>
            <dt className="o-attribute__term"> {this.props.term} </dt>
            <dl className="o-attribute__value">{this.props.value && this.props.value.slice(0, this.props.maxValue)}{this.props.value && this.props.value.length > this.props.maxValue && '...'}</dl>
            {this.props.value && this.props.value.length > this.props.maxValue &&
                <button id={this.props.id} className="o-btn o-btn--inline o-attribute__all u-accent-color o-btn--small js-modal-trigger" type="button" data-modal="full-text" onClick={this.props.callback}>
                  View all
                </button>}
          </dl>
        </div>
        );

      default:
        return (
          <dl className={`o-attribute ${this.props.enableAttention ? 'u-attention-required' : ''} ow-pad`}>
            <dt className="o-attribute__term ">
              {this.props.term}
            </dt>
            <dl className="o-attribute__value">
              {this.props.value}
            </dl>
          </dl>
        );
    }
  }
}
