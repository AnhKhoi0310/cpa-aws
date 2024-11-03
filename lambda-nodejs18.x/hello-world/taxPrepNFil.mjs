export const taxPreparationAndFiling = async (Filing_Type, Income_Type, Deduction_Focus) => {
    let id = "1";
    Filing_Type = Filing_Type.value.originalValue;
    Income_Type = Income_Type.value.originalValue;
    Deduction_Focus = Deduction_Focus.value.originalValue;

    try {
        if (Filing_Type == "Federal") {
            id += "01";
        }
        if (Filing_Type == "State") {
            id += "02";
        }
        if (Filing_Type == "Local") {
            id += "03";
        }
        if (Income_Type == "Business") {
            id += "01";
        }
        if (Income_Type == "Personal") {
            id += "02";
        }
        if (Income_Type == "Investment") {
            id += "03";
        }
        if (Deduction_Focus == "Retirement") {
            id += "01";
        }
        if (Deduction_Focus == "Mortgage") {
            id += "02";
        }
        if (Deduction_Focus == "Donations") {
            id += "03";
        }
        if (Deduction_Focus == "Expenses") {
            id += "04";
        }
        return id;
    }
    catch (error) {
        console.log("Error occurred:", error);
    }
}
