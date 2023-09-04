import './App.css';
import RefundRequestsTable from './components/RefundRequestsTable';
import { RefundRequest } from './types/refundRequest';

const data: RefundRequest[] = [
    {
        name: 'Emma Smith',
        location: 'US',
        signupDate: '1/2/2020',
        requestSource: 'phone',
        investmentDate: '1/2/2021',
        investmentTime: '06:00',
        refundRequestDate: '1/2/2021',
        refundRequestTime: '09:00',
    },
    {
        name: 'Benjamin Johnson',
        location: 'Europe',
        signupDate: '12/2/2020',
        requestSource: 'web app',
        investmentDate: '2/1/2021',
        investmentTime: '06:30',
        refundRequestDate: '1/2/2021',
        refundRequestTime: '23:00',
    },
    {
        name: 'Olivia Davis',
        location: 'Europe',
        signupDate: '1/2/2020',
        requestSource: 'web app',
        investmentDate: '2/2/2021',
        investmentTime: '13:00',
        refundRequestDate: '2/2/2021',
        refundRequestTime: '20:00',
    },
    {
        name: 'Ethan Anderson',
        location: 'US',
        signupDate: '1/11/2011',
        requestSource: 'web app',
        investmentDate: '2/1/2021',
        investmentTime: '13:00',
        refundRequestDate: '2/2/2021',
        refundRequestTime: '16:00',
    },
    {
        name: 'Sophia Wilson',
        location: 'US',
        signupDate: '2/1/2020',
        requestSource: 'phone',
        investmentDate: '2/1/2021',
        investmentTime: '22:00',
        refundRequestDate: '2/2/2021',
        refundRequestTime: '5:00 ',
    },
    {
        name: 'Liam Martinez',
        location: 'Europe',
        signupDate: '1/1/2020',
        requestSource: 'web app',
        investmentDate: '1/1/2021',
        investmentTime: '11:00',
        refundRequestDate: '11/1/2021',
        refundRequestTime: '12:00 ',
    },
];

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h3>List of investment refund requests</h3>
            </header>
            <main>
                <RefundRequestsTable refundRequests={data} />
            </main>
        </div>
    );
}

export default App;
