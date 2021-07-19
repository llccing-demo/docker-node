// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportGzip = require('../../../app/middleware/gzip');

declare module 'egg' {
  interface IMiddleware {
    gzip: typeof ExportGzip;
  }
}
