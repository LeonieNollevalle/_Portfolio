import React from 'react'
import projets from '../data';
import "../App.css"
import { useParams } from 'react-router-dom';


const Work = () => {
  const { id } = useParams();

  return (
    <div className="w-screen h-screen flex-col  xl:flex-row xl:overflow-hidden flex md:flex-col">

      
      <div className={projets[id].categorie === "archive" ? "w-full h-auto pt-10 xl:h-screen lg:h-screen md:h-screen xl:w-1/2 lg:w-1/2 md:w-full md:h-auto md:pt-20 md:pb-32" :"hidden"}>
      <div className="w-full h-1/4 flex flex-col justify-center items-center pr-2">
      <h2 className="w-2/3 lg:w-1/2 md:w-1/2 sm:w-1/2 ">{projets[id].titre}<sup className="expo">({projets[id].date})</sup></h2>    
      </div>
      <div className="w-full flex gap-5 justify-center">
      <div className="w-5/6 h-auto lg:w-2/3 lg:h-1/2 md:w-2/3 md:h-1/2 sm:w-2/3 sm:h-1/2">
      <p className={projets[id].contexte ? "text-sm font-medium pb-5" : "hidden"}>CONTEXTE</p>
      <p className={projets[id].contexte ? "text-start lg:text-justify md:text-justify sm:text-justify": "pt-10 text-center lg:text-justify md:text-justify sm:text-justify md:pt-20"}>{projets[id].contexte ? projets[id].contexte : projets[id].descritpion}</p>
      <p className={projets[id].contexte ? "text-sm font-medium pb-5 pt-5" : "hidden"}>PROPOSITION</p>
      <p className={projets[id].contexte ?"text-start lg:text-justify md:text-justify sm:text-justify ": "hidden"}>{projets[id].proposition ? projets[id].proposition : ''}</p>
      </div>
      </div>
      <div className="w-full pt-10  flex items-start justify-between">
      {projets[id].liensProto ? 
      <div className="w-1/2 h-auto text-center ">
      <a className="w-auto h-auto bord px-3 py-2 rounded-sm hover:cursor-pointer" href={projets[id].liensProto}>Accéder site ↗︎</a>
      </div>
       : ""}
        {projets[id].liensProto2 ? 
        <div className="w-1/2 h-auto text-center">
            <a className=" xl:w-auto h-auto bord px-3 py-2 rounded-sm hover:cursor-pointer" href={projets[id].liensProto2}>Accéder site ↗︎</a>
          </div>
       : ""}
       {projets[id].liensSite ? 
       <div className="w-1/2 h-auto text-center">
            <a className=" w-2/6 xl:w-1/2  text-sm h-auto bord px-3 py-2 rounded-sm hover:cursor-pointer" href={projets[id].liensSite}>Accéder site ↗︎ </a>
        </div>
       : ""}
       {projets[id].liensProto || projets[id].liensProto2 || projets[id].liensSite ? 
       <div className="w-2/6 h-auto flex justify-start mb-48">
       <p className="italic w-1/2 ">{projets[id].hashtag}</p>
       </div>
       : 
       <div className="w-full h-auto flex justify-center pb-20">
       <p className="italic text-center ">{projets[id].hashtag}</p>
       </div>
       }
       
      </div>

       
      </div>
      <div className={projets[id].categorie === "archive" ? "w-full lg:w-1/2 bg-black xl:overflow-y-scroll md:w-full" : "w-full  lg:w-full 2xl:px-24 xl:px-12 bg-black xl:overflow-y-scroll md:w-full"}>
      {projets[id].images.map((image) => {
        return (
          <div>
          <img className="w-full" src={image} alt={projets[id].titre} />          
          </div>
      );
      })}
      
      <div className={projets[id].categorie === "archive" ? "hidden" :'w-full flex items-center justify-between pt-5 pb-20 mt-10'}>
      <h3 className="	text-white text-lg pl-5 lg:pl-0 xl:pl-0 2xl:pl-0 lg:text-4xl xl:text-4xl 2xl:text-4xl font-bold">Essayer le projet</h3>
      <a href={projets[id].link} className='bg-white px-4 py-2 rounded-lg mr-5 lg:mr-0 xl:mr-0 2xl:mr-0'>Découvrir ↗︎</a>
      </div>

      {projets[id].videos ? 
          <div>
            <video controls>
            <source src={projets[id].videos} type="video/mp4" />
            </video>
          </div>
       : ""}
      </div>
    </div>
  )
}

export default Work