import { ButtonProps, SpanListInterface, ButtonComponent } from './../buttons/ButtonComponent';
import ButtonType from './../../constants/buttons/ButtonTypeEnum';
import ButtonVariants from './../../constants/buttons/ButtonVariantEnum';
import * as React from 'react';
import { RootStore } from './../../rootReducer';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { dispatchClickedFolder } from './../../data/service/action';

export interface TreeViewFolder {
  folder: FolderContent,
  folderContent?: Array<TreeViewFolder>
}

interface FolderContent {
  name: string,
  properties: Array<SpanListInterface>
}

interface TreeViewFolderProps {
  TreeView: TreeViewFolder,
}

export const BuildTreeView = (props: Array<TreeViewFolder>) => {
  return (
    <ul className="c-tree-view js-tree-view">
      {props.map(function (prop, key) {
        return buildFolder(prop);
      })}
    </ul>
  );
}

interface State {
  active: boolean,
}

class HaveSubClass extends React.Component<TreeViewFolderProps, State> {
  constructor(props: TreeViewFolderProps) {
    super(props);
    this.buttonFunctionExpand = this.buttonFunctionExpand.bind(this);
    this.state = {
      active: false,
    }
  }

  buttonFunctionExpand() {
    this.setState({active: !this.state.active});
    dispatchClickedFolder(this.props.TreeView);
  }

  render() {
    let className = 'c-tree-view js-tree-view' + (this.state.active ? ' is-visible' : '');
    return (
            <li className={className}>
              <ButtonComponent buttonType={ButtonType.TREEVIEW} buttonVariants={ButtonVariants.TREEVIEWEXPANDABLE} buttonName={this.props.TreeView.folder.name} buttonFunction={this.buttonFunctionExpand} spanList={this.props.TreeView.folder.properties} contentNumber={this.props.TreeView.folderContent.length.toString()}>
              </ButtonComponent>
              <ul className={className}>
                {this.props.TreeView.folderContent.map(function (folderTree, key) {
                  return buildFolder(folderTree);
                })}
              </ul>
            </li>
            );
  }
}

const NoSub: React.SFC<TreeViewFolder> = (folderTree: TreeViewFolder) => {
  return (
          <li className="c-tree-view__item  js-tree-view__item">
            <ButtonComponent buttonType={ButtonType.TREEVIEW} buttonVariants={ButtonVariants.TREEVIEWFOLDER} buttonName={folderTree.folder.name} spanList={folderTree.folder.properties}></ButtonComponent>
          </li>
          );
}

const buildFolder = (folderTree: TreeViewFolder): any => {
  if (folderTree.folderContent) {
    return (<HaveSubClass TreeView={folderTree}></HaveSubClass>);
  } else {
    return NoSub(folderTree);
  }
}
