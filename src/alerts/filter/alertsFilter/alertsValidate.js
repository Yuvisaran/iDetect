import _map from 'lodash/map';

const alertsValidate = values => {
  const errors = {}
  const filter = [];
  _map(values, (each, index) => {
    const filterError = {};
    if (!each || !each.field) {
      filterError.field = 'required'
      filter[index] = filterError;
    }
    if (!each || !each.value) {
      filterError.value = 'required';
      filter[index] = filterError;
    }
  })
  if (filter.length) {
    errors.filter = filter
  }
}

export default alertsValidate;
