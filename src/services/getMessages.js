import axios from "axios";
import { apiEndpoints, token } from "../config";

export default async function getMessages()
{
    try
    {
        const messages = await axios.get(`${apiEndpoints.harmony}/api/v1/messages`, {
            headers: {
              Authorization: token
            }
           })
        return messages?.data;
    }
    catch(err){
        console.log('error while fetching messages', err.message)
    }

}