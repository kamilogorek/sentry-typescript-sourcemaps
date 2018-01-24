import { SentryReporter } from "../lib/error";

const reporter = new SentryReporter("__DSN__");

function Foo() {
  reporter.notify(new Error("foo"), {
    some: "params"
  });
}

export { Foo };
