from flask import Flask, send_from_directory
from flask_cors import CORS
from app import create_app, socketio  # importa da tua factory
from app.auth.auth_routes import auth_bp

# Cria a instância do app via factory
app = create_app()

# Permitir requisições do React
CORS(app)

# Servir o build do React
@app.route("/")
def serve_react():
    return send_from_directory(app.static_folder, "index.html")

@app.errorhandler(404)
def not_found(e):
    return send_from_directory(app.static_folder, "index.html")

if __name__ == "__main__":
    # Usa socketio.run se você estiver usando SocketIO
    socketio.run(app, debug=True, host="0.0.0.0", port=5000)
