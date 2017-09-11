const cli = require( 'contentful-extension-cli' );
const inquirer = require( 'inquirer' );
const { readFileSync } = require( 'fs' );
const { version, config } = require( './package.json' );

async function init() {
  try {
    // const options = await inquirer.prompt( config.questions );
    const client = cli.createClient ( {
      spaceId     : '0pnbjplyokup',
      accessToken : 'CFPAT-fee352c01532d2f3f3092fb11e3c79c01515bd1dbc858c40a81b666f7f903ede'
    } );

    const savedExtension = await client.save( {
      id: config.id,
      name: config.name,
      fieldTypes: config.fieldTypes,
      srcdoc: readFileSync( './index.html', { encoding: 'utf8' } ),
      version: 11
    } )

    console.dir( savedExtension, 6 );
  } catch( error ) {
    console.error( error );
    process.exit( 1 );
  }
}

init();


