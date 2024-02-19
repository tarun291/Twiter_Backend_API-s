describe('Signup', () => {
    beforeEach(() => {
        cy.visit('',{headers:{"Accept-Encoding":"gzip,deflate"}},).get('.close-icon').click({ force: true });
        cy.contains('Sign Up').click({force:true});
        const random = `cy${Math.random().toString().slice(2, 8)}`
        cy.wrap(random).as('username')
        cy.wrap(`${random}@mailinator.com`).as('email')
      });
    it('Signup as Facility', function() {
        cy.contains('Signup as Facility').click({force:true})
        cy.get("input[placeholder='Enter your full name']").type(this.username)
        cy.get("input[placeholder='Enter your email address']").type(this.email)
        cy.get("input[placeholder='Enter the name of your organization, business, or entity ']").type("Test Organisation")
        cy.get("#outlined-select-gender").type("Municipality")
        cy.get("li:nth-child(6)").click({force:true})
        cy.get("input[placeholder='***************'][name='password']").type("@Kumar321")
        cy.get("input[placeholder='***************'][name='confirmPassword']").type("@Kumar321")
        cy.get("input[type='checkbox']").click({force:true})
        cy.contains('Join PracticePlan').click({force:true})
        cy.get('.MuiAlert-message.css-1xsto0d',{timeout:7000}).should('have.text', 'Verification Code sent!');
    });
    it('Signup as Participant', function()  {
        cy.contains('Signup as Participant').click({force:true})
        cy.get("input[placeholder='Enter your full name']").type(this.username)
        cy.get("input[placeholder='Enter your email address']").type(this.email)
        cy.get("input[placeholder='***************'][name='password']").type("@Kumar321")
        cy.get("input[placeholder='***************'][name='confirmPassword']").type("@Kumar321")
        cy.get("input[type='checkbox']").click({force:true})
        cy.contains('Join PracticePlan').click({force:true})
        cy.get('.MuiAlert-message.css-1xsto0d',{timeout:7000}).should('have.text', 'Verification Code sent!');
    });
});



