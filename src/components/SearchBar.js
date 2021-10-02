import React, { useState } from "react";

const SearchBar = ({ onPropFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onInputChange = (e) => {
    setTerm(e.target.value);
  };
  const onSearchBarFormSubmit = (e) => {
    e.preventDefault();

    onPropFormSubmit(term);
  };
  return (
    <div className='search-bar ui segment'>
      <form onSubmit={onSearchBarFormSubmit} className='ui form'>
        <div className='field'>
          <label>Video Search</label>
          <input type='text' value={term} onChange={onInputChange} />
        </div>
      </form>
    </div>
  );
};
// }
// class SearchBar extends React.Component {
// state = { term: "" };

// onInputChange = (event) => {
//   this.setState({ term: event.target.value });
// };
//onChange={e=> this.setState({term: e.target.value})}
// could also do an inline fxn. it goes down in the return.

// onSearchBarFormSubmit = (event) => {
//   event.preventDefault();

//   this.props.onPropFormSubmit(this.state.term);

// onFormSubmit is a prop from APP that is a callback from parent componenet - this is where we give App the term the user entered..
// };
//   render() {

// }
export default SearchBar;
