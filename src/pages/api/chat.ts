import { NextApiResponse } from "next";
import { NextResponse, NextRequest } from "next/server";

const createScript = (question: string, cards: string, type: string) => {
  return `
    내가 질문과 뽑은 ${
      type == "tarot" ? "타로" : "심볼론"
    }카드를 알려주면 해석해서 알려줘.
    질문: ${question}
    뽑은 카드: ${cards}
    각 카드별로 해석한 결과를 개행문자로 구분해서 결과를 보내줘.
    그리고 마지막에는 전체적인 해석도 넣어줘
    `;
};

export default async function handler(req: NextRequest, res: NextApiResponse) {
  try {
    let requests: any = req.body;
    requests = JSON.parse(requests);

    const { question, cards, type } = requests;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_SECRET_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: createScript(question, cards, type),
          },
        ],
        temperature: 1,
        max_tokens: 500,
      }),
    });

    const responseData = await response.json();
    const wordsData = responseData.choices[0].message.content;

    return res.status(200).json({ message: wordsData });
  } catch (error) {
    return res.status(500).end();
  }
}
