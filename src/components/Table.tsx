import React, { Component } from "react";
import { ColumnItem, TableProps } from "../types";
import Column from "./Column";

class Table extends Component<TableProps> {
	minWidth: number = 0;
	table = React.createRef<HTMLDivElement>();

	state = {
		columns: [] as ColumnItem[],
		selectedRows: [] as number[],
		sorting: undefined as undefined | { direction: "up" | "down"; column: ColumnItem },
		ratios: [] as number[],
		isMobile: false
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

		this.setState({ columns }, this.calculateColumnSizes);
	};

	checkTableWidth = () => {
		if (this.props.disableMobile) return;
		const isMobile = (this.table.current?.offsetWidth ?? 0) < (this.props.minWidth ?? this.minWidth);
		if (this.state.isMobile !== isMobile) {
			this.setState({
				isMobile
			});
		}
	};

	componentDidMount() {
		window.addEventListener("resize", this.checkTableWidth);
		this.getColumns();
		this.setState({
			selectedRows: this.props.selectedRows ?? []
		});
	}

	componentDidUpdate(latestProps: any) {
		if (latestProps.children !== this.props.children) {
			this.getColumns();
		}
		if (latestProps.selectedRows !== this.props.selectedRows) {
			this.setState({ selectedRows: this.props.selectedRows });
		}
		if (latestProps.rows !== this.props.rows) {
			this.calculateColumnSizes();
		}
	}

	calculateColumnSizes = () => {
		if (!this.props.rows) return;
		const columns = this.state.columns;

		// Take maximum 30 rows to decrease load
		const rows = this.props.rows.slice(0, 30);
		const sizes: number[] = new Array(columns.length).fill(0);
		rows.forEach((row) => {
			columns.forEach((column, i) => {
				sizes[i] += String(row[column.name]).length;
			});
		});

		// Add Column Width => Small values but longer column label
		columns.forEach((column, i) => {
			sizes[i] += (column.label?.length ?? 0 + 30) * 5;
		});

		const total = sizes.reduce((a, b) => a + b, 0);
		if (!this.props.minWidth) {
			this.minWidth = (total / (rows.length + 15)) * 15 + columns.length * 18;
			this.checkTableWidth();
		}

		const ratios: number[] = [];
		sizes.forEach((size, i) => {
			ratios[i] = Number(((size / total) * 100).toFixed(2));
		});
		this.setState({ ratios });
	};

	getDesktopGridColumns = () => {
		let templateString = "";
		this.state.ratios.forEach((ratio, i) => {
			if (this.state.columns[i].width) {
				templateString += `${this.state.columns[i].width} `;
			} else {
				templateString += `${ratio}fr `;
			}
		});
		if (this.props.select === "single") templateString = "50px " + templateString;
		if (this.props.select === "multi") templateString = "50px " + templateString;
		if (this.props.rightIcon) templateString += " 50px";
		return templateString;
	};

	getMobileGridColumns = () => {
		let templateString = "1fr ";
		if (this.props.select === "single") templateString = "50px " + templateString;
		if (this.props.select === "multi") templateString = "50px " + templateString;
		if (this.props.rightIcon) templateString += " 50px";
		return templateString;
	};

	onSelectRow = (rowNum: number) => {
		if (!this.props.select || this.props.select === "none") return;
		if (this.props.select === "click") return this.props.onRowClick?.(rowNum, this.props.rows?.[rowNum]);

		const selectedRows = this.state.selectedRows;
		const index = selectedRows.indexOf(rowNum);
		if (index === -1) {
			selectedRows.push(rowNum);
		} else {
			selectedRows.splice(index, 1);
		}

		this.setState({ selectedRows });
	};

	onRowClick = (_e: any, rowNum: number) => {
		// Why? if (e.target.classList.contains("inner")) return;
		this.onSelectRow(rowNum);
	};

	onSelectToggle = (e: any) => {
		if (!this.props.rows) return;
		const isChecked = e.target.checked;
		const selectedRows = [];
		if (isChecked) {
			for (let i = 0; i < this.props.rows.length; i++) {
				selectedRows.push(i);
			}
		}
		this.setState({ selectedRows });
	};

	rowClassList = (i: number, origIndex: number) => {
		let className = "row";
		if (i % 2 === 0) {
			className += " even";
		} else {
			className += " odd";
		}
		if (this.props.select === "click") className += " clickable";
		if (this.state.selectedRows.includes(origIndex)) className += " selected";
		return className;
	};

	sortRows = (column: ColumnItem, direction: "up" | "down") => {
		if (this.state.sorting?.column === column && this.state.sorting.direction === direction) {
			// Clear Sorting
			this.setState({ sorting: undefined });
		} else {
			this.setState({ sorting: { column, direction } });
		}
	};

	tableClass = () => {
		let className = "onedash-table-v2";
		if (this.state.isMobile) className += " is-mobile";
		return className;
	};

