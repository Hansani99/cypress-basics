

describe('Check UI Elements',()=>{

     it('Check Radio Button', ()=>{

        cy.visit('https://testautomationpractice.blogspot.com/')

        //check visibility of radio buttons
        cy.get('#male').should('be.visible')
        cy.get('#female').should('be.visible')


        //Check selecting radio buttons

        cy.get('#male').check().should('be.checked')
        cy.get('#female').should('not.be.checked')


        cy.get('#female').check().should('be.checked')
        cy.get('#male').should('not.be.checked')

    })

    it('check checkbox'  ,() =>{

        cy.visit('https://testautomationpractice.blogspot.com/')

        //check the visiblity of the checkbox
        cy.get('#tuesday').should('be.visible')


        //selecting the single check box
        cy.get('#tuesday').check().should('be.checked')

        //unselecting the single checkbox
        cy.get('#tuesday').uncheck().should('not.be.checked')

        //selecting the all checkboxes

        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        //selecting two checkboxes
        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')

    })
})