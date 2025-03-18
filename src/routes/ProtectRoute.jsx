import { useAuth } from "@clerk/clerk-react"
import { Link } from "react-router"

const ProtectRoute = ({ el }) => {
    const { isLoaded, isSignedIn } = useAuth()
    console.log(isLoaded)

    if (!isLoaded) {
        return (
            <h1>Loading...</h1>
        )
    }

    if (!isSignedIn) {
        return (
            <div className="flex w-screen h-screen items-center justify-center">
            <p>Access Denied!!! Go to <Link to={"/"}>Home</Link></p>
        </div>
        )
    }

    return el
}
export default ProtectRoute