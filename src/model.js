// mini model
import tradeRoutes from '../assets/tradeRoutes';
import computeHaulingCost from './computeHaulingCost';

const state = {
	tradeRoutes: tradeRoutes.map((route) => ({...route, computeCost: computeHaulingCost(route)})),
	volume: null,
	collateral: null,
	route: null
}

let onChangeCallback = null;

export const registerCallback = (callback) => onChangeCallback = () => callback(state);

export const onVolumeChanged = (newVolume) => {
	state.volume = newVolume;
};

export const onCollateralChanged = (newCollateral) => {
	state.collateral = newCollateral;
};

export const onRouteChanged = (newRoute) => {
	state.route = newRoute;
};

export const getState = () => state;

