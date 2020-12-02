import { Component } from "react";
import { RowProps } from "../types";

class Row extends Component<RowProps> {
	render() {
		return this.props.children;
	}
}

export default Row;
