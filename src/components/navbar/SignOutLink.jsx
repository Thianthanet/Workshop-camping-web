import React from 'react'
import { SignOutButton } from '@clerk/clerk-react'
import { useToast } from '@/hooks/use-toast'

const SignOutLink = () => {
    const { toast } = useToast()

    const handleLogout = () => {
        toast({
            description: "Logout Successfully!!!"
        })
    }
    return (
        <SignOutButton redirectUrl='/'>
            <button onClick={handleLogout}>
                Logout
            </button>
        </SignOutButton>
    )
}

export default SignOutLink