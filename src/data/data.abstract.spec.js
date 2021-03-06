import { DataAbstract } from './data.abstract';
import { Subject } from 'rxjs/Subject';

describe('DataAbstract', () => {

    const dataPool = {};

    const DA = new DataAbstract(
        dataPool,
    );

    const DA2 = new DataAbstract(
        dataPool,
    );

    it('should exist', () => {
        expect(typeof DataAbstract).toBe('function');
    });

    it('should have a constructor method defined', () => {
        expect(DA.constructor).toBeDefined();
        expect(typeof DA.constructor).toBe('function');
    });

    it('should have a getObservable method defined', () => {
        expect(DA.getObservable).toBeDefined();
        expect(typeof DA.getObservable).toBe('function');
    });

    it('should have a push method defined', () => {
        expect(DA.push).toBeDefined();
        expect(typeof DA.push).toBe('function');
    });

    it('should bind given dataPool to this._dataPool', () => {
        expect(DA._dataPool).toEqual(dataPool);
    });

    it('should return observableSubject to this._observableSubject', () => {
        expect(DA._observableSubject).toEqual(new Subject());
    });

    describe('#getObservable()', () => {

        it('should return an RxJS Subject by default', () => {
            expect(DA.getObservable()).toEqual(DA._observableSubject);
        });
    });

    describe('#push()', () => {

        it('should return da instance', () => {
            expect(DA.push({})).toEqual(DA);
            expect(DA.push()).toEqual(DA);
        });

        it('should just ignore push execution if no observableObject available', () => {
            DA2._observableSubject = null;
            expect(DA2.push()).toEqual(DA2);
        });

    });

});