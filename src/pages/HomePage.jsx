import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { appActions } from '../reducers/appSlice';

import {useGetCharactersQuery , useCharactersSearchQuery  } from '../services/rickAndMortyApi';

//import { useQuery } from '../hooks/useQuery';
//import { useNavigate , Link } from 'react-router-dom';
//import { usePathname } from '../../hooks/usePathname';

import Card from "../components/Card"
import Modal from "../components/Modale"
import Pagination from "../components/Pagination"




const Home = () => {

const dispatch = useDispatch();

//const navigate = useNavigate(); 
//const pathname = usePathname();

 

  const { page ,selectedC ,filter} = useSelector((state) => state.app);
  const [risultati,setRisultati] = useState([])
  const [idEpisodi,setIdEpisodi] = useState([])
  
  const { data, error, isLoading, isFetching } = useCharactersSearchQuery(
    filter , page
  );
  
  const { data: allChar  } = useGetCharactersQuery(page);


  useEffect(() => {
    if(filter?.length > 0){
        setRisultati(data?.results ?? [])
      }else{
        setRisultati(allChar?.results ?? [])
      }
  }, [filter,allChar,data?.results]);


  useEffect(() => {
    if(selectedC){
      const arrayEpi = risultati[selectedC]?.episode;
      let idsEpisodi = []
      arrayEpi?.forEach(episodio => {
        const momentArr = episodio.split("/");
        idsEpisodi.push(momentArr[5]);
      });
      setIdEpisodi(idsEpisodi)
      }
  }, [risultati, selectedC]);

  


  if (error) {
    return null;
  }

  if (isLoading) {
    return <div className="text-hint">Loading ...</div>;
  }

  if (isFetching) {
    return <div className="text-hint">Fetching ...</div>;
  }

  if (risultati.length === 0) {
    return <div className="text-hint">No  found</div>;
  }

  return (
    <> 
    <Modal title="My Modal" onClose={() => dispatch(appActions.setSelectedC(null))} show={selectedC &&  selectedC != null}>
        { selectedC ? <Card  episodi={idEpisodi} item={risultati[selectedC-1]} modal={true}  /> : null}
    </Modal>

    <div style={{}}  className='gridBox'>
      {risultati.map((c,i) => (
        <Card selection={()=>dispatch(appActions.setSelectedC(i+1))} item={c} key={c.id} />
      ))}
    </div>
    <Pagination show={!filter} />
    </> 
  );
};

export default Home;