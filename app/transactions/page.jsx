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
      <p>This is where the table will go.</p>
    </main>
  );
}
