import useBookingStore from "@/store/booking-store"
import { Card, CardTitle } from "../ui/card"
import numeral from "numeral"
import { calTotal } from "@/utils/booking"
import { formatNumber } from "@/utils/formats"
import BookingConfirm from "./BookingConfirm"

const BookingForm = () => {
    const price = useBookingStore((state) => state.price)
    const range = useBookingStore((state) => state.range)
    const checkIn = range?.from
    const checkOut = range?.to
    const result = calTotal(checkIn, checkOut, price)
    if (!range || !range.from || !range.to) return null

  return (
    <div>
        <Card className="p-8 my-2">
          <CardTitle className="mb-4">สรุป</CardTitle>
          <p className="flex justify-between">
            <span>{`฿${price} x ${result.totlaNights} คืน`}</span>
            <span className="font-semibold">{formatNumber(result.total)}</span>
          </p>
        </Card>
        {/* confirm booking */}
        <BookingConfirm />
    </div>
  )
}
export default BookingForm