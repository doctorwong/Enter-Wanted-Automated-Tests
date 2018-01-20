module.exports = {
    goodData:
        {
            input: {
                hdr: '1234567890',
                mke: 'foo',
                oai: 'abcdefg01',
                nam: 'John Doe',
                sex: 'M',
                rac: 'W',
                hgt: '510',
                wgt: '200',
                hai: 'black',
                off: 'speeding',
                dow: '10102000',
                oln: '12345678901234567890',
                ols: 'NY',
                oly: '11112000',
                lic: '12345678',
                lis: 'IL',
                liy: '2000'
            },

            output: {
                header: 'Valid',
                errorList: {},
                queryTitle: 'Assembled Query:',
                assembledQuery: '1234567890.foo.abcdefg01.John Doe.M.W.510.200.black.speeding.10102000.12345678901234567890.NY.11112000.12345678.IL.2000'
            }

        },

    tooLong:
        {
            input: {
                hdr: 'supercalifragilisticexpialidocious',
                mke: 'supercalifragilisticexpialidocious',
                oai: 'supercalifragilisticexpialidocious123',
                nam: 'supercalifragilisticexpialidocious',
                sex: 'Transgender',
                rac: 'Asian',
                hgt: '99999999',
                wgt: '99999999',
                hai: 'supercalifragilisticexpialidocious',
                off: 'supercalifragilisticexpialidocious',
                dow: '9999999999',
                oln: 'supercalifragilisticexpialidocious',
                ols: 'Kansas',
                oly: '999999999',
                lic: '9999999999',
                lis: 'Kansas',
                liy: '999999999'
            },

            output: {
                header: "Errors Received:",
                errorList: {
                    hdr: 'The "Header" field should be between 9 and 19 characters long.',
                    mke: 'The "MKE" field should be between 2 and 4 characters long.',
                    oai: 'The "MKE" field should be between 2 and 4 characters long.',
                    nam: 'The "Name" field should be between 1 and 30 characters long.',
                    sex: 'The "Sex" field should be 1 character long.',
                    rac: 'The "Race" field should be 1 character long.',
                    hgt: 'The "Height" field should be 3 characters long.',
                    wgt: 'The "Weight" field should be between 1 and 3 characters long.',
                    hai: 'The "Weight" field should be between 1 and 3 characters long.',
                    off: 'The "Offense" field should be between 5 and 15 characters long.',
                    dow: 'The "Date of Warrant/Violation" field should be 8 characters long.',
                    oln: 'The "Drivers\' License" field should be between 1 and 20 characters long.',
                    ols: 'The "DL State" field should be 2 characters long.',
                    oly: 'The "DL Expiration Date" field should be 8 characters long.',
                    lic: 'The "License Plate" field should be between 5 and 8 characters long.',
                    lis: 'The "License State" field should be 2 characters long.',
                    liy: 'The "License Year" field should be 4 characters long.'
                },
                queryTitle: 'No results generated due to error.',
                assembledQuery: ''
            }

        },

    blanks:
        {
            input: {
                hdr: ' ',
                mke: '',
                oai: '',
                nam: '',
                sex: '',
                rac: '',
                hgt: '',
                wgt: '',
                hai: '',
                off: '',
                dow: '',
                oln: '',
                ols: '',
                oly: '',
                lic: '',
                lis: '',
                liy: ''
            },

            output: {
                header: "Errors Received:",
                queryTitle: 'No results generated due to error.',
                errorList: {
                    mke: 'The field named "MKE" must be included.',
                    oai: 'The field named "Originating Agency Identifier" must be included.',
                    nam: 'The field named "Name" must be included.',
                    sex: 'The field named "Sex" must be included.',
                    rac: 'The field named "Race" must be included.',
                    hgt: 'The field named "Height" must be included.',
                    wgt: 'The field named "Weight" must be included.',
                    hai: 'The field named "Hair" must be included.',
                    off: 'The field named "Offense" must be included.',
                    dow: 'The field named "Date of Warrant/Violation" must be included.'
                },
                assembledQuery: ''
            }

        },

    tooShort:
        {
            input: {
                hdr: '1',
                mke: 'a',
                oai: 'abc',
                nam: 'A',
                sex: 'F',
                rac: 'A',
                hgt: '1',
                wgt: '1',
                hai: 'ab',
                off: 'high',
                dow: '123',
                oln: '123',
                ols: 'al',
                oly: '456',
                lic: '789',
                lis: 'k',
                liy: '12'
            },

            output: {
                header: "Errors Received:",
                queryTitle: 'No results generated due to error.',
                errorList: {
                    hdr: 'The "Header" field should be between 9 and 19 characters long.',
                    mke: 'The "MKE" field should be between 2 and 4 characters long.',
                    oai: 'The "MKE" field should be between 2 and 4 characters long.',
                    nam: 'The "Name" field should be between 1 and 30 characters long.',
                    sex: 'The "Sex" field should be 1 character long.',
                    rac: 'The "Race" field should be 1 character long.',
                    hgt: 'The "Height" field should be 3 characters long.',
                    wgt: 'The "Weight" field should be between 1 and 3 characters long.',
                    hai: 'The "Weight" field should be between 1 and 3 characters long.',
                    off: 'The "Offense" field should be between 5 and 15 characters long.',
                    dow: 'The "Date of Warrant/Violation" field should be 8 characters long.',
                    oln: 'The "Drivers\' License" field should be between 1 and 20 characters long.',
                    ols: 'The "DL State" field should be 2 characters long.',
                    oly: 'The "DL Expiration Date" field should be 8 characters long.',
                    lic: 'The "License Plate" field should be between 5 and 8 characters long.',
                    lis: 'The "License State" field should be 2 characters long.',
                    liy: 'The "License Year" field should be 4 characters long.'
                },
                assembledQuery: '',

            }
        },

    invalidData:
        {
            input: {
                hdr: '123456789',
                mke: '!!!!',
                oai: '         ',
                nam: 'Mary Jame',
                sex: 'S',
                rac: '?',
                hgt: 'abc',
                wgt: '!@#',
                hai: '!!!!!',
                off: '     ',
                dow: '12345678',
                oln: '12345678',
                ols: 'OJ',
                oly: '12345678',
                lic: '!!!!!!!!',
                lis: 'ZZ',
                liy: '1700'
            },
            output: {
                queryTitle: 'No results generated due to error.',
                errorList: {
                    oai: 'The "Originating Agency Identifier" field can only include characters from the English Alphabet or numeric characters.',
                    sex: 'The "Sex" field must be entered in as a single character, M for male, F for female, U for unknown.',
                    rac: 'The "Race" field can only include characters from the English Alphabet.',
                    hgt: 'The "Height" field can only include numeric characters.',
                    wgt: 'The "Weight" field can only include numeric characters.',
                    hai: 'The "Hair" field can only include characters from the English Alphabet.',
                    dow: 'The "Date of Warrant/Violation" field must be entered as a date, MMDDYYYY, no earlier than 01011900 and no later than today\'s date.',
                    ols: 'The "DL State" field can only include a valid State/Territory abbreviation.',
                    oly: 'The "DL Expiration Date" field must be entered as a date, MMDDYYYY, no earlier than 01011900 and no later than today\'s date.',
                    lic: 'The "License Plate" field can only include characters from the English Alphabet or numeric characters.',
                    lis: 'The "License State" field can only include a valid State/Territory abbreviation.',
                    liy: 'The "License Year" field must be entered as a 4 digit year, YYYY, no earlier than 1900 and no later than this year.'
                },
                header: "Errors Received:"
            }

        },

    badData: {
        //the 'key' for the fields should match the key of the selectors in css_selectors
        input: {
            hdr: '123456789',
            mke: 'MKE',
            oai: 'CHI1234SI',
            nam: 'Harry Dresd',
            sex: 'M',
            rac: 'W',
            hgt: '607',
            wgt: '200',
            hai: 'Brown',
            off: 'Arson',
            dow: '05022016',
            oln: '12345',
            ols: '',
            oly: '',
            lic: '',
            lis: '',
            liy: ''
        },
        output: {
            header: 'Errors Received:',
            errorList: {
                oln: `If Operator's License Number, DL State, or DL Expiration Year are present, all three must be present.`
            },
            queryTitle: 'No results generated due to error.',
            assembledQuery: ''
        }
    },

    cleared: {
        //the 'key' for the fields should match the key of the selectors in css_selectors
        input: {
            hdr: '',
            mke: '',
            oai: '',
            nam: '',
            sex: '',
            rac: '',
            hgt: '',
            wgt: '',
            hai: '',
            off: '',
            dow: '',
            oln: '',
            ols: '',
            oly: '',
            lic: '',
            lis: '',
            liy: ''
        },


    }
}
