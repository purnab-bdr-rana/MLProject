import pickle
import pandas as pd
from datetime import datetime
from flask import Flask, render_template, request

with open("xgboost_model.pkl", "rb") as f:
    model = pickle.load(f)

app = Flask(__name__)

@app.context_processor
def inject_current_year():
    return {'current_year': datetime.utcnow().year}

@app.route('/')
def home():
    return render_template('home.html', title="Home")

@app.route('/about')
def about():
    return render_template('about.html', title="About Us")

@app.route('/contact')
def contact():
    return render_template('contact.html', title="Contact Us")

@app.route('/predict', methods=['GET', 'POST'])
def predict():
    prediction = None

    if request.method == 'POST':
        try:
            # Extract data from form
            data = {
                'Calories': float(request.form['Calories']),
                'Age': int(request.form['Age']),
                'Height': float(request.form['Height']),
                'Weight': float(request.form['Weight']),
                'Heart_Rate': float(request.form['Heart_Rate']),
                'Body_Temp': float(request.form['Body_Temp']),
                'Gender': request.form['Gender'],
                'Workout_Type': request.form['Workout_Type']
            }

            input_df = pd.DataFrame([data])
            prediction = model.predict(input_df)[0]
        except Exception as e:
            prediction = f"Error: {str(e)}"

    return render_template('predict.html', prediction=prediction, title="Predict")

if __name__ == '__main__':
    app.run(debug=True)
