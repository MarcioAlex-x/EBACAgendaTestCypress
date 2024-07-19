/// <reference types="cypress" />

describe('Teste da página de Agenda de contatos EBAC',()=>{
    beforeEach(()=>{
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it('Cadastrar um usuário',()=>{
        cy.get('input[type="text"]').type('Nome Teste')
        cy.get('[type="email"]').type('teste@email.com')
        cy.get('[type="tel"]').type('987654321')
        cy.get('.adicionar').click()
        cy.get(':nth-child(4) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)').should('contain.text','Nome Teste')
    })

    it('Deletar um usuário',()=>{
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()
    })
    it('Salvar uma atualizacao de um contato',()=>{
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('input[type="text"]').clear()
        cy.get('input[type="text"]').type('Nome Teste 2')
        cy.get('[type="email"]').clear('')
        cy.get('[type="email"]').type('novoemail@email.com')
        cy.get('[type="tel"]').clear()
        cy.get('[type="tel"]').type('222222222')
        cy.get('.alterar').click()
    })
    it('Cancelar uma atualizacao de um contato',()=>{
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('input[type="text"]').clear()
        cy.get('input[type="text"]').type('Nome Teste 2')
        cy.get('[type="email"]').clear('')
        cy.get('[type="email"]').type('novoemail@email.com')
        cy.get('[type="tel"]').clear()
        cy.get('[type="tel"]').type('222222222')
        cy.get('.cancelar').click()
    })
})
