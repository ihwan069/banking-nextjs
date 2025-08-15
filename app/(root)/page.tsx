import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const Home = async () => {
  const loggedIn = await getLoggedInUser();

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Wellcome"
            user={loggedIn?.name || "Guest"}
            subtext="Access and manage your account and transactions effenceintly."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250}
          />
        </header>
        RECENT Page
      </div>
      {/* right-sidebar */}
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 125.0 }, { currentBalance: 500.29 }]}
      />
    </section>
  );
};

export default Home;
