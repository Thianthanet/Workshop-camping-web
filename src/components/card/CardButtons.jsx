import { SignInButton } from '@clerk/clerk-react';
import { Heart, RotateCw } from 'lucide-react';

export const CardSubmitButtons = ({ isPending, isFavorite }) => {
  console.log(isFavorite)
  return (
    <button>
      {
        isPending
          ? <RotateCw className='animate-spin' />
          : isFavorite
            ? <Heart
              className='hover:scale-110 hover:duration-300'
              fill='red'
              size={34}
              stroke='white'
            />
            : <Heart
              className='hover:scale-110 hover:duration-300'
              fill='gray'
              size={34}
              stroke='white'
            />
      }
    </button>
  )
}

export const CardSignInButtons = () => {
  return (
    <div>
      <SignInButton mode='modal'>
        <Heart
          className='hover:scale-110 hover:duration-300'
          fill='gray'
          size={34}
          stroke='white'
        />
      </SignInButton>
    </div>
  )
}