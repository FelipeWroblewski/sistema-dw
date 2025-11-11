from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager
from flask_bcrypt import Bcrypt
from flask_socketio import SocketIO
import os

db = SQLAlchemy()
migrate = Migrate()
login_manager = LoginManager()
bcrypt = Bcrypt()
socketio = SocketIO()

def create_app():
    BASE_DIR = os.path.dirname(os.path.abspath(__file__)) 
    
    FRONTEND_BUILD_PATH = os.path.abspath(os.path.join(BASE_DIR, '..', '..', 'front-end', 'build'))

    app = Flask(
        __name__, 
        static_folder=FRONTEND_BUILD_PATH, 
        template_folder='templates',
        static_url_path="/"
    )
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
    app.config['SQLALCHEMY_BINDS'] = {
        'postgres_empresa': os.environ.get(
            'POSTGRES_URL',
            'postgresql://felipe_wr:vyXP8xvi8pOCl1n5W7v3@dw.liveoficial.ind.br:5432/DW_LIVE'
        )
    }
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SECRET_KEY'] = '939cb126900cd98a7a866c85fb55b55'

    # Inicializações
    db.init_app(app)
    migrate.init_app(app, db)
    login_manager.init_app(app)
    bcrypt.init_app(app)
    socketio.init_app(app, cors_allowed_origins="*")

    # Configurações do LoginManager
    login_manager.login_view = 'auth.api_login'

    from app.models import User

    @login_manager.user_loader
    def load_user(user_id):
        return User.query.get(int(user_id))

    # Registra Blueprints
    from app.auth.auth_routes import auth_bp
    app.register_blueprint(auth_bp)

    return app
