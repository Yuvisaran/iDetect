import { iconInterface } from './../../constants/icons/IconsEnum';
import * as React from 'react';
import { ButtonProps, ButtonComponent } from './../buttons/ButtonComponent';
import ButtonType from './../../constants/buttons/ButtonTypeEnum';
import * as intl from 'react-intl';
import {formatMessage} from './../../common/translation/Translate';
import { dispatchClickedFolder } from './../../data/service/action';
import { TreeViewFolder } from './../treeview/TreeView';


export interface BadgeInterface {
  badge: boolean,
  badgeContent?: string,
  padded?: boolean
}

export interface RowCardInterface {
  badgeInterface: BadgeInterface,
  title: string,
  label: string,
  icon: iconInterface,
  checkboxName: string,
  checkboxId?: string, //not sure if useful
  moreButtons?: Array<ButtonProps>,
  risk?: Array<RiskStyleInterface>,
  childrenData?: TreeViewFolder
}

//string format should be 'x%' or 'x %' might need to add a check on that
export interface RiskStyleInterface {
  low: string,
  guarded: string,
  elevated: string,
  high: string,
  severe: string
}


const Badge = (badgeInterface: BadgeInterface) => {
  if (badgeInterface.badge)
    if (badgeInterface.padded)
      return (<span className="c-row-card__badge u-text-neutral">{badgeInterface.badgeContent}</span>)
    else
    return (<span className="o-badge u-positive c-row-card__badge">{badgeInterface.badgeContent}</span>)
  else
    return;
};

const buildStyleRisk = (style: string) => {
  return {width: style};
}

const addMoreButtonsAndRisk = (propsButtons: Array<ButtonProps>, propsRisk: Array<RiskStyleInterface>) => {
  if (propsButtons) {
    return (
      <div className="c-popover is-hidden js-popover">
              <div className="c-popover__body">
                  <ul className="g-list">
                    {propsButtons.map(function(buttonProps, index) {
                      return (<li className="g-list__item">
                                <ButtonComponent buttonName={buttonProps.buttonName} buttonType={buttonProps.buttonType} buttonIcon={buttonProps.buttonIcon} buttonVariants={buttonProps.buttonVariants} buttonFunction={buttonProps.buttonFunction} secondaryText={buttonProps.secondaryText} toolTipLabel={buttonProps.toolTipLabel} linkUrl={buttonProps.linkUrl}></ButtonComponent>
                              </li>)
                    })}
                  </ul>
              </div>
          </div>);
  }
  if (propsRisk) {
    return (<div className="c-row-card__risk">
              {propsRisk.map(function(riskProps, index) {
                return (<ol className="g-list g-list--inline o-risk-allocation">
                            <li className="g-list__item o-risk-allocation__segment o-risk-allocation__segment--low " style={buildStyleRisk(riskProps.low)}> <span className="u-visually-hidden">Low: from 0 to 10</span> </li>
                            <li className="g-list__item o-risk-allocation__segment o-risk-allocation__segment--guarded " style={buildStyleRisk(riskProps.guarded)}> <span className="u-visually-hidden">Guarded: from 11 to 40</span> </li>
                            <li className="g-list__item o-risk-allocation__segment o-risk-allocation__segment--elevated " style={buildStyleRisk(riskProps.elevated)}> <span className="u-visually-hidden">Elevated: from 41 to 70</span> </li>
                            <li className="g-list__item o-risk-allocation__segment o-risk-allocation__segment--high " style={buildStyleRisk(riskProps.high)}> <span className="u-visually-hidden">High: from 71 to 90</span> </li>
                            <li className="g-list__item o-risk-allocation__segment o-risk-allocation__segment--severe " style={buildStyleRisk(riskProps.severe)}> <span className="u-visually-hidden">Severe: from 91 to 100</span> </li>
                        </ol>)
              })}
            </div>)
  }
}

const buttonMore = (buttonProps: Array<ButtonProps>) => {
  if (buttonProps) {
    return (<ButtonComponent buttonType={ButtonType.MULTITHIN} buttonName={formatMessage('global.actions')} rowCard={true}></ButtonComponent>)
  } else {
    return;
  }
}

export class RowCard extends React.Component<RowCardInterface> {
  constructor(props: RowCardInterface) {
    super(props);
    this.onDoubleClickFunction = this.onDoubleClickFunction.bind(this);
  }

  onDoubleClickFunction = (e: any) => {
    if (this.props.childrenData.folderContent) {
      dispatchClickedFolder(this.props.childrenData);
    }
  }

  render() {
    return (<div className="c-row-card js-row-card" onDoubleClick={this.onDoubleClickFunction}>
        <div className="c-row-card__toggle-wrapper">
            <fieldset className="o-toggle ">
                <input className="o-toggle__checkbox js-row-card__checkbox" type="checkbox" name={this.props.checkboxName} id={this.props.checkboxId} value="1"></input>
                <label className="o-toggle__label" htmlFor=""> <span className="u-visually-hidden">
                {this.props.title}
            </span> </label>
            </fieldset>
            <svg className="o-icon o-icon--rules o-icon--prepended"><title>{this.props.icon.name}</title>
                <use xlinkHref={this.props.icon.url}></use>
            </svg>
        </div>
        <div className="c-row-card__content">
            <p className="c-row-card__label"> {this.props.title} </p>
            <p className="c-row-card__name"> {this.props.label} </p>
        </div> {Badge(this.props.badgeInterface)}
        {buttonMore(this.props.moreButtons)}
        {addMoreButtonsAndRisk(this.props.moreButtons, this.props.risk)}
    </div>)
  }
  ;
}
