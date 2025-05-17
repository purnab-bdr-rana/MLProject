# 💪 FitPulse AI

**FitPulse AI** is a machine learning-powered fitness assistant that predicts the **estimated workout duration** required to burn a specified number of calories. By inputting personal and workout-related data, users receive personalized predictions to help optimize their fitness plans.

Built using **XGBoost**, one of the most powerful and efficient gradient boosting algorithms, FitPulse AI offers accurate, data-driven guidance for fitness enthusiasts, trainers, and app developers.

---

## 🚀 Key Features

- 🔥 Predicts **workout duration** based on calories to burn
- 🧠 Powered by **XGBoost** for high-performance predictions
- 🧍 Personalized results using biometric and activity data
- 🛠️ Easy integration with fitness apps or health platforms

---

## 📥 Required User Input

To generate a prediction, FitPulse AI expects the following information from the user:

| Field         | Description                                      | Example             |
|---------------|--------------------------------------------------|---------------------|
| `Calories`    | Target number of calories to burn                | `300`               |
| `Age`         | Age of the user in years                         | `25`                |
| `Height`      | Height of the user in centimeters                | `170`               |
| `Weight`      | Weight of the user in kilograms                  | `68`                |
| `Heart_Rate`  | Current heart rate in beats per minute (BPM)     | `120`               |
| `Body_Temp`   | Body temperature in degrees Fahrenheit            | `98.6`              |
| `Gender`      | User's gender                                    | `"Male"` or `"Female"` |
| `Workout_Type`| Type of workout                                  | `"Cardio"`, `"Strength"`, etc. |

---

## 🚀 Getting Started

These instructions will help you set up and run the project on your local machine.

### ✅ Prerequisites

Before running the app, make sure you have:

- Python 3.7 or above installed
- pip (Python package installer)

### 🛠 Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/FitPulseAI.git
cd FitPulseAI

---

2. **Create a Virtual Environment**

```bash
python -m venv venv

### 3. Install Dependencies

```bash
pip install -r requirements.txt

### 4. Start the Flask Server

```bash
python app.py

### 5. Open in Browser

```bash
http://localhost:5000








