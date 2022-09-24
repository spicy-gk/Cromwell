///<reference types='cypress'/>

describe('Category Page',()=>{
      beforeEach(() =>{
         
         cy.visit('https://www.cromwell.co.uk/shop/abrasives/cutting/c/090901')
         
         })

       it('1.Should display ten products', () =>{
            cy.wait(2000)
            // vadiate 10 products 
           cy.get('.jss233').its('length').should('eq',10)
        
      })
    
      it('2.Should changes "Rows per page:" to 25', () =>{
        
        cy.get('[data-testid=paginationRowsPerPageMenu]').first().click()
        cy.get('[data-value="25"]').click()
        cy.wait(5000)
        //validate 25 products
        cy.get('.MuiGrid-container .jss233').its('length').should('eq',25)
   
         })

      it('3.Should display "Out of stock Products"', () =>{
            
         cy.get('[data-testid=paginationRowsPerPageMenu]').first().click() // click on first element
         cy.get('[data-value="25"]').click()
         cy.wait(5000)
         cy.get('.MuiGrid-container .jss233').its('length').should('eq',25)
         cy.get('.MuiIconButton-label  [aria-labelledby="checkbox-label-stockStatus-Show Out of Stock"]').check()
         cy.wait(5000)
         cy.get('.jss266').its('length').should('be.greaterThan',0)
 
         })

      it('4.User should  selects "Sort By:" - "Price Low to High"', ()=>{

         cy.get('[data-testid=menuSortBy]').click()
         cy.get('[data-value="price-asc"]').click()
         cy.wait(5000)
         // validate 10 Product
         cy.get('.jss233').its('length').should('eq',10)

         })
})