/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
import { startChat } from "./getGemini.mjs";
import {taxPreparationAndFiling} from "./taxPrepNFil.mjs";
import {financialStatementPreparation} from "./finStatePrep.mjs";
import {accountingAutomationPackage} from "./accountAutoPackage.mjs";
import {BusinessEntityConsultation} from "./busiEntityConsult.mjs";

import {queryResponse} from "./queryResponse.mjs"

export const lambdaHandler = async (event, context) => {
    //console.log('Received event:', JSON.stringify(event, null, 2));
    const intent = event.sessionState.intent.name;
    const slots = event.sessionState.intent.slots;
    // console.log("event:", event);
    console.log("event log slot:", slots);
    if (intent == "FallbackIntent") {
        const response =await startChat(event.inputTranscript);
        console.log("Gemini:", response);
        return {
            "sessionState": {
                "dialogAction": {
                    "type": "Close"
                },
                "intent": {
                    "name": "FallbackIntent",
                    "state": "InProgress" ,
                },
            },
            'messages': [
                {
                    "contentType":  "PlainText" ,
                        "content": response,
                }
            ]
        }
    }
    // Tax_Preparation_And_Filing
    if (intent == "Tax_Preparation_And_Filing") {
        let Filing_Type = slots.Filing_Type || null;
        let Income_Type = slots.Income_Type || null;
        let Deduction_Focus = slots.Deduction_Focus || null;
        if(Filing_Type != null && Income_Type != null && Deduction_Focus != null){
            var id = await taxPreparationAndFiling(Filing_Type,Income_Type,Deduction_Focus);
            var response = await queryResponse(id);
            return{
                "sessionState": {
                    "dialogAction": {
                        "type": "Close"
                    },
                    "intent": {
                        "name": "Tax_Preparation_And_Filing",
                        "state": "InProgress" ,
                    },
                },
                'messages': [
                    {
                        "contentType":  "PlainText" ,
                            "content": response,
                    }
                ]
            }
        }
        else{
            let slotToElicit =  !Filing_Type ? "Filing_Type" :  !Income_Type ? "Income_Type" :   "Deduction_Focus";
            return{
                "sessionState": {
                    "dialogAction": {
                        "slotToElicit": slotToElicit,
                        "type": "ElicitSlot"
                    },
                    "intent": {
                        // "confirmationState": 'None',
                        "name": intent,
                        "slots": slots,
                    },
                },
            };
        }

    }


    //Financial_Statement_Preparation
    if (intent == "Financial_Statement_Preparation") {
        let Statement_Type = slots.Statement_Type || null;
        let Purpose = slots.Purpose || null;
        let Frequency = slots.Frequency || null;
        if(Statement_Type != null && Purpose != null && Frequency != null){
            var id = await financialStatementPreparation(Statement_Type,Purpose,Frequency);
            var response = await queryResponse(id);
            return{
                "sessionState": {
                    "dialogAction": {
                        "type": "Close"
                    },
                    "intent": {
                        "name": "Financial_Statement_Preparation",
                        "state": "InProgress" ,
                    },
                },
                'messages': [
                    {
                        "contentType":  "PlainText" ,
                            "content": id,
                    }
                ]
            }
        }
        else{
            let slotToElicit =  !Statement_Type ? "Statement_Type" :  !Purpose ? "Purpose" :   "Frequency";
            return{
                "sessionState": {
                    "dialogAction": {
                        "slotToElicit": slotToElicit,
                        "type": "ElicitSlot"
                    },
                    "intent": {
                        // "confirmationState": 'None',
                        "name": intent,
                        "slots": slots,
                    },
                },
            };
        }

    }


        //Accounting_Automation_Package
    if (intent == "Accounting_Automation_Package") {
        let Automation_Area = slots.Automation_Area || null;
        let Number_Of_Employee = slots.Number_Of_Employee || null;
        let Software_Type = slots.Software_Type || null;
        if(Automation_Area != null && Number_Of_Employee != null && Software_Type != null){
            var id = await accountingAutomationPackage(Automation_Area,Number_Of_Employee,Software_Type);
            // var response = await queryResponse(id);
            return{
                "sessionState": {
                    "dialogAction": {
                        "type": "Close"
                    },
                    "intent": {
                        "name": "Accounting_Automation_Package",
                        "state": "InProgress" ,
                    },
                },
                'messages': [
                    {
                        "contentType":  "PlainText" ,
                            "content": id,
                    }
                ]
            }
        }
        else{
            let slotToElicit =  !Automation_Area ? "Automation_Area" :  !Number_Of_Employee ? "Number_Of_Employee" :   "Software_Type";
            return{
                "sessionState": {
                    "dialogAction": {
                        "slotToElicit": slotToElicit,
                        "type": "ElicitSlot"
                    },
                    "intent": {
                        // "confirmationState": 'None',
                        "name": intent,
                        "slots": slots,
                    },
                },
            };
        }

    }


        //Business_Entity_Consultation
    if (intent == "Business_Entity_Consultation") {
        let Business_Type = slots.Business_Type || null;
        let Revenue = slots.Revenue || null;
        let Location = slots.Location || null;
        if(Business_Type != null && Revenue != null && Location != null){
            var id = await BusinessEntityConsultation(Business_Type,Revenue,Location);
            // var response = await queryResponse(id);
            return{
                "sessionState": {
                    "dialogAction": {
                        "type": "Close"
                    },
                    "intent": {
                        "name": "Business_Entity_Consultation",
                        "state": "InProgress" ,
                    },
                },
                'messages': [
                    {
                        "contentType":  "PlainText" ,
                            "content": id,
                    }
                ]
            }
        }
        else{
            let slotToElicit =  !Business_Type ? "Business_Type" :  !Revenue ? "Revenue" :   "Location";
            return{
                "sessionState": {
                    "dialogAction": {
                        "slotToElicit": slotToElicit,
                        "type": "ElicitSlot"
                    },
                    "intent": {
                        // "confirmationState": 'None',
                        "name": intent,
                        "slots": slots,
                    },
                },
            };
        }

    }

    // MakeAppointmentIntent
    if (intent == "MakeAppointmentIntent") {
        return {
            "sessionState": {
                "dialogAction": {
                    "type": "Close"
                },
                "intent": {
                    "name": "MakeAppointmentIntent",
                    "state": "InProgress" ,
                },
            },
            'messages': [
                {
                    "contentType":  "PlainText" ,
                        "content": "https://calendly.com/khoianh310/30min",
                }
            ]
        }
    }

        

    return {
        "sessionState": {
            "dialogAction": {
                "slotToElicit": "RemoteOrPerson",
                "type": "ElicitSlot"
            },
            "intent": {
                // "confirmationState": 'None',
                "name": intent,
                // "slots": slots,
            },
        },
    };
};


