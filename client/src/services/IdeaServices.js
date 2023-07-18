import Client from "./api"

export const GetIdeas = async () => {
  try {
    const res = await Client.get("/ideas")
    return res.data
  } catch (error) {
    throw error
  }
}
