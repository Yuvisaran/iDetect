import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FieldArray, reduxForm, reset, formValueSelector } from 'redux-form';

import RenderFilter from 'src/alerts/filter/components/renderFilter';
import validate from 'src/alerts/filter/casesFilter/casesValidate';

class CasesFilter extends Component {
  render() {
    let { allProps, fieldTypeSelected, resetForm, handleSubmit } = this.props;

    // only one props can pass to fieldArray so added these props to allProps object.
    allProps['fieldTypeSelected'] = fieldTypeSelected;
    allProps['resetForm'] = resetForm;
    allProps['handleSubmit'] = handleSubmit;

    return (
      <FieldArray name="filter" component={RenderFilter} props={allProps} rerenderOnEveryChange />
    );
  }
}
const selector = formValueSelector('casesFilter')

const mapStateToProps = (state) => ({
  fieldTypeSelected: selector(state, 'filter')
})

const mapDispatchToProps = (dispatch) => ({
  resetForm: () => dispatch(reset('casesFilter'))
})

CasesFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(CasesFilter);

export default reduxForm({
  form: 'casesFilter',
  validate
})(CasesFilter)
