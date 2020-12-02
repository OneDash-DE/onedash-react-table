export interface TableProps {
	rows?: {}[];
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
	formattingFunction?: (value: any, row: any, index: number) => any;

	width?: string;

	className?: string;

	editable?: {
		rowIndexes?: number[];
		type: "number" | "string";
	};

	noEntryMobileFallback?: string | JSX.Element;
	noEntryDesktopFallback?: string | JSX.Element;
}
export interface ColumnItem extends ColumnProps {
	ref?: any;
}
