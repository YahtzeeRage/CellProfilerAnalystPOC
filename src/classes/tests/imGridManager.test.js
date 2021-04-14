import {ImageGridManager} from "../imGridManager"
var assert = require('chai').assert;
import _ from "lodash";


describe('image Grid manager tests', function() {

    describe('constructor tests', function() {

        it('fail on pass nothing', function() {
            assert.throws(()=>{
                const m = new ImageGridManager();
            }, 
            Error, "Constructor Error on no data url or data pairs passed in")
            
        });
        it('basic construct', function() {
            const data_pairs = [ {ImageKey:  4, ObjectKey: 5}, {ImageKey: 2, ObjectKey: 8}]
            const dataurl1 = "https://i.postimg.cc/0yS7m2dV/AS-09125-050116000001-A01f00d2.png"
            const dataurl2 = "https://i.postimg.cc/0yS7m2dV/AS-09125-050116000001-A01f00d2.png"
            const dataurls = [dataurl1, dataurl2]
            const IGManager = new ImageGridManager(data_pairs, dataurls)
            assert.exists(IGManager)
        });
        it('fail constructor on mismatched data pair and dataurl length', function() {
            assert.throws(()=>{
                const data_pairs = [ {ImageKey:  4, ObjectKey: 5}, {ImageKey: 2, ObjectKey: 8}]
                const dataurl1 = "https://i.postimg.cc/0yS7m2dV/AS-09125-050116000001-A01f00d2.png"
                const dataurls = [dataurl1]
                const m = new ImageGridManager(data_pairs, dataurls)
              }, 
              Error, "Constructor Error on mismatched data pair and dataurl length")
        })
    });

    describe('usage tests', function() {

        it('API: gets number of images', function() {
            const data_pairs = [ {ImageKey:  4, ObjectKey: 5}, {ImageKey: 2, ObjectKey: 8}]
            const dataurl1 = "https://i.postimg.cc/0yS7m2dV/AS-09125-050116000001-A01f00d2.png"
            const dataurl2 = "https://i.postimg.cc/0yS7m2dV/AS-09125-050116000001-A01f00d2.png"
            const dataurls = [dataurl1, dataurl2]
            const IGManager = new ImageGridManager(data_pairs, dataurls)

            assert.strictEqual(IGManager.getNumberImages(), 2)
        }); 

        it('API: get dataurl by index', function() {
            const data_pairs = [ {ImageKey:  4, ObjectKey: 5}, {ImageKey: 2, ObjectKey: 8}]
            const dataurl1 = "https://i.postimg.cc/0yS7m2dV/AS-09125-050116000001-A01f00d2.png"
            const dataurl2 = "https://i.postimg.cc/0yS7m2dV/AS-09125-050116000001-A01f00d2.png"
            const dataurls = [dataurl1, dataurl2]
            const IGManager = new ImageGridManager(data_pairs, dataurls)

            assert.strictEqual(IGManager.getDataUrlByIndex(0), dataurl1)
            assert.strictEqual(IGManager.getDataUrlByIndex(1), dataurl2)
        }); 

        it('API: can call set image class by index', function() {
            const data_pairs = [ {ImageKey:  4, ObjectKey: 5}, {ImageKey: 2, ObjectKey: 8}]
            const dataurl1 = "https://i.postimg.cc/0yS7m2dV/AS-09125-050116000001-A01f00d2.png"
            const dataurl2 = "https://i.postimg.cc/0yS7m2dV/AS-09125-050116000001-A01f00d2.png"
            const dataurls = [dataurl1, dataurl2]
            const IGManager = new ImageGridManager(data_pairs, dataurls)

            IGManager.setImageClassByIndex(0, "positive")
            IGManager.setImageClassByIndex(1, "negative")
        }); 

        it('API: can call setImageClassByIndex', function() {
            const data_pairs = [ {ImageKey:  4, ObjectKey: 5}, {ImageKey: 2, ObjectKey: 8}]
            const dataurl1 = "https://i.postimg.cc/0yS7m2dV/AS-09125-050116000001-A01f00d2.png"
            const dataurl2 = "https://i.postimg.cc/0yS7m2dV/AS-09125-050116000001-A01f00d2.png"
            const dataurls = [dataurl1, dataurl2]
            const IGManager = new ImageGridManager(data_pairs, dataurls)

            IGManager.setImageClassByIndex(0, "positive")
            IGManager.setImageClassByIndex(1, "negative")
        }); 

        it('API: setImageClassByIndex will fail for wrong classes', function() {
            const data_pairs = [ {ImageKey:  4, ObjectKey: 5}, {ImageKey: 2, ObjectKey: 8}]
            const dataurl1 = "https://i.postimg.cc/0yS7m2dV/AS-09125-050116000001-A01f00d2.png"
            const dataurl2 = "https://i.postimg.cc/0yS7m2dV/AS-09125-050116000001-A01f00d2.png"
            const dataurls = [dataurl1, dataurl2]
            const IGManager = new ImageGridManager(data_pairs, dataurls)

            assert.throws(()=>{
                IGManager.setImageClassByIndex(0, "zoidberg")
              }, 
              Error, "setImageClassByIndex Error incorrect class to set: zoidberg, must be: unclassified, positive, negative")
        }); 

        // it("API: getPairsByClass works with no swapping", function() {

        //     const data_pairs = [ {ImageKey:  4, ObjectKey: 5}, {ImageKey: 2, ObjectKey: 8}]
        //     const dataurl1 = "https://i.postimg.cc/0yS7m2dV/AS-09125-050116000001-A01f00d2.png"
        //     const dataurl2 = "https://i.postimg.cc/0yS7m2dV/AS-09125-050116000001-A01f00d2.png"
        //     const dataurls = [dataurl1, dataurl2]
        //     const IGManager = new ImageGridManager(data_pairs, dataurls)

        //     assert.throws(()=>{
        //         assert.strictEqual
        //       }, 
        //       Error, "setImageClassByIndex Error incorrect class to set: zoidberg, must be: unclassified, positive, negative")

        // });



    });
});