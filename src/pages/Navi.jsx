
import React from 'react'
import { useState } from 'react';
import { Link, useLocation, useMatch } from 'react-router-dom';
import projets from '../data';


const Navi = () => {

let location = useLocation()

const match = useMatch("/work/:id");
const id = match?.params?.id;

const [home, setHome] = useState(true);
const [projet, setProjet] = useState(false);
const [contact, setContact] = useState(false);

const changeHome = ()=> {
  setHome(true)
  setProjet(false)
  setContact(false)
}
const changeProjet = ()=> {
  setHome(false)
  setProjet(true)
  setContact(false)
}
const changeContact = ()=> {
  setHome(false)
  setProjet(false)
  setContact(true)
}

  return (
    <div style={{zIndex:"10"}} className="absolute flex lg:justify-between md:justify-between justify-between items-center w-screen pl-5 pt-8 py-5 pr-5 backdrop-blur">
      <Link to={`/`} >
      <h3 style={{fontFamily: 'Helvetica', fontSize:'16px',fontWeight:"550",letterSpacing:'0rem',color:"#191818"}}>Léonie Nollevalle</h3>
      <p style={{fontFamily:"Helvetica", fontSize:"12px", fontWeight:'550', color:"var(--light-grey)"}}>Nice, France</p>
      </Link>


      <div className={location.pathname === "/" ? 'nav-mob text-sm	font-medium bg-whites flex gap-5  rounded-full': "hidden"}>
        <a onClick={changeHome} href="#home" className={home ? 'bg-blacks text-whites px-3 py-2 rounded-full' : "pl-4 py-2"}>Home</a>
        <a onClick={changeProjet} href="#projets" className={projet ? 'bg-blacks text-whites px-3 py-2 rounded-full' : "py-2"}>Projets</a>
        <a onClick={changeContact} href="#contact" className={contact ? 'bg-blacks text-whites px-3 py-2 rounded-full' : "py-2 pr-4"}>À propos –– Contact</a>
      </div>
      
      <div className={location.pathname !== "/" ? 'nav-mob text-sm	font-medium bg-whites flex gap-5  rounded-full': "hidden"}>
        <a onClick={changeHome} href="/" className="pl-4 py-2 flex items-center gap-2"><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="path-1-outside-1_580_3068" maskUnits="userSpaceOnUse" x="-0.691534" y="-0.692242" width="18.3848" height="18.3848" fill="black">
          <rect fill="white" x="-0.691534" y="-0.692242" width="18.3848" height="18.3848"/>
          <path d="M1.06242 8.1604L8.26124 0.961587L8.94003 1.64038L2.56088 8.01953H15.7984L15.7991 8.49946L15.7998 8.98076L2.56157 8.98007L8.94003 15.3585L8.26055 16.038L1.06173 8.8392L1.06242 8.1604Z"/>
          </mask>
          <path d="M1.06242 8.1604L8.26124 0.961587L8.94003 1.64038L2.56088 8.01953H15.7984L15.7991 8.49946L15.7998 8.98076L2.56157 8.98007L8.94003 15.3585L8.26055 16.038L1.06173 8.8392L1.06242 8.1604Z" fill="black"/>
          <path d="M1.06242 8.1604L0.921001 8.01898L0.862423 8.1602L1.06242 8.1604ZM8.26124 0.961587L8.40266 0.820165H8.11982L8.26124 0.961587ZM8.94003 1.64038L9.08146 1.7818V1.49896L8.94003 1.64038ZM2.56088 8.01953L2.41946 7.87811L2.56088 8.21953V8.01953ZM15.7984 8.01953L15.9984 8.01925L15.7984 7.81953V8.01953ZM15.7991 8.49946L15.9991 8.49917L15.9991 8.49917L15.7991 8.49946ZM15.7998 8.98076L15.7998 9.18076L15.9998 8.98047L15.7998 8.98076ZM2.56157 8.98007L2.56158 8.78007L2.42015 9.12149L2.56157 8.98007ZM8.94003 15.3585L9.08146 15.5V15.2171L8.94003 15.3585ZM8.26055 16.038L8.11913 16.1794H8.40197L8.26055 16.038ZM1.06173 8.8392L0.861732 8.83899L0.920311 8.98062L1.06173 8.8392ZM1.06242 8.1604L1.20384 8.30182L8.40266 1.10301L8.26124 0.961587L8.11982 0.820165L0.921001 8.01898L1.06242 8.1604ZM8.26124 0.961587L8.11982 1.10301L8.79861 1.7818L8.94003 1.64038L9.08146 1.49896L8.40266 0.820165L8.26124 0.961587ZM8.94003 1.64038L8.79861 1.49896L2.41946 7.87811L2.56088 8.01953L2.7023 8.16096L9.08146 1.7818L8.94003 1.64038ZM2.56088 8.01953V8.21953H15.7984V8.01953V7.81953H2.56088V8.01953ZM15.7984 8.01953L15.5984 8.01982L15.5991 8.49974L15.7991 8.49946L15.9991 8.49917L15.9984 8.01925L15.7984 8.01953ZM15.7991 8.49946L15.5991 8.49974L15.5998 8.98104L15.7998 8.98076L15.9998 8.98047L15.9991 8.49917L15.7991 8.49946ZM15.7998 8.98076L15.7998 8.78076L2.56158 8.78007L2.56157 8.98007L2.56156 9.18007L15.7998 9.18076L15.7998 8.98076ZM2.56157 8.98007L2.42015 9.12149L8.79861 15.5L8.94003 15.3585L9.08146 15.2171L2.70299 8.83865L2.56157 8.98007ZM8.94003 15.3585L8.79861 15.2171L8.11913 15.8966L8.26055 16.038L8.40197 16.1794L9.08146 15.5L8.94003 15.3585ZM8.26055 16.038L8.40197 15.8966L1.20315 8.69778L1.06173 8.8392L0.920311 8.98062L8.11913 16.1794L8.26055 16.038ZM1.06173 8.8392L1.26173 8.8394L1.26242 8.16061L1.06242 8.1604L0.862423 8.1602L0.861732 8.83899L1.06173 8.8392Z" fill="black" mask="url(#path-1-outside-1_580_3068)"/>
          </svg>
                Home</a>
        <a onClick={changeProjet} href="#projets" className='bg-blacks text-whites px-3 py-2 rounded-full'>{projets[id] ? projets[id].titre :""}</a>
      </div>

      <div style={{ backgroundColor:'#AEFFBF'}} className='px-3 py-2 rounded-full flex items-center gap-2 '>
        <div className='dot rounded-full'></div>
        <p style={{fontSize:"12px", fontWeight:"505"}}>Open to work</p>
      </div>
    </div>
  )
}

export default Navi