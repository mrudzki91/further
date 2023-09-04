import { parse } from 'date-fns';

const getDateFromString = (location: 'US' | 'Europe', date: string, time?: string) => {
    return parse(
        `${date} ${time ?? '00:00'}`,
        location === 'US' ? 'M/d/y H:m' : 'd/M/y H:m',
        new Date(),
    );
};

export default getDateFromString;
