import { useState, useContext, useReducer } from "react"


const dropList = {
  Header: ['Home', 'About Us', 'Crew'],
  Store: ['Steam', 'Epic Games', 'Ubisoft'],
  Company: ['Country', 'Workers', 'Vision'],
  Facts: ['Packages', 'Softwares']
}


export default function HeaderMenu({ children }) {

  const [drop, setDrop] = useState(false)


  const styleList = drop ? 'active-drop' : 'inactive-drop'






  return (
    <div onMouseOver={() => setDrop(true)} onMouseLeave={() => setDrop(false)} style={{ display: 'flex', flexDirection: 'column', position: 'relative', border: '1px solid red', width: '180px' }}>
      <button>{children}</button>

      <div onMouseOver={() => setDrop(true)} onMouseLeave={() => setDrop(false)} className={styleList}>
        {dropList[children].map((button) => <button key={button}>{button}</button>)}
      </div>


    </div>
  )
}