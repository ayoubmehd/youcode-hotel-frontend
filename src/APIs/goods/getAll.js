const baseUrl = "http://localhost:5000/api/v1";

export default async function getAll(page = 1) {
  try {
    const response = await fetch(`${baseUrl}/goods?page=${page}`, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    return [null, response];
  } catch (error) {
    return [error, null];
  }
}
