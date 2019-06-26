describe("test-negative-values", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    const negativeTestValues = ["786", "*(Dhe", "test"];
  
    negativeTestValues.forEach(element => {
      it(`test input: ${element}`, () => {
        cy.get("#input-status")
          .type(element)
          .should("have.value", element);
  
        cy.get("#btn-submit").click();
  
        cy.get("#status-display").should($h2 => {
          expect($h2).to.have.length(1);
          expect($h2).to.have.text("CURRENT STATUS: ERROR");
        });
  
        cy.get("#input-status").clear();
      });
    });
  });