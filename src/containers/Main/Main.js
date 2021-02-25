import React,{lazy,Suspense} from "react";
import { makeStyles } from '@material-ui/core/styles';
//import IssuesSection from "../Issues/IssuesSection";
import {ViewSection} from "../View/ViewSection";
const IssuesSection = lazy(() => import('../Issues/IssuesSection'));
const useStyles = makeStyles((theme) => ({
    root:{
        flex:1,
        position:'relative',
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'baseline',
        top:'65px',
        backgroundColor:'#eee'
    },
    sec:{
        float:'left',
        position:'relative',
        height:'100vh',
        overflow:'auto',
        overflowX:'hidden',
        width:'30%',
        borderRight:'1px solid #b6b1b1'
    },
    view:{
        marginLeft:theme.spacing(4),
        paddingTop:'20px',
        width:'70%'
    }
}));


   const Main = ()=>{
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <section className={classes.sec}>
                <aside>
                    <Suspense fallback={<p>Loading...</p>}>
                        <IssuesSection />
                    </Suspense>
                </aside>
            </section>
            <section className={classes.view}>
                <ViewSection />
            </section>
        </div>
    )
}
export default Main;