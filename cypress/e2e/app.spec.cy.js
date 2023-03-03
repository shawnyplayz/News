describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
  })
})
describe('Click on OK button', () => {
  it('passes', () => {
    cy.get('*[class^="swal-button"]').get('*[class^="swal-button swal-button--confirm"]').click('bottomRight')
  })
})

describe('Enter the User Name', () => {
  it('passes', () => {
    cy.get('[data-testid="userName"]').type('admin')
  })
})


describe('Enter the Passowrd', () => {
  it('passes', () => {
    cy.get('[data-testid="pass"]').type('admin')
  })
})

describe('Click on Login button', () => {
  it('passes', () => {
    cy.get('*[class^="swal-button"]').get('*[class^="swal-button swal-button--confirm"]').click('bottom')
  })
})
