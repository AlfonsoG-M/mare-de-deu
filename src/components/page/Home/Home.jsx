import { Typography } from '@mui/material'
import React from 'react'
import './home.css'

const Home = () => {
  return (
    <div>
      <img className='homeImg' src="https://res.cloudinary.com/dkwjizhdg/image/upload/v1681989836/Mare%20de%20deu/WhatsApp_Image_2023-04-18_at_08.48.07_iisjlj.jpg" alt="" />
        <Typography variant='h1' color={"secondary"}>Home</Typography>
    </div>
  )
}

export default Home