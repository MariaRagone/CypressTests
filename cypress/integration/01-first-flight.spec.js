/* <reference types="cypress" />
/* eslint-env mocha, cypress */

const { before } = require('lodash');

describe('Create a New Item', () => {
  beforeEach(() => {
    cy.visit('/jetsetter');
  });

  it('should have a form', () => {
    cy.get('form').should('exist');
  });

  it('should have the words "Add Item"', () => {
    cy.contains('Add Item').should('exist');
  });

  it('should type in an input field', () => {
    cy.get('[data-test="new-item-input"]').type('T-shirt');
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('UserFlow', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-test="new-item-input"]').clear();
    cy.get('[data-test="new-item-input"]').type('Phone');
    cy.get('[data-test="add-item"]').click();
    cy.get('[data-test="filter-items"]').clear();
    cy.get('[data-test="filter-items"]').type('phone');
    cy.get('#item-6').check();
    cy.get('#item-6').uncheck();
    cy.get('[data-test="mark-all-as-unpacked"]').click();
    cy.get('[data-test="remove-all"]').click();
    /* ==== End Cypress Studio ==== */
  });
});
