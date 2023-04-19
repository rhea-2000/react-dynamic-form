import './App.css';
import formElementsWithTab from './json-config/formElementsWithTab.json';
import formElements from './json-config/formElements.json';
import { useState, useEffect } from 'react';
import DynamicForm from './components/DynamicForm';
import NavigationBar from './components/NavigationBar';

function App() {
  const [dynamicForms, setDynamicForms] = useState([]);
  const [dynamicFormsWithTab, setDynamicsFormWithTab] = useState([]);

  const [jsonData, setJsonData] = useState([]);

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


  // useEffect(() => {
  //   setDynamicForms(formElements);
  //   setDynamicsFormWithTab(formElementsWithTab);
  // }, [dynamicForms, dynamicFormsWithTab])

  return (

    <div className='app-container'>
      <nav className="nav-bar">
        <h2>Config JSON Files:</h2>
        <ul>
          <NavigationBar jsonData={jsonData} />
        </ul>
      </nav>
      <div className="container">
        <h1 className="heading">JCI Dynamic Form POC</h1>
        {jsonData.map((data, index) => (
          <div key={"devkey" + index} data-testid="dynamic-form">
            <DynamicForm key={index} dynamicForms={data.fileData} data-testid="dynamic-form"></DynamicForm>
          </div>
        ))}
        {/* <div key="devkey1" data-testid="dynamic-form">
        <DynamicForm key="1" dynamicForms={dynamicForms} data-testid="dynamic-form"></DynamicForm>
      </div>
      <div key="devkey2" data-testid="dynamic-form">
        <DynamicForm key="2" dynamicForms={dynamicFormsWithTab} ></DynamicForm>
      </div> */}
      </div>
    </div>
  );
}

export default App;
