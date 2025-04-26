import { useEffect, useState } from "react";

export default function ExamPage() {
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          alert("Time is up!");
          window.location.href = "https://google.com"; // Or close exam
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h2 className="text-xl font-bold text-center mb-4 text-blue-800">
        Exam in Progress
      </h2>
      <div className="text-center mb-6 text-red-600 font-mono text-2xl">
        Time Left: {formatTime(timeLeft)}
      </div>
      <iframe
        title="Google Form Exam"
        src="https://forms.gle/jnXAtbKy3xeyxykB8"
        width="100%"
        height="700"
        frameBorder="0"
        className="border rounded-lg"
      ></iframe>
    </div>
  );
}
