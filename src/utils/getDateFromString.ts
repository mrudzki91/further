import { parse } from 'date-fns';
import { Location } from '../types/refundRequest';

const getDateFromString = (location: Location, date: string, time?: string): Date => {
    return parse(
        `${date} ${time ?? '00:00'}`,
        location === 'US' ? 'M/d/y H:m' : 'd/M/y H:m',
        new Date(),
    );
};

export default getDateFromString;
