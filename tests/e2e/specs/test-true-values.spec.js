// https://docs.cypress.io/api/introduction/api.html

describe("test-true-values", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  const trueTestValues = ["1"];
//, "true", "yes"
  trueTestValues.forEach(element => {
    it(`test input: ${element}`, () => {
      cy.percySnapshot();
      cy.get("#input-status")
        .type(element)
        .should("have.value", element);

      cy.percySnapshot();

      cy.get("#btn-submit").click();

      // cy.server();
      // cy.route({
      //   method: 'POST',      // Route all GET requests
      //   url: 'http://localhost:8080/api/test',
      //   body:{test:'TRUE'},    // that have a URL that matches '/users/*'
      // }).then(data =>{
      //   console.log("data from response" ,data.body);
      // });
      cy.get("#status-display").should($h2 => {
        expect($h2).to.have.length(1);
        expect($h2).to.have.text("CURRENT STATUS: true");
      });

      cy.get("#input-status").clear();
    });
  });
});
