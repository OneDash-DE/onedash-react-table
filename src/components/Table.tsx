import React, { Component } from "react";
import { ColumnItem, TableProps } from "../types";
import Column from "./Column";

class Table extends Component<TableProps> {
	state = {
		columns: [] as ColumnItem[],
		selectedRows: [] as number[]
	};

	getColumns = () => {
		const columns: ColumnItem[] = [];
		React.Children.forEach(this.props.children as any, (child) => {
			if (!child) return;

			if (child.type === Column) {
				const columnItem: any = {};
				for (const propName in child.props) {
					columnItem[propName] = child.props[propName];
				}
				columns.push(columnItem);
			}
		});
		this.setState({ columns });
	};

	componentDidMount() {
		this.getColumns();
		this.setState({
			selectedRows: this.props.selectedRows
		});
	}
	componentDidUpdate(latestProps: any) {
		if (latestProps.children !== this.props.children) {
			this.getColumns();
		}
		if (latestProps.selectedRows !== this.props.selectedRows) {
			this.setState({ selectedRows: this.props.selectedRows });
		}
	}

	getGridColumns = () => {
		let num = this.state.columns.length;

		let templateString = "1fr ".repeat(num);
		if (this.props.multiSelect) templateString = "50px " + templateString;
		return templateString;
	};
	onSelectRow = (rowNum: number) => {
		if (!this.props.multiSelect) return;
		const selectedRows = this.state.selectedRows;
		const index = selectedRows.indexOf(rowNum);
		if (index === -1) {
			selectedRows.push(rowNum);
		} else {
			selectedRows.splice(index, 1);
		}

		this.setState({ selectedRows });
	};

	onRowClick = (e: any, rowNum: number) => {
		if (e.target.classList.contains("inner")) return;
		this.onSelectRow(rowNum);
	};

	onSelectToggle = (e: any) => {
		const isChecked = e.target.checked;
		const selectedRows = [];
		if (isChecked) {
			for (let i = 0; i < this.props.rows.length; i++) {
				selectedRows.push(i);
			}
		}
		this.setState({ selectedRows });
	};
	rowClassList = (i: number) => {
		let className = "row";
		if (i % 2 === 0) {
			className += " even";
		} else {
			className += " odd";
		}
		if (this.state.selectedRows.includes(i)) className += " selected";
		return className;
	};

	render() {
		const { columns, selectedRows } = this.state;
		const { resizeable, rows, multiSelect } = this.props;
		const gridTemplateColumns = this.getGridColumns();

		return (
			<div className="onedash-table">
				<div className="table-head" style={{ display: "grid", gridTemplateColumns }}>
					{multiSelect && (
						<label className="multi-select select-container select-toggle-container">
							<input type="checkbox" onChange={this.onSelectToggle} className="row-select-toggle" />
							<span className="checkmark"></span>
						</label>
					)}
					{columns.map((column) => (
						<div key={column.name} className="column column-head" data-name={column.name}>
							{column.label}
							{column.sortable && (
								<div className="sorting-icons">
									<div className="sort-up">
										<span />
									</div>
									<div className="sort-down">
										<span />
									</div>
								</div>
							)}
							{resizeable && <span className="resize-handle"></span>}
						</div>
					))}
				</div>
				<div className="table-body">
					{rows.map((row, i) => (
						<div onClick={(e) => this.onRowClick(e, i)} className={this.rowClassList(i)} key={i}>
							<div className="inner" style={{ display: "grid", gridTemplateColumns }}>
								{multiSelect && (
									<label className="multi-select select-container">
										<input
											type="checkbox"
											onChange={() => this.onSelectRow(i)}
											checked={selectedRows.includes(i)}
											className="row-select"
										/>
										<span className="checkmark"></span>
									</label>
								)}
								{columns.map((column, ii) => (
									<div key={ii} className="cell">
										{row[column.name]}
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default Table;
