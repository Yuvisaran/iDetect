import React, { Component } from 'react';

import PropTypes from 'prop-types';
import moment from 'moment';

export default class Comment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="c-comment ">
        <time className="c-comment__date">
          {moment(this.props.date).format('DD:MM:YYYY [at] h:mm:ss a')}
        </time>
        <div className="c-comment__content">
          {this.props.comment}
        </div>
        <p className="c-comment__author u-accent-color">
          {this.props.author}
        </p>
      </div>
    );
  }
}

Comment.propTypes = {
  state: PropTypes.string,
  varients: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.number,
  comment: PropTypes.string
};

Comment.defaultProps = {
  state: 'default',
  varients: 'default',
  author: '',
  date: null,
  comment: ''
};
