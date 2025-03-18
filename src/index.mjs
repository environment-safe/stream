import { isBrowser, isJsDom } from 'browser-or-node';
import * as mod from 'module';
let internalRequire = null;
if(typeof require !== 'undefined') internalRequire = require;
const ensureRequire = ()=> (!internalRequire) && (
    internalRequire = mod.createRequire(import.meta.url)
);

let streams = null;

if(isBrowser || isJsDom){
    streams = {
        ReadableStream : globalThis.ReadableStream,
        ReadableStreamDefaultReader : globalThis.ReadableStreamDefaultReade,
        ReadableStreamDefaultController : globalThis.ReadableStreamDefaultController,
        WritableStream : globalThis.WritableStream,
        WritableStreamDefaultWriter : globalThis.WritableStreamDefaultWriter,
        WritableStreamDefaultController : globalThis.WritableStreamDefaultController,
        TransformStream : globalThis.TransformStream,
        TransformStreamDefaultController : globalThis.TransformStreamDefaultController,
        ByteLengthQueuingStrategy : globalThis.ByteLengthQueuingStrategy,
        CountQueuingStrategy : globalThis.CountQueuingStrategy,
        ReadableStreamBYOBReader : globalThis.ReadableStreamBYOBReader,
        ReadableByteStreamController : globalThis.ReadableByteStreamController,
        ReadableStreamBYOBRequest : globalThis.ReadableStreamBYOBRequest
    };
}else{
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

export {
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
};
