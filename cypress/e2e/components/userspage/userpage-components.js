class UsersPage {

    getUserName(name) {
      return cy.contains('td:nth-child(2)', name); 
    }
  }
  
  export default UsersPage;