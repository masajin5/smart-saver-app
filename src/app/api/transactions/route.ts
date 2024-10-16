import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const incomes = await prisma.income.findMany({
      orderBy: { createdAt: "desc" },
    });
    const expenses = await prisma.expense.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ incomes, expenses });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch transactions" },
      { status: 500 }
    );
  }
}

// 必要に応じてPOSTメソッドを追加する場合は、以下のように定義します
export async function POST(request: Request) {
  try {
    const { type, amount, categoryOrSource } = await request.json();

    if (type === "income") {
      const newIncome = await prisma.income.create({
        data: {
          amount: parseFloat(amount),
          source: categoryOrSource,
        },
      });
      return NextResponse.json(newIncome, { status: 201 });
    } else if (type === "expense") {
      const newExpense = await prisma.expense.create({
        data: {
          amount: parseFloat(amount),
          category: categoryOrSource,
        },
      });
      return NextResponse.json(newExpense, { status: 201 });
    } else {
      return NextResponse.json(
        { error: "Invalid type specified" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create transaction" },
      { status: 500 }
    );
  }
}
