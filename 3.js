//3
describe( 'Tests the functionality of HVD Adjustments', () => {
    const curntTime = new Date(); 
    before( () => {
      cy.loginNew( 'DashboardOpsAdjustments' );
    })
    beforeEach( () => {
      cy.session( 'DashboardOpsAdjustments' ); //Expected 2-3 arguments, but got 1. 
      cy.fixture( 'Dashboard/HVD/adjustments' ).then( ( adjustments ) => {
        const op = adjustments.hourly0ps[ 0 ]; 
        const bid = op.bids[ 0 ]; 
        op.opDate = set( currentTime, { hours: 0, minutes: 0, seconds: 0 ); 
        op.dateColumns[ 0 ] = format( parseISO( currentTime.toISOString() ), 'YYYY-MM-dd' ); 
        bid.currentTime = set( currentTime, { hours: 1, minutes: 45 ); 
        bid.endTime = set( currentTime, { hours: 9, minutes: 0, seconds: 0 ); 
        bid.startTime = op.opDate; 
        bid.day = op.datecolumns[ 0 ]; 
        cy.yisit( '/company/dashboardNiew.ops-adjustments' ).then( () => {
          cy.intercept( 'POST',
            'dashboardv2/adjust/165/get-adjustments',
            adjustments 
          ).as( 'OpsAdjustments' ); 
        } ); 
      } ); 
    cy.wait( '@OpsAdjustments' ); 
    }); 
  })