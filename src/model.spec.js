import test from 'tape';
import {
	getState,
	registerCallback,
 	onVolumeChanged,
   	onCollateralChanged,
	onRouteChanged
} from './model';

test('check initial state', (assert) => {

	let state = getState();

    assert.equal(state.volume, '');
    assert.equal(state.collateral, '');
    assert.notEqual(state.route, null);

    assert.end();
});

test('check updates', (assert) => {

	let state = getState();

	registerCallback((newState) => state = newState);

	onVolumeChanged(1);
    assert.equal(state.collateral, '');
    assert.equal(state.volume, 1);
    assert.notEqual(state.route, null);

    onCollateralChanged(2);
    assert.equal(state.collateral, 2);
    assert.equal(state.volume, 1);
    assert.notEqual(state.route, null);

    onRouteChanged(3);
    assert.equal(state.collateral, 2);
    assert.equal(state.volume, 1);
    assert.equal(state.route, 3);


    assert.end();
});
