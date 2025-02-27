import React from 'react'
import projets from '../data';
import "../App.css"
import { useParams } from 'react-router-dom';


const Work = () => {
  const { id } = useParams();

  return (
    <div className="w-screen h-screen overflow-hidden flex ">
      <div className="w-1/2 h-screen">
      <div className="w-full h-1/4 flex flex-col justify-center items-center pr-2">
      <h2 className="w-1/2">{projets[id].titre}<sup className="expo">({projets[id].date})</sup></h2>    
      </div>
      <div className="w-full flex gap-5 justify-center">
      <div className=" w-2/3 h-1/2">
      <p className={projets[id].contexte ? "text-sm font-medium pb-5" : "hidden"}>CONTEXTE</p>
      <p className="text-justify">{projets[id].contexte ? projets[id].contexte : projets[id].descritpion}</p>
      <p className={projets[id].contexte ? "text-sm font-medium pb-5 pt-5" : "hidden"}>PROPOSITION</p>
      <p className="text-justify">{projets[id].proposition ? projets[id].proposition : ''}</p>
      </div>
      </div>
      <div className="w-full pt-10  flex items-start justify-between">

      {projets[id].liensProto ? 
      <div className="w-1/2 h-auto text-center">
      <a className=" w-auto h-auto bord px-3 py-2 rounded-sm hover:cursor-pointer" href={projets[id].liensProto}>Accéder site ↗︎</a>
      </div>
       : ""}
        {projets[id].liensProto2 ? 
        <div className="w-1/2 h-auto text-center">
            <a className=" w-auto h-auto bord px-3 py-2 rounded-sm hover:cursor-pointer" href={projets[id].liensProto2}>Accéder site ↗︎</a>
          </div>
       : ""}
       {projets[id].liensSite ? 
       <div className="w-2/6 h-auto flex justify-end">
            <a className=" w-1/2 text-sm h-auto bord px-3 py-2 rounded-sm hover:cursor-pointer" href={projets[id].liensSite}>Accéder site ↗︎ </a>
        </div>
       : ""}
       {projets[id].liensProto || projets[id].liensProto2 || projets[id].liensSite ? 
       <div className="w-2/6 h-auto flex justify-start">
       <p className="italic w-1/2">{projets[id].hashtag}</p>
       </div>
       : 
       <div className="w-full h-auto flex justify-center">
       <p className="italic text-center">{projets[id].hashtag}</p>
       </div>
       }
       
      </div>

       
      </div>
      <div className="w-1/2 bg-black overflow-y-scroll">
      {projets[id].images.map((image) => {
        return (
          <div>
          <img className="w-full" src={image} alt={projets[id].titre} />          
          </div>
      );
      })}
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