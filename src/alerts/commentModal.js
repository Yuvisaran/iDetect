import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _noop from 'lodash/noop';
import _map from 'lodash/map';
import { FormattedMessage } from 'react-intl';

import TextField from './../BootstrapComponent/TextField';
import Comment from './../BootstrapComponent/Comment';

export default class Modal extends Component {
  state = { newComment: '' }
  resetState = this.state;

  onChange = (event) => {
		this.setState({ newComment: event.target.value })
  }

  submit = () => {
		!!this.state.newComment && this.props.handleSubmit(this.state.newComment);
		this.setState(this.resetState);
		// this.props.changeVisbility();
  }

  render() {
		const { newComment } = this.state;
		const { title, comments, author, changeVisbility } = this.props;

    return (
			this.props.isOpen && <div className="c-modal">
				<div className="c-modal__view">
					<div className="c-modal__head">
						<legend className="c-modal__title">
							{title}
						</legend>
					</div>
					<div className="c-modal__body">
						<div style={{ "height": "300px", "overflowY": "scroll" }}>
						{_map(comments, (item, i) => (
								<Comment key={i} comment={item.comment} date={item.updatedOn} author={author}/>
								))}
						</div>
						<TextField name="comment" varients="comment-box" value={newComment} onChange={this.onChange}/>
					</div>
					<div className="c-modal__foot">
						<div className="c-modal__actions c-modal__actions--secondary">
							<button className="o-btn u-accent-color" type="button" onClick={changeVisbility}>
								<FormattedMessage id={ 'global.cancel' } />
							</button>
						</div>
						<div className="c-modal__actions">
							<button className="o-btn o-btn--primary" type="submit" onClick={this.submit}>
							<FormattedMessage id={ 'global.submit' } />
							</button>
						</div>
					</div>
				</div>
			</div>
    );
  }
}

Modal.propTypes = {
  state: PropTypes.string,
  varients: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  isOpen: PropTypes.bool,
  comments: PropTypes.array,
  changeVisbility: PropTypes.func,
  handleSubmit: PropTypes.func
};

Modal.defaultProps = {
  state: 'default',
  varients: 'default',
  title: '',
  author: '',
  comment: [],
  isOpen: false,
  changeVisbility: _noop,
  handleSubmit: _noop
};
