/// <reference types="Cypress" />
import { mainPage } from "../support/page_objects/mainPage.js"
import { cartPage } from "../support/page_objects/cartPage.js"


describe('Make up', () => {
    
    let testData;
    before(() => {
        cy.fixture('config.json').then((jsonData) => {
            testData = jsonData
        })
    })

    beforeEach(() => {
        mainPage.openMakeUp(testData.baseUrl)
        mainPage.verifyUrl(testData.homeUrl)
    })

    it('Verify the price filter working', () => {
        mainPage.openCategory1(testData.category1)
        mainPage.applyFilter1()
        mainPage.applyFilter2()
        mainPage.applyFilter3(testData.minPrice, testData.maxPrice)
        mainPage.sortByPriceFromTo()
        mainPage.verifySorting(testData.minPrice, testData.maxPrice)
    })

    it('Add items to the basket', () => {
        mainPage.openCategory1(testData.category1)
        mainPage.applyFilter1()
        mainPage.applyFilter2()
        mainPage.selectProduct1()
        mainPage.buyProduct()
        cartPage.closeCart()
        mainPage.openCategory2(testData.category2)
        mainPage.applyFilter4()
        mainPage.applyFilter5()
        mainPage.selectProduct2()
        mainPage.buyProduct()
        cartPage.verifyProductTitles(testData.product1Title, testData.product2Title)
        cartPage.verifyProductPrices(testData.product1Price, testData.product2Price)
        cartPage.verifyTotalPrice(testData.product1Price, testData.product2Price)
    })

    it('Search the item', () => {
        mainPage.clickSearchButton()
        mainPage.fillSearchInput(testData.searchProduct1)
        mainPage.verifySortingSearchProduct(testData.searchProduct1)
    })

    it('Negative test', () => {
        mainPage.clickSearchButton()
        mainPage.fillSearchInput(testData.searchProduct1)
        mainPage.verifySortingSearchProduct(testData.searchProduct2)
    })
})
