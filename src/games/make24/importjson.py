import json
import re

def parse_solutions(file_path):
    with open(file_path, "r") as file:
        data = file.read()

    # Regular expression to match inputs and solutions
    pattern = re.compile(r"\[(.*?)\](?:\s*(.*?)(?=\[|$))")
    matches = pattern.findall(data)

    results = []
    for match in matches:
        # Extract the input array
        input_array = [int(x) for x in match[0].split(",")]

        # Extract solutions (if any)
        solutions = match[1].split() if match[1] else []
        #only append if there are solutions
        if not solutions:
            continue
        # Append to results
        results.append({
            "input": input_array,
            "solutions": solutions
        })

    return results

# File paths
input_file = "/home/trace/repos/traceherrell/src/games/make24/solutions.txt"
output_file = "/home/trace/repos/traceherrell/src/games/make24/solutions.json"

# Parse the file and write to JSON
parsed_data = parse_solutions(input_file)
with open(output_file, "w") as json_file:
    json.dump(parsed_data, json_file, indent=4)

print(f"JSON file created at: {output_file}")