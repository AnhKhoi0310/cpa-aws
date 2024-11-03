export const BusinessEntityConsultation = async (Business_Type, Revenue, Location) => {
    let id = "4";
    Business_Type = Business_Type.value.originalValue;
    Revenue = Revenue.value.originalValue;
    Location = Location.value.originalValue;

    try {
        if (Business_Type == "LLP") {
            id += "01";
        }
        if (Business_Type == "LLC") {
            id += "02";
        }
        if (Business_Type == "Proprietorship") {
            id += "03";
        }
        if (Business_Type == "Partnership") {
            id += "04";
        }
        if (Business_Type == "Corporation") {
            id += "05";
        }
        if (Business_Type == "Sole") {
            id += "06";
        }
        if (Business_Type == "Other") {
            id += "07";
        }
        if (Revenue == "Low") {
            id += "01";
        }
        if (Revenue == "Medium") {
            id += "02";
        }
        if (Revenue = "High") {
            id += "03";
        }
        if (Location == "New York") {
            id += "01";
        }
        if (Location == "Florida") {
            id += "02";
        }
        if (Location == "Texas") {
            id += "03";
        }
        if (Location == "California") {
            id += "04";
        }
        if (Location == "Other") {
            id += "05";
        }
        return id;
    }
    catch (error) {
        console.log("Error occurred:", error);
    }
}
