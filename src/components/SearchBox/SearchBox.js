import React from 'react';
import {TextField, IconButton} from 'material-ui'
import SearchIcon from 'material-ui/svg-icons/action/search';

const SearchBox = ({isOpen, onClick}) => {
    const baseStyles = {
        open: {
            width: 200,
        },
        closed: {
            width: 0,
        },
        smallIcon: {
            width: 20,
            height: 20,
        },
        icon: {
            width: 24,
            height: 24,
            padding: 1,
        },
    }

    const textStyle = isOpen ? baseStyles.open : baseStyles.closed;
    const divStyle = Object.assign({}, textStyle, baseStyles.frame);
        divStyle.width += baseStyles.icon.width + 5;
    return (
        <div style={divStyle}>
            <IconButton iconStyle={baseStyles.smallIcon} style={baseStyles.icon} onClick={() => onClick()}>
                <SearchIcon />
            </IconButton>
            <TextField name='Search' style={textStyle}/>
        </div>
    );
};

export default SearchBox;