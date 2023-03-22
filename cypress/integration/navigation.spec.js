//Cypress test for navigation
describe("Navigation", () => {
  it("should visit root", () => {
    cy.visit("/");
  });
  //Test to navigate to Tuesday
  it("should navigate to Tuesday", () => {
    cy.contains("[data-testid=day]", "Tuesday")
      .click()
      .should("have.class", "day-list__item--selected");
  });
});
