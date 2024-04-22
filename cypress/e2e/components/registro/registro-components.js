import { faker } from "@faker-js/faker";
class RegistroPage {

constructor (){
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email();
  const password = faker.internet.password();

  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.password = password;

}
  fillFormAndSubmit() {
    cy.get('#firstName').type(this.firstName);
    cy.get('#lastName').type(this.lastName);
    cy.get('#email').type(this.email);
    cy.get('#password').type(this.password);
    cy.get('#submit').click();
  }
  addUsers() {
    cy.get('#add-contact').click()
  
  }
  clicklogout() {
    cy.get('#logout').click();
  }
}

export default RegistroPage;