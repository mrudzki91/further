import { addHours } from 'date-fns';

const refundTimeLimitsInHours = {
    phone: {
        oldTOS: 4,
        newTOS: 8,
    },
    'web app': {
        oldTOS: 8,
        newTOS: 16,
    },
};

const isRefundAvailable = (
    requestSource: 'phone' | 'web app',
    investmentDate: Date,
    requestDate: Date,
    useNewTOS: boolean,
): boolean => {
    const timeLimitInHours =
        refundTimeLimitsInHours[requestSource][useNewTOS ? 'newTOS' : 'oldTOS'];

    return requestDate <= addHours(investmentDate, timeLimitInHours);
};

export default isRefundAvailable;
