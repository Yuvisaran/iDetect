import * as React from 'react';
import { ButtonComponent } from './ButtonComponent';

import ButtonType from './../../constants/buttons/ButtonTypeEnum';
import ButtonVariants from './../../constants/buttons/ButtonVariantEnum';
import icon from './../../constants/icons/IconsEnum';
import { formatMessage } from './../../common/translation/Translate';


export class ButtonFilter extends React.Component {

  render() {
    return(
      <li className="g-list__item">
        <ButtonComponent buttonType={ButtonType.NEUTRAL} buttonVariants={ButtonVariants.WITHICON} buttonIcon={icon.FILTERMEDIUM} buttonName={formatMessage('button.filter')}></ButtonComponent>
      </li>
    )
  }

}
