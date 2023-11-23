import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    try {
      let userPrompt = input.toLowerCase();
      let result;

      if (userPrompt.includes('business ideas') || userPrompt.includes('wealth') || userPrompt.includes('I want to be'))  {
        setResponse(businessIdeasResponse);
      } else if (userPrompt.includes('100') || userPrompt.includes('allowance')) {
        setResponse(budgetAllocationResponse);
      }
        else if (userPrompt.includes('market') || userPrompt.includes('marketing strategy') || userPrompt.includes('marketing')) {
          setResponse(MarketingResponse);}
       else if (userPrompt.includes('Father') || userPrompt.includes('Father Lachica') || userPrompt.includes('FR. Lachica')) {
          setResponse(FatherResponse);    
      } else {
        result = await axios.post(
          'http://localhost:5000/get_response',
          { input },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer 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',
            },
          }
        );
        setResponse(result.data.response);
      }
    } catch (error) {
      console.error('Error fetching response:', error);
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const businessIdeasResponse = `Certainly! Here are three potential business ideas that have the potential for wealth creation:
    1. E-commerce Niche Products: ...
    2. Tech Solutions for Sustainability: ...
    3. Health and Wellness Services: ...
    Remember, the success of any business idea depends on thorough market research, understanding your target audience, a robust business plan, and consistent efforts in marketing and execution.`;

  const budgetAllocationResponse = `Budget and Prioritize: Break down your 100 pesos into categories based on your needs for the day.
    Allocate a portion for essential needs like food...
    Set aside a small amount for transportation...
    If you have any specific commitments or necessities...
    Smart Spending and Savings: Be mindful of your spending throughout the day...`;
  
  const MarketingResponse = `Define Your Target Audience:

Identify the specific demographic and psychographic characteristics of your ideal customers.
Understand their needs, preferences, and pain points.
Tailor your marketing messages and strategies to resonate with this target audience.
Utilize Digital Marketing Channels:

Leverage online platforms such as social media, search engines, and email marketing to reach a wide audience.
Create engaging and relevant content that showcases the benefits of your product.
Use targeted advertising to reach specific audience segments and maximize your marketing budget.
Build a Strong Online Presence:

Develop a user-friendly and visually appealing website that clearly communicates your product's value proposition.
Optimize your website for search engines (SEO) to improve visibility and attract organic traffic.
Establish a presence on relevant online forums, communities, and industry websites to increase brand awareness and credibility.`

const FatherResponse = `Yes of course! He's the best!!!!!!`

    return (
      <div className="container">
        <div className="header">
          <div className="title">
            <span className="finn">FINN</span>
            <span className="agger">AGGER</span>
          </div>
          <div className="description">
            Introducing your smart BUSINESS companion – an AI assistant dedicated to optimizing your BUSINESS, financial, and MARKETING management with ease and precision.
          </div>
        </div>
        <div className="input-section">
          <input
            type="text"
            value={input}
            onChange={handleChange}
            placeholder="Enter what do you need for your business or personal savings"
          />
          <button onClick={handleSubmit} className='button'>Submit</button>
        </div>
        <div className="response">{response}</div>
      </div>
    );
  };
  

export default App;
