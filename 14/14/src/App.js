
import Header from "./components/Header";
import TodoList from "./components/List";
import Footer from "./components/Footer";
import "./App.css";

function App() {

    return (
        <div className="app">

            <Header />

            <main>
                <TodoList title="My Tasks" />
            </main>

            <Footer />

        </div>
    );
}

export default App;
