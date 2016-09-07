import React from 'react';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

//temp
import tradeRoutes from '../assets/tradeRoutes';
const getLabel = (route) => (route.origin + (route.isBothWays? ' <=> ':' => ') + route.destination +(route.isFixedVolumeCharge?" full freighter":""));

const View = () => (
    <div>
        <AppBar
            title='BeFr hauling fee calculator'
        />
        <DropDownMenu>
        {tradeRoutes.map((route) => <MenuItem key={route.type} primaryText={getLabel(route)}/>)}
        </DropDownMenu>
        <br/>
        <TextField id='text-field-volume' type='number' hintText='Enter your volume here'/>
        <TextField id='text-field-collateral' type='number' hintText='Enter your collateral here'/>
        <br/>
        <br/>
        <div className='result'>Minimum fee: </div>
    </div>
);

export default View;