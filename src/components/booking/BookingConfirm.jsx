import useBookingStore from "@/store/booking-store"
import Buttons from "../form/Buttons"
import { SignInButton, useAuth } from "@clerk/clerk-react"
import { Button } from "../ui/button"
import { useForm } from "react-hook-form"
import { useEffect } from "react"
import { createBooking } from "@/api/booking"
import { useNavigate } from "react-router"

const BookingConfirm = () => {
    //zuatand
    const campingId = useBookingStore((state) => state.campingId)
    const range = useBookingStore((state) => state.range)
    const checkIn = range?.from
    const checkOut = range?.to
    //clerk
    const { getToken, userId } = useAuth()
    //Hook form
    const { ragister, handleSubmit, setValue, formState } = useForm()
    const { isSubmitting } = formState
    //Navigate
    const navigate = useNavigate()

    if (!userId) {
        return (
            <div className="flex justify-center">
                <SignInButton mode="modal" forceRedirectUrl={`/user/camping/${campingId}`}>
                    <Button>Login</Button>
                </SignInButton>
            </div>
        )
    }

    useEffect(() => {
        console.log("Working...")
        if (campingId) setValue("campingId", campingId)
        if (checkIn) setValue("checkIn", checkIn)
        if (checkOut) setValue("checkOut", checkOut)
    }, [range])

    const handleBooking = async (value) => {
        await new Promise((resolve) => setTimeout(resolve, 500))
        const token = await getToken()
        try {
            const res = await createBooking(token, value)
            const bookingId = res.data.result
            console.log(bookingId)
            navigate(`/user/checkout/${bookingId}`)
        }
        catch (err) {
            console.log(err)
        }
    }
    

    return (
        <div className="flex justify-center">
            <form onSubmit={handleSubmit(handleBooking)}>
            <Buttons text={"Confirm"} isPending={isSubmitting} />
            </form>
        </div>
    )
}
export default BookingConfirm