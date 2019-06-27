// https://docs.cypress.io/api/introduction/api.html

describe("test-false-values", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  const falseTestValues = ["0", "false", "no"];

  falseTestValues.forEach(element => {
    it(`test input: ${element}`, () => {
      cy.percySnapshot();
      cy.get("#input-status")
        .type(element)
        .should("have.value", element);

      cy.get("#btn-submit").click();

      cy.get("#status-display").should($h2 => {
        expect($h2).to.have.length(1);
        expect($h2).to.have.text("CURRENT STATUS: false");
      });
      cy.percySnapshot();
      cy.get("#input-status").clear();
    });
  });
});
