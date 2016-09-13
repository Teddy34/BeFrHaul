import React from 'react';
import { translate } from 'react-i18next';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import numbro from 'numbro';
import i18n from 'i18next';
import IconButton from 'material-ui/IconButton';
import {
  Icon_Flag_FR,
  Icon_Flag_US
} from 'material-ui-country-flags';

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

const getSwitchIcon = () => {
    return i18n.language === 'fr' ? <Icon_Flag_US /> : <Icon_Flag_FR />;
};

const switchLanguage = () => {
    console.log(i18n.language === 'fr'?'en':'fr');
    i18n.changeLanguage(i18n.language === 'fr'?'en':'fr')
};

const View = ({state, t}) => (
    <div>
        <AppBar
            title={t('TITLE')}
            iconElementRight={<IconButton>{getSwitchIcon()}</IconButton>}
            iconElementLeft={<span/>}
            onRightIconButtonTouchTap={switchLanguage}
        />
        <Paper style = {paperStyle} zDepth={1}>
        <div>
            {t('ROUTE')} <DropDownMenu  value={state.route} onChange={onSelectedRouteChanged}>
            {state.tradeRoutes.map((route) => <MenuItem key={route.type} primaryText={getLabel(route)} value={route}/>)}
            </DropDownMenu>
        </div>
        <div>
            {t('VOLUME')} <TextField id='text-field-volume' style={fieldStyle} hintText={t('VOLUME_PLACEHOLDER')} value={state.volume} onChange={onSelectedVolumeChanged}/>
            <span className="input-helper">({numbro(state.volume || 0).format()})</span>        
        </div>
        <div>
            {t('COLLATERAL')} <TextField id='text-field-collateral' style={fieldStyle} hintText={t('COLLATERAL_PLACEHOLDER')} value={state.collateral} onChange={onSelectedCollateralChanged}/>
            <span className="input-helper">({numbro(state.collateral || 0).format()})</span>
        </div>
        <div className='result'> {t('FEE')} {formatCost(state.cost)}</div>
        </Paper>
        <div className='doc'>
             {t('DOC_DECIMAL')} <br/>
             {t('DOC_THOUSAND')}<br/>
             {t('DOC_KMB')}
        </div>
        <div className='disclaimer'>
             {t('DISCLAIMER')}
        </div>

    </div>
);

export default translate(['common'])(View);