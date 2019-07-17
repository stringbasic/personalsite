describe('Homepage check', function() {
  it('Does open', function() {
    cy.visit('http://localhost:8080')
    cy.get('p:first').should('contain', 'StringBasic website is currently under construction.')
  })
})
