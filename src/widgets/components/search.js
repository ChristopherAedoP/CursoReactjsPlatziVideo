import React from 'react';
import './search.css';
// function Search(props){
// 	 return (
// 				<div>

// 				</div>
// 				)
// };

// otra forma:
const Search = props => (
	<form onSubmit={props.handleSubmit} className="Search">
		<input
			ref={props.setRef}
			placeholder="Busca tu video favorito"
			className="Search-input"
			type="text"
			name="search"
			onChange={props.handleChange}
			value={props.value}
		/>
	</form>
);

export default Search;
