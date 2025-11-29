import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are an expert Project Management Consultant for 'FlowState', a modern project management platform.
Your goal is to help users identify which of the "7 Hidden Project Management Mistakes" applies to their situation.

The 7 Mistakes are:
1. Treating Your Inbox Like a Project Manager (Fix: Centralize Source of Truth)
2. The "Status Update" Meeting Trap (Fix: Asynchronous Reporting)
3. Failing to Define Task Dependencies (Fix: Visualize the Workflow)
4. The "Just One Small Thing" Syndrome/Scope Creep (Fix: The "Icebox" Method)
5. Assigning Tasks to "The Team" (Fix: The DRI Model - Directly Responsible Individual)
6. Ignoring Capacity Planning (Fix: Workload Management Views)
7. Using Too Many Disconnected Tools (Fix: The All-in-One Ecosystem)

When a user describes their work problem, analyze it and map it to one or more of these mistakes. 
Explain *why* it's hurting them and suggest the specific Fix mentioned above.
Keep your tone professional, empathetic, and solution-oriented. 
Keep responses concise (under 150 words).
`;

export const getGeminiAdvice = async (userProblem: string): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please configure the environment.";
  }

  try {
    const model = "gemini-2.5-flash";
    const response = await ai.models.generateContent({
      model: model,
      contents: userProblem,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    return response.text || "I couldn't generate a specific solution right now. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm having trouble connecting to the consultant service right now.";
  }
};
