describe('Homepage check', function() {
  it('Does open', function() {
    cy.visit('/')
    cy.get('p:first').should('contain', 'StringBasic website is currently under construction.')
  })
})
