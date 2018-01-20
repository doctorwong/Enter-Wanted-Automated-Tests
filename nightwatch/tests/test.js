const selectors = require("../test_data/css_selectors");
const data = require("../test_data/test_data");
const functions = require('../test_data/test_functions')


module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000')
    },

    after: browser => {
        browser.end()
    },

    'Valid Inputs': browser => {

        //enters all of the inputs from this test case to their corresponding forms
        functions.enterValue(selectors.fields.hdr, data.goodData.input.hdr, browser)
        functions.enterValue(selectors.fields.mke, data.goodData.input.mke, browser)
        functions.enterValue(selectors.fields.oai, data.goodData.input.oai, browser)
        functions.enterValue(selectors.fields.nam, data.goodData.input.nam, browser)
        functions.enterValue(selectors.fields.sex, data.goodData.input.sex, browser)
        functions.enterValue(selectors.fields.rac, data.goodData.input.rac, browser)
        functions.enterValue(selectors.fields.hgt, data.goodData.input.hgt, browser)
        functions.enterValue(selectors.fields.wgt, data.goodData.input.wgt, browser)
        functions.enterValue(selectors.fields.hai, data.goodData.input.hai, browser)
        functions.enterValue(selectors.fields.off, data.goodData.input.off, browser)
        functions.enterValue(selectors.fields.dow, data.goodData.input.dow, browser)
        functions.enterValue(selectors.fields.oln, data.goodData.input.oln, browser)
        functions.enterValue(selectors.fields.ols, data.goodData.input.ols, browser)
        functions.enterValue(selectors.fields.oly, data.goodData.input.oly, browser)
        functions.enterValue(selectors.fields.lic, data.goodData.input.lic, browser)
        functions.enterValue(selectors.fields.lis, data.goodData.input.lis, browser)
        functions.enterValue(selectors.fields.liy, data.goodData.input.liy, browser)

        //clicks the submit button and ensures the correct data is displayed
        browser.click(selectors.buttons.submit)
            .pause(1000)

        //ensures the correct header is displayed
        browser.expect.element(selectors.messages.header).text.to.equal(data.goodData.output.header);

        //ensures the correct AssembledQuery text is displayed
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.goodData.output.queryTitle);

        //checks for errors in all fields
        functions.checkErrors(browser, data.goodData)
    },

    //submit invalid inputs for each of the fields in the web app.
    //fields are expected to be invalid
    'Too Long': browser => {

        //enters all of the inputs from this test case to their corresponding forms

        functions.setFields(browser, selectors.fields, data.tooLong.input)

        //clicks the submit button and ensures the correct data is displayed
        browser.click(selectors.buttons.submit)
        browser.pause(1000)


        //checks for errors in all fields
        functions.checkErrors(browser, data.tooLong)



        //this transaction only has one error message to check, so I don't need to repeat the check
        /*
                browser.expect.element(selectors.messages.errorList).text.to.contain(data.tooLong.output.errorList.nam)
                browser.expect.element(selectors.messages.errorList).text.to.contain(data.tooLong.output.errorList.hdr)
                browser.expect.element(selectors.messages.errorList).text.to.contain(data.tooLong.output.errorList.mke)
                browser.expect.element(selectors.messages.errorList).text.to.contain(data.tooLong.output.errorList.oai)
                browser.expect.element(selectors.messages.errorList).text.to.contain(data.tooLong.output.errorList.sex)
                browser.expect.element(selectors.messages.errorList).text.to.contain(data.tooLong.output.errorList.rac)
                browser.expect.element(selectors.messages.errorList).text.to.contain(data.tooLong.output.errorList.hgt)
                browser.expect.element(selectors.messages.errorList).text.to.contain(data.tooLong.output.errorList.wgt)
                browser.expect.element(selectors.messages.errorList).text.to.contain(data.tooLong.output.errorList.hai)
                browser.expect.element(selectors.messages.errorList).text.to.contain(data.tooLong.output.errorList.off)
                browser.expect.element(selectors.messages.errorList).text.to.contain(data.tooLong.output.errorList.dow)
                browser.expect.element(selectors.messages.errorList).text.to.contain(data.tooLong.output.errorList.oln)
                browser.expect.element(selectors.messages.errorList).text.to.contain(data.tooLong.output.errorList.ols)
                browser.expect.element(selectors.messages.errorList).text.to.contain(data.tooLong.output.errorList.oly)
                browser.expect.element(selectors.messages.errorList).text.to.contain(data.tooLong.output.errorList.lic)
                browser.expect.element(selectors.messages.errorList).text.to.contain(data.tooLong.output.errorList.lis)
                browser.expect.element(selectors.messages.errorList).text.to.contain(data.tooLong.output.errorList.liy)
                browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.tooLong.output.queryTitle)
                browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.tooLong.output.assembledQuery)
                */
    },


    'Blank Forms': browser => {

        functions.setFields(browser, selectors.fields, data.blanks.input)

        browser.click(selectors.buttons.submit)
        browser.pause(1000)

        //browser.expect.element(selectors.messages.header).text.to.equal(data.blanks.output.header);
        browser.expect.element(selectors.messages.errorList).text.to.contain(data.blanks.output.errorList.nam)
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.blanks.output.queryTitle)
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.blanks.output.assembledQuery)
    },

    'Too short': browser => {

        //output.errorlist need to be added when bugs are fixed

        functions.setFields(browser, selectors.fields, data.tooShort.input)

        browser.click(selectors.buttons.submit)
        browser.pause(1000)

        browser.expect.element(selectors.messages.header).text.to.equal(data.tooShort.output.header);
        browser.expect.element(selectors.messages.errorList).text.to.contain(data.tooShort.output.errorList.mke)
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.tooShort.output.queryTitle)
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.tooShort.output.assembledQuery)
    },

    'Invalid Data': browser => {

        functions.setFields(browser, selectors.fields, data.invalidData.input)
        browser.click(selectors.buttons.submit)
        browser.pause(1000)

        //checks for errors in all fields
        functions.checkErrors(browser, data.invalidData)
    },

    'If I put in good data, but only one of a set of optional fields, I get an error': browser => {
        functions.enterValue(selectors.fields.hdr, data.badData.input.hdr, browser)
        functions.enterValue(selectors.fields.mke, data.badData.input.mke, browser)
        functions.enterValue(selectors.fields.oai, data.badData.input.oai, browser)
        functions.enterValue(selectors.fields.nam, data.badData.input.nam, browser)
        functions.enterValue(selectors.fields.sex, data.badData.input.sex, browser)
        functions.enterValue(selectors.fields.rac, data.badData.input.rac, browser)
        functions.enterValue(selectors.fields.hgt, data.badData.input.hgt, browser)
        functions.enterValue(selectors.fields.wgt, data.badData.input.wgt, browser)
        functions.enterValue(selectors.fields.hai, data.badData.input.hai, browser)
        functions.enterValue(selectors.fields.off, data.badData.input.off, browser)
        functions.enterValue(selectors.fields.dow, data.badData.input.dow, browser)
        functions.enterValue(selectors.fields.oln, data.badData.input.oln, browser)
        functions.enterValue(selectors.fields.ols, data.badData.input.ols, browser)
        functions.enterValue(selectors.fields.oly, data.badData.input.oly, browser)
        functions.enterValue(selectors.fields.lic, data.badData.input.lic, browser)
        functions.enterValue(selectors.fields.lis, data.badData.input.lis, browser)
        functions.enterValue(selectors.fields.liy, data.badData.input.liy, browser)

            //I've set all the fields, time to submit
            browser.click(selectors.buttons.submit)
            browser.pause(100)
        //now I'll check that all the expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.badData.output.header)

        //this transaction only has one error message to check, so I don't need to repeat the check
        browser.expect.element(selectors.messages.errorList).text.to.contain(data.badData.output.errorList.oln)
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.badData.output.queryTitle)
        browser.pause(100)
    },

    'Clear button functionality check': browser => {
        //checks the functionality of the clear button
        //this function clicks on clear and then verifies all forms are clear.
        browser.click(selectors.buttons.clear)

            .verify.value(selectors.fields.hdr, data.cleared.input.hdr)
            .verify.value(selectors.fields.hdr, data.cleared.input.mke)
            .verify.value(selectors.fields.hdr, data.cleared.input.oai)
            .verify.value(selectors.fields.hdr, data.cleared.input.nam)
            .verify.value(selectors.fields.hdr, data.cleared.input.sex)
            .verify.value(selectors.fields.hdr, data.cleared.input.rac)
            .verify.value(selectors.fields.hdr, data.cleared.input.hgt)
            .verify.value(selectors.fields.hdr, data.cleared.input.wgt)
            .verify.value(selectors.fields.hdr, data.cleared.input.hai)
            .verify.value(selectors.fields.hdr, data.cleared.input.off)
            .verify.value(selectors.fields.hdr, data.cleared.input.dow)
            .verify.value(selectors.fields.hdr, data.cleared.input.oln)
            .verify.value(selectors.fields.hdr, data.cleared.input.ols)
            .verify.value(selectors.fields.hdr, data.cleared.input.oly)
            .verify.value(selectors.fields.hdr, data.cleared.input.lic)
            .verify.value(selectors.fields.hdr, data.cleared.input.lis)
            .verify.value(selectors.fields.hdr, data.cleared.input.liy)
    }
}