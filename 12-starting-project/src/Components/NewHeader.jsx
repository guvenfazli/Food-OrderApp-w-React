import HeaderMenu from "./HeaderMenu"

export default function NewHeader(){
  
  
  
  return (
    <header className="new-header">
      <div style={{display:'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
        <HeaderMenu>Header</HeaderMenu>
        <HeaderMenu>Store</HeaderMenu>
        <HeaderMenu>Company</HeaderMenu>
        <HeaderMenu>Facts</HeaderMenu>

      </div>



    </header>
  )
}