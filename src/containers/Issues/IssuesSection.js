import React from "react";
import {format} from "date-fns";
import Grid from "@material-ui/core/Grid";
import {useSelector,useDispatch} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import {Typo} from '../../components/Typography';
import {reduceString} from '../../utils/reduceString';
import passData from "../../redux/actions/passdata.action";
import clickIndex from "../../redux/actions/clickIndex.action";
import "../../index.css";

const useStyles = makeStyles((theme)=>({
    root:{
        flex:1,
    },
    bottomContent:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
    },
    content:{
        backgroundColor:'#fff',
        borderRadius:'7px',
        boxShadow:'0 2px 5px #ccc',
        marginTop:'20px',
        width:'100%'
    },
    para:{
        margin:'0px',
        fontSize:"15px",
        fontWeight:"600"
    },
    para2:{
        color: "#707070",
        fontSize:"12px"
    },
    span:{
        color:"#234FDE",
        fontSize:"12px"
    }
}));

 const IssuesSection = ()=>{
    const data = useSelector(state=>state.holderReducer.data);
    const name = useSelector(state=>state.repoReducer.name);
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleClick = (data,index) =>{
        dispatch(passData(data));
        dispatch(clickIndex(index));
 
    }
    return (
        <div className="classes.root" >
            <Grid 
                container 
                spacing={2} 
                direction="column"
                justify="space-between"
                alignItems="flex-start"
                >
                <Grid className={classes.repotext} item xs={12}>
                    <Typo 
                        text={name.toUpperCase()}
                        variant='h6'
                    />
                </Grid>
                {
                    (data && data != null) && data.map((item,index)=>(
                    <Grid onClick={()=>handleClick(item,index)} key={item.node.number} item xs={12} className={classes.content} >
                        <p className={classes.para}>{item.node.title != null && reduceString(item.node.title.toUpperCase())}</p>
                        <p className={classes.para2}>{format(new Date(item.node.createdAt), 'yyyy-MM-dd')}</p>
                        <div className={classes.bottomContent}>
                        <span className={classes.span}>{item.node.author.login}</span>
                        <span className={classes.span}>{item.node.state}</span>
                        </div>
                    </Grid>
                    ))
                }
                            
            </Grid>
        </div>
     )
    }

export default IssuesSection;