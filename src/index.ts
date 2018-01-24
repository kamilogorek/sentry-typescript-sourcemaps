declare global {
  namespace NodeJS {
    interface Global {
      __rootdir__: string;
    }
  }
}

global.__rootdir__ = __dirname || process.cwd();

import { Foo } from "./common/foo";

function bar() {
  Foo();
}

bar();
