import axios from "axios";
import { apiEndpoints, token } from "../config";

export default async function postMessage(text) {
  try {
    const requestData = {
      text: text,
    };

    await axios.post(`${apiEndpoints.harmony}/api/v1/messages/`, requestData, {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.error("Error while posting message:", err.message);
  }
}
