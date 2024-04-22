class ContactsPage {
    constructor() {
        this.endpoint = '/contacts';
    }

    mockContacts() {
        cy.intercept('GET', this.endpoint, {
            statusCode: 200,
            body: [
                {
                    "firstName": "Lola",
                    "lastName": "Silvera",
                    "birthdate": "2019-03-07",
                    "email": "test1@gmail.com",
                    "phone": "11111111111",
                    "street1": "Salta 123",
                    "city": "Michoacan",
                    "stateProvince": "Morelos",
                    "postalCode": "6050",
                    "country": "Mexico"
                },
                {
                    "firstName": "Escobar",
                    "lastName": "Pablo",
                    "birthdate": "2001-08-01",
                    "email": "test2@gmail.com",
                    "phone": "22222222222",
                    "street1": "Tucumano 8",
                    "city": "Monterrey",
                    "stateProvince": "Chiapas",
                    "postalCode": "5698",
                    "country": "Guatemala"
                },
                {
                    "firstName": "David",
                    "lastName": "MuMain",
                    "birthdate": "2016-07-12",
                    "email": "test3k@gmail.com",
                    "phone": "333333333",
                    "street1": "Las condes",
                    "city": "Baja",
                    "stateProvince": "California",
                    "postalCode": "4356",
                    "country": "Lituania"
                },
                {
                    "firstName": "sasha",
                    "lastName": "grey",
                    "birthdate": "2017-07-12",
                    "email": "test4@tgmail.com",
                    "phone": "444444444",
                    "street1": "Mocoreta",
                    "city": "Baja",
                    "stateProvince": "California",
                    "postalCode": "4356",
                    "country": "Africa"
                },
                {
                    "firstName": "chris",
                    "lastName": "grey",
                    "birthdate": "2015-07-12",
                    "email": "test5@spacgmailex.com",
                    "phone": "55555555",
                    "street1": "Banfield",
                    "city": "Baja",
                    "stateProvince": "California",
                    "postalCode": "4356",
                    "country": "Australia"
                }
            ],

        }).as('getContacts');
    }
}

export default ContactsPage;