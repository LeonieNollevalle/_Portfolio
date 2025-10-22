import React from "react";
import PP from "../asset/pp.png";

const Footer = () => {
  return (
    <div className="w-full p-5">
      <div id="contact" className="p-8 w-full h-auto bg-blacks rounded-xl">
        <div className="w-full flex justify-between items-center">
          <div>
            <h3
              style={{
                fontFamily: "Helvetica",
                fontSize: "16px",
                fontWeight: "550",
                letterSpacing: "0rem",
                color: "#F0F0F1",
              }}
            >
              Léonie Nollevalle
            </h3>
            <p
              style={{
                fontFamily: "Helvetica",
                fontSize: "12px",
                fontWeight: "550",
                color: "var(--light-grey)",
              }}
            >
              Rennes, France
            </p>
          </div>
          <div
            style={{ backgroundColor: "#4C4C4C" }}
            className="px-3 py-2 rounded-full flex items-center gap-2 "
          >
            <div
              style={{ backgroundColor: "#F0F0F1" }}
              className="dot rounded-full"
            ></div>
            <p
              style={{ fontSize: "12px", fontWeight: "505", color: "#F0F0F1" }}
            >
              Open to work
            </p>
          </div>
        </div>

        <div className="w-full justify-between flex lg:flex-row md:flex-row flex-col">
          <div className="flex flex-col gap-5 pt-10">
            <div>
              <svg
                width="74"
                height="12"
                viewBox="0 0 74 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 1.5C15 0.675 14.325 0 13.5 0H1.5C0.675 0 0 0.675 0 1.5V10.5C0 11.325 0.675 12 1.5 12H13.5C14.325 12 15 11.325 15 10.5V1.5ZM13.5 1.5L7.5 5.25L1.5 1.5H13.5ZM13.5 10.5H1.5V3L7.5 6.75L13.5 3V10.5Z"
                  fill="#F0F0F1"
                />
                <path
                  d="M26.8135 0H31.8535C33.7735 0 35.3335 1.56 35.3335 3.48V8.52C35.3335 9.44295 34.9669 10.3281 34.3142 10.9807C33.6616 11.6334 32.7765 12 31.8535 12H26.8135C24.8935 12 23.3335 10.44 23.3335 8.52V3.48C23.3335 2.55705 23.7001 1.6719 24.3528 1.01927C25.0054 0.366642 25.8905 0 26.8135 0ZM26.6935 1.2C26.1206 1.2 25.5712 1.42757 25.1661 1.83265C24.7611 2.23773 24.5335 2.78713 24.5335 3.36V8.64C24.5335 9.834 25.4995 10.8 26.6935 10.8H31.9735C32.5464 10.8 33.0958 10.5724 33.5008 10.1674C33.9059 9.76227 34.1335 9.21287 34.1335 8.64V3.36C34.1335 2.166 33.1675 1.2 31.9735 1.2H26.6935ZM32.4835 2.1C32.6824 2.1 32.8732 2.17902 33.0138 2.31967C33.1545 2.46032 33.2335 2.65109 33.2335 2.85C33.2335 3.04891 33.1545 3.23968 33.0138 3.38033C32.8732 3.52098 32.6824 3.6 32.4835 3.6C32.2846 3.6 32.0938 3.52098 31.9532 3.38033C31.8125 3.23968 31.7335 3.04891 31.7335 2.85C31.7335 2.65109 31.8125 2.46032 31.9532 2.31967C32.0938 2.17902 32.2846 2.1 32.4835 2.1ZM29.3335 3C30.1291 3 30.8922 3.31607 31.4548 3.87868C32.0174 4.44129 32.3335 5.20435 32.3335 6C32.3335 6.79565 32.0174 7.55871 31.4548 8.12132C30.8922 8.68393 30.1291 9 29.3335 9C28.5378 9 27.7748 8.68393 27.2122 8.12132C26.6496 7.55871 26.3335 6.79565 26.3335 6C26.3335 5.20435 26.6496 4.44129 27.2122 3.87868C27.7748 3.31607 28.5378 3 29.3335 3ZM29.3335 4.2C28.8561 4.2 28.3983 4.38964 28.0607 4.72721C27.7231 5.06477 27.5335 5.52261 27.5335 6C27.5335 6.47739 27.7231 6.93523 28.0607 7.27279C28.3983 7.61036 28.8561 7.8 29.3335 7.8C29.8109 7.8 30.2687 7.61036 30.6063 7.27279C30.9439 6.93523 31.1335 6.47739 31.1335 6C31.1335 5.52261 30.9439 5.06477 30.6063 4.72721C30.2687 4.38964 29.8109 4.2 29.3335 4.2Z"
                  fill="#F0F0F1"
                />
                <path
                  d="M54.3332 0C54.6868 0 55.0259 0.140476 55.276 0.390524C55.526 0.640573 55.6665 0.979711 55.6665 1.33333V10.6667C55.6665 11.0203 55.526 11.3594 55.276 11.6095C55.0259 11.8595 54.6868 12 54.3332 12H44.9998C44.6462 12 44.3071 11.8595 44.057 11.6095C43.807 11.3594 43.6665 11.0203 43.6665 10.6667V1.33333C43.6665 0.979711 43.807 0.640573 44.057 0.390524C44.3071 0.140476 44.6462 0 44.9998 0H54.3332ZM53.9998 10.3333V6.8C53.9998 6.2236 53.7709 5.6708 53.3633 5.26322C52.9557 4.85564 52.4029 4.62667 51.8265 4.62667C51.2598 4.62667 50.5998 4.97333 50.2798 5.49333V4.75333H48.4198V10.3333H50.2798V7.04667C50.2798 6.53333 50.6932 6.11333 51.2065 6.11333C51.454 6.11333 51.6914 6.21167 51.8665 6.3867C52.0415 6.56173 52.1398 6.79913 52.1398 7.04667V10.3333H53.9998ZM46.2532 3.70667C46.5502 3.70667 46.8351 3.58867 47.0451 3.37863C47.2552 3.16859 47.3732 2.88371 47.3732 2.58667C47.3732 1.96667 46.8732 1.46 46.2532 1.46C45.9544 1.46 45.6678 1.5787 45.4565 1.78999C45.2452 2.00128 45.1265 2.28786 45.1265 2.58667C45.1265 3.20667 45.6332 3.70667 46.2532 3.70667ZM47.1798 10.3333V4.75333H45.3332V10.3333H47.1798Z"
                  fill="#F0F0F1"
                />
                <path
                  d="M70.25 0H65.25C64.5562 0 64 0.54 64 1.2V10.8C64 11.466 64.5562 12 65.25 12H72.75C73.4438 12 74 11.466 74 10.8V3.6L70.25 0ZM72.75 10.8H65.25V1.2H69.625V4.2H72.75V10.8ZM69.625 6.6C69.625 7.26 69.0625 7.8 68.375 7.8C67.6875 7.8 67.125 7.26 67.125 6.6C67.125 5.94 67.6875 5.4 68.375 5.4C69.0625 5.4 69.625 5.94 69.625 6.6ZM70.875 9.6V10.2H65.875V9.6C65.875 8.802 67.5438 8.4 68.375 8.4C69.2063 8.4 70.875 8.802 70.875 9.6Z"
                  fill="#F0F0F1"
                />
              </svg>
            </div>
            <div className="text-whites flex flex-col">
              <p>leonie.nollevalle@gmail.com </p>
              <a
                href="https://www.instagram.com/leonienollevalle/"
                className="hover:underline"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/l%C3%A9onie-nollevalle-9310731b0/"
                className="hover:underline"
              >
                Linkedin
              </a>
              <a
                href="https://leonienollevalle-cv.netlify.app/"
                className="hover:underline"
              >
                cv
              </a>
            </div>
          </div>
          <p
            style={{ textAlign: "justify" }}
            className="text-whites w-full lg:w-1/2 md:w-1/2 pt-10"
          >
            Designer hybride de par mon parcours, je me sers de chacune de mes
            compétences acquises dans le domaine du design graphique, du
            développement web et de l’UX design, afin de développer une
            expérience centrée utilisateurs en cohérence avec l’identité de
            marque du projet. Un large regard sur le Design d’interfaces qui m’a
            amené durant mes années d’études à me questionner sur le geste et
            les outils des designers graphiques et d’interface.
            <br />
            <br /> Notamment sur l’utilisation de la programmation comme un
            outil d’expression singulier permettant de se libérer des
            algorithmes des logiciels qui formaterait le geste des designers. De
            plus, l’utilisation de la programmation comme outils de création
            permettrait d’utiliser des fonctionnalités inhérentes à la
            programmation comme le code génératif ou encore les combinatoires.
            Un engouement pour la recherche et le questionnement qui trouve sa
            place dans chacun des projets créatifs que j’entreprends.
          </p>
        </div>
        <div className=" tag-scroll w-full overflow-x-auto pt-20">
        
          <div className="w-auto flex gap-4 justify-start items-center">
            <img
              style={{ width:"50px", height:"50px", flexShrink:"0", aspectRatio:"50/50", objectFit:"cover"}} 
              className="rounded-full "
              src={PP}
              alt=""
            ></img>
            <div className="bg-whites w-auto flex flex-nowrap px-3 py-3 rounded-full">
              <p className="font-medium whitespace-nowrap">UI/UX Design</p>
            </div>
            <div className="bg-darkGrey text-whites w-auto px-3 py-3 rounded-full">
              <p className="font-medium whitespace-nowrap	">Parcours utilisateur</p>
            </div>
            <div className="bg-darkGrey text-whites w-auto px-3 py-3 rounded-full">
              <p className="font-medium	whitespace-nowrap">Wireframing</p>
            </div>
            <div className="bg-darkGrey text-whites w-auto px-3 py-3 rounded-full">
              <p className="font-medium	whitespace-nowrap">Maquette</p>
            </div>
            <div className="bg-darkGrey text-whites w-auto px-3 py-3 rounded-full">
              <p className="font-medium	whitespace-nowrap">Design system</p>
            </div>
            <div className="bg-darkGrey text-whites w-auto px-3 py-3 rounded-full">
              <p className="font-medium	whitespace-nowrap">Recherche utilisateur</p>
            </div>
            <div className="bg-whites w-auto px-3 py-3 rounded-full">
              <p className="font-medium	whitespace-nowrap">Brand Design</p>
            </div>
            <div className="bg-darkGrey text-whites w-auto px-3 py-3 rounded-full">
              <p className="font-medium	whitespace-nowrap">Logos</p>
            </div>
            <div className="bg-darkGrey text-whites w-auto px-3 py-3 rounded-full">
              <p className="font-medium	whitespace-nowrap">Identités de marques</p>
            </div>
            <div className="bg-darkGrey text-whites w-auto px-3 py-3 rounded-full">
              <p className="font-medium	whitespace-nowrap">Chartes graphiques</p>
            </div>
            <div className="bg-whites w-auto px-3 py-3 rounded-full">
              <p className="font-medium	whitespace-nowrap">Design Graphique</p>
            </div>
            <div className="bg-darkGrey text-whites w-auto px-3 py-3 rounded-full">
              <p className="font-medium	whitespace-nowrap">Édition</p>
            </div>
            <div className="bg-darkGrey text-whites w-auto px-3 py-3 rounded-full">
              <p className="font-medium	whitespace-nowrap">Mise en page</p>
            </div>
            <div className="bg-darkGrey text-whites w-auto px-3 py-3 rounded-full">
              <p className="font-medium	whitespace-nowrap">Datavisualisation</p>
            </div>
            <div className="bg-darkGrey text-whites w-auto px-3 py-3 rounded-full">
              <p className="font-medium	whitespace-nowrap">Motion design</p>
            </div>
            <div className="bg-whites w-auto px-3 py-3 rounded-full">
              <p className="font-medium	whitespace-nowrap">Développement Web</p>
            </div>
            <div className="bg-darkGrey text-whites w-auto px-3 py-3 rounded-full">
              <p className="font-medium	whitespace-nowrap">HTML5</p>
            </div>
            <div className="bg-darkGrey text-whites w-auto px-3 py-3 rounded-full">
              <p className="font-medium	whitespace-nowrap">CSS</p>
            </div>
            <div className="bg-darkGrey text-whites w-auto px-3 py-3 rounded-full">
              <p className="font-medium	whitespace-nowrap">Javascript</p>
            </div>
            <div className="bg-darkGrey text-whites w-auto px-3 py-3 rounded-full">
              <p className="font-medium	whitespace-nowrap">React/NodeJS</p>
            </div>
            <div className="bg-darkGrey text-whites w-auto px-3 py-3 rounded-full">
              <p className="font-medium	whitespace-nowrap">P5.js</p>
            </div>
            <div className="bg-darkGrey text-whites w-auto px-3 py-3 rounded-full">
              <p className="font-medium	whitespace-nowrap">Wordpress</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
