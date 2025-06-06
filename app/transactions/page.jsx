const mockTransactions = [
  {
    id: '1',
    username: 'annamaria',
    transactionType: 'Stake',
    token: 'ETH',
    amount: 1000,
    date: '2025-06-05',
  },
  {
    id: '2',
    username: 'johnsmith',
    transactionType: 'Borrow',
    token: 'DAI',
    amount: 500,
    date: '2025-06-04',
  },
  {
    id: '3',
    username: 'maria23',
    transactionType: 'Lend',
    token: 'USDC',
    amount: 750,
    date: '2025-06-03',
  },
];



export default function TransactionsPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
             <th className="p-2 border-b">Username</th>
            <th className="p-2 border-b">Type</th>
            <th className="p-2 border-b">Token</th>
            <th className="p-2 border-b">Amount</th>
            <th className="p-2 border-b">Date</th>
          </tr>
        </thead>
        <tbody>
            {mockTransactions.map((transaction, index) => (
                <tr key={transaction.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-2 border-b">{transaction.username}</td>
                    <td className="p-2 border-b">{transaction.transactionType}</td>
                    <td className="p-2 border-b">{transaction.token}</td>
                    <td className="p-2 border-b">{transaction.amount}</td>
                    <td className="p-2 border-b">{transaction.date}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </main>
  );
}
