import { Component } from "react";

export interface CellProps {
	/**
	 * Object name
	 */
	name: string;
	/**
	 * Classname for this cell
	 */
	className?: string;

	/**
	 * Fallback text or element in case there is no value
	 */
	noValue?: string | JSX.Element;

	/**
	 * DO NOT USE. FOR INTERNAL USE
	 */
	_value?: any;
	/**
	 * DO NOT USE. FOR INTERNAL USE
	 */
	_row?: any;

	/**
	 * Render function
	 */
	children?: ((value: any, row: any) => JSX.Element | string | number | boolean) | string | number | boolean | JSX.Element;
}

class Cell extends Component<CellProps> {
	render() {
		if (this.props.children) {
			if (typeof this.props.children === "function") {
				return (this.props.children as any)(this.props._value, this.props._row) ?? "";
			}
			return this.props.children ?? "";
		}
		return this.props._value ?? this.props.noValue ?? "";
	}
}

export default Cell;
