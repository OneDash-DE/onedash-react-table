import { Component } from "react";
import { CellProps } from "../types";

class Cell extends Component<CellProps> {
	render() {
		if (this.props.children) {
			if (typeof this.props.children === "function") {
				return this.props.children(this.props._value, this.props.row);
			} else {
				return this.props.children;
			}
		} else {
			return this.props._value ?? this.props.noValue ?? "";
		}
	}
}

export default Cell;
