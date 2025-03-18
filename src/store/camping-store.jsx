import { addOrRemoveFavorite, listCamping } from "@/api/camping";
import { create } from "zustand";


const campingStore = (set, get) => ({
    campings: [],
    actionListCamping: async (id) => {
        try {
            const res = await listCamping(id)
            set({ campings: res.data.result })
        }
        catch (err) {
            console.log(err)
        }
    },
    actionAddorRemoveFavorite: async (token, data) => {
        try {
            const res = await addOrRemoveFavorite(token, data)
            const camping = get().campings
            const { campingId, isFavorite } = data
            const updatedCamping = camping.map((item) => {
                return (
                    item.id === campingId
                    ? { ...item, isFavorite: !isFavorite }
                    : item
                )
            })
            set({ campings: updatedCamping })
            return { success: true, message: res.data.message }
        }
        catch (err) {
            console.log(err?.response?.data?.message)
            return { success: false, message: res.data.message }
        }
    }
})

const useCampingStore = create(campingStore)

export default useCampingStore