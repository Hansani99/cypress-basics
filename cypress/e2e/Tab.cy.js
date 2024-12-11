describe("handling tabs",()=>{


    it.only('approach1',()=>{

        cy.visit("https://practice.expandtesting.com/windows")
        cy.get('.row>a').invoke('removeAttr','target').click();
        cy.url().should('include','https://practice.expandtesting.com/windows/new')
        cy.wait(5000);

        cy.go('back');
    })

    it('approach',()=>{

        cy.visit("https://practice.expandtesting.com/windows")


        cy.get('.row>a').then((e)=>{

            let url=e.prop('href')
            cy.visit(url);
        })
        cy.url().should('include','https://practice.expandtesting.com/windows/new')
        cy.wait(5000);

        cy.go('back');
    })

})