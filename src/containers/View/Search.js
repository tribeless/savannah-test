import React,{useState} from 'react';
import Grid from "@material-ui/core/Grid";
import {useSelector,useDispatch} from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import {Input} from '../../components/InputBase';
import {Typo} from '../../components/Typography';
import passData from "../../redux/actions/passdata.action";

const useStyles = makeStyles((theme)=>({
      root: {
          padding: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: 200,
      },
      result:{
          minWidth:'300px',
          zIndex:'1000'
      },
      resultdisplay:{
          backgroundColor:'#fff',
          borderRadius:'7px',
          boxShadow:'0 2px 5px #ccc',
          cursor:'pointer'
      }
}));

export const  Search = ()=>{
    const classes = useStyles();
    const data = useSelector(state=>state.holderReducer.data);
    const dispatch = useDispatch();
    const [result,setResult] = useState([]);
    const options = ['state', 'title'];
    const handleKeyUp = (e)=>{
        const result = data.filter(item=>{
            return options.some(field=>field in item.node && item.node[field]===e.target.value)
        });
        result && setResult(result);
    }
    
    const handleClick = data =>{
        dispatch(passData(data));
        setResult([]);
    }
    return (
        <>
            <Input onKeyUp={handleKeyUp} placeholder="search by status" />
            <Grid 
                container
                justify="space-between"
                alignItems="flex-start"
                direction="column"
                className={classes.result}
            >
              {  
               (Array.isArray(result) && result.length > 0) && result.map(item=>(
                    <Grid onClick={()=>handleClick(item)} key={item.node.number} item className={classes.resultdisplay}>
                        <Typo variant="caption text" text={item.node.title} />
                    </Grid>
                ))
              }
            </Grid>
        </>
    )
}
