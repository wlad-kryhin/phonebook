import AuthNav from "./AuthNav";
import Navigation from "./Navigation";
import UserMenu from "./UserMenu";

export default function AppBar() {
  return (
    <header className="header">
      <Navigation />
      <AuthNav />
      <UserMenu />
    </header>
  );
}
