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
        <br/>
        <div className='doc'>
            '.' is a decimal separator (10.2) <br/>
            ',' is a thousands separator (1,234,456)<br/>
            You can use 'k', 'm', 'b' for values (1.12b)
        </div>
        <br/>
        <div className='disclaimer'>
            Courtesy of Tethys Luxor, for Beyond Frontier
        </div>
        <br/>

    </div>
);

export default View;