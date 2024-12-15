# House Price Prediction

This repository hosts the **House Price Prediction** project, a web-based application designed to predict house prices in India using machine learning. The application leverages the **XGBoost** model for accurate price predictions based on various property features. It integrates a user-friendly front-end built with HTML, CSS, and JavaScript and is powered by the **Flask** framework for back-end operations.

## Features

### Web Pages
1. **Home Page**
   - Provides an overview of the project and its purpose.
   - Features a clean and responsive design.

2. **Prediction Page**
   - Allows users to input property details such as location, area, number of rooms, etc.
   - Displays the predicted house price after submission.

3. **About Us Page**
   - Contains information about the project, its creators, and the technologies used.

4. **Contact Us Page**
   - Provides a form for users to reach out with queries or feedback.

5. **FAQ Page**
   - Answers common questions about the project and its functionality.

### Machine Learning
- **Model Used**: XGBoost (Extreme Gradient Boosting), a powerful and efficient ML model for regression tasks.
- **Dataset**: Indian real estate data, preprocessed to ensure high prediction accuracy.
- **Features**: Considers key property attributes such as location, size, amenities, and more.

### Technology Stack
- **Front-end**: HTML, CSS, JavaScript (for dynamic and responsive user interfaces).
- **Back-end**: Flask (Python framework for routing and server-side logic).
- **Machine Learning**: XGBoost model integrated with Flask for real-time predictions.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Yashyc27/House-Price-Prediction.
   cd house-price-prediction
   ```

2. Set up a virtual environment (optional but recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate # On Windows: venv\Scripts\activate
   ```

3. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the application:
   ```bash
   python app.py
   ```

5. Open your browser and navigate to `http://127.0.0.1:5000/`.

## Folder Structure
```
house-price-prediction/
├── static/
│   ├── css/         # Stylesheets
│   ├── js/          # JavaScript files
│   └── images/      # Images and icons
├── templates/       # HTML templates
├── models/          # Machine learning model and related files
├── app.py           # Main Flask application
├── requirements.txt # Python dependencies
├── README.md        # Project description
```

## Contributing

Contributions are welcome! If you have ideas for improvements or encounter issues, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

For any questions or feedback, please reach out via the **Contact Us** page on the website or open an issue on GitHub.

