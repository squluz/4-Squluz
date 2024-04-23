import HomePage from '../components/homepage/HomePage-components';
import RegistroPage from '../components/registro/registro-components';
import LoginPage from '../components/login/login-components';
import ContactsPage from '../components/contactpage1/contactpage1-components';
import UsersPage from '../components/userspage/userpage-components.js'

describe('Login y mock de endpoint con POM', () => {
    it('debe permitir el login y mockear la lista de contactos', () => {
        const homePage = new HomePage();
        const registroPage = new RegistroPage
        const loginPage = new LoginPage();
        const contactsPage = new ContactsPage();
        const usersPage = new UsersPage();

        contactsPage.mockContacts();

        homePage.navigate();
        homePage.clickSignup();

        registroPage.fillFormAndSubmit();

        loginPage.navigate()
        loginPage.fillFormAndSubmit('luzsq@ymail.com', '12345567');

        cy.wait('@getContacts');

        const namesToCheck = ['Lola', 'Escobar', 'David', 'sasha', 'chris'];

        namesToCheck.forEach((name) => {
            usersPage.getUserName(name).should('exist');
        });
    });
});