import * as React from 'react';
import ButtonType from './../../constants/buttons/ButtonTypeEnum';
import ButtonVariants from './../../constants/buttons/ButtonVariantEnum';
import { iconInterface } from './../../constants/icons/IconsEnum';
import IconEnum from './../../constants/icons/IconsEnum';
import {formatMessage} from './../../common/translation/Translate';

export interface ButtonProps {
  buttonName: string,
  buttonType: ButtonType, //design the css of the button (can be overrided by the buttonVariants)
  buttonVariants?: ButtonVariants, //the variants of the button, will take into account the buttonType but some can override the css
  buttonIcon?: iconInterface,
  linkUrl?: string,
  toolTipLabel?: string,
  secondaryText?: string,
  buttonFunction?: any,
  rowCard?: boolean,
  contentNumber?: string,
  spanList?: Array<SpanListInterface>
}

export interface SpanListInterface {
  name: string,
  spanFunction?: any // (event: MouseEvent<HTMLSpanElement>) => void
}

export const ButtonComponent = (props: ButtonProps) => {
  let classAttribute: string = 'o-btn';

  if (props.buttonType == ButtonType.PRIMARY) {
    classAttribute = 'o-btn o-btn--primary';
  }
  if (props.buttonType == ButtonType.SECONDARY) {
    classAttribute = 'o-btn u-accent-color';
  }
  if (props.buttonType == ButtonType.DESTRUCTIVE) {
    classAttribute = 'o-btn o-btn--destructive u-negative';
  }
  if (props.buttonType == ButtonType.ATTENTIONREQUIRED) {
    classAttribute = 'o-btn u-attention-required';
  }
  if (props.buttonType == ButtonType.NEUTRAL) {
    classAttribute = 'o-btn o-btn--neutral';
  }
  if (props.buttonType == ButtonType.TRANSPARENT) {
    classAttribute = 'o-btn o-btn--transparent';
  }
  if (props.buttonType == ButtonType.MULTIDEFAULT) {
    return (<button className="o-more-btn" type="button"><span className="u-visually-hidden">{props.buttonName}</span></button>);
  }
  if (props.buttonType == ButtonType.MULTITHIN) {
    let classMultiThin: string = 'o-more-btn c-row-card__more-btn o-more-btn--thin'
    if (props.rowCard) {
      return (<button className={classMultiThin} type="button"><span className="u-visually-hidden">{props.buttonName}</span></button>);
    } else {
      return (<button className="o-more-btn o-more-btn--thin" type="button"><span className="u-visually-hidden">{props.buttonName}</span></button>);
    }
  }
  if (props.buttonType == ButtonType.MULTIHORIZONTAL) {
    return (<button className="o-more-btn o-more-btn--horizontal" type="button"><span className="u-visually-hidden">{props.buttonName}</span></button>)
  }
  if (props.buttonType == ButtonType.MULTITHINANDHORIZONTAL) {
    return (<button className="o-more-btn o-more-btn--horizontal o-more-btn--thin" type="button"><span className="u-visually-hidden">{props.buttonName}</span></button>)
  }
  if (props.buttonType == ButtonType.TREEVIEW) {
    if (props.buttonVariants == ButtonVariants.TREEVIEWEXPANDABLE) {
      return (<button className="c-tree-view__btn c-tree-view__btn--expandable c-tree-view__btn--more-btn js-tree-view__btn" onClick={props.buttonFunction}> <span className="c-tree-view__content">
        <svg className="o-icon o-icon--caret-down c-tree-view__arrow"><title>{IconEnum.CARET.name}</title>
          <use xlinkHref={IconEnum.CARET.url}></use>
        </svg>
        <svg className="o-icon o-icon--folder c-tree-view__icon" ><title>{IconEnum.FOLDER.name}</title>
          <use xlinkHref={IconEnum.FOLDER.url}></use>
        </svg>
        {props.buttonName}
      </span> <span className="c-tree-view__number">
          {props.contentNumber}
        </span> <span className="o-more-btn c-tree-view__more-btn o-more-btn--horizontal o-more-btn--thin js-popover-trigger">
          <span className="u-visually-hidden">{formatMessage('global.more')}</span> </span>
        <div className="c-popover is-hidden js-popover">
          <div className="c-popover__body">
            <ul className="g-list">
            </ul>
          </div>
        </div>
      </button>);
    }
    if (props.buttonVariants == ButtonVariants.TREEVIEWFOLDER) {
      return (<button className="c-tree-view__btn  c-tree-view__btn--more-btn js-tree-view__btn" onClick={props.buttonFunction}> <span className="c-tree-view__content">

        <svg className="o-icon o-icon--folder c-tree-view__icon" ><title>{IconEnum.FOLDER.name}</title>
          <use xlinkHref={IconEnum.FOLDER.url}></use>
        </svg>
        {props.buttonName}
      </span> <span className="c-tree-view__number">
          {props.contentNumber}
        </span> <span className="o-more-btn c-tree-view__more-btn o-more-btn--horizontal o-more-btn--thin js-popover-trigger" >
          <span className="u-visually-hidden">{formatMessage('global.more')}</span> </span>
        <div className="c-popover is-hidden js-popover">
          <div className="c-popover__body">
            <ul className="g-list">
              {props.spanList.map(function(spanListElem, index) {
                return (<li className="g-list__item">
                  <span className="o-btn o-btn--inline" onClick={spanListElem.spanFunction}>
                    {spanListElem.name}
                  </span>
                </li>);
              })}
            </ul>
          </div>
        </div>
      </button>);
    }
  }

  //Now the variants
  if (props.buttonVariants == ButtonVariants.DEFAULT) {
    return (<button className={classAttribute} type="button">{props.buttonName}</button>)
  }

  if (props.buttonVariants == ButtonVariants.WITHICON) {
    let classAttributeSVG: string = 'o-icon o-icon--' + props.buttonIcon.name + ' o-icon--prepended';
    return (<button className={classAttribute} type="button">
      <svg className={classAttributeSVG}><title>{props.buttonIcon.name}</title>
        <use xlinkHref={props.buttonIcon.url}></use>
      </svg>{props.buttonName}</button>)
  }

  if (props.buttonVariants == ButtonVariants.LINK) {
    return (<a className={classAttribute} href={props.linkUrl} target="_blank" rel="noopener">{props.buttonName}</a>)
  }

  if (props.buttonVariants == ButtonVariants.ICONONLY) {
    classAttribute = classAttribute + ' o-btn--tooltip js-sidepanel-trigger';
    let classAttributeSVG: string = 'o-icon o-icon--' + props.buttonIcon.name + ' o-icon--prepended';
    return (<button className={classAttribute} type="button" aria-label={props.buttonIcon.title} onClick={props.buttonFunction}>
      <svg className={classAttributeSVG}><title>{props.buttonIcon.title}</title>
        <use xlinkHref={props.buttonIcon.url}></use>
      </svg></button>);
  }

  if (props.buttonVariants == ButtonVariants.ICONONLYRIGTHALIGNEDTOOLTIP) {
    classAttribute = classAttribute + ' o-btn--tooltip o-btn--tooltip-right js-sidepanel-trigger';
    let classAttributeSVG: string = 'o-icon o-icon--' + props.buttonIcon.name;
    return (<button className={classAttribute} type="button" aria-label={props.buttonIcon.title}><title>{props.buttonIcon.title}</title>
      <svg className={classAttributeSVG}>
        <use xlinkHref={props.buttonIcon.url}></use>
      </svg></button>);
  }

  if (props.buttonVariants == ButtonVariants.CONCEALED) {
    classAttribute += ' o-btn--tooltip';
    let classAttributeSVG: string = 'o-icon o-icon--' + props.buttonIcon.name;
    return (<button className={classAttribute} type="button" aria-label={props.toolTipLabel}><title>{props.buttonIcon.name}</title>
      <svg className={classAttributeSVG}>
        <use xlinkHref={props.buttonIcon.url}></use>
      </svg></button>);
  }

  if (props.buttonVariants == ButtonVariants.ISEFFECTIVE) {
    //TODO filter and close should come from a constant file and we have to see if this is the only use or not in the second case we'll need to either decompose ButtonComponents in smaller components or add iconArray as props
    return (<div className="o-btn-wrapper js-effective-btn">

      <button className={classAttribute} type="button">
        <svg className="o-icon o-icon--filter o-icon--prepended"><title>filter</title>
          <use xlinkHref="/public/_assets/dist/images/icons.svg#filter"></use>
        </svg>
        {props.buttonName}
      </button>
      <button className="o-btn o-btn--warning">
        <svg className="o-icon o-icon--discard o-icon--appended"><title>close</title>
          <use xlinkHref="/public/_assets/dist/images/icons.svg#discard"></use>
        </svg>
      </button>
    </div>)
  }

  if (props.buttonVariants == ButtonVariants.TEXTFIELDLOOKALIKE) {
    return (<button className={classAttribute} type="button">{props.buttonName}<span className="o-btn__secondary-text">{props.secondaryText}</span></button>);
  }

  if (props.buttonVariants == ButtonVariants.POSITIVE) {
    return (<button className="o-btn o-btn--positive u-positive o-btn--tooltip" type="button" aria-label={props.toolTipLabel}>
      <svg className="o-icon o-icon--play"><title>{props.buttonIcon.name}</title>
        <use xlinkHref={props.buttonIcon.url}></use>
      </svg></button>);
  }

  if (props.buttonVariants == ButtonVariants.MULTIBUTTON) {
    return (<div className="c-multi-btn">
      <button className="o-btn o-btn--tooltip c-multi-btn__item is-active" type="button" aria-label="Row cards">
        <svg className="o-icon o-icon--list c-multi-btn__icon"><title>{IconEnum.LIST.name}</title>
          <use xlinkHref={IconEnum.LIST.url}></use>
        </svg>
      </button>
      <button className="o-btn o-btn--tooltip c-multi-btn__item" type="button" aria-label="Table view">
        <svg className="o-icon o-icon--table c-multi-btn__icon"><title>{IconEnum.TABLE.name}</title>
          <use xlinkHref={IconEnum.TABLE.url}></use>
        </svg>
      </button>
    </div>);
  }

}
