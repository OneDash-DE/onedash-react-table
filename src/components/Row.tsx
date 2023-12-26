import { Component, ReactNode } from "react";

export interface RowProps {
	/**
	 * Row values
	 */
	// eslint-disable-next-line react/no-unused-prop-types
	row?: any;

	/**
	 * Classname for entire row
	 */
	// eslint-disable-next-line react/no-unused-prop-types
	className?: string;

	/**
	 * Override grid columns
	 */
	// eslint-disable-next-line react/no-unused-prop-types
	gridColumns?: string;

	children?: ReactNode;
}

class Row extends Component<RowProps> {
	render() {
		return this.props.children;
	}
}

export default Row;
