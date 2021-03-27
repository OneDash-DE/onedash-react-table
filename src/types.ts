import Cell, { CellProps } from "./components/Cell";
import { ColumnProps } from "./components/Column";
import { RowProps } from "./components/Row";

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
