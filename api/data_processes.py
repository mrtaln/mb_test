import pandas as pd
import json
from pandas.io.json import json_normalize

# Read CSV File and return as JSON
def load_CSV_file(filePathCSV):
    tsv_file = pd.DataFrame(pd.read_csv(filePathCSV, error_bad_lines=False, sep="\t"))

    for i in range(0, len(tsv_file)):
        tsv_file["id"] = tsv_file.index
    
    return json.loads(tsv_file.to_json(orient = "records"))

# Read Pie data from CSV file and return as JSON
def load_pie_data(filePathCSV):
    tsv_file_pie = pd.DataFrame(pd.read_csv(filePathCSV, error_bad_lines=False, sep="\t"))
    pie_data = tsv_file_pie.groupby("classification").groups
    
    key_class = []
    value_count = []
    for key, value in pie_data.items():
        key_class.append(key)
        value_count.append(len(list(filter(bool, value))))
        

    pie_data_dict = [{"name": name, "value": value} for name, value in zip(key_class, value_count)]

    print(pie_data_dict)
    return json.dumps(pie_data_dict)



    