describe('register', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/register');
      });
    it('register test', () => {
      cy.get('[data-test="registerUsername"]').should('be.visible').wait(1000).type('Jenniferr')
      cy.get('[data-test="registerFirstName"]').should('be.visible').type('Jennyy')
      cy.get('[data-test="registerLastName"]').should('be.visible').type('Penny')
      cy.get('[data-test="registerEmail"]').should('be.visible').type('jennypennyy@mail.com')
      cy.get('[data-test="registerPassword"]').should('be.visible').type('aA?123456')
      cy.get('[data-test="registerImage"]').should('be.visible').type('https://cdn.pixabay.com/photo/2024/07/05/08/33/koala-8874351_640.jpg')
    //   cy.get('[data-test="registerBiography"]').find('.ql-editor').within(() => {
    //     cy.get('p') 
    //       .should('exist').type('Who cares?');
    //   });
    //   cy.get('[data-test="registerBiography"]').then(($el) => {
    //     const editor = $el[0].querySelector('.ql-editor');
    //     cy.wrap(editor).type('Who cares?');
    //   });
    cy.typeInQuill('[data-test="quillEditor"]', 'Hi, I am Jenny and I am a Fullstack Developer!');
    cy.get('[data-test="quillEditor"] .ql-editor')
      .should('contain', 'Hi, I am Jenny and I am a Fullstack Developer!');
      cy.get('[data-test="loginRegisterButton"]').should('be.visible').click({ force: true })
      cy.url().should('include', '/')
    })
  })












// data-test="registerUsername"