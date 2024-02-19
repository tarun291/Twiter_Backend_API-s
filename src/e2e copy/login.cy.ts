describe('Sign In', () => {
    beforeEach(() => {
        cy.visit('',{headers:{"Accept-Encoding":"gzip,deflate"}}).get('.close-icon').click({ force: true });
        cy.contains('Sign In').click({force:true})
      });
    it('Signin with valid credentials', () => {
        cy.get("input[placeholder='Enter your email address']").type('rafiw73420@lanxi8.com')
        cy.get("input[placeholder='***************']").type('@Kumar321')
        cy.get("button[type='button']").click({force:true})
        cy.wait(5000)
        cy.url({timeout:5000}).should('eq', 'https://dev.practiceplan.io/dashboard')
    });
    it('Signin with invalid credentials (password)', () => {
        cy.get("input[placeholder='Enter your email address']").type("rafiw73420@lanxi8.com")
        cy.get("input[placeholder='***************']").type("@Kumar31")
        cy.get("button[type='button']").click({force:true})
        cy.get('.MuiAlert-message.css-1xsto0d',{timeout:5000}).should('have.text', 'Incorrect username or password.');
    })
    it('signin with invalid credentials (email)', () => {
        cy.get("input[placeholder='Enter your email address']").type("rfiw73420@lanxi8.com")
        cy.get("input[placeholder='***************']").type("@Kumar31")
        cy.get("button[type='button']").click({force:true})
        cy.get('.MuiAlert-message.css-1xsto0d',{timeout:5000}).should('have.text', 'User does not exist.');
    })
});



