import { Component } from "react";

export interface RowProps {
	/**
	 * Row values
	 */
	row?: any;
	/**
	 * Classname for entire row
	 */
	className?: string;

	/**
	 * Override grid columns
	 */
	gridColumns?: string;
}

class Row extends Component<RowProps> {
	render() {
		return this.props.children;
	}
}

export default Row;
