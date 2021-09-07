describe('My First Test', () => {
  it('Visits the cv project page', () => {
    cy.visit('/')
    cy.get('[routerlink="cv"]').click()
    cy.get('[data-test=liste]').contains('Liste des cv')
    for (let index = 1; index < 3; index++) {
      cy.get(':nth-child('+ index +') > .list-group-item')
      .invoke('text')
      .then((text1) => {
        // do more work here
        let name = text1.split(':')[0]
        // click on item show detail
        cy.get(':nth-child('+ index +') > .list-group-item').click()

        // test in the name of clicked item is in the detail
        cy.get('[data-test=detail]').find('.main').invoke('text').should('contain', name.trim())
      })
    }
  })
})
