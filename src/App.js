import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import data from "./data"

export default function App() {
  return (
    <div>
      <Navbar />
    <div className="body--container">
      {data.map(item=> (<Main key= {item.title} {...item} />))}
      </div>
      <Footer />
    </div>
  );
}
