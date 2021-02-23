import React from 'react';
import {useQuery} from "@apollo/client";
import {useDispatch} from "react-redux";
import * as actionTypes from "./redux/actions/actionTypes";
import {ISSUES_QUERY} from "./graphql/queries/issues";
import {AppHeader} from "./containers/Header/Header";
import {Main} from "./containers/Main/Main";

function App() {
  // const dispatch = useDispatch();
  // const [test,setTest] = React.useState("");
  // const {data} = useQuery(ISSUES_QUERY,{
  //   variables:{
  //     owner:"octocat",
  //     name:"Hello-World",
  //     last:20
  //   }
  // });
  // React.useEffect(()=>{
  //   dispatch({type:actionTypes.HOLDER});
  //   setTest("Just setting up");
  // },[]);

  return (
    <>
      <AppHeader />
      <Main />
    </>
  );
}

export default App;
