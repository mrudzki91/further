import { addHours } from 'date-fns';
import { RequestSource } from '../types/refundRequest';

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
    requestSource: RequestSource,
    investmentDate: Date,
    requestDate: Date,
    useNewTOS: boolean,
): boolean => {
    const timeLimitInHours =
        refundTimeLimitsInHours[requestSource][useNewTOS ? 'newTOS' : 'oldTOS'];

    return requestDate <= addHours(investmentDate, timeLimitInHours);
};

export default isRefundAvailable;
