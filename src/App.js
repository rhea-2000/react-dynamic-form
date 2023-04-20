import './App.css';
import { useState, useEffect } from 'react';
import DynamicForm from './components/DynamicForm';
import NavigationBar from './components/NavigationBar';

function App() {

  const [jsonData, setJsonData] = useState([]);
  const [selectedJson, setSelectedJson] = useState(null);

  const onSelectJson = (json) => {
    console.log(json);
    json.fileData.map((data) => (
      console.log(data)
    ));
    setSelectedJson(json);
  };

  useEffect(() => {
    const fetchJsonData = async () => {
      const jsonFiles = await importAll(require.context('./json-config', false, /\.json$/));
      setJsonData(jsonFiles);
    }

    fetchJsonData();
  }, []);

  const importAll = (r) => {
    let files = [];
    r.keys().forEach((key) => {
      files.push({
        fileName: key.slice(2, -5), // extract the file name without extension
        fileData: r(key)
      });
    });
    return files;
  }

  return (

    <div className='app-container'>
      <nav className="nav-bar">
        <h2>Config JSON Files:</h2>
        <ul>
          <NavigationBar jsonData={jsonData} onSelect={onSelectJson} />
        </ul>
      </nav>
      <div className="container">
        <h1 className="heading">JCI Dynamic Form POC</h1>
        <p><button>Reset to Default</button></p>
        {selectedJson && selectedJson.fileData.map((data, index) => (
          <div key={"devkey" + index} data-testid="dynamic-form">
            <DynamicForm key={index} page={data} data-testid="dynamic-form"></DynamicForm>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
