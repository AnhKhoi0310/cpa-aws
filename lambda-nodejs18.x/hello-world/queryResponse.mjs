import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  QueryCommand,
} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});

const docClient = DynamoDBDocumentClient.from(client);
export const  queryResponse = async(response_id) =>{
  response_id = Number(response_id);
  const params = {
    TableName: "CPA_Response",
    KeyConditionExpression: "Response_id = :respond_id",
    ExpressionAttributeValues: {
      ":respond_id": response_id,
    },
    ConsistentRead: true,
  };
  
    try {
      const data = await docClient.send(new QueryCommand(params));
      var res = data.Items[0].Response;
    //   console.log('query result : ' + res);
      return res;
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
//   queryResponse();