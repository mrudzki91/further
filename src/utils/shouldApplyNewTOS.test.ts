import shouldApplyNewTOS from './shouldApplyNewTOS';

describe('shouldApplyNewTOS', () => {
    test('should apply new TOS when signup date after 2020-01-02', () => {
        expect(shouldApplyNewTOS(new Date('2020-01-03'))).toBeTruthy();
    });
    test('should not apply new TOS when signup date before 2020-01-02', () => {
        expect(shouldApplyNewTOS(new Date('2020-01-01'))).toBeFalsy();
    });
    test('should not apply new TOS when signup date equal 2020-01-02', () => {
        expect(shouldApplyNewTOS(new Date('2020-01-02'))).toBeFalsy();
    });
});
