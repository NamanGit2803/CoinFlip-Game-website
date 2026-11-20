function Page({ title, description }) {
  return (
    <div className="mx-auto max-w-7xl px-5 py-12">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="mt-2 text-sm text-gray-400">
        {description}
      </p>
    </div>
  );
}

export const GamePage = () => (
  <Page title="Coin Flip Arena" description="Player game interface" />
);

export const LoginPage = () => (
  <Page title="Login" description="Player authentication" />
);

export const RegisterPage = () => (
  <Page title="Register" description="Create your account" />
);

export const HistoryPage = () => (
  <Page title="Game History" description="Your previous matches" />
);

export const WalletPage = () => (
  <Page title="Wallet" description="Your demo-credit balance" />
);

export const AdminDashboardPage = () => (
  <Page title="Dashboard" description="Platform overview" />
);

export const AdminUsersPage = () => (
  <Page title="Users" description="Manage player accounts" />
);

export const AdminMatchesPage = () => (
  <Page title="Matches" description="Inspect game matches" />
);

export const AdminTransactionsPage = () => (
  <Page title="Transactions" description="Review demo-credit transactions" />
);

export const AdminSettingsPage = () => (
  <Page title="Settings" description="Platform configuration" />
);
