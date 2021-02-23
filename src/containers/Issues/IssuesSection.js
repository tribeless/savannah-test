import React from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {Typo} from '../../components/Typography';

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
        marginLeft: theme.spacing(4),
        backgroundColor:'#fff',
        borderRadius:'7px',
        boxShadow:'0 2px 5px #ccc',
        marginTop:'20px'
    },
    para:{
        margin:'0px'
    },
    repotext:{
        marginLeft:theme.spacing(4)
    }
}));

export const IssuesSection = ()=>{
    const classes = useStyles();
    const [text,setText]  = React.useState('');
    return (
        <div className="classes.root" >
            <Grid 
                container 
                spacing={2} 
                direction="column"
                justify="center"
                alignItems="flex-start"
                >
                <Grid className={classes.repotext} item xs={12}>
                    <Typo 
                        text="Hello World"
                        variant='h6'
                    />
                </Grid>
                <Grid item xs={12} className={classes.content} >
                    <p className={classes.para}>test test test test test test test test test test</p>
                    <p className={classes.para}>date here</p>
                    <div className={classes.bottomContent}>
                    <span>name</span>
                    <span>status</span>
                    </div>
            </Grid>
                            <Grid item xs={12} className={classes.content} >
                    <p className={classes.para}>test test test test test test test test test test</p>
                    <p className={classes.para}>date here</p>
                    <div className={classes.bottomContent}>
                    <span>name</span>
                    <span>status</span>
                    </div>
            </Grid>
                            <Grid item xs={12} className={classes.content} >
                    <p className={classes.para}>test test test test test test test test test test</p>
                    <p className={classes.para}>date here</p>
                    <div className={classes.bottomContent}>
                    <span>name</span>
                    <span>status</span>
                    </div>
            </Grid>
                            <Grid item xs={12} className={classes.content} >
                    <p className={classes.para}>test test test test test test test test test test</p>
                    <p className={classes.para}>date here</p>
                    <div className={classes.bottomContent}>
                    <span>name</span>
                    <span>status</span>
                    </div>
            </Grid>
                            <Grid item xs={12} className={classes.content} >
                    <p className={classes.para}>test test test test test test test test test test</p>
                    <p className={classes.para}>date here</p>
                    <div className={classes.bottomContent}>
                    <span>name</span>
                    <span>status</span>
                    </div>
            </Grid>
                                        <Grid item xs={12} className={classes.content} >
                    <p className={classes.para}>test test test test test test test test test test</p>
                    <p className={classes.para}>date here</p>
                    <div className={classes.bottomContent}>
                    <span>name</span>
                    <span>status</span>
                    </div>
            </Grid>
                                        <Grid item xs={12} className={classes.content} >
                    <p className={classes.para}>test test test test test test test test test test</p>
                    <p className={classes.para}>date here</p>
                    <div className={classes.bottomContent}>
                    <span>name</span>
                    <span>status</span>
                    </div>
            </Grid>
                                        <Grid item xs={12} className={classes.content} >
                    <p className={classes.para}>test test test test test test test test test test</p>
                    <p className={classes.para}>date here</p>
                    <div className={classes.bottomContent}>
                    <span>name</span>
                    <span>status</span>
                    </div>
            </Grid>
                                        <Grid item xs={12} className={classes.content} >
                    <p className={classes.para}>test test test test test test test test test test</p>
                    <p className={classes.para}>date here</p>
                    <div className={classes.bottomContent}>
                    <span>name</span>
                    <span>status</span>
                    </div>
            </Grid>
            </Grid>
        </div>
    )
}