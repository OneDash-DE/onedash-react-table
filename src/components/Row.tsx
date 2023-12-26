import { Component, ReactNode } from "react";

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

	children?: ReactNode;
}

class Row extends Component<RowProps> {
	render() {
		return this.props.children;
	}
}

export default Row;
