import axios from "axios";
import { apiEndpoints, token } from "../config";

export default async function deleteMessage(id) {
  try {
    await axios.delete(`${apiEndpoints.harmony}/api/v1/messages/${id}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (err) {
    console.error("Error while deleting message:", err.message);
  }
}
