"use client";
import AddTransactionButton from "@/components/AddTransactionButton";
import TransactionsList from "@/components/TransactionList";
import { Suspense } from "react";


export default function Home() {
  return (
    <main>
      <Suspense fallback={<p>Loading...</p>}>
        <AddTransactionButton />
        <TransactionsList />
      </Suspense>
    </main>
  );
}
