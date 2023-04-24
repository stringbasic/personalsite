describe('Homepage check', function() {
  it('Does open', function() {
    cy.visit('/')
    cy.get('p:first').should('contain', 'StringBasic website is currently under construction.')
  });
  it("Check build time to be less or equal than now", () => {
    cy.visit('/')
    cy.get('b:first').invoke('text').then(actualDateText => {
      const dayjs = require('dayjs');
      const todaysDate = new Date();
      const actualDate = dayjs(actualDateText, 'YYYY-MM-DD HH:mm:ss').toDate();

      expect(actualDate).to.be.lte(todaysDate);
    });
  });
})
