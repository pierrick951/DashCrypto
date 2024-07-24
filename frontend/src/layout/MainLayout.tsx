import Nav from "../components/Nav";


type Props = {};
function MainLayout({}: Props) {
  return (
    <div className="flex flex-row">
      <div>
        <Nav />
      </div>
      <div className="w-full">
        <div className="bg-slate-800 w-full">header</div>
        <div>content + header</div>
      </div>
    </div>
  );
}
export default MainLayout;
