class HomePage {
  getENpage() {
    cy.visit("https://en.wikipedia.org/wiki/Main_Page");
  }

  getUKpage() {
    cy.visit("https://uk.wikipedia.org/wiki/Main_Page");
  }

  getcreateAccountBtn() {
    cy.get("#pt-createaccount-2 > a > span");
  }

  getloginBtn() {
    cy.get("#pt-login-2 > a > span");
  }

  getdropdownBtn() {
    cy.get("#vector-user-links-dropdown");
  }
}

export default HomePage;
