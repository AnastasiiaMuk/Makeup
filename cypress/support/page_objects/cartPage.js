export class CartPage {

    closeCart() {
        cy.get('.popup__window > .popup-close').click()
    }

    verifyProductTitles(product1Title, product2Title) {
        cy.get('a[href="/product/1194/"] div.product__header').should('have.text', product1Title)
        cy.get('a[href="/product/1035800/"] div.product__header').should('have.text', product2Title)
    }

    verifyProductPrices(product1Price, product2Price) {
        cy.get('li[data-id="1194_572973_3"] div.product__price').should('contain', product1Price)
        cy.get('li[data-id="1035800_2156342"] div.product__price').should('contain', product2Price)
    }

    verifyTotalPrice(product1Price, product2Price) {
        cy.get('div.total span').invoke('text').then(price => {
            let sum = Number(price.match(/^(\d+).*$/)[1])
            let totalPrice = product1Price + product2Price
            expect(sum).to.equal(totalPrice)
          })
    }
}

export const cartPage = new CartPage()