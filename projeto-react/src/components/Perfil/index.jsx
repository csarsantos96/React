import './perfil.css'

// eslint-disable-next-line react/display-name, react-refresh/only-export-components
export default function () {
    const usuario = {
        nome: 'César Santos',
        avatar: 'http://github.com/csarsantos96.png'
    };

    return (
        <div>
            <img className="perfil-avatar" src={usuario.avatar} alt="Avatar do usuário" />
            <h3 className="perfil-titulo">{usuario.nome}</h3>
        </div>
    );
}   