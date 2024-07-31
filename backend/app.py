from flask import Flask, jsonify, request
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def get_response_from_file(user_input):
    try:
        with open('responses.json', 'r') as file:
            data = json.load(file)

        for entry in data["responses"]:
            for pattern in entry["patterns"]:
                if pattern.lower() in user_input.lower():
                    # Return a random response from the matched tag
                    response = entry["responses"]
                    return response[0]  # Choose a response; you might want to randomize this

        # Default response if no patterns match
        return "I'm not sure how to respond to that. Can you please ask something else?"

    except Exception as e:
        print(f"Error loading or processing file: {e}")
        return "Error processing your request."

@app.route('/get_response', methods=['POST'])
def get_response():
    user_input = request.json.get('message', '').strip()
    response = get_response_from_file(user_input)
    return jsonify({"answer": response})

if __name__ == '__main__':
    app.run(debug=True)
