Cypress.Commands.add('selectProduct',(productName)=>{
    cy.get('.card-title > a').each(($el, index,$list)=>{
        if($el.text().includes(productName)){
            cy.get('button.btn').eq(index).click()
        }
    })
})