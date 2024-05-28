import React from 'react';
import PropTypes from 'prop-types';

const CodeBlock = ({ code, language }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      alert('Copied to clipboard!');
    }).catch((err) => {
      console.error('Failed to copy text: ', err);
    });
  };

  return (
    <div className="code-block">
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
      <button onClick={copyToClipboard}>Copy</button>
      <style jsx>{`
        .code-block {
          position: relative;
          background-color: #f5f5f5;
          border: 1px solid #ddd;
          border-radius: 4px;
          padding: 16px;
          margin-bottom: 16px;
        }
        pre {
          margin: 0;
          overflow: auto;
        }
        button {
          position: absolute;
          top: 8px;
          right: 8px;
          background-color: #007bff;
          color: white;
          border: none;
          padding: 8px 12px;
          border-radius: 4px;
          cursor: pointer;
        }
        button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

CodeBlock.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string
};

CodeBlock.defaultProps = {
  language: 'javascript'
};

export default CodeBlock;
