"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WritableStreamDefaultWriter = exports.WritableStreamDefaultController = exports.WritableStream = exports.TransformStreamDefaultController = exports.TransformStream = exports.ReadableStreamDefaultReader = exports.ReadableStreamDefaultController = exports.ReadableStreamBYOBRequest = exports.ReadableStreamBYOBReader = exports.ReadableStream = exports.ReadableByteStreamController = exports.CountQueuingStrategy = exports.ByteLengthQueuingStrategy = void 0;
var _browserOrNode = require("browser-or-node");
var mod = _interopRequireWildcard(require("module"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
let internalRequire = null;
if (typeof require !== 'undefined') internalRequire = require;
const ensureRequire = () => !internalRequire && (internalRequire = mod.createRequire(require('url').pathToFileURL(__filename).toString()));
let streams = null;
if (_browserOrNode.isBrowser || _browserOrNode.isJsDom) {
  streams = {
    ReadableStream: globalThis.ReadableStream,
    ReadableStreamDefaultReader: globalThis.ReadableStreamDefaultReade,
    ReadableStreamDefaultController: globalThis.ReadableStreamDefaultController,
    WritableStream: globalThis.WritableStream,
    WritableStreamDefaultWriter: globalThis.WritableStreamDefaultWriter,
    WritableStreamDefaultController: globalThis.WritableStreamDefaultController,
    TransformStream: globalThis.TransformStream,
    TransformStreamDefaultController: globalThis.TransformStreamDefaultController,
    ByteLengthQueuingStrategy: globalThis.ByteLengthQueuingStrategy,
    CountQueuingStrategy: globalThis.CountQueuingStrategy,
    ReadableStreamBYOBReader: globalThis.ReadableStreamBYOBReader,
    ReadableByteStreamController: globalThis.ReadableByteStreamController,
    ReadableStreamBYOBRequest: globalThis.ReadableStreamBYOBRequest
  };
} else {
  ensureRequire();
  streams = internalRequire('node:stream/web');
}
const {
  ReadableStream,
  ReadableStreamDefaultReader,
  ReadableStreamDefaultController,
  WritableStream,
  WritableStreamDefaultWriter,
  WritableStreamDefaultController,
  TransformStream,
  TransformStreamDefaultController,
  ByteLengthQueuingStrategy,
  CountQueuingStrategy,
  ReadableStreamBYOBReader,
  ReadableByteStreamController,
  ReadableStreamBYOBRequest
} = streams;
exports.ReadableStreamBYOBRequest = ReadableStreamBYOBRequest;
exports.ReadableByteStreamController = ReadableByteStreamController;
exports.ReadableStreamBYOBReader = ReadableStreamBYOBReader;
exports.CountQueuingStrategy = CountQueuingStrategy;
exports.ByteLengthQueuingStrategy = ByteLengthQueuingStrategy;
exports.TransformStreamDefaultController = TransformStreamDefaultController;
exports.TransformStream = TransformStream;
exports.WritableStreamDefaultController = WritableStreamDefaultController;
exports.WritableStreamDefaultWriter = WritableStreamDefaultWriter;
exports.WritableStream = WritableStream;
exports.ReadableStreamDefaultController = ReadableStreamDefaultController;
exports.ReadableStreamDefaultReader = ReadableStreamDefaultReader;
exports.ReadableStream = ReadableStream;