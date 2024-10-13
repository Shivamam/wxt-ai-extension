// This "content.tsx" file is for injecting a custom component "AiReplyIcon" to the Linkedin web page.
import AiReplyIcon from "./components/AiReplyIcon";
import { createRoot } from "react-dom/client";
import "../assets/style.css";

export default defineContentScript({
  matches: ["https://www.linkedin.com/*"],
  async main() {
    console.log("=====Linkedin AI Reply Extension Working======");

    const container = document.createElement("div");
    container.id = "react-root";
    document.body.appendChild(container);

    const root = createRoot(container);
    root.render(<AiReplyIcon />);
  },
});
