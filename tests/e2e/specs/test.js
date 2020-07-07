// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.get(".post").should("have.length", 2);
    cy.get(".v-text-field").type("is a developer{enter}");
    cy.get(".post").should("have.length", 3);
    cy.get(".post")
      .eq(2)
      .contains("is a developer");
    cy.pause();
    cy.get(".post")
      .eq(2)
      .click();
    cy.pause();
    cy.get(".post").should("have.length", 2);
  });
});
