const API = "https://randomuser.me/api/?results=6";

export async function getData() {
  try {
    const data = await fetch(API);
    if (!data) {
      const err = new Error("Internal Server Error");
      throw err;
    }

    return await data.json();
  } catch (error) {
    return {
      status: "failed",
      code: 500,
      message: error.message || "Server Error",
    };
  }
}
