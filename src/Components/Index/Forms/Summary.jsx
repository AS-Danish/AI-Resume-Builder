import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagic } from '@fortawesome/free-solid-svg-icons';
import { AIChatSession } from '../../../../service/AIModel';

const Summary = ({ summary, handleChange, jobTitle, setSummary }) => {
  const prompt = "Job Title: {jobTitle} , Depends on job title give me summary for my resume within 4-5 lines in JSON format with field experienceLevel and summary with Experience level for Fresher, Mid-Level, Experienced";
  const [aiGeneratedSummaryList, setAiGeneratedSummaryList] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const generateSummaryFromAI = async () => {
    const PROMPT = prompt.replace('{jobTitle}', jobTitle);
    setLoading(true);
    setError(''); // Clear previous errors
    try {
      const result = await AIChatSession.sendMessage(PROMPT);
      const responseText = await result.response.text();

      // Log the response text for debugging
      console.log("AI Response:", responseText);

      // Clean up and parse the response as JSON array
      try {
        // Remove unwanted characters and wrap response in brackets to form a valid JSON array
        const cleanedResponse = `[${responseText.replace(/}\s*{/g, '},{').replace(/,\s*}$/, '}')}]`;

        // Parse the cleaned response
        const parsedResult = JSON.parse(cleanedResponse);
        if (Array.isArray(parsedResult)) {
          setAiGeneratedSummaryList(parsedResult);
        } else {
          throw new Error('Parsed result is not an array');
        }
      } catch (jsonError) {
        console.error("Error parsing JSON:", jsonError);
        setError('Error parsing AI response. Please try again.');
      }
    } catch (apiError) {
      console.error("Error generating summary:", apiError);
      setError('Error generating summary from AI. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSummarySelection = (summaryText) => {
    setSummary(summaryText);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <label 
        htmlFor="summary" 
        className="block text-purple-600 font-semibold mb-2 text-lg"
      >
        Summary
      </label>
      <textarea
        id="summary"
        name="summary"
        value={summary}
        onChange={handleChange}
        rows="4"
        className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
        placeholder="Write a brief summary about yourself"
      />
      <button
        type="button"
        className={`bg-purple-600 text-white px-4 py-2 rounded-md flex items-center hover:bg-purple-700 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={generateSummaryFromAI}
        disabled={loading}
      >
        <FontAwesomeIcon icon={faMagic} className="mr-2" />
        {loading ? 'Generating...' : 'Generate with AI'}
      </button>

      {error && <p className="text-red-600 mt-2">{error}</p>}

      {aiGeneratedSummaryList.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Choose a summary:</h3>
          {aiGeneratedSummaryList.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-md mb-2 cursor-pointer hover:bg-gray-200"
              onClick={() => handleSummarySelection(item.summary)}
            >
              <strong>{item.experienceLevel}:</strong> {item.summary}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Summary;
