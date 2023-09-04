import isRefundAvailable from './isRefundAvailable';

describe('isRefundAvailable', () => {
    describe('old TOS', () => {
        test('allows refunds when phone request made within 4 hours', () => {
            expect(
                isRefundAvailable(
                    'phone',
                    new Date('2023-04-02 10:00'),
                    new Date('2023-04-02 12:00'),
                    false,
                ),
            ).toBeTruthy();

            expect(
                isRefundAvailable(
                    'phone',
                    new Date('2023-04-02 10:00'),
                    new Date('2023-04-02 14:00'),
                    false,
                ),
            ).toBeTruthy();

            expect(
                isRefundAvailable(
                    'phone',
                    new Date('2023-04-02 23:00'),
                    new Date('2023-04-03 01:00'),
                    false,
                ),
            ).toBeTruthy();

            expect(
                isRefundAvailable(
                    'phone',
                    new Date('2023-04-02 10:00'),
                    new Date('2023-04-03 14:01'),
                    false,
                ),
            ).toBeFalsy();
        });

        test('allows refunds when web app request made within 8 hours', () => {
            expect(
                isRefundAvailable(
                    'web app',
                    new Date('2023-04-02 10:00'),
                    new Date('2023-04-02 12:00'),
                    false,
                ),
            ).toBeTruthy();

            expect(
                isRefundAvailable(
                    'web app',
                    new Date('2023-04-02 10:00'),
                    new Date('2023-04-02 18:00'),
                    false,
                ),
            ).toBeTruthy();

            expect(
                isRefundAvailable(
                    'web app',
                    new Date('2023-04-02 23:00'),
                    new Date('2023-04-03 01:00'),
                    false,
                ),
            ).toBeTruthy();

            expect(
                isRefundAvailable(
                    'web app',
                    new Date('2023-04-02 10:00'),
                    new Date('2023-04-03 18:01'),
                    false,
                ),
            ).toBeFalsy();
        });
    });

    describe('new TOS', () => {
        test('allows refunds when phone request made within 8 hours', () => {
            expect(
                isRefundAvailable(
                    'phone',
                    new Date('2023-04-02 10:00'),
                    new Date('2023-04-02 12:00'),
                    true,
                ),
            ).toBeTruthy();

            expect(
                isRefundAvailable(
                    'phone',
                    new Date('2023-04-02 10:00'),
                    new Date('2023-04-02 18:00'),
                    true,
                ),
            ).toBeTruthy();

            expect(
                isRefundAvailable(
                    'phone',
                    new Date('2023-04-02 23:00'),
                    new Date('2023-04-03 04:00'),
                    true,
                ),
            ).toBeTruthy();

            expect(
                isRefundAvailable(
                    'phone',
                    new Date('2023-04-02 10:00'),
                    new Date('2023-04-03 18:01'),
                    true,
                ),
            ).toBeFalsy();
        });

        test('allows refunds when web app request made within 16 hours', () => {
            expect(
                isRefundAvailable(
                    'web app',
                    new Date('2023-04-02 10:00'),
                    new Date('2023-04-02 12:00'),
                    true,
                ),
            ).toBeTruthy();

            expect(
                isRefundAvailable(
                    'web app',
                    new Date('2023-04-02 02:00'),
                    new Date('2023-04-02 18:00'),
                    true,
                ),
            ).toBeTruthy();

            expect(
                isRefundAvailable(
                    'web app',
                    new Date('2023-04-02 23:00'),
                    new Date('2023-04-03 08:00'),
                    true,
                ),
            ).toBeTruthy();

            expect(
                isRefundAvailable(
                    'web app',
                    new Date('2023-04-02 02:00'),
                    new Date('2023-04-03 18:01'),
                    true,
                ),
            ).toBeFalsy();
        });
    });
});
