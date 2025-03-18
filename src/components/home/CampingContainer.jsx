import useCampingStore from "@/store/camping-store"
import MapHome from "../map/MapHome"
import CampingLists from "./CampingLists"
import { useEffect } from "react"
import { useUser } from "@clerk/clerk-react"

const CampingContainer = () => {
  const actionListCamping = useCampingStore((state) => state.actionListCamping)
  console.log(actionListCamping)

  const { user } = useUser()

  useEffect(() => {
    const id = user?.id ?? null
    actionListCamping(id)
  }, [user?.id])
  return (
    <div>
        <MapHome />
        <CampingLists />
    </div>
  )
}
export default CampingContainer