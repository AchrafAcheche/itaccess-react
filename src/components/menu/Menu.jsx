import "./menu.scss"

export default function Menu({menuOpen,setMenuOpen}) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
        <ul>
            <li onClick={()=>setMenuOpen(false)}><a href="#home">Home</a></li>
            <li onClick={()=>setMenuOpen(false)}><a href="#projects">Projects</a></li>
            <li onClick={()=>setMenuOpen(false)}><a href="#team">Team</a></li>
            <li onClick={()=>setMenuOpen(false)}><a href="#contact">Contact</a></li>
            <li onClick={()=>setMenuOpen(false)}><a href="#network">Network</a></li>
        </ul>
        
    </div>
  )
}