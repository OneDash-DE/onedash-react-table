import Cell from "./components/Cell";

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
	onRowSelect?: (selectedRows?: number[], addedRows?: number[]) => void;

	/**
	 * Event listener which whill be fired when the user clicks on a row.
	 */
	onRowClick?: (index?: number, row?: any) => void;

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
}
export interface ColumnProps {
	/**
	 * Object name
	 */
	name: string;

	/**
	 * Label of the column
	 */
	label?: string;

	/**
	 * Flag whether sorting is possible
	 */
	sortable?: boolean;
	/**
	 * Custom sorting function
	 */
	sortingFunction?: (rows: any[]) => any[];

	/**
	 * Override width of column
	 */
	width?: string;

	/**
	 * Classname for each entry in this column
	 */
	className?: string;
}
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

	children?: (value: any, row: any) => JSX.Element | string | number | boolean;
}
export interface RowProps {
	/**
	 * Row values
	 */
	row: {};
	/**
	 * Classname for entire row
	 */
	className?: string;

	/**
	 * Override grid columns
	 */
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
