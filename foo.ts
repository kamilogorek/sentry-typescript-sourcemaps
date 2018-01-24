import { SentryReporter } from "./error";

const reporter = new SentryReporter("__YOUR_DSN__");

function Foo() {
  reporter.notify(new Error("foo"), {
    some: "params"
  });
}

export { Foo };
