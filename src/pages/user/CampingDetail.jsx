import { readCamping } from "@/api/camping"
import BookingContainer from "@/components/booking/BookingContainer"
import Breadcrumbs from "@/components/campings/Breadcrumbs"
import Description from "@/components/campings/Description"
import ImageContainer from "@/components/campings/ImageContainer"
import Mainmap from "@/components/map/Mainmap"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

const CampingDetail = () => {
  const [camping, setCamping] = useState([])
  const { id } = useParams()
  console.log(id)

  useEffect(() => {
    fetchCampingDetail(id)
  }, [])

  const fetchCampingDetail = async (id) => {
    try {
      const res = await readCamping(id)
      console.log(res.data.result)
      setCamping(res.data.result)
    }
    catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      {/* Breadcrums */}
      <Breadcrumbs name={camping.title} />
      {/* Header */}
      <header className="flex items-center justify-between mt-2">
        <h1 className="text-4xl font-bold">{camping.title}</h1>
        <div className="flex gap-2">
          <p>Share</p>
          <p>Favorite</p>
        </div>
      </header>
      {/* Image */}
      <ImageContainer
        image={camping.secure_url}
        name={camping.name}
      />
      {/* Description & Map */}
      <section className="lg:grid lg:grid-cols-12 gap-x-12">
        <div className="lg:col-span-8">
          <Description text={camping.description} />
          {
            camping.lat && <Mainmap location={[camping.lat, camping.lng]} />
          }
        </div>
        {/* Calenda */}
        <div className="lg:col-span-4 flex flex-col items-center">
          <BookingContainer 
          campingId={camping.id}
          price={camping.price}
          bookings={[]}
          />
        </div>
      </section>
    </div>
  )
}
export default CampingDetail