import React from 'react';
import {useDispatch,useSelector} from "react-redux";
import {AppHeader} from "./containers/Header/Header";
import Main from "./containers/Main/Main";
import RepoModal from "./containers/Header/Modal";
import AddIssue from "./containers/Header/AddIssue";
import openModal from "./redux/actions/modal.action";

function App() {
   const dispatch = useDispatch();
   const data =  useSelector(state=>state.holderReducer.data);
   React.useEffect(async()=>{
        (data.length === 0) && dispatch(openModal(true));
   },[]);

  return (
    <>
      <AppHeader />
      <RepoModal />
     {
       data.length !=0 && (
          <AddIssue />
       )
     }
      <Main />
    </>
  );
}

export default App;
