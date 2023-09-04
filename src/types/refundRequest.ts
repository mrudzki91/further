export type RefundRequest = {
    name: string;
    location: 'US' | 'Europe';
    signupDate: string;
    requestSource: 'phone' | 'web app';
    investmentDate: string;
    investmentTime: string;
    refundRequestDate: string;
    refundRequestTime: string;
};
