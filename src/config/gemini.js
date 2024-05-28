/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = "AIzaSyAAqoJ4mgEpLbGK6vlKdwbcxtB_EPH7Jww";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro-latest",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    safetySettings,
    history: [],
  });

  const result = await chatSession.sendMessage(prompt);
  console.log(result.response.text());
  const response = result.response.text();
  return response;
}

//
// async function run(prompt) {
//   try {
//     const chatSession = model.startChat({
//       generationConfig,
//       safetySettings,
//       history: [],
//     });

//     var stream = true;
//     if (stream) {
//       const result = await chatSession.sendMessageStream(prompt);
//       for await (const item of result.stream) {
//         console.log("Stream chunk: ", item.candidates[0].content.parts[0].text);
//       }
//       const aggregatedResponse = await result.response;
//       console.log(aggregatedResponse.text());
//       return aggregatedResponse.text();
//     } else {
//       const result = await chatSession.sendMessage(prompt);
//       return result.response.text();
//     }
//   } catch (error) {
//     console.error("Error during chat session:", error);
//     throw error; // Re-throw the error after logging or handle it as needed
//   }
// }
//

export default run;
