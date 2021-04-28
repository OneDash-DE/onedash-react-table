// eslint-disable-next-line import/no-extraneous-dependencies
import FAKER from "faker";

interface FakeData {
	name: {
		first: string;
		last: string;
	};
	address: string;
	age: number;
}

const generateFakeData = (numberOfEntries: number) => {
	const fakeData: FakeData[] = [];

	for (let i = 0; i < numberOfEntries; i++) {
		const entry: FakeData = {
			name: {
				first: FAKER.name.firstName(),
				last: FAKER.name.lastName()
			},
			address: FAKER.address.streetAddress(),
			age: Math.round(Math.random() * 100)
		};
		fakeData.push(entry);
	}

	return fakeData;
};
export default generateFakeData;
