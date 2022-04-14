from flask import Flask, jsonify
from data_processes import *

app = Flask(__name__)

# Read the CSV data and send the react.js
@app.route("/getCSVData", methods = ["GET"])
def get_CSV_data():
    csv_json = load_CSV_file("massive_data.tsv")
    return jsonify(csv_json)

# Read Pie data and send the react.js
@app.route("/getPieData")
def get_pie_data():
    pie_data = load_pie_data("massive_data.tsv")
    return jsonify(pie_data)

if __name__ == "__main__":
    app.run(debug = True)