import '../App.css';
import projets from '../data';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Footer from "./Footer.jsx";


function Home() {
const [index, setIndex] = useState(0);
const [image, setImage] = useState(0)

console.log(index)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => clearInterval(interval); 

  }, []);

let nbpro = 0;
let nbarch = 0;

for (const projet of projets) {
  if ( projet.categorie === "projet"){
    nbpro++;
  } else {
    nbarch++;
  }
}
  return (
    <div className="w-screen h-screen overflow-x-hidden pb-10">
      <div className="h-screen w-screen absolute flex flex-col justify-between items-center blur-sm bg-port lg:pb-0 md:pb-0 sm:pb-0 pb-20">
        <h4 className="pt-12">PORTFOLIO</h4>
        <h4>2019—2025</h4>
      </div>
      <div id="home" className="w-full h-auto pb-10 flex flex-col items-center justify-center ">
      <div style={{height:"70vh"}} className="bg-bgColor w-full flex flex-col items-end justify-end gap-10 pb-12  lg:pb-0 md:pb-0lg:gap-0 md:gap-0  px-5 lg:flex-row lg:items-end lg:justify-between md:justify-between md:flex-row md:items-end sm:flex-row sm:items-start">
        <div className=" flex items-end justify-start lg:justify-start lg:w-1/3 lg:pt-2 md:justify-start md:pt-0 md:w-1/2 sm:w-1/2 text-lg">
        <p style ={{fontSize:"14px"}} className="w-full lg:pb-24 md:pb-24  lg:w-2/3 md:w-full sm:3/4">Designer hybride de par mon parcours, je me sers de chacune de mes compétences acquises dans le domaine du design graphique, du développement web et de l’UX design, afin de développer une expérience centrée utilisateurs en cohérence avec l’identité de marque du projet. </p>
        </div>
       <div className='w-auto flex flex-col justify-center items-end'>
        <h2 className='title-1'>Brand & UI-UX</h2>
        <h1 className='title-2'>Designer</h1>
       </div>

      </div>

      </div>
      <div id="projets" className="w-full h-auto  pl-5 flex flex-col items-start justify-start">
      <h2>Derniers Projets<sup className="expo">( {nbpro} )</sup></h2>
      </div>

      <div style={{scrollbarWidth:"none"}} className="w-full h-auto  flex flex-col items-start overflow-x-scroll justify-center ">
      <div style={{height:"50vh", minWidth:"100vw"}} className="pl-5 mt-5 items-center justify-start gap-5 flex  lg:flex-row md:flex-row sm:flex-row">
      {projets.map((projet) => {
        return (
          <Link to={`/work/${projet.id}`}>
          <div className="w-full flex flex-col items-start justify-start text-xl font-medium hover:font-semibold cursor-pointer grayscale hover:grayscale-0">
          <div style={{height:"40vh",backgroundImage:`url(${projet.cover})`}} className={projet.categorie && projet.categorie === "projet" ? "  cardprojet bg-center	 rounded-lg bg-gray-400 border-2 border-black bg-cover": "cardprojet hidden"}>
          </div>
          <a style={{fontSize:"16px", fontFamily:"Helvetica"}} className="pt-3 w-auto text-nowrap font-medium	 hover:font-semibold	 cursor-pointer" href="/work/:id"> {projet.categorie && projet.categorie === "projet"  ? projet.titre : false}</a>
          </div>  
          </Link>    
          );
      })}
      </div>
      </div>    
      <div className="w-full h-auto pb-10 flex flex-col items-center justify-start pt-10">
      <h2>Archives<sup className="expo">( {nbarch} )</sup></h2>
      <div className=" relative w-full flex flex-col lg:flex-row md:flex-row sm:flex-row">
      <div className=" flex-none lg:w-1/2 md:w-1/2 sm:w-1/2">
        <img style={{ left:"20vw"}} src={projets[image].thumbnail} alt='' className='absolute w-1/4  top-8'></img>
      </div>
      <div className="  w-full items-center flex flex-col pt-5 lg:items-start lg:w-1/2 md:items-start md:w-1/2 sm:items-start sm:w-1/2 ">


      {projets.map((projet) => {
        return (
          <Link to={`/work/${projet.id}`} onMouseEnter={()=> setImage(projet.id)} onMouseLeave={ ()=> setImage(0)}> <div  className="w-full flex justify-start text-2xl hover:font-bold cursor-pointer ">
          <a className=" text-nowrap font-medium hover:font-bold cursor-pointer" href="/work/:id"> {projet.categorie && projet.categorie !== "projet"  ? projet.titre : ""}</a>
          <a href="/work/:id" className=" text-nowrap font-light italic">{projet.categorie && projet.categorie !== "projet"  ? "—"+projet.date : ""}</a>
          <a href="/work/:id" className="hidden xl:flex lg:hidden md:hidden  truncate ml-2 font-light italic">{projet.categorie && projet.categorie !== "projet"  ? " "+projet.hashtag : ""}</a>
          </div> </Link>
      );
      })}
      </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
