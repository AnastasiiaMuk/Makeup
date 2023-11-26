export class MainPage {

    openMakeUp(baseUrl) {
        cy.visit(baseUrl)
        cy.viewport(1920, 1080)
    }

    verifyUrl(homeUrl) {
        cy.url().should("eq", homeUrl)
    }

    openCategory1(category1) {
        cy.get('a[href="/categorys/3/"]').contains(category1).click()
    }

    openCategory2(category2) {
        cy.get('a[href="/categorys/20272/"]').contains(category2).click()
    }

    applyFilter1() {
        cy.get('#popularinput-checkbox-2243-23957').click()
    }

    applyFilter2() {
        cy.get('#input-checkbox-2251-23335').click()
    }

    applyFilter4() {
        cy.get('#input-checkbox-2243-29891 > a').click()
    }

    applyFilter5() {
        cy.get('#input-checkbox-2251-29337 > :nth-child(1)').click()
    }

    applyFilter3(minPrice, maxPrice) {
        cy.get('input#price-from').clear()
        cy.get('input#price-from').clear().type('' + minPrice)
        cy.wait(2000)
        cy.get('input#price-to').clear().type('' + maxPrice)
        cy.wait(2000)
    }

    sortByPriceFromTo() {
        cy.once('uncaught:exception', () => false);
        cy.get('.catalog-sort__list-title').click()
        cy.get('label[for="input-sort-1"]').click()
        cy.wait(2000)
    }

    verifySorting(minPrice, maxPrice) {
        cy.get('div.catalog-products ul li span.simple-slider-list__price span.price_item').then(prods => {
            const prices = [];
            for (let i = 0; i < prods.length; i++) {
              prices.push(Number(prods[i].textContent));
            }
      
            expect(prices[0]).to.be.at.least(minPrice).to.be.at.most(maxPrice);
            for (let i = 0; i < prices.length - 1; i++) {
              expect(prices[i + 1]).to.be.at.least(minPrice).to.be.at.most(maxPrice);
              expect(prices[i + 1]).to.be.at.least(prices[i], 'Verify if list of products is sorted by price');
            }
        });
    }

    selectProduct1() {
        cy.get('a[href="/product/1194/"][data-default-name="Chanel Coco Mademoiselle - Духи"]').click()
    }

    selectProduct2() {
        cy.get('a[href="/product/1035800/"][data-default-name="Универсальное масло для волос - Kerastase Elixir Ultime Tiger Rouge"]').click()
    }

    buyProduct() {
        cy.get('.product-item__button > .button').click()
    }

    clickSearchButton() {
        cy.get('div[class="search-button"]').click()
    }

    fillSearchInput(searchProduct) {
        cy.get('#search-input').type(searchProduct).type('{enter}')
    }

    verifySortingSearchProduct(searchProduct) {
        cy.get('div.catalog-products a.simple-slider-list__name').then(productTitles => {
            for (let i = 0; i < productTitles.length; i++) {
                expect(productTitles[i].textContent).to.contain(searchProduct);
            }
        })
    }  
}

export const mainPage = new MainPage()