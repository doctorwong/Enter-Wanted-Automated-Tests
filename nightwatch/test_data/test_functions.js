const selectors = require('../test_data/css_selectors')
const data = require("../test_data/test_data");

/**
     * enterInfo takes the browser, selector and data for a field, enters and verifies the info
     * 
     * @param {object} browser Browser is the nightwatch browser object
     * @param {string} selector Selector is the CSS selector for the field
     * @param {string} input Data is the string to enter into the field
     */

module.exports = {
    enterValue: (selector, input, browser) => {
        browser.clearValue(selector)
        browser.setValue(selector, input)
        browser.verify.value(selector, input)
    },
    /** Enters each corresponding input (from css_sectors.fields) into forms.
    *@param {object} browser
    *@param {object} selectors
    *@param {object} inputs
    **/
    setFields: (browser, selectors, inputs) => {
        let keys = Object.getOwnPropertyNames(selectors)
        console.log(keys)
        keys.forEach(key => {
            browser.clearValue(selectors[key])
            browser.setValue(selectors[key], inputs[key])
            browser.verify.value(selectors[key], inputs[key])
            .pause(200)
        })


        //Iterates through each field in inputs (in test_data.js.dataSet.inputs)
    },



    checkErrors : (browser, testName) =>
    {
    let keys = Object.getOwnPropertyNames(testName.output.errorList)
    keys.forEach(key =>
    {
        browser.expect.element(selectors.messages.errorList).text.to.contain(testName.output.errorList[key])

    })
}
}