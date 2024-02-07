import HeaderMenu from "./HeaderMenu"

export default function NewHeader() {



  return (
    <header className="new-header">
      <div className="class-test">
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', border: '1px solid red', height: '100%', width: '100%', position: 'relative'}}>
          <HeaderMenu>Header</HeaderMenu>
          <HeaderMenu>Store</HeaderMenu>
          <HeaderMenu>Company</HeaderMenu>
          <HeaderMenu>Facts</HeaderMenu>

        </div>
      </div>
    </header>
  )
}