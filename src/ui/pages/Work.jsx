import React, { useState } from "react";
import "../styles/Work.css";

function Work() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [activeTab, setActiveTab] = useState(1);

  const handleCopyText = () => {
    setOutputText(inputText);
  };

  const renderOutputContent = () => {
    switch (activeTab) {
      case 1:
        return (
          <div className="output-box">
            <h3>Text Output</h3>
            <div className="output-content">{outputText || "No output yet..."}</div>
          </div>
        );
      case 2:
        return (
          <div className="output-box">
            <h3>Table Output</h3>
            <table className="output-table">
              <tbody>
                {[...Array(4)].map((_, rowIndex) => (
                  <tr key={rowIndex}>
                    {[...Array(4)].map((_, colIndex) => (
                      <td key={colIndex}></td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 3:
        return (
          <div className="output-box">
            <h3>Image Output</h3>
            <div className="output-content empty">This Image box is empty</div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="work">
      <h1 className="WorkTitle">Main Page</h1>
      
      <div className="work-container">
        {/* Left Side - Input Section */}
        <div className="input-section">
          <div className="input-group">
            <label className="input-label">DSL Input</label>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="text-input"
              placeholder="Enter your text here..."
            />
          </div>
          
          <button onClick={handleCopyText} className="copy-button">
            Process the DSL
          </button>
        </div>

        {/* Right Side - Output Section */}
        <div className="output-section">
          {/* Navigation Bar */}
          <div className="nav-container">
            <nav className="tab-navigation">
              {[1, 2, 3].map((tabNumber) => (
                <button
                  key={tabNumber}
                  onClick={() => setActiveTab(tabNumber)}
                  className={`tab-button ${activeTab === tabNumber ? 'active' : ''}`}
                >
                  Box {tabNumber}
                </button>
              ))}
            </nav>
          </div>

          {/* Output Content */}
          <div className="output-container">
            {renderOutputContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;