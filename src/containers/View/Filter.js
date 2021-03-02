import React from "react";
import {useSelector,useDispatch} from "react-redux";
import Menu from '@material-ui/core/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import {SavaButton} from "../../components/Button";
import {holderAction} from "../../redux/actions/holder/holder.action";

export const Filter = ()=>{
    const [anchorEl, setAnchorEl] = React.useState(null);
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
        //const currentIndex = checked.indexOf(value);
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
            const promiseTwo = new Promise((resolve,reject)=>{
                resolve(dispatch(holderAction(data.filter(item => item.node.state === checked[0]))))
            });
            Promise.all([promiseOne,promiseTwo]);
        }

        setChecked(newChecked);
    };
    return (
        <div>
            <SavaButton
                size="small"
                text="filter"
                click={handleClick}
                textVariant = "caption text"
                variant="contained"
            />
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