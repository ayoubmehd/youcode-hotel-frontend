import { BASE_URL } from "../config";

export default async function remove(id) {
  try {
    const response = await fetch(`${BASE_URL}/orders/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    }).then((res) => res.json());

    return [null, response];
  } catch (error) {
    return [error, null];
  }
}
