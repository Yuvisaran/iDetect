import {injectIntl, intlShape, IntlProvider, FormattedMessage, addLocaleData, IntlFormat, InjectedIntlProps } from 'react-intl';
import * as React from 'react';

interface TranslateProps {
}

class Translate extends React.Component<InjectedIntlProps> {

  static instance:Translate = null;

  componentWillMount() {
    console.log("Translate instance initialised");
    Translate.instance = this;
  }

  render() {
    return true;
  }

}

export default injectIntl<{}>(Translate);

export function intl() {
  return Translate.instance.props.intl;
}

export function formatMessage(inkey:string) : string{
  return (intl().formatMessage({id:inkey}));
}
