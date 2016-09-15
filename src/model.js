// mini model
import computeHaulingCost from './computeHaulingCost';
import partial from 'lodash/partial';
import i18n from 'i18next';

import numbro from 'numbro';

import routeListPromise from './fetchRoutes';
routeListPromise.then((data) => {
	state.tradeRoutes = data;
	state.route = data[0];
	updateState();
	});

const numberize = (numberAsString) => numbro(numberAsString).value() || 0;

const state = {
	tradeRoutes: null,
	volume: "",
	collateral: "",
	route: null,
	cost: 0
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

export const getState = () => state;

