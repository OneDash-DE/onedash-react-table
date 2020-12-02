import Cell from "./components/Cell";

export interface TableProps {
	selectedRows?: number[];

	select?: "single" | "click" | "multi" | "none";

	resizeable?: boolean;
	searchable?: boolean;

	onRowSelect?: (selectedRows?: number[], addedRows?: number[]) => void;
	onRowClick?: (index?: number, row?: any) => void;

	style?: React.CSSProperties;

	rightIcon?: JSX.Element;

	minWidth?: number;
	disableMobile?: boolean;

	searchString?: string;

	textNoItemFound?: (searchString: string) => string;
	textNoRows?: string;
}
export interface ColumnProps {
	name: string;
	label?: string;
	sortable?: boolean;
	sortingFunction?: (rows: any[]) => any[];

	width?: string;

	className?: string;
}
export interface CellProps {
	row?: any;
	className?: string;

	noValue?: string | JSX.Element;

	_value: any;
	_row: any;

	children?: (value: any, row: any) => JSX.Element | string | number | boolean;
}
export interface RowProps {
	_style?: React.CSSProperties;
	row: {};
	className?: string;
	gridColumns?: string;
}
export interface ColumnItem extends ColumnProps {
	ref?: any;
}
export interface CellItem extends CellProps {
	ref?: any;
}
export interface RowItem extends RowProps {
	ref?: any;
	i: number;
	cells: { [name: string]: Cell };
}
