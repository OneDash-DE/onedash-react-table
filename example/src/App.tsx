import React, { Component } from "react";
import { Table, Column, TableToolbar, TableSearch } from "onedash-react-table";
import { generateFakeData } from "./DataGenerator";

interface AppProps {}
class App extends Component<AppProps> {
	state = {
		userData: generateFakeData(10)
	};
	render() {
		return (
			<div className="app">
				<h1>OneDash. React Table</h1>
				<h2>Default</h2>

				<Table
					select="click"
					resizeable
					rows={this.state.userData}
					selectedRows={[1, 4, 8]}
					rightIcon={<span className="right-chevron"></span>}>
					<TableToolbar>
						<div className="left">
							<TableSearch />
						</div>
					</TableToolbar>

					<Column name="firstName" label="Vorname" sortable />
					<Column name="lastName" label="Nachname" />
					<Column name="age" label="Alter" sortable />
					<Column name="address" label="Adresse" />
				</Table>
			</div>
		);
	}
}

export default App;
