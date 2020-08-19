define(['vb/test/TestUtils'], function(TestUtils) {
    'use strict';

    describe('mobileApps/alphaoffice/flows/main/pages/main-start-page', function() {

        describe('navigateToGetIdDetailChain', function() {

            it('Test 1', async function() {
                const context = await TestUtils.getContext(this);
                const mocks = await TestUtils.getMocks(this);
                const results = await TestUtils.run(this, context, mocks);
                const expectations = await TestUtils.getExpectations(this);
                await TestUtils.verifyExpectations(this, results, expectations);
            });

        });

    });
});