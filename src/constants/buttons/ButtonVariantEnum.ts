enum ButtonVariants {
	DEFAULT = 'default',
	WITHICON = 'withicon',
	LINK = 'link',
	ICONONLY = 'icononly',
	ICONONLYRIGTHALIGNEDTOOLTIP = 'icononlyrightalignedtooltip',
	CONCEALED = 'concealed',
	ISEFFECTIVE = 'iseffective',
	TEXTFIELDLOOKALIKE = 'textfieldlookalike',
	POSITIVE = 'positive',
	INLINE = 'inline',
	//DESTRUCTIVE = 'destructive', can be created by combining icononly and the type destructive so this one is not necessary
	MULTIBUTTON = 'multibutton', //maybe split this one in two ?
	TREEVIEWEXPANDABLE = 'treeviewexpandable',
	TREEVIEWFOLDER = 'treeviewfolder'
}

export default ButtonVariants;
