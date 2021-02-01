import {Selector} from "testcafe";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

fixture `Simple test`            // Notice the back-tick, NOT a single or double quote
    .page `https://the-internet.herokuapp.com/`;

    test('form authentication', async t => {

        await t
            .click(`a[href="https://the-internet.herokuapp.com/login"]`)
            .typeText(`#username`, `tomsmith`)
            .typeText(`#password`, `SuperSecretpassword!`)

            .expect(Selector('.a').withText('Logout'))

        await sleep(5000);

    });