import { BlockquoteHTMLAttributes } from "react";

export interface TableProps {
    rows: {}[];
    resizeable?: boolean;
    multiSelect?: boolean;
    selectedRows?: number[];
    onRowSelect?: (selectedRows?: number[], addedRows?: number[]) => void;
    searchable?: boolean;
}
export interface ColumnProps {
    name: string;
    label?: string;
    sortable?: boolean;
}
export interface ColumnItem extends ColumnProps{
    ref?: any;
}