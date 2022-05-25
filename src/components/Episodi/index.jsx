import {useGetEpisodeByIdQuery  } from '../../services/rickAndMortyApi';

import './Style.css';


const Episodi = ({  episodi }) => {
    
    const { data, error } = useGetEpisodeByIdQuery(episodi);

    if(error){
        return null
    }

    if(data){
        if(Array.isArray(data)){
            return(
                <div>
                    {data.map((e)=>{
                        return(
                            <p key={'epis'+e.id}>{e.name}</p>
                        )
                    })}
                </div>
            )
        }else{
            return(
                <div>
                    <p >{data.name}</p>
                </div>
            )
        }
       
    }
    
    
    
};

export default Episodi;