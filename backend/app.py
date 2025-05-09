from flask import Flask, request, jsonify, send_file, url_for
from flask_cors import CORS
import os
from werkzeug.utils import secure_filename
from model import scan_document, save_scanned_image  

app = Flask(__name__)

CORS(app)

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}
UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/api/process', methods=['POST'])
def process_file():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400
    file = request.files['file']
    
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400
    
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)

        print(f"Файл сохранен: {filepath}") 

        file_url = url_for('uploaded_file', filename=filename)
        
        return jsonify({"image_url": file_url}), 200
    
    return jsonify({"error": "Файл не поддерживается"}), 400

@app.route('/api/scan', methods=['POST'])
def scan_document_route():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400
    file = request.files['file']
    
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400
    

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)
        scanned_image = scan_document(filepath)

        if scanned_image is not None:
            output_path = os.path.join(app.config['UPLOAD_FOLDER'], 'scanned_' + filename)
            save_scanned_image(scanned_image, output_path)

            return jsonify({"scanned_image_url": url_for('uploaded_file', filename='scanned_' + filename)}), 200
        else:
            return jsonify({"error": "Документ не найден"}), 400
    
    return jsonify({"error": "Файл не поддерживается"}), 400

@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_file(os.path.join(app.config['UPLOAD_FOLDER'], filename))

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
