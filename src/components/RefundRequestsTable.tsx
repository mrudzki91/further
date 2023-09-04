import { RefundRequest } from '../types/refundRequest';
import getDateFromString from '../utils/getDateFromString';
import isRefundAvailable from '../utils/isRefundAvailable';
import shouldApplyNewTOS from '../utils/shouldApplyNewTOS';

type Props = {
    refundRequests: RefundRequest[];
};

const RefundRequestsTable: React.FC<Props> = ({ refundRequests }) => {
    return refundRequests.length ? (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Customer Location</th>
                    <th>Sign up date</th>
                    <th>Request Source</th>
                    <th>Investment Date</th>
                    <th>Investment Time</th>
                    <th>Refund Request Date</th>
                    <th>Refund Request Time</th>
                    <th>Request status</th>
                </tr>
            </thead>
            <tbody>
                {refundRequests.map(
                    ({
                        name,
                        investmentDate,
                        investmentTime,
                        location,
                        refundRequestDate,
                        refundRequestTime,
                        requestSource,
                        signupDate,
                    }) => (
                        <tr key={name}>
                            <td>{name}</td>
                            <td>{location}</td>
                            <td>{signupDate}</td>
                            <td>{requestSource}</td>
                            <td>{investmentDate}</td>
                            <td>{investmentTime}</td>
                            <td>{refundRequestDate}</td>
                            <td>{refundRequestTime}</td>
                            <td>
                                {isRefundAvailable(
                                    requestSource,
                                    getDateFromString(location, investmentDate, investmentTime),
                                    getDateFromString(
                                        location,
                                        refundRequestDate,
                                        refundRequestTime,
                                    ),
                                    shouldApplyNewTOS(getDateFromString(location, signupDate)),
                                )
                                    ? 'Approved'
                                    : 'Denied'}
                            </td>
                        </tr>
                    ),
                )}
            </tbody>
        </table>
    ) : (
        <div>There are no refund requests available.</div>
    );
};

export default RefundRequestsTable;
