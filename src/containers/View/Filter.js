import React from "react";
import Menu from '@material-ui/core/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import {SavaButton} from "../../components/Button";

export const Filter = ()=>{
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [checked, setChecked] = React.useState([0]);
    const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
      };
    const handleClose = () => {
          setAnchorEl(null);
      };

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };
    return (
        <div>
            <SavaButton
                size="small"
                text="filter"
                click={handleClick}
                textVariant="BUTTON TEXT"
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
                    [0, 1].map((value) => (
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
                                    <ListItemText id={value} primary={`Line item ${value + 1}`} />
                                </ListItem>
                    ))}
            </Menu>
        </div>
    )
}