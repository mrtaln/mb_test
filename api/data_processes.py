import pandas as pd
import json

def load_CSV_file(filePathCSV):
    tsv_file = pd.read_csv(filePathCSV, error_bad_lines=False, sep="\t")
    variant = tsv_file['variant'].to_json()
    return variant
    