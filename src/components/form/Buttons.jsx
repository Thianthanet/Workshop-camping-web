import React from 'react'
import { Button } from '../ui/button'
import { RotateCw } from 'lucide-react';

const Buttons = ({ text, isPending, type }) => {
  return (
    <Button className="capitalize mt-2" type={type} disabled={isPending}>
      {
        isPending
          ? <>
            <RotateCw className='animate-spin' />
            <span>Please wait...</span>
          </>
          : <p>{text}</p>
      }
      {/* {text} */}
    </Button>
  )
}

export default Buttons