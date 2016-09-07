import curry from 'lodash/curry';

const computeHaulingCost = (tradeRoute, collateral, volume) => {
    let cost = collateral * tradeRoute.collateralCharge;
    cost += tradeRoute.isFixedVolumeCharge ? tradeRoute.volumeCharge : tradeRoute.volumeCharge * volume;
    return Math.ceil(cost);
};

export default curry(computeHaulingCost);