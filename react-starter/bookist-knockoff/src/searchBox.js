import React, {Component} from 'react';

class SearchBox extends Component {
  constructor (props) {
    super (props)

    this.state = {
      userInput: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.reset = this.reset.bind(this)
  }

  handleChange (input) {
    this.setState ({userInput: input})
  }

  reset () {
    this.refs.thisBetterWork.value = '';
    this.setState ({userInput: ''});
  }

  render () {
    return (
      <section>
        <section className='searchContainer'>
          {/* <form> */}
            <input className='searchBar' ref = {('thisBetterWork')} onChange={(e) => this.handleChange(e.target.value)}></input>
            <button className='searchButton' onClick={() => this.props.search(this.state.userInput)}>search</button>
            <button className='clearButton' onClick={() => this.reset()} onClick={() => this.props.reset()}>clear search</button>
          {/* </form> */}
        </section>
      </section>
    )
  }
}

export default SearchBox;