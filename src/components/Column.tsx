import React from "react";

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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Column = (_props: ColumnProps) => {
	return <></>;
};

export default Column;
