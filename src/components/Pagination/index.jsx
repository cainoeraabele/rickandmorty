import { useSelector, useDispatch } from 'react-redux';
import { appActions } from '../../reducers/appSlice';
import './Style.css'


function getClickablePages(actualPage) {
  const offsets = [0, 1, 2, 3, 4, 5, 6];
  return offsets.map(number => parseInt(actualPage > 3  ?  actualPage - 3 : 1, 10) + number);

}

const Header = ({show}) => {
  
  const dispatch = useDispatch();
  const { page  } = useSelector((state) => state.app);
  const clickablePages = getClickablePages(Number(page) || 1);

  if(!show){
    return null
  }
  return (
    <div className='pagination'>
      <div>
          {page > 1 ? <button className='sP' onClick={()=>dispatch(appActions.setPage(1))}>{'<<'}</button> : null}
          {page > 1 ? <button className='sP' onClick={()=>dispatch(appActions.setPage(page-1))}>{'<'}</button> : null}
          {clickablePages.map(pageNumber => {
              if(pageNumber <=42 ){
                return(
                  <button key={'page'+pageNumber} onClick={()=>dispatch(appActions.setPage(pageNumber))} style={pageNumber === page ? {background:'#53ff11',color:'black',fontWeight:'bold'} : {}}>
                  {pageNumber}
                  </button>  
                )
              }else{
                return null
              }
              
            })}
          {page < 42 ? <button className='sP' onClick={()=>dispatch(appActions.setPage(page+1))}>{'>'}</button> : null }
          {page < 42 ? <button className='sP' onClick={()=>dispatch(appActions.setPage(42))}>{'>>'}</button> : null }

      </div>
    </div>
  );
};

export default Header;
