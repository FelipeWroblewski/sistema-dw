from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS # Importar CORS para desenvolvimento local

app = Flask(__name__, static_folder="../front-end/build", static_url_path="/")

CORS(app)

# Rota da API
@app.route("/api/usuarios")
def get_usuarios():
    return jsonify([
        {"id": 1, "nome": "Felipe"},
        {"id": 2, "nome": "Wroblewski"}
    ])

@app.route("/")
def serve_react():
    return send_from_directory(app.static_folder, "index.html")

@app.errorhandler(404)
def not_found(e):
    return send_from_directory(app.static_folder, "index.html")

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)