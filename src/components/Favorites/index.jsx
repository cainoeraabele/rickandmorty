import {  useSelector } from 'react-redux';
import { useGetAllCharactersQuery  } from '../../services/rickAndMortyApi';
import Card from "../Card"
import './Style.css'





const Favorites = ({open,close}) => {


const { favorites } = useSelector((state) => state.app);
const { data } = useGetAllCharactersQuery(favorites ? favorites : []);

 if(!open){
    return null
  }

 if(data?.length > 1){
    return (
      <div className='overFavor'>
      <div style={{position:'fixed',right:0,top:0,bottom:0,width:300,background:'white',zIndex:2,padding:5}}>
        <button style={{background:'none',border:'none',cursor:'pointer',fontWeight:'bold',fontSize:20}} onClick={()=>close()}>x</button>
        <div style={{marginTop:5, height:'100%', overflow:'scroll'}}>
        {data.map((c) => (
          <Card  item={c} key={c.id} />
        ))}
      </div>
      </div>
       
      </div> 
    );
  }else{
    return (
      <div className='overFavor'>
      <div style={{position:'fixed',right:0,top:0,bottom:0,width:300,background:'white',zIndex:2,padding:5}}>
        <button style={{background:'none',border:'none',cursor:'pointer',fontWeight:'bold',fontSize:20}} onClick={()=>close()}>x</button>
        <div style={{marginTop:5, height:'100%', overflow:'scroll'}}>
        {favorites.length > 0 ? <Card  item={data}  /> : <h2>Non hai personaggi preferiti</h2> }
        </div>
      </div>
      </div>
    )
  }
  
};

export default Favorites;