import React from 'react';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import numbro from 'numbro';

import {
    onVolumeChanged,
    onCollateralChanged,
    onRouteChanged,
    getState
} from './model';

//temp
import tradeRoutes from '../assets/tradeRoutes';
const getLabel = (route) => (route.type + ': ' + route.origin + (route.isBothWays? ' <=> ':' => ') + route.destination +(route.isFixedVolumeCharge?" full freighter":""));

const formatCost = (value) => numbro(value).format();

const onSelectedRouteChanged = (event, key, payload) => onRouteChanged(payload);
const onSelectedVolumeChanged = (event, value) => onVolumeChanged(value);
const onSelectedCollateralChanged = (event, value) => onCollateralChanged(value);

const View = (props) => (
    <div>
        <AppBar
            title='BeFr hauling fee calculator'
        />
        Travel Type<DropDownMenu  value={props.state.route} onChange={onSelectedRouteChanged}>
        {props.state.tradeRoutes.map((route) => <MenuItem key={route.type} primaryText={getLabel(route)} value={route}/>)}
        </DropDownMenu>
        <br/>
        Volume:<TextField id='text-field-volume' hintText='Enter your volume here' value={props.state.volume} onChange={onSelectedVolumeChanged}/>
        <br/>
        Collateral:<TextField id='text-field-collateral' hintText='Enter your collateral here' value={props.state.collateral} onChange={onSelectedCollateralChanged}/>
        <br/>
        <br/>
        <div className='result'>Minimum fee: {formatCost(props.state.cost)}</div>
    </div>
);

export default View;