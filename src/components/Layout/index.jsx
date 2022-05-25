import { useEffect } from "react";
import { getItem } from '../../hooks/useStorage';
import { appActions } from '../../reducers/appSlice';
import { useDispatch } from 'react-redux';
import Header from '../Header'

const Layout = props => {
  
  const dispatch = useDispatch();



  useEffect(() => {
    if(getItem('likes')){
        dispatch(appActions.setFavorites((getItem('likes'))))
    }else{
      dispatch(appActions.setFavorites(([])))
    }
}, [dispatch]);


  

  return (
    <div>
        <Header />
        <div>{props.children}</div>
    </div>
  );
};

export default Layout;
