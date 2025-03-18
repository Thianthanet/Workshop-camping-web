import React from 'react'
import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton, UserButton } from "@clerk/clerk-react";
import CampingContainer from '@/components/home/CampingContainer';

const Home = () => {
  return (
    <div>
      <CampingContainer />
    </div>
  )
}

export default Home