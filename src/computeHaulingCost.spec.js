import computeHaulerCost from "./computeHaulingCost";
import test from 'tape';

const testVariableVolumeRoute = {
    collateralCharge: 0.02,
    volumeCharge: 300,
    isFixedVolumeCharge: false,
};

const testFixedVolumeRoute =    {
    collateralCharge: 0.01,
    volumeCharge: 90000000,
    isFixedVolumeCharge: true,
};

test('check variable volume computation', (assert) => {
    const testVolume = 1000;
    const testValue = 10000;
    const expectedCost = 300200;

    const computeVariableVolumeRoute = computeHaulerCost(testVariableVolumeRoute);

    assert.equal(computeVariableVolumeRoute(testValue, testVolume), expectedCost);

    assert.end();
});

test('check fixed volume computation', (assert) => {
    const testVolume = 42;
    const testValue = 1000;
    const expectedCost = 90000010;

    const computeFixedVolumeRoute = computeHaulerCost(testFixedVolumeRoute);

    assert.equal(computeFixedVolumeRoute(testValue, testVolume), expectedCost);

    assert.end();
});