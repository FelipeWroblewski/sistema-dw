from flask import Blueprint, jsonify, render_template, redirect, url_for, request
from flask_login import login_user, current_user, logout_user
from app.forms import LoginForm
from app.models import User 

# 1. Cria o Blueprint (o contêiner para as rotas de auth)
auth_bp = Blueprint('auth', __name__, url_prefix='/api/auth')


@auth_bp.route('/login', methods=['POST'])
def api_login(): 
    if current_user.is_authenticated:
        return jsonify({"mensage": "Já autenticado"}), 200
    
    dados_login = request.get_json()
    email = dados_login.get("email")
    password = dados_login.get("password")

    if not email or not password:
        return jsonify({"mensage": "Email e senha são obrigatórios"}), 400
    
    try:
        user = User.query.filter_by(email=email).first()

        if user and user.senha == password:
            login_user(user, remember=True)
            return jsonify({"mensage": "Login bem-sucedido", "user_id": user.id}), 200
        else:
            return jsonify({"mensage": "Credenciais inválidas"}), 401
    except Exception as e:
        print(f"Erro durante o login: {e}")
        return jsonify({"mensage": "Erro interno do servidor"}), 500
    
@auth_bp.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('auth.login')) 

@auth_bp.context_processor
def inject_user():
    return dict(current_user=current_user)