import React from 'react'
import { Header } from '../organisms/Header/Header'
import { Footer } from '../organisms/Footer/Footer'
import {RegisterForm} from '../organisms/Register/RegisterForm'
import './SignUp.css'
export const SignUp = () => {
  return (
    <>
    <Header firstname={undefined} lastname={undefined}/>
        <div className='contenedor-pagina'>
        
        <RegisterForm/>
        <Footer/>
        </div>
    </>
  )
}

