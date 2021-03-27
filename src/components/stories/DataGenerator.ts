// eslint-disable-next-line import/no-extraneous-dependencies
import FAKER from "faker";

interface FakeData {
	firstName: string;
	lastName: string;
	address: string;
	age: number;
}

const generateFakeData = (numberOfEntries: number) => {
	const fakeData: FakeData[] = [];

	for (let i = 0; i < numberOfEntries; i++) {
		const entry: FakeData = {
			firstName: FAKER.name.firstName(),
			lastName: FAKER.name.lastName(),
			address: FAKER.address.streetAddress(),
			age: Math.round(Math.random() * 100)
		};
		fakeData.push(entry);
	}

	return fakeData;
};
export default generateFakeData;
