import { BASE_URL } from "../config";

export default async function findById(id) {
  try {
    const response = await fetch(`${BASE_URL}/orders/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    return [null, response];
  } catch (error) {
    return [error, null];
  }
}
