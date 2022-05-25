import { useSelector, useDispatch } from 'react-redux';
import { appActions } from '../../reducers/appSlice';
import { setItem  } from '../../hooks/useStorage';

import Episodi from '../Episodi'
import './Style.css';


const Card = ({ item , episodi, selection , modal }) => {
    
    const dispatch = useDispatch();
    const { favorites } = useSelector((state) => state.app);

    

    const ilikeAction = (id) =>{
        let likes = [...favorites]
        let index = likes.indexOf(id);
        if(index > -1){
            likes.splice(index, 1)
        }else{
            likes.push(id)
        }
       
        dispatch(appActions.setFavorites(likes))
        setItem('likes', JSON.stringify(likes))
    }

    const isLike = (id) =>{
        const likes =  favorites
        const index = likes.indexOf(id);
        if(index > -1){
            return true
        }else{
            return false
        }
    }

    if(modal){
        const { name, status, gender, location ,image } = item;
        return (
            <div className='card'>
               
                <div style={{position:'relative',display:'flex',gap:10}}>
                    <img style={{width:'50%',objectFit:'cover'}} alt='' src={image} />
                    <div className='info_box'>
                         <div>
                            <h2>{name}</h2>
                            <p>{status}</p>
                            <p>{gender}</p>
                            <p>{location?.name}</p>
                         </div>
                         
                             <h2>Episodi</h2>
                             <div style={{marginTop:10, maxHeight:200,overflow:'scroll'}} >
                             {episodi ? <Episodi episodi={episodi} /> : null}
                             </div>
                         
                    </div>
                </div>
             </div>
        );
    }else{
        const { name, id ,image } = item;
        return (
            <div className='card'>
                <div style={{position:'relative'}}>
                    <img style={{width:'100%'}} alt='' src={image} />
                    <div className='boxFunction'>
                    <h3 style={{color:'white'}}>{name}</h3>
                    {selection ? 
                    <button className='show' onClick={()=>selection()}>
                        Mostra
                    </button> : null }
                    <button className='like' onClick={()=>ilikeAction(id)}><svg style={isLike(id) ? {fill:'red'} : {fill:'white'}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/></svg></button>
                </div>
                </div>
                
                
                
            </div>
        );
    }
    
    
};

export default Card;