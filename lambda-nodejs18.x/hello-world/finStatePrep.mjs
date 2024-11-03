export const financialStatementPreparation = async (Statement_Type, Purpose, Frequency) => {
    let id = "2";
    Statement_Type = Statement_Type.value.originalValue;
    Purpose = Purpose.value.originalValue;
    Frequency = Frequency.value.originalValue;

    try {
        if (Statement_Type == "Balance Sheet") {
            id += "01";
        }
        if (Statement_Type == "Income Statement") {
            id += "02";
        }
        if (Statement_Type == "Cash Flow") {
            id += "03";
        }
        if (Purpose == "Loan") {
            id += "01";
        }
        if (Purpose == "Investment") {
            id += "02";
        }
        if (Purpose == "Internal Review") {
            id += "03";
        }
        if (Purpose == "Sale of Business") {
            id += "04";
        }
        if (Purpose == "Other") {
            id += "05";
        }
        if (Frequency == "Monthly") {
            id += "01";
        }
        if (Frequency == "Quarterly") {
            id += "02";
        }
        if (Frequency == "Annually") {
            id += "03";
        }
        return id;
    }
    catch (error) {
        console.log("Error occurred:", error);
    }
}
