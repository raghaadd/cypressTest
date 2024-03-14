import 'cypress-xpath';

describe('participationg test cases', function(){
    beforeEach(() => {
        // run these tests as if in a desktop
        // browser with a 720p monitor
        cy.viewport(1280, 720)
      })
    it('Navigating to the website', function(){
        cy.visit("https://www.borsheims.com/");

        // Type "Omega" in the search bar and press enter
        cy.get('#l-desktop-search').type("Omega{enter}");

        // Wait for the search results to load
        cy.wait(5000);

        // Log the HTML content of the element inside x-search-app
        cy.get('div.content-item x-search-app').invoke('html').then((htmlContent) => {
            console.log(htmlContent);
        });

        // Log the entire HTML content of the document
        cy.document().then((doc) => {
            cy.log(doc.documentElement.outerHTML);
        });

    });
});

// describe('participationg test cases', function(){
//     beforeEach(() => {
//         // run these tests as if in a desktop
//         // browser with a 720p monitor
//         cy.viewport(1280, 720)
//     });

//     it('Navigating to the website', function(){
//         // Encode username and password for Basic Authentication
//         const username = 'storefront';
//         const password = 'Funko2020';
//         const credentials = btoa(`${username}:${password}`);
//         const authHeader = `Basic ${credentials}`;

//         cy.visit("https://sfcc-test.funko.com/", {failOnStatusCode: false});
//         cy.wait(5000)
//         cy.get('#welcome-email-modal > .modal-dialog > .modal-content > .close > .svg-symbol').click();

//         //type "bitty pop":
//         //cy.get('#search-field-desktop').type("vinyl{enter}",{failOnStatusCode: false});
        
//         //cy.get('.active > .pd-even-columns > .container > :nth-child(1) > :nth-child(1) > .region > .experience-component > .pd-hero > .row > .content-col > .pd-hero-content-bg > .pd-hero-content > .pd-hero-cta').click();
       
//         cy.get('#search-field-desktop').type("{enter}",{failOnStatusCode: false});
       

//         //click on filter:
//         cy.get('.all-filters > .title > span').click();
//         cy.wait(5000);



//     });
// });
        

//        //cy.get('x-search-app').find('div').eq(0).find('div.div');
//     //cy.xpath('/html/body/div[2]/main/div/div[1]/div[1]/div/div[2]/x-search-app//div/div[4]/main/div[1]/g-modal/button').click();
//     });
// });


