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

const getLabel = (route) => (route.type + ': ' + route.origin + (route.isBothWays? ' <=> ':' => ') + route.destination + (route.fixedCost?" full freighter":""));

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
    i18n.changeLanguage(i18n.language === 'fr'?'en':'fr')
};

const numberize = (numberAsString) => numbro(numberAsString).value() || 0;

const getVolumeErrorMsg = (volume, volumeMax) => {
  console.log(volume, volumeMax, (volume > volumeMax));
  return (volume > volumeMax) ? 'MAX_VOLUME_REACHED': '';
}

const View = ({state, t}) => (
    <div>
    {console.log(state)}
        <AppBar
            title={t('TITLE')}
            showMenuIconButton={false}
            iconElementRight={<IconButton onTouchTap={switchLanguage}>{getSwitchIcon()}</IconButton>}
        />
        <Paper style = {paperStyle} zDepth={1}>
        <div>
            {t('ROUTE')} <DropDownMenu  value={state.route} onChange={onSelectedRouteChanged}>
            {state.tradeRoutes.map((route) => <MenuItem key={route.type} primaryText={getLabel(route)} value={route}/>)}
            </DropDownMenu>
        </div>
        <div>
            <TextField id='text-field-volume' floatingLabelText={t('VOLUME') + ' (' + numbro(state.volume || 0).format() + ')'} errorText={t(getVolumeErrorMsg(numberize(state.volume), state.route.maxVolume))} style={fieldStyle} hintText={t('VOLUME_PLACEHOLDER')} value={state.volume} onChange={onSelectedVolumeChanged}/>     
        </div>
        <div>
            <TextField id='text-field-collateral' floatingLabelText={t('COLLATERAL') + ' (' + numbro(state.collateral || 0).format() + ')'} style={fieldStyle} hintText={t('COLLATERAL_PLACEHOLDER')} value={state.collateral} onChange={onSelectedCollateralChanged}/>
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