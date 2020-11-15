import React from "react";

interface TableSearchProps {
	_onChange?: (value: string) => void;
	onChange?: (value: string) => void;
}
const TableSearch = (props: TableSearchProps) => {
	let timeout: NodeJS.Timeout;
	let value: string;

	const sendData = () => {
		props._onChange?.(value);
		props.onChange?.(value);
	};
	const onChange = (e: any) => {
		value = e.target.value;
		if (timeout) clearTimeout(timeout);
		timeout = setTimeout(sendData, 500);
	};
	return <input onChange={onChange} className="table-search" />;
};

export default TableSearch;
