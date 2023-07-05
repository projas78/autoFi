describe('Website Interaction', () => {
    beforeEach(() => {
      // Intercepta las solicitudes no deseadas y anula su respuesta
      cy.intercept('POST', 'https://pbs.nextmillmedia.com/openrtb2/auction**').as('unwantedPostRequest');
      cy.intercept('GET', 'https://apex.go.sonobi.com/trinity.json**').as('unwantedGetRequest');
  
      // Visita el sitio web
      cy.visit('https://www.tutorialspoint.com/html/html_iframes.htm');
      cy.on('uncaught:exception', (err, runnable) => {
        // Ignorar el error "TypeError: Cannot read properties of null (reading 'dataset')"
        return false;
      });
    });
  
    it('1. Interact with "About us" link and navigate to new page', () => {
      cy.get('#banner-accept').click();
      
      cy.get('.col-lg-12 > .nav > :nth-child(1) > .nav-link')
        .scrollIntoView()
        .should('exist')
        .click({ force: true });
    
      cy.url().then((url) => {
        console.log('New page URL:', url);
        cy.writeFile('output.txt', `New page URL: ${url}\n`, { flag: 'a+' });
      });
    });
  
    it('2. Get list of all URLs on the page', () => {
      // Obtiene todos los enlaces de la página
      cy.get('a').each(($link) => {
        const href = $link.prop('href');
        // Muestra el URL en la consola
        console.log('URL:', href);
        // Agrega el URL al archivo de salida
        cy.writeFile('output.txt', `URL: ${href}\n`, { flag: 'a+' });
      });
    });
  
    it('3. Get list of all buttons on the page', () => {
      // Obtiene todos los botones de la página
      cy.get('button').each(($button) => {
        const buttonText = $button.text();
        // Muestra el texto del botón en la consola
        console.log('Button:', buttonText);
        // Agrega el texto del botón al archivo de salida
        cy.writeFile('output.txt', `Button: ${buttonText}\n`, { flag: 'a+' });
      });
    });
  
    it('4. Get list of all text input fields on the page', () => {
      // Espera a que los campos de entrada estén presentes y visibles
      cy.get('#search-strings').should('be.visible').each(($input) => {
        const inputName = $input.attr('name');
        // Muestra el nombre del campo en la consola
        console.log('Text input field:', inputName);
        // Agrega el nombre del campo al archivo de salida
        cy.writeFile('output.txt', `Text input field: ${inputName}\n`, { flag: 'a+' });
      });
    });

    it.only('4. Get list of all text input fields on the page', () => {
      cy.get('input[type="text"]').each(($input) => {
        const inputName = $input.attr('name');
        console.log('Text input field:', inputName);
        cy.writeFile('output.txt', `Text input field: ${inputName}\n`, { flag: 'a+' });
      });
    });
  
    it('5. Create an account and log into the site', () => {
      cy.wait(2000)
      cy.get('.d-lg-inline-block').click();
      cy.get('b').click();
      
      // Completa los campos de registro con información válida
      cy.get('#textRegName').type('Pablo Rojas');
      cy.get('#phone').type('12345678');
      cy.get('#textSRegEmail').type('pablo@example.com');
      cy.get('#user_password').type('secretpassword');
  /* 
      // Haz clic en el botón de registro
      cy.get('button[type="submit"]').click();
  
      // Espera a que la página se cargue después de iniciar sesión
      cy.url().should('include', 'dashboard');
  
      // Obtén la URL después de iniciar sesión
      cy.url().then((url) => {
        // Muestra la URL en la consola
        console.log('Logged in URL:', url);
  
        // Agrega la URL al archivo de salida
        cy.writeFile('output.txt', `Logged in URL: ${url}\n`, { flag: 'a+' });
      }); */
    });
  });