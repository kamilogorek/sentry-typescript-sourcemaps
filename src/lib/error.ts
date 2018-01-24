import { Client, DataCallback } from "raven";
import * as path from "path";

const root = global.__rootdir__;

const dataCallback: DataCallback = data => {
  const stacktrace = data.exception && data.exception[0].stacktrace;

  if (stacktrace && stacktrace.frames) {
    console.log("\nFrames:");
    stacktrace.frames.forEach((frame: any) => {
      if (frame.filename.startsWith("/")) {
        frame.filename = "app:///" + path.relative(root, frame.filename);
        console.log(frame.filename);
      }
    });
    console.log("\n");
  }

  return data;
};

export class SentryReporter {
  private client: Client;

  constructor(dsn: string) {
    this.client = new Client(dsn, {
      captureUnhandledRejections: true,
      dataCallback,
      release: process.env.RELEASE
    });
  }

  public install() {
    this.client.install();
    return this;
  }

  public notify(error: Error, params?: any) {
    this.client.captureException(error, {
      extra: params
    });
  }
}
