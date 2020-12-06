import React, { Component } from "react";
import { CellProps, ColumnItem, RowItem, RowProps, TableProps } from "../types";
import Cell from "./Cell";
import Column from "./Column";
import Row from "./Row";

class Table extends Component<TableProps> {
	minWidth: number = 0;
	table = React.createRef<HTMLDivElement>();

	state = {
		columns: [] as ColumnItem[],
		rows: [] as RowItem[],
		selectedRows: [] as number[],
		sorting: undefined as undefined | { direction: "up" | "down"; column: ColumnItem },
		ratios: [] as number[],
		isMobile: false
	};

	getColumns = () => {
		const columns: ColumnItem[] = [];
		const rows: RowItem[] = [];
		React.Children.forEach(this.props.children as any, (child) => {
			if (!child) return;

			if (child.type === Column) {
				const columnItem: any = {};
				for (const propName in child.props) {
					columnItem[propName] = child.props[propName];
				}
				columns.push(columnItem);
			} else if (child.type === Row) {
				const cells: any = {};
				const rowItem: any = {};
				for (const propName in child.props) {
					rowItem[propName] = child.props[propName];
				}
				React.Children.forEach(child.props.children as any, (subchild) => {
					if (subchild.type === Cell) {
						const clone = React.cloneElement(subchild, {
							_value: child.props.row?.[subchild.props.name],
							_row: child.props.row
						});

						cells[subchild.props.name] = clone;
					}
				});
				rowItem.cells = cells;
				rows.push(rowItem);
			}
		});
		rows.forEach((row, i) => {
			row.i = i;
		});
		this.setState({ columns, rows }, this.calculateColumnSizes);
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
		this.setState(
			{
				selectedRows: this.props.selectedRows ?? []
			},
			this.checkTableWidth
		);
	}

	componentDidUpdate(latestProps: any) {
		if (latestProps.children !== this.props.children) {
			this.getColumns();
			this.checkTableWidth();
		}
		if (latestProps.selectedRows !== this.props.selectedRows) {
			this.setState({ selectedRows: this.props.selectedRows });
		}
	}

	calculateColumnSizes = () => {
		if (!this.state.rows) return;
		const columns = this.state.columns;

		// Take maximum 30 rows to decrease load
		const rows = this.state.rows.slice(0, 30);
		const sizes: number[] = new Array(columns.length).fill(0);
		rows.forEach((row) => {
			columns.forEach((column, i) => {
				const val = row.row?.[column.name];
				if (typeof val === "string" || typeof val === "number") {
					sizes[i] += String(val).length;
				} else {
					// Default size for JSX Elements etc.
					sizes[i] += 100;
				}
			});
		});

		// Add Column Width => Small values but longer column label
		columns.forEach((column, i) => {
			sizes[i] += (column.label?.length ?? 0 + 30) * 10;
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

	onSelectRow = (rowNum: number, row: RowProps) => {
		if (!this.props.select || this.props.select === "none") return;
		if (this.props.select === "click") return this.props.onRowClick?.(rowNum, row.row);

		const selectedRows = this.state.selectedRows;
		const index = selectedRows.indexOf(rowNum);
		if (index === -1) {
			selectedRows.push(rowNum);
		} else {
			selectedRows.splice(index, 1);
		}

		this.setState({ selectedRows });
	};

	onRowClick = (_e: any, row: RowItem) => {
		// Why? if (e.target.classList.contains("inner")) return;
		this.onSelectRow(row.i, row);
	};

	onSelectToggle = (e: any) => {
		if (!this.state.rows) return;
		const isChecked = e.target.checked;
		const selectedRows = [];
		if (isChecked) {
			for (let i = 0; i < this.state.rows.length; i++) {
				selectedRows.push(i);
			}
		}
		this.setState({ selectedRows });
	};

	rowClassList = (i: number, row: RowItem) => {
		let className = "row";
		if (i % 2 === 0) {
			className += " even";
		} else {
			className += " odd";
		}
		if (this.props.select === "click") className += " clickable";
		if (this.state.selectedRows.includes(row.i)) className += " selected";
		if (row.className) className += ` ${row.className}`;

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

	cellClassName = (column: ColumnItem, cell: CellProps) => {
		let className = "cell";
		if (column.className) className += ` ${column.className}`;
		if (cell.className) className += ` ${cell.className}`;
		return className;
	};

	render() {
		const { columns, selectedRows, sorting, isMobile, rows } = this.state;
		const { select, rightIcon, searchString, style } = this.props;
		let sortedRows: RowItem[] = [...rows] ?? [];
		const gridTemplateColumns = isMobile ? this.getMobileGridColumns() : this.getDesktopGridColumns();

		// Apply sorting
		if (sorting) {
			// Apply sorting
			if (sorting.column.sortingFunction) {
				sortedRows = sorting.column.sortingFunction(sortedRows);
			} else {
				sortedRows = sortedRows.sort((a, b) => {
					const aVal = a.row?.[sorting.column.name];
					const bVal = b.row?.[sorting.column.name];
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
				Object.keys(x.row ?? {}).find((propName) => {
					const val = x.row?.[propName];
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
								</div>
							))}
						</div>
						<div className="table-body">
							{sortedRows.map((row, i) => (
								<div onClick={(e) => this.onRowClick(e, row)} className={this.rowClassList(i, row)} key={i}>
									<div
										className="inner"
										style={{ display: "grid", gridTemplateColumns: row.gridColumns ?? gridTemplateColumns }}>
										{select === "multi" && (
											<label className="multi-select select-container">
												<input
													type="checkbox"
													onChange={() => this.onSelectRow(i, row)}
													checked={selectedRows.includes(row.i)}
													className="row-select"
												/>
												<span className="checkmark"></span>
											</label>
										)}
										{columns.map((column, ii) => {
											const cell = row.cells[column.name];
											if (!cell) return <React.Fragment key={ii}></React.Fragment>;

											return (
												<div key={ii} className={this.cellClassName(column, cell.props as any)}>
													{cell}
												</div>
											);
										})}

										{rightIcon && <div className="right-icon">{rightIcon}</div>}
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
							<div onClick={(e) => this.onRowClick(e, row)} className={this.rowClassList(i, row)} key={i}>
								<div className="inner" style={{ display: "grid", gridTemplateColumns }}>
									{select === "multi" && (
										<label className="multi-select select-container">
											<input
												type="checkbox"
												onChange={() => this.onSelectRow(row.i, row)}
												checked={selectedRows.includes(row.i)}
												className="row-select"
											/>
											<span className="checkmark"></span>
										</label>
									)}
									<div className="columns">
										{columns.map((column, ii) => {
											const cell = row.cells[column.name];
											if (!cell) return <React.Fragment key={ii}></React.Fragment>;
											return (
												<div key={ii} className={"column " + (column.className ?? "")}>
													<div className="label">{column.label}</div>
													<div className={"value" + this.cellClassName(column, cell.props as any)}>{cell}</div>
												</div>
											);
										})}
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
