import React from 'react';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import numbro from 'numbro';

import './style.css';

import {
    onVolumeChanged,
    onCollateralChanged,
    onRouteChanged,
    getState
} from './model';

//temp
import tradeRoutes from '../assets/tradeRoutes';
const getLabel = (route) => (route.type + ': ' + route.origin + (route.isBothWays? ' <=> ':' => ') + route.destination +(route.isFixedVolumeCharge?" full freighter":""));

const formatCost = (value) => {
    let formattedValue = numbro(value).format('0a');
    if (numbro(formattedValue).value() < value) {
        formattedValue = numbro(formattedValue.slice(0,-1)).add(1).value() + formattedValue.slice(-1);
    }
    return numbro(value).format() + ' ('+formattedValue+') isk';
};

const onSelectedRouteChanged = (event, key, payload) => onRouteChanged(payload);
const onSelectedVolumeChanged = (event, value) => onVolumeChanged(value);
const onSelectedCollateralChanged = (event, value) => onCollateralChanged(value);

const paperStyle = {
  height: 'auto',
  width: 'auto',
  padding: 20,
  display: 'inline-block',
};

const fieldStyle = {
    textAlign: 'right'
};

const View = (props) => (
    <div>
        <AppBar
            title='BeFr hauling fee calculator'
        />
        <Paper style = {paperStyle} zDepth={1}>
        <div>
            Route: <DropDownMenu  value={props.state.route} onChange={onSelectedRouteChanged}>
            {props.state.tradeRoutes.map((route) => <MenuItem key={route.type} primaryText={getLabel(route)} value={route}/>)}
            </DropDownMenu>
        </div>
        <div>
            Volume: <TextField id='text-field-volume' style={fieldStyle} hintText='Enter your volume here' value={props.state.volume} onChange={onSelectedVolumeChanged}/>
            <span className="input-helper">({numbro(props.state.volume || 0).format()})</span>        
        </div>
        <div>
            Collateral: <TextField id='text-field-collateral' style={fieldStyle} hintText='Enter your collateral here' value={props.state.collateral} onChange={onSelectedCollateralChanged}/>
            <span className="input-helper">({numbro(props.state.collateral || 0).format()})</span>
        </div>
        <div className='result'>Minimum fee: {formatCost(props.state.cost)}</div>
        </Paper>
        <div className='doc'>
            '.' is a decimal separator (10.2) <br/>
            ',' is a thousands separator (1,234,456)<br/>
            You can use 'k', 'm', 'b' for values (1.12b)
        </div>
        <div className='disclaimer'>
            Courtesy of Tethys Luxor, for Beyond Frontier
        </div>

    </div>
);

export default View;