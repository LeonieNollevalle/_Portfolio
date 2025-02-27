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
    <div className="w-screen h-screen overflow-x-hidden">
      <div className="h-screen w-screen absolute flex flex-col justify-between items-center blur-sm bg-port">
        <h4>PORTFOLIO</h4>
        <h4>2019—2024</h4>
      </div>
      <div className="w-full h-auto pt-32 pb-10 flex flex-col items-center justify-center">
      <h1>Léonie Nollevalle</h1>
      <h2>Designer  &nbsp;&nbsp;d'interfaces<sup className="expo">({messages[index]})</sup></h2>
      <div className=" w-full flex justify-center pt-5">
        <div className="w-1/2 flex flex-col items-end text-lg">
        <p className="w-1/3">leonie.nollevalle@gmail.com</p>        
        <a href="https://www.instagram.com/leonienollevalle/?hl=fr" className="info w-1/3 flex hover:underline cursor-pointer">Instagram</a>
        <a href="https://www.linkedin.com/in/l%C3%A9onie-nollevalle-9310731b0/" className="info w-1/3 hover:underline cursor-pointer">Linkedin </a>
        <a href="https://leonienollevalle-cv.netlify.app/" className="info w-1/3 hover:underline cursor-pointer">cv ↗</a>
        </div>
        
        <div className="w-1/2 text-lg">
        <p className="w-2/3">Hybrides de par mon parcours, je me sers de chacune de mes compétences acquises dans le domaine du design graphique, du développement web et de l’UX design, afin de développer une expérience centrée utilisateurs sur des interfaces numérique et print. </p>
        </div>
      
      </div>
      </div>
      <div className="w-full h-auto pb-10 flex flex-col items-center justify-start">
        <h2>Projets<sup className="expo">({nbpro})</sup></h2>
      <div className="w-full flex">
      <div className="w-1/2"></div>
      <div className="w-1/2 flex flex-col pt-5">
        {projets.map((projet) => {
        return (
          <Link to={`/work/${projet.id}`}><div className="w-full flex items-center justify-start text-2xl hover:font-bold cursor-pointer ">
          <a className="font-medium hover:font-bold cursor-pointer" href="https://example.com"> {projet.categorie && projet.categorie === "projet"  ? projet.titre : false}</a>
          <a href="https://example.com" className="font-light italic">{projet.categorie && projet.categorie === "projet"  ? "—"+ projet.date : false}</a>
          <a href="https://example.com" className="ml-2 w-auto  font-light italic ">{projet.categorie && projet.categorie === "projet"  ? projet.hashtag : false}</a>
          </div>  
          </Link>    
          );
      })}
      </div>
      </div>
      </div>    
      <div className="w-full h-auto pb-10 flex flex-col items-center justify-start">
      <h2>Archives<sup className="expo">({nbarch})</sup></h2>
      <div className="w-full flex">
      <div className="w-1/2"></div>
      <div className="w-1/2 flex flex-col pt-5 ">
      {projets.map((projet) => {
        return (
          <Link to={`/work/${projet.id}`}> <div className="w-auto flex justify-start text-2xl hover:font-bold cursor-pointer ">
          <a className="font-medium hover:font-bold cursor-pointer" href="https://example.com"> {projet.categorie && projet.categorie !== "projet"  ? projet.titre : ""}</a>
          <a href="https://example.com" className="font-light italic">{projet.categorie && projet.categorie !== "projet"  ? "—"+projet.date : ""}</a>
          <a href="https://example.com" className="ml-2 font-light italic">{projet.categorie && projet.categorie !== "projet"  ? " "+projet.hashtag : ""}</a>
          </div> </Link>
      );
      })}
      </div>
      </div>
      </div>
      <div className="text-white flex w-full">
      <h1>Designer graphique</h1>
      <h1>Graphiste</h1>
      <h1>Designer d'interfaces</h1>
      <h1>Web designer</h1>
      <h1>UX Designer</h1>
      <h1>UI Designer</h1>
      <h1>Développement Web</h1>
      <h1>Nice</h1>
      <h1>Côte d'Azur</h1>
      <h1>Interface Hommes Machine</h1>
      <h1>IHM</h1>
      </div>
    </div>
  );
}

export default Home;
