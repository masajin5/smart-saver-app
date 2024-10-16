"use client";
import { Suspense } from "react";
import TransactionsList from "./components/TransactionList";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<p>Loading...</p>}>
        <TransactionsList />
      </Suspense>
    </main>
  );
}
