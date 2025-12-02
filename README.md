# SmartPrice - Smart Grocery Price Comparison

SmartPrice is an intelligent grocery price comparison application that helps users find the best deals across multiple online stores like Blinkit, Zepto, and BigBasket. It features AI-powered product insights to help users make informed purchasing decisions.

## Features

*   **Price Comparison**: Compare prices of grocery items across major online retailers.
*   **AI Product Insights**: Get intelligent summaries, nutritional info, and usage tips powered by Google Gemini AI.
*   **Smart Search**: Quickly find products with an intuitive search bar.
*   **Category Filtering**: Browse products by categories like Staples, Dairy, Snacks, etc.
*   **Shopping List**: Add items to your list (feature in progress).
*   **Modern UI**: A clean, responsive, and aesthetically pleasing user interface.

## Tech Stack

*   **Frontend**: React.js, Vite
*   **Styling**: CSS Modules / Vanilla CSS with modern design variables
*   **AI Integration**: Google Gemini API (`@google/generative-ai`)
*   **Icons**: Emoji-based icons for lightweight performance

## Getting Started

### Prerequisites

*   Node.js (v14 or higher)
*   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/ankitprj02/smart-grocery-price-comparison.git
    cd smart-grocery-price-comparison
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Set up Environment Variables:
    *   Create a `.env` file in the root directory.
    *   Add your Gemini API key:
        ```
        VITE_GEMINI_API_KEY=your_api_key_here
        ```

4.  Run the development server:
    ```bash
    npm run dev
    ```


## License

This project is licensed under the MIT License.
