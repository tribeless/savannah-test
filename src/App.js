import React from 'react';
import {useDispatch} from "react-redux";
import {holderAction} from "./redux/actions/holder/holder.action";
import repo_name from "./redux/actions/repository";
import {ISSUES_QUERY} from "./graphql/queries/issues";
import {AppHeader} from "./containers/Header/Header";
import Main from "./containers/Main/Main";
import client from './apollo/client';

function App() {
   const dispatch = useDispatch();
   const variables = {
       owner:"octocat",
       name:"Hello-World",
       last:20,
       first:20
   }

   React.useEffect(async()=>{
       const data = await client.request(ISSUES_QUERY,variables);
       const {repository:{issues:{edges},name}} = data;
       dispatch(holderAction(edges));
       dispatch(repo_name(name));
   },[]);

  return (
    <>
      <AppHeader />
        <Main />
    </>
  );
}

export default App;
