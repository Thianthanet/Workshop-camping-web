import { useState } from "react"
import CampingCard from "../card/CampingCard"
import useCampingStore from "@/store/camping-store"

const CampingLists = () => {
    const campings = useCampingStore((state) => state.campings)

    return (
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-clos-4 gap-8 mt-4">
            {
                campings?.map((item) => {
                    return <CampingCard key={item.id} camping={item} />
                })
            }
        </section>
    )
}
export default CampingLists