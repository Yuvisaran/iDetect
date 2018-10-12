import * as React from 'react';
import { ButtonComponent } from './ButtonComponent';

import ButtonType from './../../constants/buttons/ButtonTypeEnum';
import ButtonVariants from './../../constants/buttons/ButtonVariantEnum';
import icon from './../../constants/icons/IconsEnum';
import { formatMessage } from './../../common/translation/Translate';
import { store } from './../../idetectMain';
import { switchSidebar } from './service/actions';
import { Dispatch } from 'redux';
import { RootStore } from './../../rootReducer';
import { connect } from 'react-redux';

interface State {

}

interface Props {
  switchSidebar: any
}

class ButtonToggleSideBar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.toggleSideBar = this.toggleSideBar.bind(this);
  }

  toggleSideBar() {
    this.props.switchSidebar();
  }

  render() {
    return (
      <ButtonComponent buttonType={ButtonType.NEUTRAL} buttonVariants={ButtonVariants.ICONONLY} buttonName={formatMessage('button.togglesidebar')} buttonFunction={this.toggleSideBar} buttonIcon={icon.SIDEBARTOGGLE}></ButtonComponent>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<State>) => ({
  switchSidebar
});

const mapStateToProps = (state: RootStore) => ({

});

export const ButtonToggleSideBarConnection = connect(mapStateToProps, mapDispatchToProps)(ButtonToggleSideBar);
