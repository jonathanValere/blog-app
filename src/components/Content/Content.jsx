import MainContent from "./MainContent";
import SideContent from "./Aside/SideContent";

const Content = () => {
  return (
    <main>
      <div className="container">
        <MainContent />
        <SideContent />
      </div>
    </main>
  );
};

export default Content;
