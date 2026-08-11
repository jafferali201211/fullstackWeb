import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const client= new OpenAI({
    apiKey:process.env.OpenAI_API_kEY
})
export async function reviewCode(code){
 const prompt = `
You are a Senior Angular 19 Architect.

Review this Angular code.

${code}

Check:

1. Angular best practices
2. Strong typing
3. RxJS usage
4. Memory leaks
5. Performance
6. Signals recommendations

Return:

- Issues
- Improvements
- Refactored version
- Score out of 10
`;

  const response = await client.chat.completions.create({
      model: "gpt-4.1",
      messages: [
        {
          role: "user",
          content: prompt
        }
      ]
  });

  return response.choices[0].message.content;
}
