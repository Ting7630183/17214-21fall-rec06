
class Records {
    private records: string[][];

    constructor() {
        this.records = [];
    }

    public addRecord(firstName: string, lastName: string, phoneNumber: string,
                             zipCode: string, state: string, gender: string) {
        for (let row of this.records) {
            if (row[0] === firstName
                    && row[1] === lastName
                    && row[2] === phoneNumber
                    && row[3] === zipCode
                    && row[4] === state
                    && row[5] === gender) {
                return false;
            }
        }
        this.records.push([firstName, lastName, phoneNumber, zipCode, state, gender]);
        return true;
    }
}