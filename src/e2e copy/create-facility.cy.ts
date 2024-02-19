import 'cypress-file-upload';
describe('', () => {
    before(() => {
      cy.visit('',{headers:{"Accept-Encoding":"gzip,deflate"}},).get('.close-icon').click({ force: true });
          cy.contains('Sign In').click({force: true })
      });
    it('create facility', function()  {
        cy.get("input[placeholder='Enter your email address']").type("196301101@gkv.ac.in")
        cy.get("input[placeholder='***************']").type("@Kumar321")
        cy.get("button[type='button']").click({force: true })
        cy.wait(10000)
        cy.url().should('eq', 'https://dev.practiceplan.io/dashboard')
        cy.wait(6000)
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > button:nth-child(4)").click()
        // phase 1
        cy.get("input[placeholder='Drive Nation']").type("Dehradun")
        cy.get('#google-map-demo').type('Dehradun');
        cy.get('#google-map-demo-option-1').should('exist');
        cy.get('#google-map-demo-option-1').click({force:true});
        cy.wait(2000)
        cy.get("input[placeholder='Enter phone number']").type("9758596542")
        cy.get("textarea[placeholder='Add a description to help you potential customers learn more about your location.']").type("Test")
        cy.get("textarea[placeholder='Add information that would be helpful for your customers.']").type("Test")
        cy.get(".MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.btn-text.css-65fqml").attachFile("markus-spiske-KWQ2kQtxiKE-unsplash.jpg",{subjectType:'drag-n-drop'})
        cy.get(".MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.css-f1t4u1").click()
        cy.wait(11000)
        // // Phase 2
        cy.get("input[name='amount']").type("5")
        cy.get("textarea[placeholder='Add your location cancellation policy.']").type("Location policy")
        cy.get("textarea[placeholder='Add your location weather policy.']").type("Weather policy")
        cy.get(".MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.css-f1t4u1").click({force:true})
        cy.wait(6000)
        // Phase 3
        cy.get("input[placeholder='Abernathy Memorial Gymnasium']").type(`_${new Date().toJSON().slice(0,19)}`)
        cy.log(`_${this.facilityname}_${new Date().toJSON().slice(0,19)}`)
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)").type("Indoor")
        cy.get(".MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters.MuiMenuItem-root.MuiMenuItem-gutters.css-rq2xd0[tabindex='-1']").click({force:true})  
        cy.get('#demo-multiple-checkbox').click({force:true});
        cy.get('body > div:nth-child(3) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > span:nth-child(1) > input:nth-child(1)').check()
        cy.get('body').type('{esc}');
        cy.get("input[placeholder='20000']").type("2000")
        cy.get("input[placeholder='Add a size description']").type("Test Description")
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(9) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)").click({force:true})
        cy.get("body > div:nth-child(3) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(2) > span:nth-child(1) > input:nth-child(1)").check()
        cy.get('body').type('{esc}');
        cy.get("input[value='5']").type("8")
        cy.get("textarea[placeholder='Add your asset cancellation policy.']").type("Test policy")
        cy.get("textarea[placeholder='Add your asset weather policy.']").type("Test Policy")
        cy.get(".MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.css-f1t4u1").click({force:true})  
        cy.wait(6000)
        // // Phase 5
        cy.get("#outlined-select-gender").type("2 Hours 30 min")
        cy.get("div[id='menu-minimumTime'] li:nth-child(5)").click({force:true})
     
        
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2)").click();
        cy.get("div:nth-child(5) button:nth-child(6)").click({force:true})
        cy.get("body > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > button:nth-child(2)").click({force:true});
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(6) > div:nth-child(2)').click();
        cy.get(".MuiButtonBase-root.MuiPickersDay-root.Mui-selected.MuiPickersDay-dayWithMargin.css-147oo4w").click();
        cy.get('button.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium')
          .contains('OK')
          .click({force:true});
        cy.get("input[value='true']").click()
        cy.get("input[placeholder='i.e. 25 people']").type("20")
        cy.get(".MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.css-f1t4u1").click({force:true})
        cy.wait(2000)
        //  // Phase 6
        cy.get("input[value='false']").click()
        cy.get("input[placeholder='$0.00']").type("10")
        cy.get(".MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.css-f1t4u1").click({force:true})
        cy.wait(3000)
        // phase 7
        cy.get(".MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.css-f1t4u1").click({force:true})
        cy.wait(6000)
        // phase 8
        cy.get(".MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.btn-text.css-65fqml").attachFile("markus-spiske-KWQ2kQtxiKE-unsplash.jpg",{subjectType:'drag-n-drop'})
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(6) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)").click({force:true})
        cy.get("li[role='option']").click({force:true})
        cy.get(".MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.css-f1t4u1").click({force:true})
        cy.wait(13000)
        // phase 9
        cy.get("input[value='true']").click({force:true})
        cy.get("button[class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium css-f1t4u1'] div[class='MuiBox-root css-70qvj9']").click({force:true})
        cy.get(".MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.css-7fa80y").click({force:true})
        cy.wait(7000)
        // close
        cy.get(".MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.css-vmc5fo").click({force:true})
    })
});

