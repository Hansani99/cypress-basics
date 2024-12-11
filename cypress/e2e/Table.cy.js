describe("Handling Tables",()=>{

    it('Login',()=>{                                      //beforeEach<--this can use for login  


        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("[name='username']").type("Admin")
        cy.get("[name='password']").type("admin123")
        cy.get("[type='submit']").click()


        // click admin in dashboard
        //if you have sub items in item u can use this code
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > span:nth-child(2)").click() //sub item/child item


    })

    it('check the number of rows &c colums',()=>{
        cy.visit("https://practice.expandtesting.com/tables")

        cy.get("table[class='table table-bordered']>tbody>tr").should('have.length','8')//for rows
        cy.get("table[class='table table-bordered']>thead>tr>th").should('have.length','12')//for colums
    })


    it("check the all data from specific row and column",()=>{

        cy.visit("https://practice.expandtesting.com/tables")
        cy.get("table[class='table table-bordered']>tbody>tr:nth-child(2)>td:nth-child(3)").contains("fbach@yahoo.com")
    })


    it.only("Read all the rows &colums data in the first page",()=>{

        cy.visit("https://practice.expandtesting.com/tables")
        cy.get("table[class='table table-bordered']>tbody>tr")
        .each(($row, index, $rows)=>{

            cy.wrap($row).within(()=>{
                cy.get("td").each(($col, index, $cols)=>{

                    cy.log($col.text());
                })
            })
        })
    })

    it("Pagination",()=>{

        //find total number of pages
        /*let totalPages;
        cy.get(".hdgyds").then((e)=>{

            let mytext=e.text();
            totalPages=mytext.substring(mytext.index("(")+1,mytext.indexOf("Pages")-1)
            cy.log("Total number of pages in a table=======>"+totalPages)
        })*/

            

    })
})

