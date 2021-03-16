import React from "react";
import {useSelector,useDispatch} from "react-redux";
import ClearIcon from '@material-ui/icons/Clear';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Menu from '@material-ui/core/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import {SavaButton} from "../../components/Button";
import {holderAction} from "../../redux/actions/holder/holder.action";

const useStyles = makeStyles((theme)=>({
    filterContent:{
        marginLeft:"50px",
        outline: "1px solid #bebdbd",
        backgroundColor:"white",
        padding:".2rem"
    }
}))

export const Filter = ()=>{
    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyles();
    const [checked, setChecked] = React.useState([]);
    const [filteredData,setFilteredData] = React.useState([]);
    const dispatch = useDispatch();
    const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
      };
    const handleClose = () => {
          setAnchorEl(null);
      };
    const data = useSelector(state=>state.holderReducer.data);
    const handleToggle = (value) => () => {
        const newChecked = [...checked];
        setFilteredData(data);
        if (checked.length === 0) {
            newChecked.push(value);
            dispatch(holderAction(data.filter(item => item.node.state === value)));
        } 
        else if(checked[0] === value ){
            newChecked.splice(checked.indexOf(checked[0],1));
            dispatch(holderAction(filteredData));
        }
        else {
            newChecked.splice(checked.indexOf(checked[0]), 1);
            newChecked.push(value);
            const promiseOne = new Promise(async(resolve,reject)=>{
                resolve(dispatch(holderAction(filteredData)))
            });
            Promise.all([promiseOne]).then(()=>{
                setTimeout(()=>{
                    dispatch(holderAction(data.filter(item => item.node.state === value)))
                },2000);
            })
        }

        setChecked(newChecked);
    };

    const handleClearButton = ()=>{
        setChecked([]);
        dispatch(holderAction(filteredData));
    }
    return (
        <div>
            <Grid
                container
                justify="space-between"
                alignItems="center"
                direction="row"
                wrap="nowrap"
            >
                <SavaButton
                    size="small"
                    text="filter"
                    click={handleClick}
                    textVariant = "button"
                    variant="contained"
                    className="filter-button"
                />
                <Grid 
                    container
                    justify="space-between"
                    alignItems="center"
                    direction="row"
                    className={(checked.length != 0) && classes.filterContent}
                >
                    {
                        checked != null && checked.map((value,index)=>(
                            <Grid key={index} item>
                                <span>{value}</span>
                                <ClearIcon onClick={handleClearButton} fontSize="small" />
                            </Grid>
                        ))
                    }
                </Grid>
            </Grid>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {
                    ['CLOSED','OPEN'].map((value) => (
                                <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
                                    <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={checked.indexOf(value) !== -1}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': value }}
                                    />
                                    </ListItemIcon>
                                    <ListItemText id={value} primary={value} />
                                </ListItem>
                    ))}
            </Menu>
        </div>
    )
}