	render() {
		const { columns, selectedRows, sorting, isMobile } = this.state;
		const { resizeable, rows, select, rightIcon, searchString, style } = this.props;
		let sortedRows: any[] = JSON.parse(JSON.stringify(rows ?? []));
		const gridTemplateColumns = isMobile ? this.getMobileGridColumns() : this.getDesktopGridColumns();

		// All rows get a _index property to recognize them
		sortedRows.forEach((row, i) => (row._index = i));

		// Apply sorting
		if (sorting) {
			// Apply sorting
			if (sorting.column.sortingFunction) {
				sortedRows = sorting.column.sortingFunction(sortedRows);
			} else {
				sortedRows = sortedRows.sort((a, b) => {
					const aVal = a[sorting.column.name];
					const bVal = b[sorting.column.name];
					if (typeof aVal === "string" && typeof bVal === "string") {
						return sorting.direction === "up" ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
					} else if (typeof aVal === "number" && typeof bVal === "number") {
						return sorting.direction === "up" ? aVal - bVal : bVal - aVal;
					} else {
						console.error("You cannot sort this type of data. Allowed is only sorting of strings and numbers");
						return 0;
					}
				});
			}
		}

		if (searchString && searchString.length > 0) {
			sortedRows = sortedRows.filter((x) =>
				Object.keys(x).find((propName) => {
					const val = x[propName];
					if (typeof val === "object" && typeof val === "function") return undefined;
					return String(val).toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
				})
			);
		}

		return (
			<div ref={this.table} style={style} className={this.tableClass()}>
				{/**
				
												Desktop
				
				*/}
				{!isMobile && (
					<>
						<div className="table-head" style={{ display: "grid", gridTemplateColumns }}>
							{select === "multi" && (
								<label className="multi-select select-container select-toggle-container">
									<input type="checkbox" onChange={this.onSelectToggle} className="row-select-toggle" />
									<span className="checkmark"></span>
								</label>
							)}
							{columns.map((column) => (
								<div key={column.name} className={"column column-head " + (column.className ?? "")} data-name={column.name}>
									{column.label}
									{column.sortable && (
										<div className="sorting-icons">
											<div
												onClick={() => this.sortRows(column, "up")}
												className={
													sorting?.column === column && sorting.direction === "up"
														? "selected sort-up"
														: "sort-up"
												}>
												<span />
											</div>
											<div
												onClick={() => this.sortRows(column, "down")}
												className={
													sorting?.column === column && sorting.direction === "down"
														? "selected sort-down"
														: "sort-down"
												}>
												<span />
											</div>
										</div>
									)}
									{resizeable && <span className="resize-handle"></span>}
								</div>
							))}
						</div>
						<div className="table-body">
							{sortedRows.map((row, i) => (
								<div onClick={(e) => this.onRowClick(e, row._index)} className={this.rowClassList(i, row._index)} key={i}>
									<div className="inner" style={{ display: "grid", gridTemplateColumns }}>
										{select === "multi" && (
											<label className="multi-select select-container">
												<input
													type="checkbox"
													onChange={() => this.onSelectRow(i)}
													checked={selectedRows.includes(row._index)}
													className="row-select"
												/>
												<span className="checkmark"></span>
											</label>
										)}
										{columns.map((column, ii) => (
											<div key={ii} className={"cell " + (column.className ?? "")}>
												{column.formattingFunction
													? column.formattingFunction(row[column.name], row)
													: row[column.name]}
											</div>
										))}

										<div className="right-icon">{rightIcon}</div>
									</div>
								</div>
							))}
							{sortedRows.length === 0 && rows && rows.length > 0 && (
								<div className="no-entry-found info-message">
									{this.props.textNoItemFound?.(searchString ?? "") ??
										`No entry with the value "${searchString}" can be found`}
								</div>
							)}

							{(!rows || rows.length === 0) && (
								<div className="no-rows info-message">{this.props.textNoRows ?? `Missing data`}</div>
							)}
						</div>
					</>
				)}
				{/**
				
												MOBILE
				
				*/}
				{isMobile && (
					<div className="table-body">
						{sortedRows.map((row, i) => (
							<div onClick={(e) => this.onRowClick(e, row._index)} className={this.rowClassList(i, row._index)} key={i}>
								<div className="inner" style={{ display: "grid", gridTemplateColumns }}>
									{select === "multi" && (
										<label className="multi-select select-container">
											<input
												type="checkbox"
												onChange={() => this.onSelectRow(i)}
												checked={selectedRows.includes(row._index)}
												className="row-select"
											/>
											<span className="checkmark"></span>
										</label>
									)}
									<div className="columns">
										{columns.map((column, ii) => (
											<div key={ii} className={"column " + (column.className ?? "")}>
												<div className="label">{column.label}</div>
												<div className="value">
													{column.formattingFunction
														? column.formattingFunction(row[column.name], row)
														: row[column.name]}
												</div>
											</div>
										))}
									</div>

									<div className="right-icon">{rightIcon}</div>
								</div>
							</div>
						))}

						{rows && sortedRows.length === 0 && rows.length > 0 && (
							<div className="no-entry-found info-message">
								{this.props.textNoItemFound?.(searchString ?? "") ??
									`No entry with the value "${searchString}" can be found`}
							</div>
						)}

						{(!rows || rows.length === 0) && (
							<div className="no-rows info-message">{this.props.textNoRows ?? `Missing data`}</div>
						)}
					</div>
				)}
			</div>
		);
	}
}

export default Table;
