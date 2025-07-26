import UniversalHead from '../components/UniversalHead.jsx';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

function ResumePage() {
  return (
    <>
      <UniversalHead title="Gwantana Kiboigo | Resume" />
      <div id='resume-page'>
        <div id="resume-container">
          <div className="resume-download-box">
            <a id='resume-download-button' href="/GwantanaKiboigo_Resume.pdf" download>
            <span className="material-symbols-rounded">download</span>
            </a>
          </div>
          <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
              <Viewer id='resume-pdf' fileUrl="/GwantanaKiboigo_Resume.pdf" />
          </Worker>
        </div>
      </div>
    </>
  );
}

export default ResumePage;