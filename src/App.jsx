import React, { useState } from "react";
import {
  Container,
  Button,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import axios from "axios";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  const [file, setFile] = useState(null);
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };
  

  const handleQuestionSubmit = async () => {
    if (!file || !question)
      return alert("Please upload a file and ask a question.");

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
          console.log(response.data);
          setResponse(response.data.answer);
        })
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
      setResponse("An error occurred while generating the response.");
    }
    setLoading(false);
  };
  console.log("hii", `${process.env.REACT_APP_API_URL}`);
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleQuestionSubmit();
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        style={{
          padding: "2rem",
          textAlign: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          minHeight: "100vh",
          width: "80vw", // Occupies 80% of the screen width
          margin: "10vh 12%", // Centers the container horizontally
        }}
      >
        <Typography variant="h4" gutterBottom>
          Ask Questions About Your File <DarkModeIcon />
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
            color="primary"
            component="span"
            startIcon={<UploadFileIcon />}
            style={{ margin: "20px 0" }}
          >
            Upload File
          </Button>
        </label>

        {file && <Typography variant="body1">File: {file.name}</Typography>}

        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          label="Ask a Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyPress={handleKeyPress} // Press Enter to submit the question
        />

        <Button
          variant="contained"
          color="secondary"
          onClick={handleQuestionSubmit}
          disabled={loading}
          style={{ margin: "20px 0" }}
        >
          {loading ? <CircularProgress size={24} /> : "Submit Question"}
        </Button>

        {response && (
          <Typography
            variant="h0"
            style={{ marginTop: "2rem", textAlign: "left" }}
          >
            Response: {response}
          </Typography>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default App;
