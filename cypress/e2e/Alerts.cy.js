
describe('Alerts',()=>{

    //java script confomation alert-->contains ok button
    it("Show Alert Box",()=>{

        cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")
        cy.get("#alertexamples").click()

        cy.on('window:alert',(x)=>{

            expect(x).to.contains('I am an alert box!');
        })

        //alert window automatically closed by cypress
        
        cy.get("#alertexplanation").should('have.text','You triggered and handled the alert dialog')
    })

    //java script confmation alert-->contains ok and cancel buttons

    it("Confirmation alert-ok",()=>{//only that it block run

        cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")
        cy.get("#confirmexample").click()

        cy.on('window:confirm',(t)=>{

            expect(t).to.contains('I am a confirm alert')
        })
        
        cy.get("#confirmexplanation").should('have.text','You clicked OK, confirm returned true.')//cypress automatically click ok button
    })

    it("Confirmation alert-cancel",()=>{//only that it block run

        cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")
        cy.get("#confirmexample").click()

        cy.on('window:confirm',(t)=>{

            expect(t).to.contains('I am a confirm alert')
        })

        cy.on('window:confirm',()=>false);//cypress close alert using cancel button
        cy.get('#confirmexplanation').should('have.text','You clicked Cancel, confirm returned false.')



})

//promt alert
    it('promt alert validation',()=>{
        cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")

        cy.window().then((win)=>{

            cy.stub(win,'prompt').returns('Sumudu')

        })
        cy.get('#promptexample').click()
       ////cy.get('#promptexplanation').should('have.text',"You clicked Cancel. 'prompt' returned sumudu")

        //cy.on('window:confirm',()=>false);
        //cy.get('#promptexplanation').should('have.text',"You clicked Cancel. 'prompt' returned null")



    })
    //when have the system generated massage in prompt box

    it.skip("promt 'change me' showing massage",()=>{

        cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")
        cy.window().then((win)=>{
            cy.stub(win,'prompt').callsFake((message)=>{

                expect(message).to.equal('change me');
                return 'sumudu';

            })
        })
        cy.get('#promptexample').click()
        cy.get('#promptexplanation').should('contain',"You clicked Cancel. 'prompt' returned sumudu")



    })

        it('authentication alert',()=>{

            //approch 1
            cy.visit("https://share.coventry.ac.uk/sites/apustudents/Pages/default.aspx",{auth:{
                                                                                                username:'hansanis',
                                                                                                password:'N4%pSTW#'}
                                                                                            });    
                                                                                            
            cy.get('#id').should('have.contain',"congratulations")


            })

            //approch 2

            it("another one",()=>{

                cy.visit("https://admin:admin@share.coventry.ac.uk/sites/apustudents/Pages/default.aspx")
                cy.get('#id').should('have.contain',"congratulations")

            })
        })


    