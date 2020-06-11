const testData = require('../testData.json');
const SearchPage = require ('./search_po');
const assert = require('assert');

const search = new SearchPage();

describe('search test', () => {

    before(() => {

        browser.maximizeWindow();
        browser.url(testData.appURl);

    });

    it('search amazon', () => {
         //small test, no reason to create separated files for page actions/validators/waiters etc
        search.input.setValue(testData.request); 
        search.startBtn.waitForDisplayed(2000); 
        search.startBtn.click();
       
        search.capcha.waitForExist(90000, true); //capcha can't be avoid on google prod env, need manual solving
        search.firstTitle.waitForDisplayed(5000);

        assert.equal (search.firstUrl.getText(), testData.expectedURL, `${search.firstUrl.getText()} is not equal to ${testData.expectedURL}`);
        assert.equal (search.firstTitle.getText(), testData.expectedTitle, `${search.firstTitle.getText()} is not equal to ${testData.expectedTitle}`);

    });

})