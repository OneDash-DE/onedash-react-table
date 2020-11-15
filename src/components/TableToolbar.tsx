import React, { Component } from "react";

interface TableToolbarProps {}

class TableToolbar extends Component<TableToolbarProps> {
	render() {
		return <div className="table-toolbar">{this.props.children}</div>;
	}
}

export default TableToolbar;
