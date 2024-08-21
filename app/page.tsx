import Account from "components/account";
import DecCalendar from "components/decCalendar";
import Gallery from "components/gallery";
import GestBook from "components/gestbook";
import Invition from "components/invition";
import Location from "components/location";
import Main from "components/main";

export default function Home() {
  return (
    <main className="max-w-screen-sm w-full h-full m-auto relative">
      <Main />
      <Invition />
      <Gallery />
      <DecCalendar />
      <Location />
      <Account />
      <GestBook />
    </main>
  );
}