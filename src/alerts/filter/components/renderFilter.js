import React, { Fragment } from 'react';
import { Field } from 'redux-form';
import _map from 'lodash/map';
import _filter from 'lodash/filter';
import _isEmpty from 'lodash/isEmpty';
import { FormattedMessage } from 'react-intl';

import SetFieldType from './setFieldType';

const RenderFilter = (props) => {
  //  Created a bound method to forward the component's properties on redux-form onSubmit
  const submit = (formValues, dispatch) => {
    filterSubmit(formValues, props);
  }
  return (
    <Fragment>
      <div className="o-heading o-heading--secondary">
        <h1 className="o-heading__title">Filter</h1>
        <button className="o-btn o-btn--transparent ow-clr" type="button" onClick={() => props.resetForm()}>
          <FormattedMessage id={ 'filter.removeFilters' } />
        </button>
      </div>
      <form onSubmit={props.handleSubmit(submit)}>
        {props.fields.map((member, index) => {
          return (
            <div className="c-popover__body g-block ow-clr" key={index}>
              <ul className="g-list g-list--borders g-list-display">
                <li className="g-list__item list_item_flt">
                  <fieldset className="c-form__field">
                    <Field
                      name={`${member}.field`}
                      type="select"
                      component="select"
                      label="Last"
                      className="o-select"
                    // onChange={setFieldType(index, member)}
                    >
                      <option value=""></option>
                      {props.allFieldDisplay.map((each, index) => (
                        <option value={each.name} key={index}>{each.description}</option>
                      ))}
                    </Field>
                  </fieldset>
                </li>
                <li className="g-list__item list_item_flt m-top ow-muti_btn">
                  <button className="o-btn o-btn--neutral o-btn--tooltip js-modal-trigger ow-height" onClick={() => props.toggleFilterPattern(index + 1)} type="button" aria-label="Settings" data-modal="alert-settings">
                    <svg title="Settings" className="o-icon o-icon--parameters">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 14" id="settings-icon" width="100%" height="100%"><title>Settings</title>
                        <path d="M9.455 3.28a2.216 2.216 0 0 0-1.31 0V1a.655.655 0 1 1 1.31 0v2.28zm0 4.167V13a.655.655 0 1 1-1.31 0V7.447a2.216 2.216 0 0 0 1.31 0zM8.8 7.016a1.66 1.66 0 0 1-1.67-1.652c0-.912.746-1.653 1.67-1.653.924 0 1.67.741 1.67 1.653A1.66 1.66 0 0 1 8.8 7.016zm-5.945-.463a2.216 2.216 0 0 0-1.31 0V1a.655.655 0 1 1 1.31 0v5.553zm0 4.167V13a.655.655 0 1 1-1.31 0v-2.28a2.216 2.216 0 0 0 1.31 0zm-.655-.431c-.924 0-1.67-.741-1.67-1.653A1.66 1.66 0 0 1 2.2 6.984c.924 0 1.67.74 1.67 1.652 0 .912-.746 1.653-1.67 1.653z" transform="translate(.349)"></path></svg>
                    </svg>
                  </button>
                </li>
                <li className="g-list__item list_item_flt m-top">
                  <SetFieldType index={index} member={member} allFieldDisplay={props.allFieldDisplay} fieldTypeSelected={props.fieldTypeSelected} />
                  {/* {setFieldType(index, member, props.allFieldDisplay, props.fieldTypeSelected)} */}
                </li>
                <li className="g-list__item list_item_flt m-top">
                  <button className="o-more-btn c-horizontal-card__more-btn js-popover-trigger filter-option"
                    onClick={props.toggleFilterRemove}>
                    <span className="u-visually-hidden"><FormattedMessage id={ 'filter.actions' } /></span>
                  </button>
                </li>
              </ul>
              {props.isFilterPatternVisible && props.filterPatternIndex === index + 1 &&
                <div className="g-radio-buttons popup-list" key={index}>

                  <fieldset className='o-radio-button'>
                    <Field component="input" type="radio" className="o-radio-button__input" id="exactMatch" name={`${member}.match`} value="exactMatch" onChange={props.toggleFilterPattern} />
                    <label htmlFor="exactMatch" className="o-radio-button__label"><FormattedMessage id={ 'filter.exactMatch' } /></label>
                  </fieldset>

                  <fieldset className='o-radio-button'>
                    <Field component="input" type="radio" className="o-radio-button__input" id="contains" name={`${member}.match`} value="contains" onChange={props.toggleFilterPattern} />
                    <label htmlFor="contains" className="o-radio-button__label"><FormattedMessage id={ 'filter.contains' } /></label>
                  </fieldset>

                  <fieldset className='o-radio-button'>
                    <Field component="input" type="radio" className="o-radio-button__input" id="startsWith" name={`${member}.match`} value="startsWith" onChange={props.toggleFilterPattern} />
                    <label htmlFor="startsWith" className="o-radio-button__label"><FormattedMessage id={ 'filter.startWith' } /></label>
                  </fieldset>

                  <fieldset className='o-radio-button'>
                    <Field component="input" type="radio" className="o-radio-button__input" id="endsWith" name={`${member}.match`} value="endsWith" onChange={props.toggleFilterPattern} />
                    <label htmlFor="endsWith" className="o-radio-button__label"><FormattedMessage id={ 'filter.endWith' } /></label>
                  </fieldset>
                </div>
              }
              <div className={`c-popover js-popover is-ready ow-popup ${props.isfilterRemove ? '' : 'is-hidden'}`} data-container=".js-content__scrollable" style={{ top: '80px', left: '370px' }}>
                <div className="c-popover__body">
                  <div className="c-actions-list">
                    <ul className="c-actions-list__list">
                      <li className="c-actions-list__item">
                        <button className="o-btn o-btn--inline" type="button" onClick={() => {
                          props.fields.remove(index);
                          props.toggleFilterRemove();
                        }}>
                          <FormattedMessage id={ 'global.delete' } />
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )
        })}

        <div className="c-popover__primary-actions ow-clr">
          <button type="button" onClick={() => props.fields.push({})}
            className="o-btn o-btn--neutral js-popover-trigger has-popover-displayed">
            <FormattedMessage id={ 'filter.addFilter' } />
          </button>
          {props.fields.length > 0 && <button className="o-btn o-btn--inline u-accent-color g-float" type="submit">
            <FormattedMessage id={ 'global.apply' } />
          </button>}
        </div>
      </form>
    </Fragment>
  )
}

