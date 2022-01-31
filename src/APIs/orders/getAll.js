import { BASE_URL } from "../config";

export default async function getAll(page = 1) {
  try {
    const response = await fetch(`${BASE_URL}/orders?page=${page}`, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    return [null, response];
  } catch (error) {
    return [error, null];
  }
}
