import { get_account, set_endpoint, set_quiet } from '@completium/experiment-ts'

// const assert = require('assert');

/* Contracts */

import { helloworld } from './binding/helloworld';

/* Accounts ----------------------------------------------------------------- */

const alice = get_account('alice');
// const bob = get_account('bob');
// const carl = get_account('carl');

/* Endpoint ---------------------------------------------------------------- */

// set_mockup()
set_endpoint("http://localhost:20000");

/* Verbose mode ------------------------------------------------------------ */

set_quiet(false);

/* Now --------------------------------------------------------------------- */

// const now = new Date(Date.now())
// set_mockup_now(now)

/* Constants & Utils ------------------------------------------------------- */

const aliceAddr = alice.get_address();

/* Scenarios --------------------------------------------------------------- */

describe('[HelloWorld] Contract deployment', async () => {
  it('HelloWorld contract deployment should succeed', async () => {
    await helloworld.deploy({})
  });
});
