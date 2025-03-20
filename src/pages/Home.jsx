import '../App.css';
import projets from '../data';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

function Home() {
const messages = ["Print","IHM","Web"]
const [index, setIndex] = useState(0);

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
        <h4>PORTFOLIO</h4>
        <h4>2019—2024</h4>
      </div>
      <div className="w-full h-auto pt-16 lg:pt-32 md:pt-32 sm:pt-32 pb-10 flex flex-col items-center justify-center ">
      <h1>Léonie Nollevalle</h1>
      <div className="w-full flex flex-col items-center">
      <h2>Designer</h2>
      <h2 className="ml-12  lg:ml-12 sm:ml-0 md:text-nowrap">d'interfaces<sup className="expo">( {messages[index]} )</sup></h2>
      </div>
      <div className=" w-full  flex flex-col items-center justify-center pt-5 lg:flex-row lg:items-start md:flex-row md:items-start sm:flex-row sm:items-start">
        <div className="w-5/6 justify-center items-center flex flex-col text-lg lg:w-1/2 lg:items-end md:w-1/2 md:items-end sm:w-1/2 sm:items-end ">
        <p className=" xl:w-1/3 lg:w-2/3 md:w-2/3 sm:w-2/3">leonie.nollevalle@gmail.com</p>        
        <a href="https://www.instagram.com/leonienollevalle/?hl=fr" className="info xl:w-1/3 lg:w-2/3 md:w-2/3 flex hover:underline cursor-pointer">Instagram</a>
        <a href="https://www.linkedin.com/in/l%C3%A9onie-nollevalle-9310731b0/" className="info xl:w-1/3 lg:w-2/3 md:w-2/3 hover:underline cursor-pointer">Linkedin </a>
        <a href="https://leonienollevalle-cv.netlify.app/" className="info xl:w-1/3 lg:w-2/3 md:w-2/3 hover:underline cursor-pointer">cv ↗</a>
        </div>
        <div className="pt-5 flex items-center justify-center lg:justify-start lg:w-1/2 lg:pt-0 md:justify-start md:pt-0 md:w-1/2 sm:w-1/2 text-lg">
        <p className="w-5/6  lg:w-2/3 md:w-3/4 sm:3/4">Hybride de par mon parcours, je me sers de chacune de mes compétences acquises dans le domaine du design graphique, du développement web et de l’UX design, afin de développer une expérience centrée utilisateurs sur des interfaces numériques et prints. </p>
        </div>
      
      </div>
      </div>
      <div className="w-full h-auto pb-10 flex flex-col items-center justify-start">
        <h2>Projets<sup className="expo">({nbpro})</sup></h2>
      <div className="w-full flex flex-col lg:flex-row md:flex-row sm:flex-row">
      <div className=" flex-none lg:w-1/2 md:w-1/2 sm:w-1/2"></div>
      <div className="w-full items-center flex flex-col pt-5 lg:items-start lg:w-1/2 md:items-start md:w-1/2 sm:items-start sm:w-1/2">
        {projets.map((projet) => {
        return (
          <Link to={`/work/${projet.id}`}><div className="w-full flex items-center justify-start text-2xl hover:font-bold cursor-pointer ">
          <a className="font-medium w-auto text-nowrap	 hover:font-bold cursor-pointer" href="/work/:id"> {projet.categorie && projet.categorie === "projet"  ? projet.titre : false}</a>
          <a href="/work/:id" className="font-light text-nowrap italic">{projet.categorie && projet.categorie === "projet"  ? "—"+ projet.date : false}</a>
          <a href="/work/:id" className="hidden xl:flex lg:hidden md:hidden truncate w-auto  font-light italic ">{projet.categorie && projet.categorie === "projet"  ? projet.hashtag : false}</a>
          </div>  
          </Link>    
          );
      })}
      </div>
      </div>
      </div>    
      <div className="w-full h-auto pb-10 flex flex-col items-center justify-start">
      <h2>Archives<sup className="expo">({nbarch})</sup></h2>
      <div className="w-full flex flex-col lg:flex-row md:flex-row sm:flex-row">
      <div className="flex-none lg:w-1/2 md:w-1/2 sm:w-1/2"></div>
      <div className="w-full items-center flex flex-col pt-5 lg:items-start lg:w-1/2 md:items-start md:w-1/2 sm:items-start sm:w-1/2 ">
      {projets.map((projet) => {
        return (
          <Link to={`/work/${projet.id}`}> <div className="w-full flex justify-start text-2xl hover:font-bold cursor-pointer ">
          <a className=" text-nowrap font-medium hover:font-bold cursor-pointer" href="/work/:id"> {projet.categorie && projet.categorie !== "projet"  ? projet.titre : ""}</a>
          <a href="/work/:id" className=" text-nowrap font-light italic">{projet.categorie && projet.categorie !== "projet"  ? "—"+projet.date : ""}</a>
          <a href="/work/:id" className="hidden xl:flex lg:hidden md:hidden  truncate ml-2 font-light italic">{projet.categorie && projet.categorie !== "projet"  ? " "+projet.hashtag : ""}</a>
          </div> </Link>
      );
      })}
      </div>
      </div>
      </div>
      
    </div>
  );
}

export default Home;
