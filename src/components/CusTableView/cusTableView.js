import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _map from 'lodash/map';

export default class CusTableView extends Component {
    static propTypes = {
      head: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
      ]),
      body: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
      ]),
      alertHiddenFields: PropTypes.object,
      id: PropTypes.array,
      toggleRightPane: PropTypes.func,
      click: PropTypes.func
    }
    static defaultProps = {
      head: '',
      body: ''
    }
    state = { isOptionVisible: false }

    hideOption = () => {
      this.setState({ isOptionVisible: false })
    }
    charLimit = (value) => {
      let maxLength = 20
      let limitedWords = value.substr(0, maxLength);
      return limitedWords.substr(0, Math.min(limitedWords.length, limitedWords.lastIndexOf(' '))) + '...'
    }
    toggleOption = () => {
      this.setState({ isOptionVisible: !this.state.isOptionVisible })
    }

    riskLevelColor = (riskLevel, score) => {
      switch (true) {
        case (riskLevel.severe <= score):
          return 'o-risk-level o-risk-level--severe';
        case (riskLevel.high <= score && riskLevel.severe >= score):
          return 'o-risk-level o-risk-level--high';
        case (riskLevel.elevated <= score && riskLevel.high >= score):
          return 'o-risk-level o-risk-level--elevated';
        case (riskLevel.guarded <= score && riskLevel.elevated >= score):
          return 'o-risk-level o-risk-level--guarded';
        default:
          return 'o-risk-level o-risk-level--low';
      }
    }
    render() {
      return (
        <table className="c-table js-table">
          <thead className="c-table__head">
            <tr><th className="c-table__head-data c-table__more-btn-column"></th>
              <th className="c-table__head-data" title="Risk level"><span className="u-visually-hidden">Risk level</span></th>
              {_map(this.props.head, (item, i) => {
                return (<th key={i} className={`c-table__head-data c-table__head-data--sortable ${this.props.id[i]}`} id={item.id} name={item.id} onClick={this.props.click}>
                  {item.label}
                  <span className="c-table__sort">
                    <svg className="o-icon o-icon--dropdown c-table__sort-icon" role="img" title="Sorting" width="100%" height="100%" viewBox="0 0 9 16" xmlns="http://www.w3.org/2000/svg"><title>dropdown</title><path d="M4.443 12.645l2.246-2.2a1 1 0 0 1 1.4 1.429l-2.947 2.885a1 1 0 0 1-1.399 0L.797 11.874a1 1 0 1 1 1.399-1.429l2.247 2.2zm0-9.742l-2.247 2.2a1 1 0 1 1-1.4-1.428L3.744.789a1 1 0 0 1 1.4 0L8.09 3.675a1 1 0 1 1-1.4 1.429l-2.246-2.2z" /></svg>
                  </span>
                </th>);
              })}
            </tr>
          </thead>
          {_map(this.props.body, (each, i) =>
            (<tbody key={i} className="c-table__body" onClick={() => this.props.toggleRightPane(each.uid)}>
              <tr className="c-table__row js-table-row">
                <td className="c-table__data c-table__data--action" data-editable="0">
                  <button className="o-more-btn c-table__more-btn o-more-btn--thin js-popover-trigger" type="button" onClick={() => {
                  }
                  }>
                    <span className="u-visually-hidden">More</span>
                  </button>
                </td>
                <td className="c-table__data c-table__data--risk" data-editable="0">
                  {each.orgUnitObj ? <span className={this.riskLevelColor(each.orgUnitObj.riskLevel, each.score)}><span className="u-visually-hidden">Guarded</span></span>
                    : <span className='o-risk-level o-risk-level--severe'><span className="u-visually-hidden">Guarded</span></span>}
                </td>
                <td className="c-table__data" data-editable="1">
                  {/* TODO : put scenarioName instead of name once backend name changed */}
                  {!this.props.alertHiddenFields.name && each.name.length > 20
                    ? this.charLimit(each.name) : each.name }
                </td>
                <td className="c-table__data" data-editable="1">
                  {!this.props.alertHiddenFields.createdBy && each.createdBy}
                </td>
                <td className="c-table__data" data-editable="0">
                  <span className="o-badge u-white">
                    {!this.props.alertHiddenFields.uid && each.uid}
                  </span>
                </td>
                <td className="c-table__data" data-editable="0">
                  {!this.props.alertHiddenFields.priority && each.priority}
                </td>
                <td className="c-table__data" data-editable="0">
                  {!this.props.alertHiddenFields.score && each.score}
                </td>
                <td className="c-table__data" data-editable="0">
                  {!this.props.alertHiddenFields.createdOn && each.createdOn}
                </td>
                <td className="c-table__data" data-editable="1">
                  {!this.props.alertHiddenFields.updatedBy && each.updatedBy}
                </td>
                <td className="c-table__data" data-editable="1">
                  {!this.props.alertHiddenFields.updatedOn && each.updatedOn}
                </td>
                <td className="c-table__data" data-editable="1">
                  {!this.props.alertHiddenFields.assignTo && each.assignTo}
                </td>
                <td className="c-table__data" data-editable="1">
                  {!this.props.alertHiddenFields.assignToGroup && each.assignToGroup}
                </td>
                <td className="c-table__data" data-editable="1">
                  {!this.props.alertHiddenFields.dueDate && each.dueDate}
                </td>
                <td className="c-table__data" data-editable="1">
                  {!this.props.alertHiddenFields.workflowStatusDescription && each.workflowStatusDescription}
                </td>
                <td className="c-table__data" data-editable="1">
                  {!this.props.alertHiddenFields.description && each.description.length > 20 ? this.charLimit(each.description) : each.description}
                </td>
                <td className="c-table__data" data-editable="1">
                  {!this.props.alertHiddenFields.ruleName && each.ruleName}
                </td>
                <td className="c-table__data" data-editable="1">
                  {!this.props.alertHiddenFields.organizationId && each.organizationId}
                </td>
              </tr>
            </tbody>)
          )}
        </table>
      )
    }
}
