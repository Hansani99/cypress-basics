
describe('Drop Down Element',()=>{

    it.skip('Drop Down with select Verification',()=>{


        cy.visit("https://testautomationpractice.blogspot.com/")

        cy.get("#country")
        .select('canada')
        .should('have.value','canada')
    })

    it.skip('Drop Down Without Select',()=>{

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

        cy.get('#select2-billing_country-container').click() // id from dropdown
        cy.get('.select2-search__field').type('Sri Lanka').type('{enter}')// class from search type box
        

        //type the text on searchbox

        cy.get('#select2-billing_country-container').should('have.text','Sri Lanka')//id from dropdown

    })

    it.skip('Auto Suggest Drop Down',()=>{


        cy.visit("https://www.wikipedia.org/")
        cy.get('#searchInput').type('Coventry')
        cy.get('.suggestion-title').contains('Coventry University').click()
    })


    it('Dynamic auto suggestion Dropdown',()=>{

        cy.visit("https://www.google.com/")
        cy.get("#APjFqb").type('cypress automation')

        cy.wait(3000)

        cy.get(".wM6W7d>span").should('have.length',13)

        cy.get(".wM6W7d>span").each( ($el, index, $list)=>{
                   if($el.text()=='cypress automation tutorial')
                    {
                    cy.wrap($el).click()
                   }

        })

        cy.get("#APjFqb").should('have.value','cypress automation tutorial')



    })
})