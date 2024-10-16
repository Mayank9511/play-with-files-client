import { MdRecordVoiceOver } from "react-icons/md";
import { AiOutlineFileText } from "react-icons/ai";
import { FaImage } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { RiTranslate2 } from "react-icons/ri";
import { FaTable } from "react-icons/fa";

export const features = [
  {
    icon: <MdRecordVoiceOver />,
    text: "Create a Transcript",
    description:
      "Upload an audio file (WAV, MP3, etc.) and ask the app to create a transcript of the conversation. You can also request time stamps for each section.",
  },
  {
    icon: <AiOutlineFileText />,
    text: "Summarize a Document",
    description:
      "Upload a PDF or text file and ask for a concise summary of the key points, helping you quickly grasp the main ideas.",
  },
  {
    icon: <FaImage />,
    text: "Extract Key Information from Images",
    description:
      "Upload an image (JPEG, PNG, etc.) and ask questions like 'What is in this picture?' or 'What text does this image contain?' for text recognition.",
  },
  {
    icon: <SiJavascript />,
    text: "Analyze Code",
    description:
      "Upload JavaScript or Python files and ask questions like “What does this function do?” or “Can you improve this code?” to get insights and suggestions.",
  },
  {
    icon: <RiTranslate2 />,
    text: "Translate Texts",
    description:
      "Upload a text file (TXT, HTML, Markdown) in one language and ask the app to translate it into another language.",
  },
  {
    icon: <FaTable />,
    text: "Get CSV Data Insights:",
    description:
      'Upload a CSV file and ask questions like "What are the top 5 entries?" or "Give me a summary of this data," and the app will analyze it for you.',
  },
];

export const resourcesLinks = [
  { href: "mailto:gupta.mayank.mg02@gmail.com", text: "Mail" },
  {
    href: "https://www.linkedin.com/in/mayank-gupta-aa1028208",
    text: "LinkedIn",
  },
];
