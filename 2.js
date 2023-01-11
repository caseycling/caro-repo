// 2: Use of before each
describe( 'Dashboard Ops', () => {
    beforeEach( () => { 
      cy.loginNew( 'DashboardOps' ); 
      cy.visit( '/company/dashboard' ); 
    } ); 
  
    describe( 'Contains Dashboard and High Volume Dashboard routes', () => {
      it( 'Clicking Dashboard should redirect to Summary sub-route', () => {
        if ( !isMobile ) {
          cy.get( 'gDashboard' )
            .contains( 'Dashboard' )
            .click(); 
          //Redirects
          cy.url().should( 'include', '/company/dashboard?view=ops-summary' );
        }
      } ); 
    } ); 
    
    describe( 'High Volume Dashboard Routes', () => {
      it( 'Clicking sub-routes should include their appropriate urls', () => {
        cy.get( '[data-cy.tab-button-summary]' ) 
          .click(); 
        cy.url().should( 'include', '/company/dashboard?view=ops-summary' );
        
        cy.get( '[data-cy=tab-button-ops]' ) 
          .click(); 
        cy.url().should( 'include', '/company/dashboard?view=ops-details' ); 
        
        cy.get( '[data-cy.tab-button-adjustments]' ) 
        .click(); 
        cy.url().should( 'include', '/company/dashboard?view.ops-adjustments' );
      })
    })
  })