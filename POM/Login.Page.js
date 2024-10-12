class Login {
get = {
    endpoint: ()=> cy.visit("/auth/Login"),
    usernameInput: ()=> cy.get('[name="username"]'),
    passwordInput: ()=> cy.get('[name="password"]'),
    submitButton: ()=> cy.get('[type="submit"]'),
}
}