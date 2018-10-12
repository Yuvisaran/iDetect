import { ButtonComponent } from './../../components/buttons/ButtonComponent';
import { formatMessage } from './../../common/translation/Translate';
import ButtonType from './../../constants/buttons/ButtonTypeEnum';
import buttonVariants from './../../constants/buttons/ButtonVariantEnum';
import { ButtonFilter } from './../../components/buttons/ButtonFilter';
import { ButtonlistGridViewConnection } from './../../components/buttons/ButtonListGridView';
import { ButtonToggleSideBarConnection } from './../../components/buttons/ButtonToggleSideBar';
import * as React from 'react';


export class DataHeader extends React.Component {

  render() {
    return (
    <div className="c-content__actions">
      <ul className="g-list g-list--spacing g-list--inline">
        <li className="g-list__item">
          <ButtonComponent buttonName={formatMessage('data.newdata')} buttonType={ButtonType.PRIMARY} buttonVariants={buttonVariants.DEFAULT}></ButtonComponent>
        </li>
      </ul>
      <ul className="g-list g-list--spacing g-list--inline">
        <ButtonFilter></ButtonFilter>
        <li className="g-list__item">
          <ButtonlistGridViewConnection></ButtonlistGridViewConnection>
        </li>
        <li className="g-list__item">
          <ButtonToggleSideBarConnection></ButtonToggleSideBarConnection>
        </li>
      </ul>
    </div>
    );
  }
}
