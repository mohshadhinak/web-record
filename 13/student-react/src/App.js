
import Header from "./components/Header";
import StudentDetails from "./components/StudentDetails";
import Footer from "./components/Footer";
import "./App.css";

function App() {

    return (
        <div className="app">

            <Header />

            <main>
                <StudentDetails
                    name="Shadhin"
                    rollNo="CS101"
                    course="B.Sc Computer Science"
                    age={21}
                />
            </main>

            <Footer />

        </div>
    );
}

export default App;
