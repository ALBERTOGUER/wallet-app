export interface Transaction {
  id: string;
  type: "Payment" | "Credit";
  amount: number;
  name: string;
  description: string;
  date: string;
  pending: boolean;
  authorizedUser?: string | null;
}

export interface TransactionJson {
    transactions: Transaction[];
}

export interface TransactionDetailProps {
    transactions: Transaction[];
}

export interface CardBalanceProps {
    balance: number;
    limit: number;
}

export interface DailyPointsProps {
    seasonStart: string
}

export interface TransactionsListProps {
    transactions: Transaction[];
}