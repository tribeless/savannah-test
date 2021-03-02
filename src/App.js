import React from 'react';
import {useDispatch,useSelector} from "react-redux";
import {holderAction} from "./redux/actions/holder/holder.action";
import repo_name from "./redux/actions/repository.action";
import {ISSUES_QUERY} from "./graphql/queries/issues";
import {AppHeader} from "./containers/Header/Header";
import Main from "./containers/Main/Main";
import client from './apollo/client';
import RepoModal from "./containers/Header/Modal";
import openModal from "./redux/actions/modal.action";

function App() {
   const dispatch = useDispatch();
   const formVal = useSelector(state=>state.repoModalReducer.data);
   const variables = {
       owner:"octocat",
       name:"Hello-World",
       last:20,
       first:20
   }

   React.useEffect(async()=>{
        dispatch(openModal(true));
      //  const data = await client.request(ISSUES_QUERY,variables);
      //  const {repository:{issues:{edges},name}} = data;
      //  dispatch(holderAction(edges));
      //  dispatch(repo_name(name));
   },[]);

  return (
    <>
      <AppHeader />
      <RepoModal />
      <Main />
    </>
  );
}

export default App;
