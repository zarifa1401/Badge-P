import Badge from "./components/Badge";

function App() {
  return (
    <div className="app">
      <h1>Reusable Badge Component</h1>
      <p className="subtitle">Week 1 – React Props Practice</p>

      <div className="badge-container">
        <Badge label="Course" value="React" />
        <Badge label="Week" value="1" />
        <Badge label="Topic" value="Props" />
        <Badge label="Level" value="Beginner" />
      </div>
    </div>
  );
}

export default App;
