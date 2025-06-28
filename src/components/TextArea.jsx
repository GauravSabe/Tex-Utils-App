import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

export default function TextArea() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const [text, setText] = useState('');
  const [emails, setEmails] = useState([]);
  const [charCount, setCharCount] = useState(0);
  const [charCountNoSpace, setCharCountNoSpace] = useState(0);

  const [selectedWord, setSelectedWord] = useState('');
  const [definitionData, setDefinitionData] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    setCharCount(text.length);
    setCharCountNoSpace(text.replace(/\s+/g, '').length);
  }, [text]);

  const handleUppercase = () => setText(text.toUpperCase());
  const handleLowercase = () => setText(text.toLowerCase());
  const handleClear = () => setText('');
  const handleJoinHyphen = () => setText(text.trim().split(/\s+/).join('-'));
  const handleRemoveHyphen = () => setText(text.replace(/-/g, ' '));
  const handleRemoveDoubleSpace = () => setText(text.replace(/\s+/g, ' '));
  const handleExtractEmails = () => {
    const foundEmails = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g);
    setEmails(foundEmails || []);
  };

  const getSelectedText = () => {
    const selectedText = window.getSelection().toString().trim();
    setSelectedWord(selectedText);
  };

  const handleDefineWord = async () => {
    if (!selectedWord) {
      setErrorMsg('Please select a word to define.');
      return;
    }

    try {
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${selectedWord}`);
      const data = await res.json();

      if (res.ok) {
        setDefinitionData(data[0]);
        setErrorMsg('');
      } else {
        setErrorMsg(data.title || 'Definition not found');
        setDefinitionData(null);
      }
    } catch (err) {
      setErrorMsg('API error: ' + err.message);
      setDefinitionData(null);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'transformed_text.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  const wordCount = text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length;
  const readTime = wordCount / 200;

  return (
    <div className={`p-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}>
      <textarea
        className="w-full p-4 rounded border resize-none h-40 focus:outline-none"
        placeholder="Enter your Text to Analyze below"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onMouseUp={getSelectedText}
      ></textarea>

      {/* Buttons */}
      <div className="flex flex-wrap gap-3 mt-4">
        <button onClick={handleUppercase} className="btn">UPPERCASE</button>
        <button onClick={handleLowercase} className="btn">lowercase</button>
        <button onClick={handleClear} className="btn">Clear</button>
        <button onClick={handleJoinHyphen} className="btn">Join with -</button>
        <button onClick={handleRemoveHyphen} className="btn">Remove -</button>
        <button onClick={handleRemoveDoubleSpace} className="btn">Remove Extra Spaces</button>
        <button onClick={handleExtractEmails} className="btn">Extract Email</button>
        <button onClick={handleDownload} className="btn">Download Text</button>
        <button onClick={handleDefineWord} className="btn">Define Word</button>
      </div>

      {/* Summary */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold">Text Summary</h2>
        <p>Word Count: {wordCount}</p>
        <p>Character Count: {charCount}</p>
        <p>Character Count (No Spaces): {charCountNoSpace}</p>
        <p>Estimated Reading Time: {readTime.toFixed(2)} minutes</p>
      </div>

      {/* Email Extracted */}
      {emails.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold">Extracted Emails:</h3>
          <ul className="list-disc ml-6">
            {emails.map((email, idx) => <li key={idx}>{email}</li>)}
          </ul>
        </div>
      )}

      {/* Live Preview */}
      <div className="mt-6 p-4 border rounded">
        <h2 className="text-lg font-semibold">Live Preview</h2>
        <p className="mt-2">{text.trim().length > 0 ? text : 'Nothing to preview!'}</p>
      </div>

      {/* Dictionary Definition */}
      {definitionData && (
        <div className="mt-6 p-4 border rounded bg-blue-50 text-black">
          <h2 className="font-semibold text-lg">Definition: {definitionData.word}</h2>
          {definitionData.meanings.map((meaning, i) => (
            <div key={i} className="mt-2">
              <p><strong>Part of Speech:</strong> {meaning.partOfSpeech}</p>
              {meaning.definitions.map((def, j) => (
                <div key={j} className="mb-2">
                  <p>➤ {def.definition}</p>
                  {def.example && <p className="italic text-gray-700">Example: {def.example}</p>}
                  {def.synonyms?.length > 0 && <p>Synonyms: {def.synonyms.join(', ')}</p>}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {errorMsg && (
        <div className="mt-4 p-2 bg-red-200 text-red-800 rounded">{errorMsg}</div>
      )}
    </div>
  );
}
