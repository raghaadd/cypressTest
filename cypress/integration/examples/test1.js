/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('Gifiti website',function(){
    before(function(){
        cy.fixture('example').then(function(data){
            this.data=data;
            cy.log(data);
        })
        })
    it('gifiti website',function(){
        cy.visit("https://giftit-ng-ui-qa.progifts.io/catalog");
        //type card name
        cy.get('.catalog-search').type("Adidas");
        //click on search button
        cy.get('.catalog-search > button').click();

        //click on the card when it loaded
        cy.contains('app-store-item', 'Adidas').should('be.visible').click();       

        cy.get('.nominations').children().each(($el, index)=>{
            cy.log($el.text());
            if ($el.text().trim() === '$200'){
                cy.wrap($el).click();
                return false;
            }
        });
        cy.get('.continue').click();

        //choose "Multiple recipients" interface
        cy.get('.form-switch').children().each(($el, index)=>{
            cy.log($el.text());
            if ($el.text().trim() === 'Multiple recipients'){
                cy.wrap($el).click();
                return false;
            }
        });

        //click on "Multiple recipients" button
        cy.get('.add-giftee').click();

        //type first name:
        cy.get('.ng-star-inserted > :nth-child(2) > .ng-pristine').type(this.data.RecipientName[0]);

        //type first email:
        cy.get(':nth-child(3) > .ng-pristine').type(this.data.RecipientEmail[0]);

        //press enter:
        cy.get('.ng-star-inserted > :nth-child(3) > .ng-dirty').type('{enter}');
        //type second name:
        cy.get('.ng-star-inserted > :nth-child(2) > .ng-pristine').type(this.data.RecipientName[1]);

        //type second email:
        cy.get(':nth-child(3) > .ng-pristine').type(this.data.RecipientEmail[1]);

        //click on Apply button:
        cy.get('header > #form-submit-btn').click().then(() => {
            //click on Continue button:
            cy.get('#form-submit-btn').click();
        });
        cy.wait(2000);
        cy.get('#form-submit-btn').click();

        //type your name:
        cy.get('#gifterName').type(this.data.YourName);
        //type your email:
        cy.get('#gifterMail').type(this.data.YourEmail);

        //click on Continue button:
        cy.get('#form-submit-btn').click();

    
        cy.wait(4000);
        //type card number:
        cy.get('.checkout-form > :nth-child(1) > .stripe-input').within(() => {
            // Assuming there's an input field for the card number, you can target it by its class or tag name
            cy.get('iframe[name*="__privateStripeFrame"]').as('cardInput');
          });
          cy.get('@cardInput').type(this.data.cardNumber, { force: true });


        //type name on card:
        cy.get('#name').type(this.data.nameoncard)

       

        //type expiry date:
        cy.get('.small-inputs > :nth-child(1) > .stripe-input').within(() => {
            cy.get('iframe[name*="__privateStripeFrame"]').as('expirydate');;
          });

          cy.get('@expirydate').type(this.data.expiryDate, { force: true });

        //type cvv field:
        cy.get(':nth-child(2) > .stripe-input').within(() => {
            cy.get('iframe[name*="__privateStripeFrame"]').as('cvvfield');;
          });

          cy.get('@cvvfield').type(this.data.CVCcode, { force: true });

          //click on checkout button
          cy.get('#form-submit-btn').click();
    })

})


// describe('participationg test cases', function(){
//     it('Navigating to the website', function(){
//         cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
//     })
// })
///*************** */
// describe('Validate the searching',function(){
//     it('Searching for a short term',function(){
//         cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
//         cy.get('.search-keyword').type("ca")
//         cy.get('.product:visible').should('have.length',4)
//         cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
//     })
// })

// describe('Adding elements to the cart',function(){
//     it('Finding an element from the list',function(){
//         cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
//         cy.get('.search-keyword').type("ca")
//         cy.get('.products').as('productLocator')
//         //apply a loop to search for "x" word
//         cy.get('@productLocator').find('.product').each(($el,index,$list)=>{
//             const textveg=$el.find('h4.product-name').text()
//             if(textveg.includes('Cashews')){
//                 cy.wrap($el).find('button').click()
//             }
//         })
//     })
// })

// describe('Adding elements to the cart',function(){
//     it('Finding an element from the list',function(){
//         cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
//         cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
//         cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
//         cy.get('input[type="checkbox"]').check(['option2','option3'])

//         //static Dropdown
//         cy.get('select').select('option2').should('have.value','option2')

//         //Dynamic dropdowns
//         cy.get('#autocomplete').type('ind')
//         cy.get('.ui-menu-item div').each(($e1,index,$list)=>{
//             if($e1.text()=="India"){
//                 cy.wrap($e1).click()
//             }
//         })

//         //visible invisible
//         cy.get('#displayed-text').should('be.visible')
//         cy.get('#hide-textbox').click()
//         cy.get('#displayed-text').should('not.be.visible')
//         cy.get('#show-textbox').click()
//         cy.get('#displayed-text').should('be.visible')

//         //radio buttons
//         cy.get('[value="radio2"]').checkA().should('be.checked')
//     })
// })

// describe('Alert/popups',function(){
//     it('Handling alerts and popups',function(){
//         cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
//         cy.get('#alertbtn').click()
//         //window alert
//         cy.on('window:alert',(str)=>{

//             //Mocha
//             expect(str).to.equal('Hello, Are you sure you want to confirm?')
//         })

//         cy.on('window:confirm',(str)=>{
//             //Mocha
//             expect(str).to.equal('Hello, share this practice page and share your knowledge')
//         })

//     })

// })

// describe('open tab',function(){
//     it('open new tab',function(){
//         cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
//         cy.get('#opentab').invoke('removeAttr','target').click();
//         cy.origin("https://www.qaclickacademy.com",()=>{
//             cy.get("#navbarSupportedContent a[href*='about']").click();
//             cy.get(".mt-50 h2").should('contain','QAClick Academy');
//         })
//     })

// })

// describe('Handel web tables with Cypress',function(){
//     it('Handel web tables with Cypress using each command',function(){
//         cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
//         cy.get('tr td:nth-child(2)').each(($e1,index, $list)=>{
//             const text=$e1.text()
//             if(text.includes("Pthon")){
//                 cy.get("tr td:nth-child(2").eq(index).next().then(function(price){
//                     const priceText=price.text()
//                     expect(priceText).to.equal('25')
//                 })
//             }
//         })
//     })

// })


// describe('Handel web tables with Cypress',function(){
//     it('Handel web tables with Cypress using each command',function(){
//         cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
//         cy.get('div.mouse-hover-content').invoke('show')
//         cy.contains('Top').click()
//         cy.url().should('include','top')
//     })

// })

// /// <reference types="Cypress" />
// /// <reference types="cypress-iframe" />

// import 'cypress-iframe'

// describe('iframes',()=>{
//     it('should handle iframe',()=>{
//         cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
//         cy.frameLoaded("#courses-iframe")

//         cy.iframe().find("a[href*='mentorship']").eq(0).click()
//         cy.wait(3000)
//         cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)
//     });
// });
// describe('My test',function(){
//     before(function(){
//         cy.fixture('example').then(function(data){
//             this.data=data
//         })
//     })
//     it('My First test case',function(){
//         cy.visit("https://rahulshettyacademy.com/angularpractice/");
//         cy.get(':nth-child(1) > .form-control').type(this.data.name)
//         cy.get('select').select(this.data.gender)

//         cy.get('nth-child(2) > .nav-link').click()
//         cy.selectProduct('Blackberry')
       
//     })

//})


