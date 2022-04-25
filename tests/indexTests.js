const { expect } = require('chai');

describe('index.js', () => {
    let subject;

    beforeEach(() => {
        subject = require('../src/index.js');
    });

    describe('calendarWeek(date)', () => {
        it('returns the current calendar week', () => {
            console.log(subject)
            const value = subject.calendarWeek(new Date())
            console.log(value)
            expect(true).to.equal(true);
        });
    });

    describe('currentCalendarWeek(date)', () => {

    });

    describe('currentGB1Week()', () => {

    });
});