const filterSubmit = (formValues, props) => {
  let fieldValue = {};
  let fieldValueArray = [];
  let allListDetails = props.allListDetails;
  const { id, userId, name, availableLists, alertIdSelectedSb, defaultDisplay } = props;
  _map(formValues.filter, (each) => {
    fieldValue = [];
    let defaultAlgorithm = 7;
    _filter(props.AlertsListFields, (list) => {
      if (list.hibernateName === each.field) {
        fieldValue = list;
      }
    });
    // TODO : use dataType instead of using hibernateName and change operator algorithm algorithm percent to be dynamic if needed
    if (fieldValue.hibernateName === 'createdOn' || fieldValue.hibernateName === 'updatedOn' || fieldValue.hibernateName === 'dueDate') {
      fieldValue['operator'] = '+';
      fieldValue['value'] = each.value;
      fieldValue['valueTo'] = each.value1 ? each.value1 : each.value;
      fieldValue['algorithm'] = 2;
      fieldValue['algorithmPercent'] = 80;
    } else if (fieldValue.hibernateName === 'score') {
      fieldValue['operator'] = '+';
      fieldValue['value'] = each.value;
      fieldValue['valueTo'] = each.value1 ? each.value1 : each.value;
      fieldValue['algorithm'] = 1;
    } else if (fieldValue.hibernateName === 'priority') {
      fieldValue['operator'] = '+';
      fieldValue['value'] = each.value;
      fieldValue['valueTo'] = each.value;
      fieldValue['algorithm'] = 7;
    } else {
      fieldValue['operator'] = '+';
      fieldValue['value'] = each.value;
      fieldValue['valueTo'] = each.value;
      fieldValue['algorithm'] = defaultAlgorithm;
      if (fieldValue['algorithm'] === 2) {
        fieldValue['algorithmPercent'] = 80;
      }
    }
    if (!_isEmpty(each.match)) {
      switch (each.match) {
        case 'exactMatch':
          defaultAlgorithm = 1;
          break;
        case 'contains':
          defaultAlgorithm = 9;
          break;
        case 'startsWith':
          defaultAlgorithm = 7;
          break;
        case 'endsWith':
          defaultAlgorithm = 8;
          break;
        default:
          defaultAlgorithm = 7;
      }
    }
    // TODO : if needs hibernate name to be change dynamic
    if (fieldValue.hibernateName != 'creationDtg' && fieldValue.hibernateName !== 'lastUpdateDtg' && fieldValue.hibernateName != 'priority' &&
      fieldValue.hibernateName != 'score' && fieldValue.hibernateName !== 'dueDate') {
      fieldValue['algorithm'] = defaultAlgorithm;
    }
    fieldValueArray.push(fieldValue)
  });
  allListDetails['listOfFields'] = fieldValueArray;
  props.getAllAlertFilterList(alertIdSelectedSb, id, userId, availableLists, name, fieldValueArray, allListDetails, defaultDisplay);
}

export default RenderFilter;
