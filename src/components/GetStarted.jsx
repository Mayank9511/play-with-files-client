import React, { useState } from "react";
import { Button, TextField, CircularProgress, Typography } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import axios from "axios";

const GetStarted = () => {
  const [file, setFile] = useState(null);
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile && selectedFile.size > 10 * 1024 * 1024) {
      alert("File size exceeds the 10MB limit. Please upload a smaller file.");
      setFile(null);
      return;
    }

    setFile(selectedFile);
  };

  const handleQuestionSubmit = async () => {
    if (!file) return alert("Please upload a file and then ask a question.");

    if (!question) {
      setQuestion("Explain the content of this file in brief.");
    }
    const formData = new FormData();
    formData.append("file", file);
    formData.append("question", question);

    setLoading(true);
    try {
      const res = await axios
        .post("https://play-with-files-server.onrender.com/api/ask", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          setResponse(response.data.answer);
        })
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
      setResponse("An error occurred while generating the response.");
    }
    setLoading(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleQuestionSubmit();
    }
  };

  return (
    <div
      id="getStartedSection"
      className="flex flex-col border-t py-20 border-neutral-700"
    >
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Upload and{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          Ask!
        </span>
      </h2>
      <div className="mt-[5vh] flex flex-grow flex-wrap">
        {/* Left Box - File Upload and Question (30% Width) */}
        <div className="w-full sm:w-1/2 lg:w-[30%] p-2">
          <div className="p-10 border border-neutral-700 rounded-xl h-full flex flex-col justify-between">
            <div>
              <Typography variant="h8" gutterBottom>
                Upload any file eg. pdf, text, image, audio except video (size
                upto 10mb).
              </Typography>
              <input
                accept=".pdf,.jpeg,.jpg,.png,.webp,.heic,.heif,.wav,.mp3,.aiff,.aac,.ogg,.flac,.js,.py,.txt,.html,.css,.md,.csv,.xml,.rtf"
                style={{ display: "none" }}
                id="file-upload"
                type="file"
                onChange={handleFileUpload}
              />
              <label htmlFor="file-upload">
                <Button
                  variant="contained"
                  color="secondary"
                  component="span"
                  startIcon={<UploadFileIcon />}
                  style={{ margin: "20px 0", width: "100%" }}
                >
                  Upload File
                </Button>
              </label>

              {file && (
                <Typography variant="body2">File: {file.name}</Typography>
              )}
            </div>
            <div>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                label="Ask a Question"
                value={question}
                color="secondary"
                focused
                onChange={(e) => setQuestion(e.target.value)}
                onKeyPress={handleKeyPress}
                InputProps={{
                  style: { color: "white" }, // Sets the text color to white
                }}
              />

              <Button
                variant="contained"
                // color="secondary"
                onClick={handleQuestionSubmit}
                disabled={loading}
                style={{ margin: "20px 0", width: "100%" }}
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-5 px-4 mx-3 rounded-md"
              >
                {loading ? (
                  <CircularProgress style={{ color: "white" }} size={24} />
                ) : (
                  "Submit Question"
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Right Box - Response (70% Width) */}
        <div className="w-full sm:w-1/2 lg:w-[70%] p-2">
          <div className="p-10 border border-neutral-700 rounded-xl h-full">
            <Typography variant="h5" gutterBottom>
              Response:
            </Typography>

            <div className="max-h-[70vh] sm:h-[50vh] overflow-y-auto">
              {response ? (
                <Typography
                  variant="body1"
                  style={{ marginTop: "2rem", whiteSpace: "pre-line" }}
                >
                  {response}
                </Typography>
              ) : (
                <Typography variant="body1" style={{ marginTop: "2rem" }}>
                  No response yet.
                </Typography>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
