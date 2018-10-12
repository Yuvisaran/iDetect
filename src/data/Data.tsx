import * as React from 'react';
import { Topbar } from './../components/MainPage/TopbarComponent';
import { SecondaryNav } from './../components/MainPage/SecondaryNav';
import { DataNav } from './components/DataNav';
import { TreeViewFolder } from './../components/treeview/TreeView';
import { LoginInfoDTO } from './../model/dto/LoginInfoDTO';
import { store } from './../idetectMain';
import { formatMessage } from './../common/translation/Translate';
import { DataHeader } from './components/DataHeader';
import { DataRowCardConnected } from './components/DataRowCard';
import { RootStore } from './../rootReducer';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';



interface State {
  active?: boolean
}

interface Props {
  loginInfoDTO?: LoginInfoDTO,
  listview: boolean,
}

class Data extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }


  render() {
      let database : Array<TreeViewFolder> = [{
        folder: {name: 'ORG_GLOBAL', properties:[{name: 'delete'}, {name: 'edit'}]},
        folderContent: [{folder: {name: 'SubFileGlobal', properties: [{name: 'delete'}]}},
                        {folder: {name: 'SubFolderGlobal', properties: [{name: 'got a sub'}]},
                        folderContent: [
                          {folder: {name: 'SubFileSub1', properties: [{name: 'delete'}]}},
                          {folder: {name: 'SubFileSub2', properties: [{name: 'got a sub'}]}}
                        ]}
                      ]}];

      let lookup : Array<TreeViewFolder> = [{
        folder: {name: 'lookup1', properties:[{name: 'delete'}, {name: 'edit'}]},
        folderContent: [{folder: {name: 'lookupfile1', properties: [{name: 'delete'}]}},
                        {folder: {name: 'lookupsuboflookup1', properties: [{name: 'got a sub'}]},
                        folderContent: [
                          {folder: {name: 'lookupfileofsub', properties: [{name: 'delete'}]}},
                          {folder: {name: 'lookupfileofsub2', properties: [{name: 'got a sub'}]}}
                        ]}
                      ]},
                      {
        folder: {name: 'lookup2', properties:[{name: 'delete'}, {name: 'edit'}]},
        folderContent: [{folder: {name: 'lookupfile2', properties: [{name: 'delete'}]}},
                        {folder: {name: 'lookupsuboflookup2', properties: [{name: 'got a sub'}]},
                        folderContent: [
                          {folder: {name: 'lookupfileofsub3', properties: [{name: 'delete'}]}},
                          {folder: {name: 'lookupfileofsub4', properties: [{name: 'got a sub'}]}}
                        ]}
                      ]}];

      let system : Array<TreeViewFolder> = [{
        folder: {name: 'ORG_GLOBAL', properties:[{name: 'delete'}, {name: 'edit'}]},
        folderContent: [{folder: {name: 'ORG_NOTGLOBAL', properties: [{name: 'delete'}]}},
                        {folder: {name: 'anotherOrg', properties: [{name: 'got a sub'}]},
                        folderContent: [
                          {folder: {name: 'ORG_NOTGLOBAL', properties: [{name: 'delete'}]}},
                          {folder: {name: 'anotherOrg', properties: [{name: 'got a sub'}]}}
                        ]}
                        ]}];

      let hideStyle = {display: 'none'};
      let showStyle = {display: 'block'};

    return (
      <div className="c-main">
        <nav className="c-main-nav">
          <SecondaryNav data={true}></SecondaryNav>
          <DataNav database={database} lookup={lookup} system={system}></DataNav>
        </nav>
        <div className="c-content">
          <Topbar loginInfoDTO={/*loginInfoDTOFromStore.loginReducer.userDetails*/ new LoginInfoDTO} title={formatMessage('global.data')}></Topbar>
          <div className="c-content__view">
            <div className="c-content__inner-wrapper">
              <DataHeader></DataHeader>
              <div className="c-content__scrollable js-content-scrollable" style={this.props.listview? showStyle: hideStyle} >
                <DataRowCardConnected></DataRowCardConnected>
              </div>
              <div className="c-content__view--table js-table-view" style={this.props.listview? hideStyle: showStyle}>
                Here should lie the tableView when it is done
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
//style={this.state.listview? showStyle: hideStyle}
//style={this.state.listview? hideStyle: showStyle}
}

const mapStateToProps = (state: RootStore) => ({
  listview: state.buttonReducer.listView,
});

//const mapDispatchToProps = (dispatch :Dispatch<State>) => ({
//});

export const DataConnection = connect(mapStateToProps,null)(Data);
