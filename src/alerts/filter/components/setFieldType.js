import React, { Fragment } from 'react';
import { Field } from 'redux-form';
import _filter from 'lodash/filter';
import _isEmpty from 'lodash/isEmpty';

const SetFieldType = ({ index, member, allFieldDisplay, fieldTypeSelected }) => {
  let switchValue = _filter(allFieldDisplay, { 'name': fieldTypeSelected[index].field });
  switchValue = _isEmpty(switchValue) ? '' : switchValue[0].type;
  switch (switchValue) {
    case 'String':
      return (<fieldset className="c-form__field">
        <Field name={`${member}.value`} component="input" type="text" placeholder="value"
          className="o-input ow-border" />
      </fieldset>);

    case 'Number':
      return (
        <Fragment>
          <fieldset className="c-form__field ">
            <Field name={`${member}.value`} component="input" type="number" placeholder="from"
              className="o-input ow-border ow-score" />
            <Field name={`${member}.value1`} component="input" type="number" placeholder="to"
              className="o-input ow-border ow-score ow-flt" />
          </fieldset>
        </Fragment>
      );

    case 'Date':
      return (
        <Fragment>
          <fieldset className="c-form__field c-form__field--float">
            <div className="c-form__sub-field">
              {/* <label className="o-label" htmlFor="fromDate">From</label> */}
              <Field name={`${member}.value`} component="input" className="o-input o-input--date js-datepicker ow-date ow-border" type="date" id="fromDate" data-format="DD/MM/YYYY" />
            </div>
          </fieldset>
          <fieldset className="c-form__field c-form__field--float ow-flt">
            <div className="c-form__sub-field">
              {/* <label className="o-label" htmlFor="toDate">To</label> */}
              <Field name={`${member}.value1`} component="input" className="o-input o-input--date js-datepicker ow-date ow-border" type="date" id="toDate" data-format="DD/MM/YYYY" />
            </div>
          </fieldset>
        </Fragment>
      );
    case 'DateTime':
      return (
        <Fragment>
          <fieldset className="c-form__field c-form__field--float">
            <div className="c-form__sub-field">
              {/* <label className="o-label" htmlFor="fromDate">From</label> */}
              <Field name={`${member}.value`} component="input" className="o-input o-input--date js-datepicker ow-date ow-border" type="date" id="fromDate" data-format="DD/MM/YYYY" />
            </div>
          </fieldset>
          <fieldset className="c-form__field c-form__field--float ow-flt">
            <div className="c-form__sub-field">
              {/* <label className="o-label" htmlFor="toDate">To</label> */}
              <Field name={`${member}.value1`} component="input" className="o-input o-input--date js-datepicker ow-date ow-border" type="date" id="toDate" data-format="DD/MM/YYYY" />
            </div>
          </fieldset>
        </Fragment>
      );
    case 'PRIORITY':
      return (
        <Fragment>
          <fieldset className="c-form__field ">
            <Field
              name={`${member}.value`}
              type="select"
              component="select"
              label="priority"
              className="o-select ow-wid">
              <option value=""></option>
              <option value="0" >0</option>
              <option value="1" >1</option>
              <option value="2" >2</option>
            </Field>
          </fieldset>
        </Fragment>
      );

    default:
      return (
        <fieldset className="c-form__field">
          <Field name={`${member}.value`} component="input" type="text" placeholder="value"
            className="o-input ow-dis ow-border" />
        </fieldset>
      );
  }
}

export default SetFieldType;
