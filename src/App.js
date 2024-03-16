import { React } from 'react';
import TemplateOne from './Templates/TemplateOne';
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import ResumeForm from './Components/ResumeForm';
import PersonalDetails from './Components/Forms/PersonalDetails';
import ProfessionalSummary from './Components/Forms/ProfessionalSummary';
import EmploymentHistory from './Components/Forms/EmploymentHistory';
import SocialLinks from './Components/Forms/SocialLinks';
import Project from './Components/Forms/Project';

function App() {

  return (
    <div className='flex max-h-fit' >


      {/* <SignUp></SignUp> */}
      {/* <Login></Login> */}
      {/* <PersonalDetails/> */}
      {/* <ProfessionalSummary/> */}
      {/* <EmploymentHistory/> */}
      {/* <SocialLinks/> */}
      {/* <Project/> */}
      <ResumeForm />
      <div>
        <PDFViewer height={'00px'} className='h-[100vh] w-[40rem]'>
          <TemplateOne />
        </PDFViewer>
        {/* <PDFDownloadLink document={<TemplateOne />} fileName="somename.pdf">
          {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink> */}
      </div>
      {/* <TemplateOne /> */}
    </div>
  );
}

export default App;
