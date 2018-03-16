import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends PureComponent {
	// ecmascript 6 =>
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		author: this.props.author,
	// 		title: this.props.author,
	// 		image: this.props.image
	// 	};
	// binding evento
	// 	this.handleClick = this.handleClick.bind(this);
	// }

	// binding evento ecmascript 7 =>
	state = {
		author: this.props.author,
		title: this.props.title,
		cover: this.props.cover
	};

	handleClick = evento => {
		// console.log(this.props.title);
		// this.setState({ author: 'Ana Maria' });
		this.props.openModal(this.props);
	};

	render() {
		// const style = {
		// 	container: {
		// 		color: '#44546b',
		// 		cursor: 'pointer',
		// 		width: 260,
		// 		border: '1px solid red'
		// 	}
		// };

		return (
			<div className="Media" onClick={this.handleClick}>
				<div className="Media-cover">
					<img
						src={this.state.cover}
						alt=""
						width={260}
						height={160}
						className="Media-image"
					/>
					<h3 className="Media-title">{this.state.title}</h3>
					<p className="Media-author">{this.state.author}</p>
				</div>
			</div>
		);
	}

	// *******************************************************
	//#region Ciclo de vida de los componentes =>
	//
	// constructor() {
	// 	// Enlazo (bind) eventos y/o inicializo estado
	// }
	componentWillMount() {
		// Se ejecuta antes de montar el componente
		// Se podría usar para hacer un setState()
	}
	// render() {
	// 	// Contiene todos los elementos a renderizar
	// 	// podrías usarlo para calcular propiedades (ej: concatenar una cadena)
	// }
	componentDidMount() {
		//Solo se lanza una vez
		//Ideal para llamar a una API, hacer un setInteval, etc
	}

	//Actualización:
	componentWillReceiveProps() {
		//Es llamado cuando el componente recibe nuevas propiedades.
	}
	// shouldComponentUpdate() {
	// 	//Idea para poner una condición y  si las propiedades que le llegaron anteriormente
	// 	// eran las mismas que tenia retornar false para evitar re-renderear el componente
	// }
	componentWillUpdate() {
		//metodo llamado antes de re-renderizar el componente si shouldComponentUpdate devolvió true
	}

	// re-render si es necesario...

	componentDidUpdate() {
		//Método llamado luego del re-render
	}
	componentWillUnmount() {
		//Método llamado antes de desmontar el componente
	}
	componentDidCatch() {
		// Si ocurre algún error, lo capturo desde acá:
	}
	//#endregion
	// *******************************************************
}

Media.propTypes = {
	cover: PropTypes.string,
	title: PropTypes.string.isRequired,
	author: PropTypes.string,
	type: PropTypes.oneOf(['video', 'audio'])
};

export default Media;
