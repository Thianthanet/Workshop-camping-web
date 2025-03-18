import axios from "axios";

export const createCamping = async (token, data) => {
    return await axios.post("http://localhost:5000/api/camping", data,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
}

export const listCamping = async (id) =>
    await axios.get(`http://localhost:5000/api/campings/${id}`)

export const readCamping = async (id) =>
    await axios.get("http://localhost:5000/api/camping/" + id)

export const addOrRemoveFavorite = async (token, data) => {
    return await axios.post("http://localhost:5000/api/favorite", data,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
}