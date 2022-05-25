import { useState } from "react";
import Ricerca from '../Ricerca'
import Favorites from "../Favorites"
import { usePathname } from '../../hooks/usePathname';
import { Link } from 'react-router-dom';


const Header = () => {
  const pathname = usePathname(); 
  const [openFav, setOpenFav] = useState(false)

  return (
    <div className="header">
        <div style={{display:'flex',alignItems: 'center',gap:10}}>
        <Link to="/"><img style={{height:40}} src={process.env.PUBLIC_URL + '/logo.png'} alt='logo' /></Link>
          
          {pathname === '/' ? <Ricerca placeholder='Ricerca ...' /> : null }
        </div>
       <button onClick={()=>setOpenFav(true)}>Preferiti</button>
       <Favorites close={()=>setOpenFav(false)} open={openFav}/> 
    </div>
  );
};

export default Header;
