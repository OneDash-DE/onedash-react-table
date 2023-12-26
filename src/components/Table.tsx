/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-console */
import React, { Component, ReactNode } from "react";
import AppUtils from "../app-utils";
import { ColumnItem, RowItem } from "../types";
import Cell, { CellProps } from "./Cell";
import Column from "./Column";
import Row, { RowProps } from "./Row";

export interface TableProps {
	/**
	 * Array of selected rows. Necessary for multiple select mode.
	 */
	selectedRows?: number[];

	/**
	 * Select mode.
	 */
	select?: "single" | "click" | "multi" | "none";

	/**
	 * Event listener which will be fired when a row has been selected.
	 */
	onRowSelect?: (selectedRowIndexes: number[], mode: "add" | "remove", changedRowIndexes: number[], changedRows: any[]) => void;

	/**
	 * Allowes a select all checkbox
	 */
	allowSelectAll?: boolean;

	/**
	 * Width of each checkbox
	 */
	checkboxWidth?: string;

	/**
	 * Event listener which whill be fired when the user clicks on a row.
	 */
	onRowClick?: (index?: number, row?: any, event?: any) => void;

	/**
	 * CSS Style which should be applied to form component
	 */
	style?: React.CSSProperties;

	/**
	 * Right icon for each row
	 */
	rightIcon?: JSX.Element;

	/**
	 * Min with when the table should switch to mobile version
	 */
	minWidth?: number;

	/**
	 * Flag which indicates whether to disable mobile table version.
	 */
	disableMobile?: boolean;

	/**
	 * Search string which will be used to search in table properties
	 */
	searchString?: string;

	/**
	 * Message which should be printed when no searched row can be found.
	 */
	textNoItemFound?: (searchString: string) => string;

	/**
	 * Text which should be showed in case there are no rows.
	 */
	textNoRows?: string;

	/**
	 * Debug flag for column width
	 */
	columnDebug?: boolean;

	/**
	 * Optional class name of the table
	 */
	className?: string;

	children?: ReactNode;
}
class Table extends Component<TableProps> {
	minWidth = 0;
	table = React.createRef<HTMLDivElement>();

