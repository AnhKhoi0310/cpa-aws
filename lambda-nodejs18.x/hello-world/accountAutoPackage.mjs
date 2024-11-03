export const accountingAutomationPackage = async (Automation_Area, Number_Of_Employee, Software_Type) => {
    let id = "3";
    Automation_Area = Automation_Area.value.originalValue;
    Number_Of_Employee = Number_Of_Employee.value.originalValue;
    Software_Type = Software_Type.value.originalValue;

    try {
        if (Automation_Area == "Bookkeeping") {
            id += "01";
        }
        if (Automation_Area == "Payroll") {
            id += "02";
        }
        if (Automation_Area == "Expense Management") {
            id += "03";
        }
        if (Number_Of_Employee <50) {
            id += "01";
        }
        if (Number_Of_Employee >50 && Number_Of_Employee <200) {
            id += "02";
        }
        if (Number_Of_Employee >50 && Number_Of_Employee <1000) {
            id += "03";
        }
        if (Number_Of_Employee >1000) {
            id += "04";
        }
        if (Software_Type == "QuickBooks") {
            id += "01";
        }
        if (Software_Type == "Xero") {
            id += "02";
        }
        if (Software_Type == "FreshBooks") {
            id += "03";
        }
        if (Software_Type == "None") {
            id += "04";
        }
        if (Software_Type == "Other") {
            id += "05";
        }
        return id;
    }
    catch (error) {
        console.log("Error occurred:", error);
    }
}
