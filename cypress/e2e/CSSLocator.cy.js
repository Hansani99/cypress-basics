describe ('CSSLocator' ,() =>{

    it('login', () => {
        cy.visit("https://practicetestautomation.com/practice-test-login/")
        //cy.get("#username").type("student") // id
        cy.get("[name='username']").type("student") // attribute
        cy.get("[name='password']").type("Password123") 
        cy.get(".btn").click()
    })
})

