describe('Website Interaction', () => {
    beforeEach(() => {
      cy.intercept('POST', 'https://pbs.nextmillmedia.com/openrtb2/auction**').as('unwantedPostRequest');
      cy.intercept('GET', 'https://apex.go.sonobi.com/trinity.json**').as('unwantedGetRequest');
  
      cy.visit('https://www.tutorialspoint.com/html/html_iframes.htm');
      cy.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('1. Interact with "About us" link and navigate to new page', () => {
      cy.get('#banner-accept').click();
      
      cy.get('.fw-bold')
        .scrollIntoView()
        .should('exist')
        .click({ force: true });
    
      cy.url().then((url) => {
        console.log('New page URL:', url);
        cy.writeFile('output.txt', `New page URL: ${url}\n`, { flag: 'a+' });
      });
    });
  
    it('2. Get list of all URLs on the page', () => {
      cy.get('a').each(($link) => {
        const href = $link.prop('href');
        console.log('URL:', href);
        cy.writeFile('output.txt', `URL: ${href}\n`, { flag: 'a+' });
      });
    });
  
    it('3. Get list of all buttons on the page', () => {
      cy.get('button').each(($button) => {
        const buttonText = $button.text();
        console.log('Button:', buttonText);
        cy.writeFile('output.txt', `Button: ${buttonText}\n`, { flag: 'a+' });
      });
    });

    it('4. Get list of all text input fields on the page', () => {
      cy.get('input').each(($input) => {
        const inputName = $input.attr('name');
        console.log('Text input field:', inputName);
        cy.writeFile('output.txt', `Text input field: ${inputName}\n`, { flag: 'a+' });
      });
    });
  
    it('5. Create an account and log into the site', () => {
      cy.wait(2000)
      cy.get('.d-lg-inline-block').click();
      cy.get('b').click();
      cy.get('#textRegName').type('Pablo Rojas');
      cy.get('#phone').type('12345678');
      cy.get('#textSRegEmail').type('pablo@example.com');
      cy.get('#user_password').type('secretpassword');
    });
  });