// 1: Custom login command
Cypress.Commands.add('loginNew', ( name ) => {
  cy.session( [ name ], () => {
    cy.request( {
      method: 'POST',
      url: Cypress.env( 'be_url' ) + '/users/login', 
      body: {
        email: Cypress.env( 'email' ), 
        password: Cypress. env( 'password' ),
        userType: 'business', 
        isQuickflusinessSelect: true
      },
      headers: {
        'Authorization': ']Wt ' + Cypress.env( 'be key' )
      }
    } ).then( ( response ) => {
        expect( response.status ).to.eq( 200 ); 
    } ); 
  }, {
      cacheAcrossSpecs: true 
  } ); 
  cy.intercept( /\.*newrelic.*$/, ( req ) => { 
    console.log( 'NEW RELIC INTERCEPTED' ); 
    req.reply( 'console.log(\'Eake New Relic script loaded\');' );
  } ); 
} ); 
