import curry from 'lodash/curry';

const computeHaulingCost = (tradeRoute, collateral, volume) => {

	if (!tradeRoute) {
		return null;
	}

    const cost = tradeRoute.fixedCost + tradeRoute.volumeCharge * volume + collateral * tradeRoute.collateralCharge;
    return Math.ceil(cost);
};

export default curry(computeHaulingCost);