import { RefundRequest } from '../types/refundRequest';
import getRefundRequestStatus from '../utils/getRefundRequestStatus';

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
                {refundRequests.map((refundRequest) => (
                    <tr key={refundRequest.name}>
                        <td>{refundRequest.name}</td>
                        <td>{refundRequest.location}</td>
                        <td>{refundRequest.signupDate}</td>
                        <td>{refundRequest.requestSource}</td>
                        <td>{refundRequest.investmentDate}</td>
                        <td>{refundRequest.investmentTime}</td>
                        <td>{refundRequest.refundRequestDate}</td>
                        <td>{refundRequest.refundRequestTime}</td>
                        <td>{getRefundRequestStatus(refundRequest)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    ) : (
        <div>There are no refund requests available.</div>
    );
};

export default RefundRequestsTable;
