//we need the name for the css of the svg and the url to avoid hardcoding it each time we create the component
export interface iconInterface {
	name: string,
	url: string,
	title: string
}

class IconEnum {
	private static imageUrl: string = 'src/common/svg/';
	public static CROSS: iconInterface = { name: 'cross', title: 'Cross', url: IconEnum.imageUrl + 'cross.svg' };
	public static LIST: iconInterface = { name: 'list', title: 'List', url: IconEnum.imageUrl + 'list.svg' };
	public static TABLE: iconInterface = { name: 'table', title: 'Table', url: IconEnum.imageUrl + 'table.svg' };
	public static FOLDER: iconInterface = { name: 'folder', title: 'Folder', url: IconEnum.imageUrl + 'folder.svg' };
	public static CARET: iconInterface = { name: 'caret', title: 'Caret', url: IconEnum.imageUrl + 'caret.svg' };
	public static CARETLEFTCLOSE: iconInterface = { name: 'caret', title: 'close', url: IconEnum.imageUrl + 'caret-left.svg' };
	public static ALERTS: iconInterface = { name: 'alerts', title: 'Alerts', url: IconEnum.imageUrl + 'alert-medium.svg' };
	public static ADMIN: iconInterface = { name: 'admin', title: 'Admin', url: IconEnum.imageUrl + 'settings-medium.svg' };
	public static ANALYSIS: iconInterface = { name: 'analysis', title: 'Analysis', url: IconEnum.imageUrl + 'linkchart-medium.svg' };
	public static DETECTION: iconInterface = { name: 'detection', title: 'Detection', url: IconEnum.imageUrl + 'rules-medium.svg' };
	public static DATA: iconInterface = { name: 'data', title: 'Data', url: IconEnum.imageUrl + 'folder.svg' };
	public static ALERTSNAV: iconInterface = { name: 'alerts', title: 'Alerts', url: IconEnum.imageUrl + 'navigation-alerts.svg' };
	public static ADMINNAV: iconInterface = { name: 'admin', title: 'Admin', url: IconEnum.imageUrl + 'navigation-admin.svg' };
	public static ANALYSISNAV: iconInterface = { name: 'analysis', title: 'Analysis', url: IconEnum.imageUrl + 'navigation-analysis.svg' };
	public static DETECTIONNAV: iconInterface = { name: 'detection', title: 'Detection', url: IconEnum.imageUrl + 'navigation-detection.svg' };
	public static DATANAV: iconInterface = { name: 'data', title: 'Data', url: IconEnum.imageUrl + 'navigation-data.svg' };
	public static CARETDOWN: iconInterface = { name: 'caret-down', title: 'arrow-down-icon', url: IconEnum.imageUrl + 'caret-down.svg' };
	public static FILTERMEDIUM: iconInterface = { name: 'filter-medium', title: 'Filter', url: IconEnum.imageUrl + 'filter-medium.svg' }
	public static SIDEBARTOGGLE: iconInterface = { name: 'sidebar', title: 'Sidebar', url: IconEnum.imageUrl + 'sidebar.svg' };
	public static SEARCHICON: iconInterface = { name: 'search', title: 'Search', url: IconEnum.imageUrl + 'search.svg' };
	public static EXPORT: iconInterface = { name: 'export', title: 'Export', url: IconEnum.imageUrl + 'export.svg' };
	public static ADD: iconInterface = { name: 'add', title: 'Add', url: IconEnum.imageUrl + 'add.svg' }

}

export default IconEnum;
