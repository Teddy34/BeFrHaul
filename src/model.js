// mini model
import tradeRoutes from '../assets/tradeRoutes';
import computeHaulingCost from './computeHaulingCost';
import partial from 'lodash/partial';
import i18n from 'i18next';

import numbro from 'numbro';

const numberize = (numberAsString) => numbro(numberAsString).value() || 0;

const state = {
	tradeRoutes: tradeRoutes,
	volume: "",
	collateral: "",
	route: tradeRoutes[0],
	cost: 0,
	language: i18n.language
};

let onChangeCallback = null;

const updateCost = () => computeHaulingCost(state.route, numberize(state.collateral), numberize(state.volume));

const updateState = () => {
	state.cost = updateCost();
	if (onChangeCallback) {onChangeCallback(state)}
};

export const registerCallback = (callback) => onChangeCallback = () => callback(state);

export const onVolumeChanged = (newVolume) => {
	state.volume = newVolume;
	updateState();
};

export const onCollateralChanged = (newCollateral) => {
	state.collateral = newCollateral;
	updateState();
};

export const onRouteChanged = (newRoute) => {
	state.route = newRoute;
	updateState();
};

export const onLanguageChanged = (newLanguage) => {
	state.language = language;
	updateState();
};

export const getState = () => state;

