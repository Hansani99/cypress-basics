import 'cypress-iframe'

describe('handling frames',()=>{

    it('aproach1',()=>{

        cy.visit('https://practice.expandtesting.com/iframe')

        const iframe=cy.get('#mce_0_ifr')
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap);

            iframe.clear().type("welcome {cmd+a}")

            cy.get("[aria-label='Bold']").click();
        })

    it('aproach2- by using custom command',()=>{

        cy.visit('https://practice.expandtesting.com/iframe')
    
        cy.getIframe('#mce_0_ifr').clear().type("welcome {cmd+a}")
    
        cy.get("[aria-label='Bold']").click();
            })

    it.only('aproach3- by using custom command',()=>{

        cy.visit('https://practice.expandtesting.com/iframe')
        
        cy.frameLoaded("#mce_0_ifr")//load the frame
        cy.iframe("#mce_0_ifr").clear().type("welcome {cmd+a}")
        cy.get("[aria-label='Bold']").click();

        })

    })
