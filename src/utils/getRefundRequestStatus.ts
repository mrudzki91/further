import { RefundRequest } from '../types/refundRequest';
import getDateFromString from './getDateFromString';
import isRefundAvailable from './isRefundAvailable';
import shouldApplyNewTOS from './shouldApplyNewTOS';

const getRefundRequestStatus = (refundRequest: RefundRequest): string => {
    const investmentDate = getDateFromString(
        refundRequest.location,
        refundRequest.investmentDate,
        refundRequest.investmentTime,
    );
    const refundRequestDate = getDateFromString(
        refundRequest.location,
        refundRequest.refundRequestDate,
        refundRequest.refundRequestTime,
    );
    const signupDate = getDateFromString(refundRequest.location, refundRequest.signupDate);

    if (
        investmentDate.toJSON() === null ||
        refundRequestDate.toJSON() === null ||
        signupDate.toJSON() === null
    ) {
        return 'Wrong input data';
    }

    return isRefundAvailable(
        refundRequest.requestSource,
        investmentDate,
        refundRequestDate,
        shouldApplyNewTOS(signupDate),
    )
        ? 'Approved'
        : 'Denied';
};

export default getRefundRequestStatus;
