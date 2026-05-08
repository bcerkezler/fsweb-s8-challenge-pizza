describe("Pizza App", () => {
  it("Home page opens", () => {
    cy.visit("http://localhost:5173");

    cy.contains("KOD ACIKTIRIR");
  });

  it("Navigates to order page", () => {
    cy.visit("http://localhost:5173");

    cy.contains("ACIKTIM").click();

    cy.url().should("include", "/order");
  });

  it("Submit button initially disabled", () => {
    cy.visit("http://localhost:5173/order");

    cy.contains("SİPARİŞ VER").should("be.disabled");
  });

  it("Form can be filled and submitted", () => {
    cy.visit("http://localhost:5173/order");

    cy.get('input[name="name"]').type("Berk");

    cy.get('input[value="M"]').check({ force: true });

    cy.get('select[name="dough"]').select("İnce");

    cy.contains("Pepperoni").click();
    cy.contains("Sosis").click();
    cy.contains("Mısır").click();
    cy.contains("Sucuk").click();

    cy.contains("SİPARİŞ VER").should("not.be.disabled");

    cy.contains("SİPARİŞ VER").click();

    cy.url().should("include", "/success");
  });
});
