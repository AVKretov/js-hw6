describe("Tests from lection", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Correct page", () => {
    cy.contains("Books list").should("be.visible");
  });

  it("Happy path (validation)", () => {
    cy.login("bropet@mail.ru", "123");
    cy.contains("bropet@mail.ru").should("be.visible");
  });

  it("Unhappy path (validation)", () => {
    cy.login("pet@mail.ru", "333");
    cy.contains("Неправильная почта или пароль").should("be.visible");
  });
});

describe("Three functional tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.login("bropet@mail.ru", "123");
  });

  it("Adding book", () => {
    cy.contains("Add new").click();
    cy.get(".modal-title").should("be.visible");
    cy.get("#title").type("1984");
    cy.get("#description").type("Роман-антиутопия с элементами сатиры");
    cy.get("#authors").type("Джордж Оруэлл");
    cy.contains("Submit").click();
    cy.contains("1984").should("be.visible");
  });

  it("Log out", () => {
    cy.contains("Log out").click();
    cy.contains("Add new").should("not.exist");
  });

  it("Favorites", () => {
    cy.contains("Add to favorite").click();
    cy.contains("Favorites").click();
    cy.contains("1984").should("be.visible");
  });
});
