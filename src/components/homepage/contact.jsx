import React, { useState, useRef } from "react";

const Contact = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const [audioBlob, setAudioBlob] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const mediaRecorderRef = useRef(null);
  const audioChunks = useRef([]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);
    audioChunks.current = [];

    mediaRecorderRef.current.ondataavailable = (event) => {
      if (event.data.size > 0) {
        audioChunks.current.push(event.data);
      }
    };

    mediaRecorderRef.current.onstop = () => {
      const blob = new Blob(audioChunks.current, { type: "audio/webm" });
      const url = URL.createObjectURL(blob);
      setAudioBlob(blob);
      setAudioUrl(url);
    };

    mediaRecorderRef.current.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  };

  const handleDeleteRecording = () => {
    setAudioUrl(null);
    setAudioBlob(null);
    audioChunks.current = [];
  };

  const handleSend = async (e) => {
    e.preventDefault();

    if (!fullName || !email || !audioBlob) {
      alert("Please fill all fields and record a voice note.");
      return;
    }

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("voiceNote", audioBlob, "voice-message.webm");

    try {
      // Example: replace with your actual endpoint
      const response = await fetch("/api/send-voice", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFullName("");
        setEmail("");
        handleDeleteRecording();
      } else {
        alert("Failed to send message.");
      }
    } catch (err) {
      alert("Error sending message.");
      console.error(err);
    }
  };

  return (
    <div className="py-20 px-6 md:px-10 lg:px-40">
      <h2 className="text-center text-5xl font-bold leading-tight">
        Skip the Form, Let's Talk
      </h2>
      <p className="w-full lg:w-1/2 mx-auto text-center my-10">
        We mean it - just send us a Voice Message, sharing your story and goals.
        We'll get back to you from partner@saascend.com immediately
      </p>
      <div className="w-3/4 mx-auto flex flex-col lg:flex-row justify-between items-center gap-10">
        <img src="/lets-talk.webp" alt="Let's Talk" className="max-w-sm" />
        <div className="bg-black rounded-lg px-10 py-8 w-full lg:w-[480px]">
          <h3 className="text-white text-xl pb-6">Voice Message</h3>
          <form onSubmit={handleSend} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="border border-white px-6 py-3 rounded-lg placeholder:text-gray-300 bg-transparent text-white"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-white px-6 py-3 rounded-lg placeholder:text-gray-300 bg-transparent text-white"
            />

            <div className="flex items-center gap-4 flex-wrap">
              {!isRecording ? (
                <span
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full px-5 py-4 flex items-center justify-center cursor-pointer"
                  onClick={startRecording}
                >
                  <img src="/microphone.svg" className="h-6" />
                </span>
              ) : (
                <span
                  className="bg-gray-600 rounded-full px-4 py-3 flex items-center justify-center cursor-pointer"
                  onClick={stopRecording}
                >
                  <img src="/microphone.svg" className="h-6" />
                </span>
              )}

              {audioUrl && (
                <>
                  <audio controls src={audioUrl} className="mt-2 w-full" />
                  <button
                    type="button"
                    onClick={handleDeleteRecording}
                    className="text-red-500 underline text-sm mt-2"
                  >
                    Delete recording
                  </button>
                </>
              )}
            </div>
            <button
              type="submit"
              className="bg-white text-black px-6 py-3 rounded-lg mt-4 hover:bg-gray-200"
            >
              Send Voice Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
