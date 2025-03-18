/* global describe:false */
import { chai } from '@environment-safe/chai';
import { it } from '@open-automaton/moka';
import {
    ReadableStream,
    //ReadableStreamDefaultReader,
    ReadableStreamDefaultController,
    WritableStream,
    WritableStreamDefaultWriter,
    WritableStreamDefaultController,
    TransformStream,
    TransformStreamDefaultController,
    ByteLengthQueuingStrategy,
    CountQueuingStrategy,
    //ReadableStreamBYOBReader,
    //ReadableByteStreamController,
    //ReadableStreamBYOBRequest
} from '../src/index.mjs';
const should = chai.should();

describe('module', ()=>{
    describe('performs a simple test suite', ()=>{
        it('loads', async ()=>{
            should.exist(ReadableStream);
            should.exist(ReadableStreamDefaultController);
            should.exist(WritableStream);
            should.exist(WritableStreamDefaultWriter);
            should.exist(WritableStreamDefaultController);
            should.exist(TransformStream);
            should.exist(TransformStreamDefaultController);
            should.exist(ByteLengthQueuingStrategy);
            should.exist(CountQueuingStrategy);
            // Not supported in safari
            //should.exist(ReadableStreamDefaultReader);
            //should.exist(ReadableStreamBYOBReader);
            //should.exist(ReadableByteStreamController);
            //should.exist(ReadableStreamBYOBRequest);
        });
    });
});

