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
          <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
            <div id='resume-pdf'>
              <Viewer fileUrl="/GwantanaKiboigo_Resume.pdf" />
            </div>
          </Worker>
        </div>
        <div className="resume-download-box">
          <div id='resume-download-button'>
            <span className="material-symbols-rounded">download</span>
            <a id="download-pdf-link" href="/GwantanaKiboigo_Resume.pdf" download>
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResumePage;