import StickIcon from "../../assets/stick-icon.svg";
import { useState } from "react";
import Modal from "./Modal";

// In this AiReplyIcon Component my approach is as follows,
// 1. Firstly, I am using targeting the linkedin's chat input element with "attachFocusListeners"
//    function and checking feeding that input class to the "injectIconIntoInput" function only when
//    it focused by the user which adds the icon to the chat input if not present.
// 2. Next, On Clicking the injected icon opens a modal. I am using "useState" to manage modal visibility (showModal).
// 3. Lastly, for this Modal I have added further used MutationObserver to ensure the icon is injected to the DOM even 
// if there's a change like the input field is dynamically loaded.

const AiReplyIcon = () => {
  const [showModal, setShowModal] = useState(false);

  const injectIconIntoInput = (inputEditor: HTMLElement) => {
    if (inputEditor.querySelector(".custom-icon")) {
      return;
    }

    inputEditor.style.position = "relative";

    const iconContainer = document.createElement("span");
    iconContainer.className =
      "custom-icon absolute right-1.5 bottom-1.5 shadow-lg p-2.5 rounded-full bg-white cursor-pointer";

    const icon = document.createElement("img");
    icon.src = StickIcon;
    icon.alt = "Custom Icon";
    icon.className = "w-4 h-4";

    iconContainer.appendChild(icon);
    inputEditor.appendChild(iconContainer);

    console.log("Icon injected into LinkedIn chat input box!");

    iconContainer.addEventListener("click", () => {
      setShowModal(true); 
    });
  };

  const attachFocusListeners = () => {
    const inputEditor = document.querySelector(
      ".msg-form__contenteditable"
    ) as HTMLElement;
  
    if (inputEditor) {
      inputEditor.addEventListener("focus", () => injectIconIntoInput(inputEditor));
      
      inputEditor.addEventListener("blur", () => {
        const icon = inputEditor.querySelector(".custom-icon");
        if (icon) {
          icon.remove();
        }
      });
    }
  };

  useEffect(() => {
    attachFocusListeners();

    const observer = new MutationObserver(() => {
      attachFocusListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  return showModal ? <Modal onClose={() => setShowModal(false)} /> : null;

};

export default AiReplyIcon;
