import getDateFromString from './getDateFromString';

describe('getDateFromString', () => {
    test('properly parse US dates without time', () => {
        expect(getDateFromString('US', '5/2/2023')).toEqual(new Date(2023, 4, 2));
        expect(getDateFromString('US', '1/14/2023')).toEqual(new Date(2023, 0, 14));
    });

    test('properly parse US dates with time', () => {
        expect(getDateFromString('US', '5/2/2023', '09:00')).toEqual(new Date(2023, 4, 2, 9, 0));
        expect(getDateFromString('US', '1/14/2023', '16:05')).toEqual(new Date(2023, 0, 14, 16, 5));
        expect(getDateFromString('US', '1/14/2023', '00:00')).toEqual(new Date(2023, 0, 14, 0, 0));
    });

    test('properly parse European dates without time', () => {
        expect(getDateFromString('Europe', '2/5/2023')).toEqual(new Date(2023, 4, 2));
        expect(getDateFromString('Europe', '14/1/2023')).toEqual(new Date(2023, 0, 14));
    });

    test('properly parse European dates with time', () => {
        expect(getDateFromString('Europe', '2/5/2023', '09:00')).toEqual(
            new Date(2023, 4, 2, 9, 0),
        );
        expect(getDateFromString('Europe', '14/1/2023', '16:05')).toEqual(
            new Date(2023, 0, 14, 16, 5),
        );
        expect(getDateFromString('Europe', '14/1/2023', '00:00')).toEqual(
            new Date(2023, 0, 14, 0, 0),
        );
    });

    test('handles invalid dates', () => {
        expect(getDateFromString('Europe', 'just some text', '09:00').toJSON()).toBeNull();
        expect(getDateFromString('Europe', '', '16:05').toJSON()).toBeNull();
        expect(getDateFromString('Europe', '142/41/2023', '200:004').toJSON()).toBeNull();
    });
});
