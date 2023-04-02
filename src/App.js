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
    <>
      {/* <PDFViewer className='h-[38rem] w-[40rem]'>
        <TemplateOne />
      </PDFViewer>
      <PDFDownloadLink document={<TemplateOne />} fileName="somename.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink> */}
      {/* <SignUp></SignUp> */}
      {/* <Login></Login> */}
      <ResumeForm/>
      {/* <PersonalDetails/> */}
      {/* <ProfessionalSummary/> */}
      {/* <EmploymentHistory/> */}
      {/* <SocialLinks/> */}
      {/* <Project/> */}
    </>
  );
}

export default App;
