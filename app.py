from flask import Flask, render_template, request
import pickle
import pandas as pd

app = Flask(__name__)

# Load the XGBoost model
xgboost_model = pickle.load(open('data.pkl', 'rb'))

# Default home route (Index Page)
@app.route('/')
def home():
    return render_template("home.html")

# About Us page route
@app.route("/about")
def about():
    return render_template("about.html")

# Contact Us page route
@app.route("/contact", methods=['POST', 'GET'])
def contact():
    if request.method == 'POST':
        # Get the form data from the contact form
        name = request.form.get('name')
        email = request.form.get('email')
        message = request.form.get('message')
        
        # Here you would save the data or send it via email (this part is up to you)
        
        # Returning a success message after form submission
        return render_template('contact.html', message_sent=True)
    
    return render_template('contact.html', message_sent=False)

# FAQ page route
@app.route("/faq")
def faq():
    return render_template("faq.html")

# Prediction page route
@app.route("/predict", methods=['POST', 'GET'])
def predict():
    if request.method == 'POST':
        # Get user inputs
        SQUARE_FT = request.form.get("SQUARE_FT")
        BHK_NO = request.form.get("BHK_NO")
        city_tier = request.form.get("city_tier")
        RESALE = request.form.get("RESALE")
        READY_TO_MOVE = request.form.get("READY_TO_MOVE")
        RERA = request.form.get("RERA")
        UNDER_CONSTRUCTION = request.form.get("UNDER_CONSTRUCTION")
        
        # Convert inputs to a DataFrame
        input_variables = pd.DataFrame(
            [[BHK_NO, READY_TO_MOVE, RERA, RESALE, SQUARE_FT, UNDER_CONSTRUCTION, city_tier]],
            columns=['BHK_NO', 'READY_TO_MOVE', 'RERA', 'RESALE', 'SQUARE_FT', 'UNDER_CONSTRUCTION', 'city_tier'], 
            dtype=float, 
            index=['input']
        )
        
        # Predict house price
        price = xgboost_model.predict(input_variables)[0]
        price = int(round(price))  # Convert to integer and round off
        
        # Append the word 'Lakhs'
        return render_template("index.html", Price=f"{price}")
    
    return render_template("index.html")


if __name__ == "__main__":
    app.run
