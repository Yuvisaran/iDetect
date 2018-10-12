import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import _map from 'lodash/map';
import _isEmpty from 'lodash/isEmpty';
import _omit from 'lodash/omit';
import { withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { saveUserPreferenceParameters } from 'src/login/service/action';

class Parameters extends Component {
  state = {
    displayIntervalOfResfreshTimer: '',
    displayMaxRecordPerPageAlert: '',
    displayMaxRecordPerPageCase: '',
    displayTypeOfAlert: '',
    displayTypeOfCase: '',
    transactionField: ''
  }

  componentDidMount() {
    const { alertUserPreferenceList, isCase } = this.props;

    let displayIntervalOfResfreshTimer, displayMaxRecordPerPageAlert, displayMaxRecordPerPageCase,
      displayTypeOfAlert, displayTypeOfCase, transactionField;

    _map(alertUserPreferenceList, (each) => {
      if (each.preferenceCode === 'displayIntervalOfResfreshTimer') {
        displayIntervalOfResfreshTimer = each.preferenceValue;
      } else if (each.preferenceCode === 'displayMaxRecordPerPageAlert') {
        displayMaxRecordPerPageAlert = each.preferenceValue;
      } else if (each.preferenceCode === 'displayMaxRecordPerPageCase') {
        displayMaxRecordPerPageCase = each.preferenceValue;
      } else if (each.preferenceCode === 'displayTypeOfAlert') {
        displayTypeOfAlert = each.preferenceValue;
      } else if (each.preferenceCode === 'displayTypeOfCase') {
        displayTypeOfCase = each.preferenceValue;
      } else if (each.preferenceCode === 'transactionField') {
        transactionField = each.preferenceValue;
      }
    });
    this.setState({
      displayMaxRecordPerPageAlert: _isEmpty(displayMaxRecordPerPageAlert) ? '' : displayMaxRecordPerPageAlert,
      displayIntervalOfResfreshTimer: _isEmpty(displayIntervalOfResfreshTimer) ? '' : displayIntervalOfResfreshTimer,
      displayMaxRecordPerPageCase: _isEmpty(displayMaxRecordPerPageCase) ? '' : displayMaxRecordPerPageCase,
      displayTypeOfAlert: _isEmpty(displayTypeOfAlert) ? '' : displayTypeOfAlert,
      displayTypeOfCase: _isEmpty(displayTypeOfCase) ? '' : displayTypeOfCase,
      transactionField: _isEmpty(transactionField) ? '' : transactionField
    }, () => {
      this.handleInitialize();
    })
  }

  handleInitialize() {
    const initData = {
      'periodicity': this.state.displayIntervalOfResfreshTimer,
      'recordsAlertPerPage': this.state.displayMaxRecordPerPageAlert,
      'recordsCasePerPage': this.state.displayMaxRecordPerPageCase,
      'alertTypeDisplay': this.state.displayTypeOfAlert,
      'caseTypeDisplay': this.state.displayTypeOfAlert,
      'transactionField': this.state.transactionField
    };

    this.props.initialize(initData);
  }

  render() {
    const { isParametersVisible, toggleParameters, handleSubmit, isCase } = this.props;

    const typeDisplay = [{
      value: '0',
      label: 'Display open alerts'
    }, {
      value: '1',
      label: 'Display open & closed alerts'
    }, {
      value: '2',
      label: 'Display closed alerts'
    }];
    const typeCaseDisplay = [{
      value: '0',
      label: 'Display open cases'
    }, {
      value: '1',
      label: 'Display open & closed cases'
    }, {
      value: '2',
      label: 'Display closed cases'
    }];

    const transactionFields = [{
      value: 'localAmountDescription',
      label: 'Local amount'
    }, {
      value: 'baseAmountDescription',
      label: 'Base amount'
    }, {
      value: 'originalAmountDescription',
      label: 'Orginal amount'
    }];

    const submitForm = (formValues) => {
      const { alertUserPreferenceList, id, saveUserPreferenceParameters, userId } = this.props;

      _map(alertUserPreferenceList, (each, index) => {
        if (each.preferenceCode === 'displayIntervalOfResfreshTimer') {
          alertUserPreferenceList[index].preferenceValue = formValues.periodicity;
        } else if (each.preferenceCode === 'displayMaxRecordPerPageAlert') {
          alertUserPreferenceList[index].preferenceValue = formValues.recordsAlertPerPage;
        } else if (each.preferenceCode === 'displayMaxRecordPerPageCase') {
          alertUserPreferenceList[index].preferenceValue = formValues.recordsCasePerPage;
        } else if (each.preferenceCode === 'displayTypeOfAlert') {
          alertUserPreferenceList[index].preferenceValue = formValues.alertTypeDisplay;
        } else if (each.preferenceCode === 'displayTypeOfCase') {
          alertUserPreferenceList[index].preferenceValue = formValues.caseTypeDisplay;
        } else if (each.preferenceCode === 'transactionField') {
          alertUserPreferenceList[index].preferenceValue = formValues.transactionField;
        }
      });
      const listValues = _map(alertUserPreferenceList, (each, index) => {
        return _omit(each, 'uid')
      });
      const currentUrl = this.props.location.pathname;
      saveUserPreferenceParameters(id, userId, listValues);
      toggleParameters();
      // todo: try to reload it from router itself try removing setTimeout
      setTimeout(() => window.location.reload(), 1000);
    }

    return (
      <div className={`c-modal js-modal ${isParametersVisible ? '' : 'is-hidden'}`} id="alert-settings">
        <div className="c-modal__view">
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="c-modal__head">
              <legend className="c-modal__title">
                <FormattedMessage id={ 'alert.parameters' } />
              </legend>
            </div>
            <div className="c-modal__body">
              <fieldset className="c-form__field">
                <label className="o-label" htmlFor="recordsPerPage">
                  <FormattedMessage id={ 'alert.recordsPerPage' } /></label>
                {!isCase && <Field
                  name='recordsAlertPerPage'
                  type="input"
                  component="input"
                  className="o-input ow-dis ow-border" />}
                {isCase && <Field
                  name='recordsCasePerPage'
                  type="input"
                  component="input"
                  className="o-input ow-dis ow-border" />}
              </fieldset>
              <fieldset className="c-form__field">
                <label className="o-label" htmlFor="periodicity">
                  <FormattedMessage id={ 'alert.intervalOfRefreshTimer' } />
                </label>
                <Field
                  name='periodicity'
                  type="input"
                  component="input"
                  className="o-input ow-dis ow-border" />
              </fieldset>
              {!isCase && <fieldset className="c-form__field">
                <label className="o-label" htmlFor="alertTypeDisplay">
                  <FormattedMessage id={ 'alert.defaultAlertDisplay' } />
                </label>
                <Field
                  name='alertTypeDisplay'
                  type="select"
                  component="select"
                  className="o-select">
                  <option value=""></option>
                  {typeDisplay.map((each, index) => (
                    <option value={each.value} key={index}>{each.label}</option>
                  ))}
                </Field>
              </fieldset>}
              {isCase && <fieldset className="c-form__field">
                <label className="o-label" htmlFor="caseTypeDisplay">
                  <FormattedMessage id={ 'alert.defaultCaseDisplay' } />
                </label>
                <Field
                  name='caseTypeDisplay'
                  type="select"
                  component="select"
                  className="o-select">
                  <option value=""></option>
                  {typeCaseDisplay.map((each, index) => (
                    <option value={each.value} key={index}>{each.label}</option>
                  ))}
                </Field>
              </fieldset>}
              <fieldset className="c-form__field">
                <label className="o-label" htmlFor="transactionField">
                  <FormattedMessage id={ 'alert.transactionField' } /></label>
                <Field
                  name='transactionField'
                  type="select"
                  component="select"
                  // label="Last"
                  className="o-select">
                  <option value=""></option>
                  {transactionFields.map((each, index) => (
                    <option value={each.value} key={index}>{each.label}</option>
                  ))}
                </Field>
              </fieldset>
            </div>
            <div className="c-modal__foot">
              <div className="c-modal__actions c-modal__actions--secondary">
                <button className="o-btn js-close-modal" onClick={toggleParameters} type="button">
                  <FormattedMessage id={ 'global.cancel' } />
                </button>
              </div>
              <div className="c-modal__actions">
                <button className="o-btn o-btn--primary" type="submit">
                  <FormattedMessage id={ 'global.save' } />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  id: state.loginReducer.userDetails.user.id,
  userId: state.loginReducer.userDetails.user.userId,
  alertUserPreferenceList: state.loginReducer.alertUserPreferenceList
})

const mapDispatchToProps = (dispatch) => ({
  saveUserPreferenceParameters: (id, userId, listValues) => dispatch(saveUserPreferenceParameters(id, userId, listValues))
})

Parameters = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Parameters))

export default reduxForm({
  form: 'parameters'
})(Parameters)
