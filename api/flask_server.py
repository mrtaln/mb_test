from flask import Flask, jsonify
from data_processes import *

app = Flask(__name__)

@app.route("/")
def main_page():
    return "<p>Massive Bioinformatics</p>"

@app.route("/getCSVdata")
def get_CSV_data():
    csv_json = load_CSV_file("massive_data.tsv")
    return jsonify(csv_json)

if __name__ == "__main__":
    app.run(debug = True)