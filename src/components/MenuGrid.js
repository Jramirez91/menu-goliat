import React from "react"

const MenuGrid = ({ filteredItems, rarityColors, setModalItem }) => (
  <div id="menu-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {filteredItems.map(item => {
      const theme = rarityColors[item.rarity] || rarityColors.comun
      return (
        <div key={item.id} className={`card-container relative bg-[#fdfdfd] rounded-xl p-1 border-[6px] ${theme.border} shadow-xl overflow-hidden cursor-pointer group`} onClick={() => setModalItem(item)}>
          <div className="bg-[#b5c2d1] h-full rounded-lg p-2 flex flex-col relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')]" />
            <div className="h-32 bg-linear-to-b from-gray-200 to-white rounded-t-lg flex items-center justify-center relative border-b-4 border-black/10">
              <i className={`fa-solid ${item.icon} text-6xl text-gray-700 drop-shadow-md group-hover:scale-110 transition-transform duration-300`} />
              <div className="absolute -top-2 -left-2 w-16 h-20 flex items-center justify-center pt-2 z-10 drop-shadow-lg">
                <div className="absolute inset-0 bg-pink-600 elixir-drop" />
                <span className="relative text-white font-clash text-2xl drop-shadow-md">${item.price}</span>
              </div>
              <span className={`absolute top-1 right-2 text-[10px] uppercase font-bold ${theme.badge} bg-white/80 px-1 rounded`}>{item.rarity}</span>
            </div>
            <div className="flex-1 bg-white mt-1 rounded-b-lg p-3 text-center relative z-10">
              <h3 className="font-clash text-xl text-gray-800 leading-tight mb-1">{item.name}</h3>
              <div className="h-1 w-full bg-gray-200 rounded-full mb-2 overflow-hidden stat-bar">
                <div className="h-full bg-yellow-400 w-3/4" />
              </div>
              <p className="font-body text-gray-500 text-xs leading-snug">{item.desc}</p>
            </div>
            
          </div>
        </div>
      )
    })}
  </div>
)

export default MenuGrid
