describe('Fierst example test', ()=>{


    beforeEach(() => {
        cy.log('I run before every test in every spec file!!!!!!')
      })

  it ('Visit page', ()=>{
      cy.visit('https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests')
      cy.wait(5000)
  })

  it ('Get element', ()=>{ 

    cy.get('#__nuxt > div > div > div > main > div.main-content-article-wrapper > article > div > div:nth-child(48) > p > strong')
    .should('be.visible')
  })


    })