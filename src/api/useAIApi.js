import { useState } from "react"

export function useAIApi() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchMovieName = async (apiKey, userQuery) => {
        setIsLoading(true);
        setError(null);

        try {
            const res = await fetch("https://openrouter.ai/api/v1/chat/completions",{
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${apiKey}`,
                    "Content-Type": "application/json",
                    "HTTP-Referer": "http://localhost:3001",
                    "X-Title": "Movies App"
                },
                body: JSON.stringify({
                    model: "meta-llama/llama-4-scout:free",
                    messages: [
                        {
                          role: "system",
                          content:
                            "Ты помощник, который ищет фильмы по описанию. Пользователь задает описание, ты должен ответить только одним названием одного наиболее подходящего фильма на английском языке, без дополнительных комментариев, не придумывай свои фильмы.",
                        },
                        {
                          role: "user",
                          content: userQuery,
                        },
                      ],
                })
            }
            )
            const data = await res.json();
            return data.choices?.[0]?.message?.content || "Неизвестно";
            
        } catch (err) {
            setError("Ошибка при запросе из AiAPI")
            throw err;
        } finally {
            setIsLoading(false);
        }

    }

    return {fetchMovieName, isLoading, error}
}