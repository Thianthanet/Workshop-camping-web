import { listBookings } from "@/api/booking"
import { useAuth } from "@clerk/clerk-react"
import { useEffect, useState } from "react"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { formatDate } from "@/utils/formats"
import BookingPDF from "@/components/booking/BookingPDF"


const MyOrders = () => {
    const { getToken } = useAuth()
    const [bookings, setBookings] = useState([])

    useEffect(() => {
        fetchBooking()
    }, [])

    const fetchBooking = async () => {
        const token = await getToken()
        try {
            const res = await listBookings(token)
            setBookings(res.data.result)
        }
        catch (err) {
            console.log(err)
        }
    }

    console.log(bookings)
    return (
        <div>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>รหัสการจอง</TableHead>
                        <TableHead>ชื่อ</TableHead>
                        <TableHead>จำนวนคืน</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Check In</TableHead>
                        <TableHead>Check Out</TableHead>
                        <TableHead>Invoice</TableHead>

                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        bookings?.map((item) => {
                            return (
                                <TableRow key={item.id}>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>{item.landmark.title}</TableCell>
                                    <TableCell>{item.totalNights}</TableCell>
                                    <TableCell>$ {item.total}</TableCell>
                                    <TableCell>{formatDate(item.checkIn)}</TableCell>
                                    <TableCell>{formatDate(item.checkOut)}</TableCell>
                                    <TableCell><BookingPDF booking={item} /></TableCell>
                                </TableRow>
                            )
                        })
                    }

                </TableBody>
            </Table>

        </div>
    )
}
export default MyOrders