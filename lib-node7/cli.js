'use strict';

var _index = require('./index');

const cmd = process.argv[2];

if (cmd === 'build') {
  (0, _index.build)();
} else if (cmd === 'start' || !cmd) {
  (0, _index.watchAndRunDevServer)({}, { port: Number(process.env.PORT) || 8080, https: false });
} else {
  console.log(`Invalid command: ${cmd}`);
  process.exit(1);
}
//# sourceMappingURL=cli.js.map