import { BASE_URL } from "../config";

export default async function create(data) {
  try {
    const response = await fetch(`${BASE_URL}/orders`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    }).then((res) => res.json());

    return [null, response];
  } catch (error) {
    return [error, null];
  }
}
