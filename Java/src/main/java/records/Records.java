package records;

import java.util.ArrayList;
import java.util.List;

public class Records {
    private List<String[]> records;

    public Records() {
        this.records = new ArrayList<>();
    }

    public boolean addRecord(String firstName, String lastName, String phoneNumber,
                             String zipCode, String state, String gender) {
        for (String[] row : this.records) {
            if (row[0].equals(firstName)
                    && row[1].equals(lastName)
                    && row[2].equals(phoneNumber)
                    && row[3].equals(zipCode)
                    && row[4].equals(state)
                    && row[5].equals(gender)) {
                return false;
            }
        }
        this.records.add(
                new String[] { firstName, lastName, phoneNumber, zipCode, state, gender });
        return true;
    }
}