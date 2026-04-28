
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    // Simulate network latency
    await new Promise((resolve) => setTimeout(resolve, 1500));

    try {
        const { text } = await request.json();

        if (!text) {
            return NextResponse.json({ error: "No text provided" }, { status: 400 });
        }

        const sentiments = ["Yes", "No", "Neutral"];
        const randomSentiment = sentiments[Math.floor(Math.random() * sentiments.length)];

        // Generate realistic looking confidence score
        const confidence = Math.floor(Math.random() * (98 - 60 + 1)) + 60;

        const explanations = {
            "Yes": "This policy aligns well with current public sentiment, particularly in regards to improving efficiency and transparency. Initial data suggests strong support from key demographics.",
            "No": "The proposed policy may face significant pushback due to perceived privacy concerns and potential implementation costs. Historical data indicates a cautious public stance on similar measures.",
            "Neutral": "Public sentiment appears divided. While the goals are appreciated, there are concerns about the practical execution. Further community engagement is recommended to clarify benefits."
        };

        const explanation = explanations[randomSentiment as keyof typeof explanations];

        return NextResponse.json({
            sentiment: randomSentiment,
            confidence: confidence,
            explanation: explanation,
            timestamp: new Date().toISOString(),
        });

    } catch (error) {
        return NextResponse.json({ error: "Analysis failed" }, { status: 500 });
    }
}
