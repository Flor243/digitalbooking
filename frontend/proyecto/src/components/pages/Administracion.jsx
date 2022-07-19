import React, {useState,useEffect} from 'react'
import './Administracion.css'
import { Header } from '../organisms/Header/Header'
import { Footer } from '../organisms/Footer/Footer'
import { useLocation } from 'react-router-dom'
import { Error404 } from './Error404'
import { Administration } from '../organisms/Administration/Administration'

export const Administracion = () => {


  const [UserDataLocalStorage, setUserDataLocalStorage] = useState({})
  const [userInfo, setUserInfo] = useState({ rol: UserDataLocalStorage !== null ? UserDataLocalStorage.rol : undefined })

  const location = useLocation()

  useEffect(() => {
    setUserDataLocalStorage(JSON.parse(localStorage.getItem('userData')));
    if (JSON.parse(localStorage.getItem('userData')) !== null) {
      setUserInfo({ rol: JSON.parse(localStorage.getItem('userData')).nombre_rol })
    }
    window.addEventListener('storage', storageEventHandler, false);

  }, [location.pathname]);

  function storageEventHandler() {
    setUserDataLocalStorage(JSON.parse(localStorage.getItem('userData')));
  }


  return (
    <>
      {userInfo && userInfo.rol === "ROLE_ADMIN" ?
          (< div className="administrationPage">
            <Header />
            <Administration />
            <Footer />
          </div>)
        : (<Error404 />)
    }
    </>
  )
}
