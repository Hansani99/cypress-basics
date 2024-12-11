describe('XPathLocator', ()=>{

    it('no of list', ()=>{

        cy.visit("https://www.ministryoftesting.com/articles/websites-to-practice-testing")


        cy.xpath("//body[1]/main[1]/div[3]/section[1]/div[1]/div[1]/div[2]/div[2]/ul[1]/li").should('have.length',26)// to get length
    })

    it('chained xpath', ()=>{

        cy.visit("https://www.ministryoftesting.com/articles/websites-to-practice-testing")


        cy.xpath("//body[1]/main[1]/div[3]/section[1]/div[1]/div[1]/div[2]/div[2]/ul[1]").xpath ("./li").should('have.length',26)
    })
})