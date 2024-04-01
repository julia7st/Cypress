/// <reference types="cypress" />
import HomePage from "../PageObjects/homePage";
import HelpPage from "../PageObjects/helpPage";

describe("template spec", () => {
  let homePage;
  let helpPage;

  it("Verify the user can open the Help page", () => {
    homePage = new HomePage();
    helpPage = new HelpPage();

    homePage.getENpage();
    helpPage.getHelpPage();
    cy.url().should("eq", "https://en.wikipedia.org/wiki/Help:Contents");
  });
});
