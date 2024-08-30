import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import ResumePreview from './ResumePreview';

const SuccessPage = ({ formData }) => {
  const resumeRef = useRef();

  const handleDownload = async () => {
    const resumeElement = resumeRef.current;

    if (!resumeElement) {
      console.error('ResumePreview element not found');
      return;
    }

    try {
      // Capture the HTML content as a canvas
      const canvas = await html2canvas(resumeElement, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#fff',
        width: resumeElement.scrollWidth,
        height: resumeElement.scrollHeight,
        scrollX: 0,
        scrollY: 0,
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210; // A4 width in mm
      const pageHeight = pdf.internal.pageSize.height; // A4 page height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width; // Height of the image in mm

      let heightLeft = imgHeight;
      let position = 0;

      // Add the first page
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Add additional pages if content overflows
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('Your_Resume.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <div className="p-8 flex flex-col items-center min-h-screen bg-white">
      <div className="w-full max-w-3xl bg-white rounded-xl p-8 space-y-6">
        <div className="text-center">
          <button
            className="bg-purple-600 text-white px-6 py-2 rounded-lg mb-6 hover:bg-purple-700 transition duration-300 transform hover:scale-105"
            onClick={handleDownload}
          >
            Download Resume
          </button>
          <h1 className="text-3xl font-bold text-[#ff6666] mb-4">
            Success! Your Resume is Ready
          </h1>
          <p className="text-gray-700 mb-6">
            Congratulations! You have successfully created your resume. You can now download it and use it for your job applications. If you need any further modifications or have any questions, feel free to reach out. Good luck with your job search!
          </p>
        </div>

        <div
          ref={resumeRef}
          className="resume-preview-container border border-gray-300 rounded-lg p-6"
          style={{
            width: '100%', // Adjust width to fit container
            minHeight: '297mm', // Ensure A4 height
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
            backgroundColor: '#ffffff', // Ensure the background is white
            boxShadow: 'none', // Remove the shadow
          }}
        >
          <ResumePreview formData={formData} />
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
