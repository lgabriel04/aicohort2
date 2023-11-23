from flask import Flask, request, jsonify
import openai  # Import OpenAI library
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Set your OpenAI API key here
openai.api_key = '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'

@app.route('/get_response', methods=['POST'])
def get_response():
    user_input = request.json.get('input')
    
    if not user_input:
        return jsonify({'error': 'Input is required'}), 400

    # Get response from ChatGPT
    response_text = get_chat_response(user_input)

    return jsonify({'response': response_text})

def get_chat_response(prompt):
    # ChatGPT API request
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are describing a business problem."},
            {"role": "user", "content": prompt}
        ]
    )

    return response.choices[0].message['content']


