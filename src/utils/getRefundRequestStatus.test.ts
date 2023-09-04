import { RefundRequest } from '../types/refundRequest';
import getRefundRequestStatus from './getRefundRequestStatus';

const refundRequest: RefundRequest = {
    name: 'Emma Smith',
    location: 'US',
    signupDate: '1/2/2020',
    requestSource: 'phone',
    investmentDate: '1/2/2021',
    investmentTime: '06:00',
    refundRequestDate: '1/2/2021',
    refundRequestTime: '09:00',
};

describe('getRefundRequestStatus', () => {
    test('should return "Wrong input data" when one of the dates is invalid', () => {
        expect(getRefundRequestStatus({ ...refundRequest, signupDate: '32/22/2020' })).toEqual(
            'Wrong input data',
        );
        expect(getRefundRequestStatus({ ...refundRequest, investmentDate: '32/22/2020' })).toEqual(
            'Wrong input data',
        );
        expect(
            getRefundRequestStatus({ ...refundRequest, refundRequestDate: '32/22/2020' }),
        ).toEqual('Wrong input data');
    });

    test('should return "Wrong input data" when one of the times is invalid', () => {
        expect(getRefundRequestStatus({ ...refundRequest, investmentTime: '32:00' })).toEqual(
            'Wrong input data',
        );
        expect(getRefundRequestStatus({ ...refundRequest, refundRequestTime: '11:87' })).toEqual(
            'Wrong input data',
        );
    });

    test('should return "Approved" when request valid and refund applies', () => {
        expect(getRefundRequestStatus({ ...refundRequest })).toEqual('Approved');
    });

    test('should return "Denied" when request valid and refund does not apply', () => {
        expect(getRefundRequestStatus({ ...refundRequest, refundRequestDate: '1/2/2022' })).toEqual(
            'Denied',
        );
    });
});
