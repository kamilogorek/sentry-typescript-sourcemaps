import "./root";
import * as Sentry from "@sentry/node";
import { RewriteFrames } from "@sentry/integrations";
import { foo } from "./foo";

Sentry.init({
  dsn: "https://363a337c11a64611be4845ad6e24f3ac@sentry.io/297378",
  release: "1991",
  integrations: [
    new RewriteFrames({
      root: global.__rootdir__
    })
  ]
});

function main(msg) {
  foo(msg);
}

main("Whoopsy");
