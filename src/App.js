import { React } from 'react';
import TemplateOne from './Templates/TemplateOne';
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";

function App() {

  return (
    <>
      <PDFViewer className='h-[38rem] w-[40rem]'>
        <TemplateOne />
      </PDFViewer>
      <PDFDownloadLink document={<TemplateOne />} fileName="somename.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink>
    </>
  );
}

export default App;
