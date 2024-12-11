import 'cypress-iframe'
require ('@4tw/cypress-drag-drop')

describe("Mouse Operations",()=>{


    it("MouseHOver",()=>{

       cy.visit("https://practice.expandtesting.com/")

       
       cy.get("li[class='nav-item dropdown col-6 col-md-auto'] li:nth-child(1) a:nth-child(1)").should('not.be.visible')
       cy.get("#examples-dropdown").trigger('mouseover').click();
       cy.get("li[class='nav-item dropdown col-6 col-md-auto'] li:nth-child(1) a:nth-child(1)").should('be.visible')
    })


    it("Right Click Action",()=>{


        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")

        //Approach1
       /* cy.get(".context-menu-one.btn.btn-neutral").trigger('contextmenu')
        cy.get(".context-menu-icon-copy > span").should('be.visible')*/


        //Approach2
        cy.get(".context-menu-one.btn.btn-neutral").rightclick();
        cy.get(".context-menu-icon-copy > span").should('be.visible')
        
    })

    it("Double Click",()=>{

        cy.visit("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_ondblclick")
        cy.frameLoaded("#iframeResult")

        //Approach one

        /*cy.iframe("#iframeResult").find("p[ondblclick='myFunction()']").trigger('dblclick')
        cy.iframe("#iframeResult").find("#demo").should('be.have',"Hello World")*/


        //Approach 2

        cy.iframe("#iframeResult").find("p[ondblclick='myFunction()']").dblclick()


    })

    it("Drag and drop using plugins",()=>{

        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");

        cy.get('#box6').should('be.visible')
        cy.get('#box106').should('be.visible')

        cy.wait(3000)

        cy.get('#box6').drag('#box106',{force:true});// <-- {force:true} when element is hidden
        
    })
    
    it.only("Scrollling",()=>{

        cy.visit("https://flagpedia.net/index");
        //Srilankan Flag
        cy.get(':nth-child(214) > a > img').scrollIntoView({duration:2000})
        cy.get(':nth-child(214) > a > img').should('be.visible');

        //India Flag

        cy.get(':nth-child(104) > a').scrollIntoView({duration:2000})
        cy.get(':nth-child(104) > a').should('be.visible');

        //scroll down to footer

        cy.get('.footer').scrollIntoView()
    

       
    })
})