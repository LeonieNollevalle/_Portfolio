
import React from 'react'
import { Link, useLocation } from 'react-router-dom';


const Navi = () => {
    const location = useLocation();

  return (
    <div className="absolute flex lg:justify-start md:justify-between justify-between items-center w-screen pl-5 py-5 backdrop-blur">
      <Link to={`/`} ><p className={location.pathname === "/contact" ? "font-bold" :"font-normal"} style={{fontFamily: 'Helvetica', fontSize:location.pathname === "/contact" ? "60px":"14px",color: location.pathname === "/" ? "black" : "white" }}>LÉONIE NOLLEVALLE &nbsp; –– &nbsp;</p></Link>
      <Link to={`/contact`} ><p className={location.pathname === "/contact" ? "hidden" : " pr-5 hover:underline"} style={{color: location.pathname !== "/"  ? "white" : "black" }}>Contact ↗︎</p> </Link>
    </div>
  )
}

export default Navi