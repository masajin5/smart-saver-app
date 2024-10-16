import React, { useEffect, useState } from "react";

type Income = {
  id: number;
  amount: number;
  source: string;
  createdAt: string;
};

type Expense = {
  id: number;
  amount: number;
  category: string;
  createdAt: string;
};

type TransactionsData = {
  incomes: Income[];
  expenses: Expense[];
};

export default function TransactionsList() {
  const [transactions, setTransactions] = useState<TransactionsData | null>(
    null
  );

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch("/api/transactions");
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error("Failed to fetch transactions:", error);
      }
    };
    fetchTransactions();
  }, []);

  if (!transactions) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">家計簿</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">収入</h2>
        <ul className="bg-white shadow p-4 rounded">
          {transactions.incomes.map((income) => (
            <li key={income.id} className="border-b last:border-b-0 py-2">
              <p>金額: {income.amount}</p>
              <p>出所: {income.source}</p>
              <p>日付: {new Date(income.createdAt).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">支出</h2>
        <ul className="bg-white shadow p-4 rounded">
          {transactions.expenses.map((expense) => (
            <li key={expense.id} className="border-b last:border-b-0 py-2">
              <p>金額: {expense.amount}</p>
              <p>カテゴリー: {expense.category}</p>
              <p>日付: {new Date(expense.createdAt).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
