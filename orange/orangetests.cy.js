describe('Breadcrumb', () => {
    beforeEach('Login', () => {
        cy.session("Login", () => 
            {
      
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.url().should("contain", "orangehrm")
      cy.get("[name='username']")
       .type ("Admin")
       cy.get("[name='password']")
       .type ("admin123")
       cy.get("[type='submit']").click()
            })
    })

      it('buscar un empleado', () => {
        cy.url().should ("contain", "viewEmployeelist")

    })

    })
