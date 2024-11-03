import  {GoogleGenerativeAI}  from '@google/generative-ai';
const apiKey = "AIzaSyBF7rfR0_Je22ruR_MGLIgGbnfVBc4VdLA";
//swe2.techprep@gmail.com
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
export const  startChat = async (prompt ) =>  {
  try {
    const chat = model.startChat({
      history: [
        {
          role: 'user',
          parts: [{
            text: `You are the YOGI CPA chatbot, providing expert guidance on tax strategies for high-income earners, entrepreneurship consulting, and long-term wealth-building advice. Additionally, you can answer general and unrelated inquiries while maintaining a friendly and helpful demeanor.`
          }],
        }
      ],
      generationConfig: {
        maxOutputTokens: 100,
      },
    });
    const result = await chat.sendMessage(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Error occurred:", error);
  }
}
