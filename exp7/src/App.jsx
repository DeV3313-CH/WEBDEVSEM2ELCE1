import Student from "./Student";

function App() {
  return (
    <div className="box">
      <h1>Student Information</h1>

      <Student
        name="Rahul Sharma"
        course="Computer Science"
        marks="85"
      />

      <Student
        name="Anita Verma"
        course="Information Technology"
        marks="92"
      />

      <Student
        name="Rohan Gupta"
        course="Electronics"
        marks="78"
      />
    </div>
  );
}
import "./App.css";

export default App;