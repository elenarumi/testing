class Login {
    // Prperties, elements
get = {
    
    usernameInput: ()=> cy.get('[name="username"]'),
    passwordInput: ()=> cy.get('[name="password"]'),
    submitButton: ()=> cy.get('[type="submit"]'),
    forgotLink: ()=> cy.get('[class="orangehrm-login-forgot"]p')
}

// Functions / Methods

enterUsername(type) {
    this.get.usernameInput().type(type)

}
enterPassword(type) {
    this.get.passwordInput().type(type)

}
submitLogin(type) {
    this.get.submitButton().click()

}
}
export const login = new Login;