export type Location = 'US' | 'Europe';

export type RequestSource = 'phone' | 'web app';

export type RefundRequest = {
    name: string;
    location: Location;
    signupDate: string;
    requestSource: RequestSource;
    investmentDate: string;
    investmentTime: string;
    refundRequestDate: string;
    refundRequestTime: string;
};
