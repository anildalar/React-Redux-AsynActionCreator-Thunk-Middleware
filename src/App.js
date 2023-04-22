//1. Import area
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getUserData } from './_actionCreators';

//2. Function defination area
function App() {
  //2.1 Hooks area
  let dispatch = useDispatch();
  // We want to access the global store object here inside this component
  let storeObjectData = useSelector(store=> store)


  //2.2 Function defination area


  //2.3 Return statement
  return (
    <>
      { console.log(storeObjectData)}
      <button onClick={()=>{ dispatch(getUserData())}}>Call the API</button>
      <ul>
        { 
          storeObjectData && storeObjectData.map((cv,idx,arr)=>{
            return <li key={idx}>{cv.first_name}</li>
          })
        }
      </ul>
    </>
  );
}

//3. Export area
export default App;
