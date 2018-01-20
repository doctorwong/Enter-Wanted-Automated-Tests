const functions = require('../test_data/commonFunctions')
const selectors = require('../test_data/css_selectors')
const data = require('../test_data/test_data')

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000')
    },
    after: browser => {
        browser.end()
    },
    'I can put data in the fields and generate a result' : browser => {
            //set the transaction from your data file
        let transaction = data.transactions.minimumEntry
            //send the fields & data to input
        functions.inputSet(selectors.fields, transaction.fields, browser)
        browser
            //submit
            .click(selectors.buttons.submit)
            .pause(100)
            //expect header to be right
            .expect.element(selectors.messages.header).text.to.equal(transaction.results.header)
            //expect error list to be empty
        browser.expect.element(selectors.messages.errorList).text.to.equal('')
            //expect query title to be right
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(transaction.results.queryTitle)
            //expect assembled query to be right
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(transaction.results.assembledQuery)
    },
    'I can put bad data in and get the right error message' : browser => {
            //set the transaction from your data file
        let transaction = data.transactions.olnOnly
            //send the fields & data to input
        functions.inputSet(selectors.fields, data.transactions.olnOnly.fields, browser)
        browser
            //submit
            .click(selectors.buttons.submit)
            .pause(100)
            //expect header to be right
            .expect.element(selectors.messages.header).text.to.equal(transaction.results.header)
            //expect error list to contain all the right errors
        functions.messagesCheck(selectors.messages.errorList, transaction.results.errorList, browser)
            //expect query title to be right
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(transaction.results.queryTitle)
            //expect assembled query to be right
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(transaction.results.assembledQuery)
    }
}