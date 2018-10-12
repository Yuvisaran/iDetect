import * as React from 'react';
import { RowCard } from './../../components/rowCard/RowCard';
import { TreeViewFolder } from './../../components/treeview/TreeView';
import icon from './../../constants/icons/IconsEnum';
import { RootStore } from './../../rootReducer';
import { connect } from 'react-redux';
import { dispatchClickedFolder } from './../service/action';


interface dataRowCardProps {
  folderTree?: TreeViewFolder
}


class DataRowCard extends React.Component<dataRowCardProps> {
  constructor(props: dataRowCardProps) {
    super(props);
    console.log('datarowcardprops');
    console.log(this);
    //this.onDoubleClickFunction = this.onDoubleClickFunction.bind(this);
  }

  onclickFunction() {

  }

  render() {
    let folderName = this.props.folderTree.folder.name;

    return (
      <div>
        {this.props.folderTree.folderContent.map(function (props, index) {
          return (<RowCard badgeInterface={{badge: false}} checkboxId={props.folder.name + '_' + index} checkboxName={props.folder.name} title={props.folder.name} icon={props.folderContent? icon.FOLDER : icon.FOLDER} label={folderName} childrenData={props}></RowCard>);
        })}
      </div>
    );
  }
}

const mapStateToProps = (state: RootStore) =>({
  folderTree: state.dataReducer.treeClicked
})

export const DataRowCardConnected = connect(mapStateToProps, null)(DataRowCard);
