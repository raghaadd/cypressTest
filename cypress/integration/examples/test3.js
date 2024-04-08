describe('participationg test cases', function(){
    beforeEach(() => {
        // run these tests as if in a desktop
        // browser with a 720p monitor
        cy.viewport(1280, 720)
      })
    it('Navigating to the website', function(){
        cy.visit("https://modazehrada.com/en");
        cy.wait(5000)
        //search for item:
        cy.get('.t4s-site-nav__search > .t4s-pr > .t4s-icon').type("LUBNA");
        //press on search icon to admit search result
        cy.get('.t4s-mini-search__submit').click();
        cy.wait(5000)
        //click on item image to naviagte to PDP page:
        cy.get('.t4s_box_pr_grid > .t4s-product > .t4s-product-wrapper > .t4s-product-inner > .t4s-full-width-link').click();
        cy.wait(5000)
        //choose the color and size for item
        cy.get('.t4s-swatch__list > .bg_color_green').click();
        cy.get('[data-value="40"]').click()
        cy.wait(2000)
        //increase QT
        cy.get('.t4s-d-flex > .t4s-quantity-wrapper > .is--plus').click()
        //add item to wishlist
        cy.get('.t4s-d-flex > .t4s-pr-wishlist > .t4s-svg-pr-icon').click()
        //add to bascket
        cy.get('.t4s-product-form__submit').click()
        cy.wait(5000)
        //accept terms and consitions:
        cy.get('.t4s-d-block > label').click()

        //edit item:
        cy.get('.t4s-mini_cart__edit').click()
        cy.wait(3000)
        //
        cy.get('#product-form-8237542277339main-qs > .t4s-swatch > .is-t4s-style__color > .t4s-swatch__list > .bg_color_lila').click();
        cy.get('#product-form-8237542277339main-qs > .t4s-swatch > .is-t4s-name__size > .t4s-swatch__list > [data-value="38"]').click();
        cy.get('#product-form-8237542277339main-qs > .t4s-product-form__buttons > .t4s-d-flex > .t4s-product-form__submit > .t4s-btn-atc_text').click()
        //

   


   

    });
});