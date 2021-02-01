import {Selector} from "testcafe";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

fixture `Simple test`            // Notice the back-tick, NOT a single or double quote
    .page `../src/simple_page.html`;

    test('Test1', async t => {
        const message = Selector('#message')


        await t
            .typeText(message, `Hello from Testcafe!`)
            .expect(message.value).contains(`Hello`, 'Input contains text "Hello"')
            .click(`#submit-button`)
            .expect(message.value).eql("", 'input is empty')

        await sleep(5000);

    });