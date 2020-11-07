import FAKER from "faker";

interface FakeData {
    firstName: string;
    lastName: string;
    address: string;
    age: number;
}

export const generateFakeData = (numberOfEntries: number) => {
    const fakeData:FakeData[] = [];

    for (let i = 0; i < numberOfEntries; i++) {
        const entry: FakeData = {
            firstName: FAKER.name.firstName(),
            lastName: FAKER.name.lastName(),
            address: FAKER.address.streetAddress(),
            age: Math.round(Math.random() * 100)
        }
        fakeData.push(entry); 
    }

    return fakeData;

}