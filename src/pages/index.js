import "../styles/global.css";
import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import Logo from "../components/Logo"
import ContactInfo from "../components/ContactInfo"
import FooterInfo from "../components/FooterInfo"
import MenuGrid from "../components/MenuGrid"


const menuItems = [
  { id: 1, name: "Panucho de Pollo", price: 12, category: "antojitos", desc: "Tortilla rellena de frijol, frita, con pollo deshebrado, lechuga y cebolla.", rarity: "comun", icon: "fa-drumstick-bite" },
  { id: 2, name: "Panucho Carne Molida", price: 12, category: "antojitos", desc: "El clásico panucho yucateco con deliciosa carne molida sazonada.", rarity: "comun", icon: "fa-bowl-food" },
  { id: 3, name: "Panucho Carne Asada", price: 15, category: "antojitos", desc: "La versión premium con carne asada al carbón.", rarity: "especial", icon: "fa-fire-burner" },
  { id: 4, name: "Salbute de Pollo", price: 12, category: "antojitos", desc: "Masa suave inflada y frita a mano, con pollo.", rarity: "comun", icon: "fa-feather" },
  { id: 5, name: "Salbute Carne Molida", price: 12, category: "antojitos", desc: "Suave salbute con carne molida especial de la casa.", rarity: "comun", icon: "fa-burger" },
  { id: 6, name: "Salbute Carne Asada", price: 15, category: "antojitos", desc: "Salbute nivel épico con carne asada.", rarity: "especial", icon: "fa-bacon" },
  { id: 7, name: "Empanada Jamón y Queso", price: 12, category: "antojitos", desc: "Crujiente por fuera, derretida por dentro.", rarity: "epica", icon: "fa-cheese" },
  { id: 8, name: "Empanada Molida", price: 10, category: "antojitos", desc: "Rellena de carne molida bien sazonada.", rarity: "comun", icon: "fa-bread-slice" },
  { id: 9, name: "Hamburguesa", price: 35, category: "cena", desc: "Carne, queso, verduras y el sabor del Gigante.", rarity: "legendaria", icon: "fa-burger" },
  { id: 10, name: "Perritos", price: 10, category: "cena", desc: "Hot dog clásico. Ideal para el antojo rápido.", rarity: "comun", icon: "fa-hotdog" },
  { id: 11, name: "Torta de Asada", price: 30, category: "cena", desc: "Bolillo crujiente con carne asada. ¡Llena mucho!", rarity: "epica", icon: "fa-hotdog" }
];
const rarityColors = {
  comun: { border: "border-blue-400", bg: "bg-blue-50", badge: "text-blue-600" },
  especial: { border: "border-orange-400", bg: "bg-orange-50", badge: "text-orange-600" },
  epica: { border: "border-purple-500", bg: "bg-purple-50", badge: "text-purple-600" },
  legendaria: { border: "border-yellow-500", bg: "bg-yellow-50", badge: "text-yellow-600" }
};




const IndexPage = () => {
  const [filter, setFilter] = React.useState("all")
  const [modalItem, setModalItem] = React.useState(null)

  const filteredItems = filter === "all" ? menuItems : menuItems.filter(item => item.category === filter)

  return (
    <main className="text-gray-800 min-h-screen pb-10 font-body bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-[#333]">
      <Logo />
      {/* Contact Info */}
      <ContactInfo />
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-4 text-center">
        {/* <div className="bg-cr-blue/90 rounded-2xl border-4 border-blue-800 p-4 shadow-xl max-w-3xl mx-auto mb-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-blue-400 opacity-50"></div>
          <h2 className="text-2xl md:text-3xl font-clash text-white mb-1 drop-shadow-md mt-2">"Para su Rica Cena"</h2>
          <div className="mt-2 inline-block bg-black/30 rounded-lg px-4 py-1 text-white font-bold border border-white/20 text-sm">
            <i className="fa-regular fa-clock mr-2"></i> Horario: Noches
          </div>
        </div> */}
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8" id="filters">
          <button onClick={() => setFilter('all')} className="filter-btn bg-white border-b-4 border-gray-300 active:border-b-0 active:translate-y-1 px-6 py-2 rounded-full font-clash text-gray-700 hover:bg-yellow-100 transition-all text-lg shadow-md ring-2 ring-black">Todo</button>
          <button onClick={() => setFilter('antojitos')} className="filter-btn bg-cr-orange border-b-4 border-orange-700 active:border-b-0 active:translate-y-1 px-6 py-2 rounded-full font-clash text-white hover:brightness-110 transition-all text-lg shadow-md">Antojitos</button>
          <button onClick={() => setFilter('cena')} className="filter-btn bg-giant-belt border-b-4 border-red-800 active:border-b-0 active:translate-y-1 px-6 py-2 rounded-full font-clash text-white hover:brightness-110 transition-all text-lg shadow-md">Cena Fuerte</button>
        </div>
        {/* Menu Grid */}
        <MenuGrid
          filteredItems={filteredItems}
          rarityColors={rarityColors}
          setModalItem={setModalItem}
        />
      </div>
 
      {/* Footer */}
      <FooterInfo />
  {/* Modal */}
  {modalItem && (
  <div className="fixed inset-0 bg-black/80 z-60 flex items-center justify-center px-4">
          <div className="bg-[#f0f0f0] rounded-xl border-4 border-gray-600 w-full max-w-md p-6 relative shadow-2xl transform scale-100 animation-pop">
            <button onClick={() => setModalItem(null)} className="absolute -top-4 -right-4 bg-red-500 text-white w-10 h-10 rounded-full border-2 border-white font-bold text-xl shadow-lg z-10">X</button>
            <div className="text-center">
              <div className="text-5xl mb-4 text-cr-blue" id="modal-icon"><i className={`fa-solid ${modalItem.icon}`}></i></div>
              <h3 className="text-3xl font-clash text-gray-800 mb-2" id="modal-title">{modalItem.name}</h3>
              <p className="text-gray-600 font-body mb-6 text-lg" id="modal-desc">{modalItem.desc}</p>
              <div className="bg-yellow-200 rounded-lg p-4 border-2 border-yellow-400 mb-4">
                <span className="font-clash text-2xl text-gray-800">Total: </span>
                <span className="font-clash text-3xl text-green-600" id="modal-price">${modalItem.price}</span>
              </div>
              <div className="flex flex-col gap-2">
                <a id="modal-whatsapp-btn" href={`https://wa.me/529995866292?text=${encodeURIComponent(`Hola! Me gustaría pedir: ${modalItem.name} ($${modalItem.price}).`)}`} target="_blank" className="w-full bg-green-500 border-b-4 border-green-700 text-white font-clash text-xl py-3 rounded-lg hover:bg-green-400 active:border-b-0 active:translate-y-1 transition-all flex items-center justify-center gap-2">
                  <i className="fa-brands fa-whatsapp"></i> Pedir este platillo
                </a>
                <button onClick={() => setModalItem(null)} className="w-full bg-gray-400 border-b-4 border-gray-600 text-white font-clash text-lg py-2 rounded-lg hover:bg-gray-300 active:border-b-0 active:translate-y-1 transition-all">Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default IndexPage
