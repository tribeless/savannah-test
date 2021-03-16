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
          maxWidth:'300px',
          zIndex:'1000',
          position:"sticky",
          backgroundColor: "#bdc3c7",
          height:"130px",
          overflowY:"auto",
          marginTop:theme.spacing(1)
      },
      resultdisplay:{
          backgroundColor:'#fff',
          boxShadow:'0 2px 5px #ccc',
          cursor:'pointer',
          padding:".4rem",
          marginBottom:"4px",
          width:"100%"
      },
      search_text:{
          fontSize:"12px"
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
            return options.some(field=>field in item.node && item.node[field].toLowerCase()===e.target.value.toLowerCase())
        });
        result && setResult(result);
    }
    
    const handleClick = data =>{
        dispatch(passData(data));
        setResult([]);
    }
    return (
        <>
        <Grid container justify="center" alignItems="flex-start" direction="column">
            <Input id="clear" className='search-input' onKeyUp={handleKeyUp} placeholder="search by status or title" />
            <Grid 
                container
                justify="flex-start"
                alignItems="flex-start"
                direction="column"
                wrap="nowrap"
                className={(result.length > 0) && classes.result}
            >
              {  
               (Array.isArray(result) && result.length > 0) && result.map(item=>(
                    <Grid onClick={()=>handleClick(item)} key={item.node.number} item className={classes.resultdisplay}>
                        <Typo className={classes.search_text} variant="subtitle1" text={item.node.title} />
                    </Grid>
                ))
              }
            </Grid>
        </Grid>
        </>
    )
}
