import * as React from 'react';

import icon from './../../constants/icons/IconsEnum';
import { formatMessage } from './../../common/translation/Translate';
import { switchSidebar, switchView } from './service/actions';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootStore } from './../../rootReducer';
import { store } from './../../idetectMain';

interface State {
  list: boolean
}

interface Props {
  switchView: any,
}

class ButtonlistGridView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      list: true
    }
    this.listView = this.listView.bind(this);
    this.tableView = this.tableView.bind(this);
  }

  listView () {
    if (!this.state.list) {
      this.setState({...this.state, list: true});
      this.props.switchView();
    }
  }

  tableView () {
    if (this.state.list) {
      this.setState({...this.state, list: false});
      this.props.switchView();
    }
  }


  render() {
    return (
      <div className="c-multi-btn">
        <button className={this.state.list? 'o-btn o-btn--tooltip c-multi-btn__item js-row-cards-view-trigger is-active' : 'o-btn o-btn--tooltip c-multi-btn__item js-row-cards-view-trigger'} aria-label={formatMessage('global.rowcard')} onClick={this.listView}>
          <svg className="o-icon o-icon--list c-multi-btn__icon"><title>{icon.LIST.title}</title>
              <use xlinkHref={icon.LIST.url}></use>
          </svg>
        </button>
        <button className={this.state.list? 'o-btn o-btn--tooltip c-multi-btn__item js-table-view-trigger' : 'o-btn o-btn--tooltip c-multi-btn__item js-table-view-trigger is-active'} aria-label={formatMessage('global.tableview')} onClick={this.tableView}>
          <svg className="o-icon o-icon--table c-multi-btn__icon"><title>{icon.TABLE.title}</title>
            <use xlinkHref={icon.TABLE.url}></use>
          </svg>
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<State>) => ({
  switchView
});

const mapStateToProps = (state: RootStore) => ({

});

export const ButtonlistGridViewConnection = connect(mapStateToProps, mapDispatchToProps)(ButtonlistGridView);
