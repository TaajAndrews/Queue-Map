import Client from "./api"

export const GetIdeas = async () => {
  try {
    const response = await Client.get("/ideas")
    return response.data
  } catch (error) {
    throw error
  }
}
