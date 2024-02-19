describe('Sign In as facility with valid credentials', () => {
    it('signin', () => {
        cy.visit('https://dev.practiceplan.io/landing');
        cy.get('.close-icon').click()
        cy.contains('Sign In').click()

        cy.get("input[placeholder='Enter your email address']").type("196301101@gkv.ac.in")
        cy.get("input[placeholder='***************']").type("@Kumar321")
        cy.get("button[type='button']").click({ multiple: true, force: true })
        cy.wait(3000)
        // cy.get('.MuiAlert-message.css-1xsto0d').should('have.text', 'Login Successful');
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > button:nth-child(4)").click()
        cy.get("input[placeholder='Drive Nation']").type("Etah")
        cy.get("#google-map-demo").type("Etah")
        cy.wait(1000)
        cy.get("#google-map-demo > goole-map-demo-option-listbox").click()
        cy.get("input[placeholder='Enter phone number']").type("9758596542")
        cy.get("textarea[placeholder='Add a description to help you potential customers learn more about your location.']").type("Test")
        cy.get("textarea[placeholder='Add information that would be helpful for your customers.']").type("Test")
    })
});

