import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _map from 'lodash/map';
import _isNaN from 'lodash/isNaN';

import CusButton from 'src/components/CusButton/cusButton';

export default class CusPagination extends Component {
  static propTypes = {
    maxRecords: PropTypes.number,
    pageReturned: PropTypes.number,
    recordsPerPage: PropTypes.number,
    onChange: PropTypes.func
  }

  state = {
    pageNumber: this.props.pageReturned + 1
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.pageReturned !== nextProps.pageReturned) {
      this.setState({ pageNumber: nextProps.pageReturned + 1 })
    }
  }

  onChange = (event) => {
    this.setState({ pageNumber: _isNaN(parseInt(event.target.id, 10)) ? 1 : parseInt(event.target.id, 10) },
      () => this.props.onChange(this.state.pageNumber));
  }

  render() {
    const { maxRecords, recordsPerPage, pageReturned } = this.props;
    const { pageNumber } = this.state;
    let pages = [...Array(Math.ceil(maxRecords / recordsPerPage))]
    return (
      <div className="c-pagination-wrapper js-pagination-wrapper">
        <div className="c-pagination  js-table-view js-pagination">
          <ul className="c-pagination__list u-text-neutral js-pagination-list">
            <li className="c-pagination__item">
              <CusButton
                varients='neutral'
                ariaLabel="Previous"
                id={ parseInt(pageNumber - 1, 10) }
                onClick={this.onChange}
                disabled={pageNumber <= 1}>
                <svg width="6" height="9" viewBox="0 0 6 9" xmlns="http://www.w3.org/2000/svg"><title>Icon</title><path d="M2.229 4.5l3.114 2.978-.968 1.012L.971 5.235A1.017 1.017 0 0 1 .94 3.797l.032-.032L4.375.51l.968 1.012L2.229 4.5z" /></svg>
              </CusButton>
            </li>
            {_map(pages, (each, i) => {
              return (
                <div key={i}>
                  <li className="c-pagination__item">
                    <a className={`c-pagination__link js-pagination-link u-link-reset ${pageReturned === i ? 'is-active' : ''}`}
                      id={i + 1}
                      onClick={this.onChange}>
                      {i + 1}
                    </a>
                  </li>
                </div>
              )
            }
            )}
            <li className="c-pagination__item">
              <CusButton
                varients='neutral'
                ariaLabel="Next"
                id={ parseInt(pageNumber + 1, 10) }
                onClick={this.onChange}
                disabled={pageNumber === Math.ceil(maxRecords / recordsPerPage)}>
                <svg className='o-icon-rotate180' width="6" height="9" viewBox="0 0 6 9" xmlns="http://www.w3.org/2000/svg"><title>Icon</title><path d="M2.229 4.5l3.114 2.978-.968 1.012L.971 5.235A1.017 1.017 0 0 1 .94 3.797l.032-.032L4.375.51l.968 1.012L2.229 4.5z" /></svg>
              </CusButton>
            </li>
          </ul>
          <form className="c-pagination__form">
            <input className="c-pagination__input js-pagination-input" type="number" min="1" max={Math.ceil(maxRecords / recordsPerPage)} disabled value={pageNumber}/>
            <span className="c-pagination__amount">
            /{Math.ceil(maxRecords / recordsPerPage)}
            </span>
          </form>
        </div>
      </div>
    )
  }
}
