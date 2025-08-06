import React from 'react'
import PP from '../asset/pp.png'

const Contact = () => {
  return (
    <div className='bg-black w-screen h-auto lg:h-screen xl:h-screen 2xl:h-screen pt-64 lg:pt-28 xl:pt-28 2xl:pt-28 text-white flex flex-col lg:flex-row xl:flex-row 2xl:flex-row gap-10 2xl:items-center'>
     <div className='w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 flex pl-8 items-start justify-end pr-28' >
       <img src={PP} alt="pp" className='h-1/2 2xl:w-1/3 rounded-lg'/>
       </div>
    <div className='w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 px-10 lg:px-0 xl:px-0 2xl:px-0'>
    <div className='w-full flex flex-col lg:flex-row xl:flex-row 2xl:flex-row'>
    <div className='flex flex-col'>
       <p className=" xl:w-1/3 lg:w-2/3 md:w-2/3 sm:w-2/3">leonie.nollevalle@gmail.com</p>        
        <a href="https://www.instagram.com/leonienollevalle/?hl=fr" className="info xl:w-1/3 lg:w-2/3 md:w-2/3 flex hover:underline cursor-pointer">Instagram</a>
        <a href="https://www.linkedin.com/in/l%C3%A9onie-nollevalle-9310731b0/" className="info xl:w-1/3 lg:w-2/3 md:w-2/3 hover:underline cursor-pointer">Linkedin </a>
        <a href="https://leonienollevalle-cv.netlify.app/" className="info xl:w-1/3 lg:w-2/3 md:w-2/3 hover:underline cursor-pointer">cv ↗</a>    
    </div>
    <div className='pt-24 w-full lg:w-2/3 xl:w-2/3 2xl:w-2/3 flex flex-col gap-5'>
          <p>Designer hybrides de par mon parcours, je me sers de chacune de mes compétences acquises dans le domaine du design graphique, du développement web et de l’UX design, afin de développer une expérience centrée utilisateurs en cohérence avec l’identité de marque du projet. Un large regard sur le Design d’interfaces qui m’a amené durant mes années d’études à me questionner sur le geste et les outils des designers graphiques et d’interface. Notamment sur l’utilisation de la programmation comme un outil d’expression singulier permettant de se libérer des algorithme des logiciels qui formaterais le geste des designers. </p>
    <p>De plus, l’utilisation de la programmation comme outils de créations permettrait d’utiliser des fonctionnalités inhérentes à la programmation comme le code génératifs ou encore les combinatoires. Un engouement pour la recherche et le questionnement qui trouve sa place dans chacun des projets créatifs que j’entreprends. </p>
      </div>
       </div>
       <div className='flex w-full pt-10 pb-10 flex-col lg:flex-row xl:flex-row 2xl:flex-row '>
        <p style={{ fontFamily:'avara'}}className='w-1/4  text-lg pb-5'>Expertises</p>
        <div className='2xl:w-full lg:w-2/3 w-full flex flex-col gap-5  lg:pl-5 xl:pl-5 2xl:pl-5 2xl:pr-20'>
          <div className='flex w-full justify-between gap-5 '> 
          <h3 className='font-bold w-1/3'>UI/UX Design</h3>
          <p className='w-2/3'>Parcours utilisateur, Wireframing, Maquettage de site web, logiciel, d’application intéractive et design system.</p>
          </div>
          <div className='flex w-full justify-between gap-5'>
          <h3 className='font-bold w-1/3 '>Brand Design</h3>
          <p className='w-2/3'>Logos, Identités de marques, Chartes graphiques.</p>
          </div>
          <div className='flex w-full justify-between gap-5'>
          <h3 className='font-bold w-1/3 '>Design Graphique</h3>
          <p className='w-2/3'>Édition, Mise en page (livret, affiche, livre, flyer), datavisualisation, motion design.</p>
          </div>
          <div className='flex w-full justify-between gap-5 '>
          <h3 className='font-bold w-1/3 '>Développement Web</h3>
          <p className='w-2/3'>Intégration Web : HTML5/CSS/Javascript, Programmation: Web React/NodeJS, creative coding.</p>
          </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Contact