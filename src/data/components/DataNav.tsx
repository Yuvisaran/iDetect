import { BuildTreeView, TreeViewFolder } from './../../components/treeview/TreeView';
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { formatMessage } from './../../common/translation/Translate';
import { ButtonComponent } from './../../components/buttons/ButtonComponent';
import ButtonType from './../../constants/buttons/ButtonTypeEnum';
import ButtonVariants from './../../constants/buttons/ButtonVariantEnum';
import icon from './../../constants/icons/IconsEnum';

interface Props {
  database: Array<TreeViewFolder>,
  lookup: Array<TreeViewFolder>,
  system: Array<TreeViewFolder>
}

export const DataNav: React.SFC<Props> = (props) => {
  return (
    <div className="c-main-nav__inner c-main-nav__inner--secondary  js-navigation-data">
      <div className="o-heading">
        <h1 className="o-heading__title">{formatMessage('global.data')}</h1>
        <ButtonComponent buttonName={formatMessage('global.search')} buttonIcon={icon.SEARCHICON} buttonType={ButtonType.TRANSPARENT} buttonVariants={ButtonVariants.ICONONLY}></ButtonComponent>
        <ButtonComponent buttonName={formatMessage('global.export')} buttonIcon={icon.EXPORT} buttonType={ButtonType.TRANSPARENT} buttonVariants={ButtonVariants.ICONONLY}></ButtonComponent>
      </div>
      <div className="c-main-nav__submenu">
        <div className="c-explorer-header">
          <h3 className="c-explorer-header__title">{formatMessage('data.database')}</h3>
          <ButtonComponent buttonName={formatMessage('global.add')} buttonIcon={icon.ADD} buttonType={ButtonType.NEUTRAL} buttonVariants={ButtonVariants.ICONONLY} toolTipLabel={formatMessage('global.add')}></ButtonComponent>
        </div>
        <nav className="c-explorer">
          {BuildTreeView(props.database)} {/*TODO check in webservices if we receive three tree one for db one for lookup and for system or if we receive only one*/}
        </nav>
      </div>
      <div className="c-main-nav__submenu">
        <div className="c-explorer-header">
          <h3 className="c-explorer-header__title">{formatMessage('data.lookup')}</h3>
          <ButtonComponent buttonName={formatMessage('global.add')} buttonIcon={icon.ADD} buttonType={ButtonType.NEUTRAL} buttonVariants={ButtonVariants.ICONONLY} toolTipLabel={formatMessage('global.add')}></ButtonComponent>
        </div>
        <nav className="c-explorer">
          {BuildTreeView(props.lookup)} {/*TODO check in webservices if we receive three tree one for db one for lookup and for system or if we receive only one*/}
        </nav>
      </div>
      <div className="c-main-nav__submenu">
        <div className="c-explorer-header">
          <h3 className="c-explorer-header__title">{formatMessage('data.system')}</h3>
          <ButtonComponent buttonName={formatMessage('global.add')} buttonIcon={icon.ADD} buttonType={ButtonType.NEUTRAL} buttonVariants={ButtonVariants.ICONONLY} toolTipLabel={formatMessage('global.add')}></ButtonComponent>
        </div>
        <nav className="c-explorer">
          {BuildTreeView(props.system)} {/*TODO check in webservices if we receive three tree one for db one for lookup and for system or if we receive only one*/}
        </nav>
      </div >
    </div>);
}
