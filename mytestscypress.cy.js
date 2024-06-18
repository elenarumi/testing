describe('TC Login', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('https://demo.testim.io/login')
      cy.url().should("contain", "login")

      it('hacer login exitosamente', () => {
        cy.get ("[type='text']"). eq(4)
        .type ("Upex")
        cy.get ("[type='password']")
        .type ("123")
        cy.get ("button[type='submit']")
        .click()

        cy.contains("Log out").should("be.visible")
    })

    })



})