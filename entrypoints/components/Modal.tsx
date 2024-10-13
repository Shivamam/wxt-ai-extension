import { useState } from "react";
import GenerateIcon from "../../assets/generate-icon.svg";
import RegenerateIcon from "../../assets/regenerate-icon.svg";
import InsertIcon from "../../assets/insert-icon.svg";

// This Modal component is called out in the AiReplyIcon component which provides all the features of our extension. 
// 1. Once the modal opens up the user has to add a prompt and get the response, since I am not making any API call 
//    right now I am using a dummy text as a response.  
// 2. I am starting with giving initial states to the required variables using useState so that I can keep track of the states furhter.
// 3. The inpput field in the modal is controlled by the "userPrompt".
// 4. The "handleGenerate" function takes care of proving the response back to the user, it also changes the "Generate" button to "Regenerate" button.
// 5. The "handleInsert" button adds the response text to the initial chat input field
interface ModalProps {
    onClose: () => void;
  }
  
  const Modal = ({ onClose }: ModalProps) => {
    const [userPrompt, setUserPrompt] = useState("");
    const [isGenerated, setIsGenerated] = useState(false);
    const [userPromptDisplay, setUserPromptDisplay] = useState("");
    const [generatedResponse, setGeneratedResponse] = useState("");
  
    const handleGenerate = () => {
      if (userPrompt.trim() === "") {
        alert("Please enter a prompt!");
        return;
      }
  
      setGeneratedResponse(
        "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask."
      );
  
      setUserPromptDisplay(userPrompt); 
      setUserPrompt(""); 
      setIsGenerated(true); 
    };
  
    const handleInsert = () => {
        const messageInput = document.querySelector(".msg-form__contenteditable") as HTMLElement;
      
        if (messageInput) {
          console.log("Inserting response:", generatedResponse);
          const pTag = document.createElement("p");
          pTag.innerText = generatedResponse;
      
          messageInput.innerHTML = "";
          messageInput.appendChild(pTag);
      
          const event = new Event("input", { bubbles: true });
          messageInput.dispatchEvent(event);
      
          console.log("Closing modal after insert");
          onClose();
        }
      };
      
    return (
      <div
        className="custom-modal fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        <div
          className="bg-[#F9FAFB] w-[555px] min-h-[118px] p-6 rounded-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col mx-auto gap-4">
            {userPromptDisplay && (
              <p
                id="userPromptDisplay"
                className="bg-[#DFE1E7] p-2 px-4 rounded-lg text-[#666D80] text-[15.3px] max-w-[301px] min-h-[44px] self-end inline-flex items-center"
              >
                {userPromptDisplay}
              </p>
            )}
            {generatedResponse && (
              <div
                id="responseContainer"
                className="bg-[#DBEAFE] p-2 px-4 rounded-lg text-[#666D80] self-start max-w-[402px] min-h-[91px] inline-flex items-center"
              >
                {generatedResponse}
              </div>
            )}
            <input
              type="text"
              value={userPrompt}
              onChange={(e) => setUserPrompt(e.target.value)}
              placeholder="Your prompt"
              className="!bg-white font-medium text-[#666D80] shadow-[0px_2px_4px_#0000001F_inset] border border-[#c1c7d0] p-2 rounded-lg w-full h-[61px] text-[15.3px] leading-[18.5px]"
              style={{
                color: "#666D80",
                fontWeight: 500,
                boxShadow: "0px 2px 4px 0px #0000000F inset",
                border: "1px solid #c1c7d0",
              }}
            />
            <div className="w-full flex justify-end !mt-[10px] gap-x-5">
              <button
                id="insertButton"
                onClick={handleInsert}
                className={`inline-flex justify-center items-center gap-1 bg-white min-w-[82px] h-[34px] border-[#666D80] border-2 rounded-lg font-semibold text-2xl border-solid text-[#666D80] ${
                  isGenerated ? "" : "hidden"
                }`}
              >
                <img
                  src={InsertIcon}
                  alt="Insert Icon"
                  className="w-[12px] h-[10px]"
                />
                <div>Insert</div>
              </button>
              <button
                id="generateButton"
                onClick={handleGenerate}
                className={`gap-1 bg-[#3B82F6] w-[121px] h-[34px] text-white px-4 py-2 rounded-lg font-semibold text-2xl flex items-center justify-center`}
              >
                <img
                  src={isGenerated ? RegenerateIcon : GenerateIcon}
                  alt={isGenerated ? "Regenerate Icon" : "Generate Icon"}
                  className="w-[15px] h-[16px] mr-2"
                />
                <div>{isGenerated ? "Regenerate" : "Generate"}</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Modal;