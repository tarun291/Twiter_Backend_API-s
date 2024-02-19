describe('Sign In as participant with valid credentials', () => {
    it('signin', () => {
        cy.visit('https://dev.practiceplan.io/landing')
        cy.get('.close-icon').click({force:true})
        cy.contains('Sign In').click({force:true})
        cy.get("input[placeholder='Enter your email address']").type('rafiw73420@lanxi8.com')
        cy.get("input[placeholder='***************']").type('@Kumar321')
        cy.get("button[type='button']").click({force:true})
        cy.wait(3000)
        cy.url().should('eq', 'https://dev.practiceplan.io/dashboard')
    });
});


describe('Sign In as facility with valid credentials', () => {
    it('signin', () => {
        cy.visit('https://dev.practiceplan.io/landing');
        cy.get('.close-icon').click({force:true})
        cy.contains('Sign In').click({force:true})
        cy.get("input[placeholder='Enter your email address']").type("5d14f66576f7c1@crankymonkey.info")
        cy.get("input[placeholder='***************']").type("@Kumar321")
        cy.get("button[type='button']").click({force:true})
        cy.wait(3000)
        cy.url().should('eq', 'https://dev.practiceplan.io/dashboard')
    })
});


describe('Sign In as Participant with invalid credentials (password)', () => {
    it('signin', () => {
        cy.visit('https://dev.practiceplan.io/landing');
        cy.get('.close-icon').click({force:true})
        cy.contains('Sign In').click({force:true})
        cy.get("input[placeholder='Enter your email address']").type("rafiw73420@lanxi8.com")
        cy.get("input[placeholder='***************']").type("@Kumar31")
        cy.get("button[type='button']").click({force:true})
        cy.get('.MuiAlert-message.css-1xsto0d').should('have.text', 'Incorrect username or password.');
    })
})


describe('Sign In as facility with invalid credentials (password)', () => {
    it('signin', () => {
        cy.visit('https://dev.practiceplan.io/landing');
        cy.get('.close-icon').click({force:true})
        cy.contains('Sign In').click({force:true})
        cy.get("input[placeholder='Enter your email address']").type("5d14f66576f7c1@crankymonkey.info")
        cy.get("input[placeholder='***************']").type("@Kumar21")
        cy.get("button[type='button']").click({force:true})
        cy.get('.MuiAlert-message.css-1xsto0d').should('have.text', 'Incorrect username or password.');
    })
});


describe('Sign In as Participant with invalid credentials (email)', () => {
    it('signin', () => {
        cy.visit('https://dev.practiceplan.io/landing');
        cy.get('.close-icon').click({force:true})
        cy.contains('Sign In').click({force:true})
        cy.get("input[placeholder='Enter your email address']").type("rfiw73420@lanxi8.com")
        cy.get("input[placeholder='***************']").type("@Kumar31")
        cy.get("button[type='button']").click({force:true})
        cy.get('.MuiAlert-message.css-1xsto0d').should('have.text', 'User does not exist.');
    })
});


describe('Sign In as facility with invalid credentials (email)', () => {
    it('signin', () => {
        cy.visit('https://dev.practiceplan.io/landing');
        cy.get('.close-icon').click({force:true})
        cy.contains('Sign In').click({force:true})
        cy.get("input[placeholder='Enter your email address']").type("d14f66576f7c1@crankymonkey.info")
        cy.get("input[placeholder='***************']").type("Kumar31")
        cy.get("button[type='button']").click({force:true})
        cy.get('.MuiAlert-message.css-1xsto0d').should('have.text', 'User does not exist.');
    })
});