	state = {
		columns: [] as ColumnItem[],
		rows: [] as RowItem[],
		selectedRows: [] as number[],
		sorting: undefined as undefined | { direction: "up" | "down"; column: ColumnItem },
		ratios: [] as number[],
		isMobile: false
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
							_value: AppUtils.getObjectValue(subchild.props.name, child.props.row),
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

	calculateColumnSizes = () => {
		if (!this.state.rows) return;
		const { columns } = this.state;

		// Take maximum 30 rows to decrease load
		const rows = this.state.rows.slice(0, 30);
		const sizes: number[] = new Array(columns.length).fill(0);
		rows.forEach((row) => {
			columns.forEach((column, i) => {
				const val = AppUtils.getObjectValue(column.name, row.row);
				if (!val || typeof val === "object") return;
				sizes[i] += String(val).length;
			});
		});

		if (this.props.columnDebug) {
			console.log("----------------------------------------------------------");
			console.log("Columns:");
			console.log(columns);
			console.log("Rows:");
			console.log(rows);
			console.log("Sizes [Without Label]:");
			console.log(JSON.parse(JSON.stringify(sizes)));
		}

		// Add Column Width => Small values but longer column label
		columns.forEach((column, i) => {
			sizes[i] += (column.label?.length ?? 0 + 30) * 10;
		});

		if (this.props.columnDebug) {
			console.log("Sizes [With Label]:");
			console.log(JSON.parse(JSON.stringify(sizes)));
		}

		const total = sizes.reduce((a, b) => a + b, 0);
		if (!this.props.minWidth) {
			this.minWidth = (total / (rows.length + 15)) * 15 + columns.length * 18;
			this.checkTableWidth();
		}
		if (this.props.columnDebug) {
			console.log("MinWidth:");
			console.log(this.props.minWidth ?? this.minWidth);
			console.log("Total:");
			console.log(total);
			console.log("-----------------------------------------------------------");
		}

		const ratios: number[] = [];
		sizes.forEach((size, i) => {
			ratios[i] = Number(((size / total) * 100).toFixed(2));
		});
		this.setState({ ratios });
	};

	getCheckboxWidth = () => this.props.checkboxWidth ?? "30px";

	getDesktopGridColumns = () => {
		let templateString = "";
		this.state.ratios.forEach((ratio, i) => {
			if (this.state.columns[i].width) {
				templateString += `${this.state.columns[i].width} `;
			} else {
				templateString += `${ratio}fr `;
			}
		});
		if (this.props.select === "single") templateString = `${this.getCheckboxWidth()} ${templateString}`;
		if (this.props.select === "multi") templateString = `${this.getCheckboxWidth()} ${templateString}`;
		if (this.props.rightIcon) templateString += " 50px";
		return templateString;
	};

	getMobileGridColumns = () => {
		let templateString = "1fr ";
		if (this.props.select === "single") templateString = `${this.getCheckboxWidth()} ${templateString}`;
		if (this.props.select === "multi") templateString = `${this.getCheckboxWidth()} ${templateString}`;
		if (this.props.rightIcon) templateString += " 50px";
		return templateString;
	};

	onSelectRow = (rowNum: number, row: RowProps, e?: any) => {
		if (!this.props.select || this.props.select === "none") return undefined;
		if (this.props.select === "click") return this.props.onRowClick?.(rowNum, row.row, e);

		const { selectedRows } = this.state;
		const index = selectedRows.indexOf(rowNum);
		let mode: "add" | "remove" = "add";
		if (index === -1) {
			selectedRows.push(rowNum);
		} else {
			mode = "remove";
			selectedRows.splice(index, 1);
		}

		this.setState({ selectedRows });

		this.props.onRowSelect?.(selectedRows, mode, [rowNum], [row.row]);
		return undefined;
	};

	onRowClick = (e: any, row: RowItem) => {
		// Why? if (e.target.classList.contains("inner")) return;
		this.onSelectRow(row.i, row, e);
	};

	toggleAll = (rows: RowItem[], add: boolean) => {
		if (!rows) return;
		const selectedRows = add ? rows.map((x) => x.i) : [];
		const changed: RowItem[] = [];
		rows.forEach((row) => {
			if (add && !this.state.selectedRows.includes(row.i)) {
				changed.push(row);
			}
			if (!add && this.state.selectedRows.includes(row.i)) {
				changed.push(row);
			}
		});
		this.setState({ selectedRows });
		this.props.onRowSelect?.(
			selectedRows,
			add ? "add" : "remove",
			changed.map((x) => x.i),
			changed.map((x) => x.row)
		);
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
		if (this.props.className) className += ` ${this.props.className}`;
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
					const aVal = AppUtils.getObjectValue(sorting.column.name, a.row);
					const bVal = AppUtils.getObjectValue(sorting.column.name, b.row);
					if (typeof aVal === "string" && typeof bVal === "string") {
						return sorting.direction === "up" ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
					}
					if (typeof aVal === "number" && typeof bVal === "number") {
						return sorting.direction === "up" ? aVal - bVal : bVal - aVal;
					}
					console.error("You cannot sort this type of data. Allowed is only sorting of strings and numbers");
					return 0;
				});
			}
		}

		if (searchString && searchString.length > 0) {
			sortedRows = sortedRows.filter((x) => {
				const searchData = (obj: any): any => {
					return Object.keys(obj).find((propName) => {
						const val = obj?.[propName];
						if (typeof val === "object" && !Array.isArray(val)) {
							const d = searchData(val ?? {});
							return d;
						}
						if (typeof val === "object" || typeof val === "function") return undefined;

						return String(val).toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
					});
				};
				return searchData(x.row ?? {}) !== undefined;
			});
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
								<>
									{this.props.allowSelectAll ? (
										<label className="multi-select select-container select-toggle-container">
											<input
												type="checkbox"
												onChange={(e) => this.toggleAll(sortedRows, e.target.checked)}
												className="row-select-toggle"
											/>
											<span className="checkmark" />
										</label>
									) : (
										<span />
									)}
								</>
							)}
							{columns.map((column) => (
								<div key={column.name} className={`column column-head ${column.className ?? ""}`} data-name={column.name}>
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
								<div onClick={(e) => this.onRowClick(e, row)} className={this.rowClassList(i, row)} key={i as any}>
									<div
										className="inner"
										style={{ display: "grid", gridTemplateColumns: row.gridColumns ?? gridTemplateColumns }}>
										{select === "multi" && (
											<label className="multi-select select-container">
												<input
													type="checkbox"
													onChange={() => this.onSelectRow(row.i, row)}
													checked={selectedRows.includes(row.i)}
													className="row-select"
												/>
												<span className="checkmark" />
											</label>
										)}
										{columns.map((column, ii) => {
											const cell = row.cells[column.name];
											if (!cell) return <React.Fragment key={ii as any} />;

											return (
												<div key={ii as any} className={this.cellClassName(column, cell.props as any)}>
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
							<div onClick={(e) => this.onRowClick(e, row)} className={this.rowClassList(i, row)} key={i as any}>
								<div className="inner" style={{ display: "grid", gridTemplateColumns }}>
									{select === "multi" && (
										<label className="multi-select select-container">
											<input
												type="checkbox"
												onChange={() => this.onSelectRow(row.i, row)}
												checked={selectedRows.includes(row.i)}
												className="row-select"
											/>
											<span className="checkmark" />
										</label>
									)}
									<div className="columns">
										{columns.map((column, ii) => {
											const cell = row.cells[column.name];
											if (!cell) return <React.Fragment key={ii as any} />;
											return (
												<div key={ii as any} className={`column ${column.className ?? ""}`}>
													<div className="label">{column.label}</div>
													<div className={`value${this.cellClassName(column, cell.props as any)}`}>{cell}</div>
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
