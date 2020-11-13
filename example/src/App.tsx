import React, { Component } from "react";
import { Table, Column } from "onedash-react-table";
import { generateFakeData } from "./DataGenerator";

const userData = generateFakeData(1000);

interface AppProps {}
class App extends Component<AppProps> {
	render() {
		return (
			<div className="app">
				<h1>OneDash. React Table</h1>
				<h2>Default</h2>

				<Table resizeable multiSelect rows={userData} selectedRows={[1, 4, 10, 12]}>
					<Column name="firstName" label="Vorname" />
					<Column name="lastName" label="Nachname" />
					<Column name="age" label="Alter" sortable />
					<Column name="address" label="Adresse" />
				</Table>
			</div>
		);
	}
}

export default App;
