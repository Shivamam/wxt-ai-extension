# Chrome Extension: LinkedIn AI Assistant

## Project Overview

This project is a Chrome extension built using **React** and **TypeScript**, styled with **Tailwind CSS**, and created using the **WXT framework**. The extension enhances user interaction on LinkedIn by providing an AI icon that activates when the user focuses on the message input field.

## Key Features

1. **AI Icon Visibility**: The AI icon appears when the LinkedIn message input field is focused and disappears when it loses focus.
2. **Modal Display**: Clicking the icon opens a center-aligned modal.
3. **Modal Closure**: Clicking outside the modal will close it.
4. **User Input**: Users can enter commands in the modal's input field.
5. **Response Generation**: Clicking the “Generate” button displays a static response:
   > "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask."
6. **Non-functional Regenerate Button**: The “Regenerate” button does not perform any action.
7. **Text Insertion**: Users can insert the generated text into the LinkedIn message input field by clicking an insert button.

## Installation Instructions

To install this Chrome extension, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone (https://github.com/Shivamam/wxt-ai-extension.git)
   cd wxt-ai-extension
   
2. **Install Dependencies**:
    Ensure you have Node.js installed, then run:
    ```pnpm install```

3. Build the Project:
   Build the project using:
   ```pnpm run dev```

4. Load the Extension in Chrome:
    * Open Chrome and navigate to chrome://extensions/.
    * Enable "Developer mode" at the top right corner.
    * Click on "Load unpacked" and select the build directory of your project.

5. Testing:
   Navigate to LinkedIn, focus on a message input field, and test the functionality of the extension.


### Demo Video of the Output


https://github.com/user-attachments/assets/3b6853f3-f80e-41d2-8e0b-a709b17a87c7


