describe ("Assertion Demo",()=>{

    it("Implicit Assertion", ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")


        //should

       //cy.url().should('include','orangehrmlive.com') // check that url part include in the url
        //cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // check the url is same with given url
        //cy.url().should('contain',"orangehrm") // check the that url part contains in the url

        /*cy.url().should('include','orangehrmlive.com') // check that url part include in the url
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // check the url is same with given url
        .should('contain',"orangehrm") // check the that url part contains in the url*/


        //and
        cy.url().should('include','orangehrmlive.com') // check that url part include in the url
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // check the url is same with given url
        .and('contain',"orangehrm") // check the that url part contains in the url
        .and('not.contain','greenchrm')

        cy.title().should('include','Orange') // check the page title 
        .and('eq','OrangeHRM')
        .and('contain','HRM')

        cy.get('.orangehrm-login-branding > img').should('be.visible')// check the logo is visible or not
        .and('exist') //check the logo is exist 


        cy.xpath('//a').should('have.length','5')// check nuber of  links 

        cy.get("input[placeholder='Username']").type("Admin") // to provide into input box
        cy.get("input[placeholder='Username']").should('have.value','Admin')//check value
    })

    it("Explicit Assertion", ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        let expName="manda user";

        cy.get(".oxd-userdropdown-name").then( (x)=>{

            let actName=x.text()     
            
            //BDD Style Assertion
            expect(actName).to.equal(expName)
            expect(actName).to.not.equal(expName)

            //TDD Style Assertion
            assert.equal(actName,expName)
            assert.notEqual(actName,expName)
        })
        
        })



})