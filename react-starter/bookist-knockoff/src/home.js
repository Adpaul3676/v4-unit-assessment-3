import React, {Component} from 'react'
import SearchBox from './searchBox.js'
import DisplayBox from './displayBox.js'
import data from './data.js'

class Home extends Component {
  constructor () {
    super ()

    this.state = {
      userInput: '',
      books: data,
    }
    // this.updateDisplay = this.updateDisplay.bind(this) 
    this.filterBooks = this.filterBooks.bind(this)
    this.reset = this.reset.bind(this)
  }

  updateDisplay (input) {
    this.setState ({userInput: input})
    console.log (this.state.userInput)
  }

  filterBooks (input) {
    let filteredBooks = this.state.books.filter((element) => {
      if (element.title.indexOf(input) !== -1 || element.author.indexOf(input) !== -1) {
        // console.log(element);
        return true;
      } else {
        return false;
      }
    })
    this.setState ({books: filteredBooks})
    console.log (this.state.books)
  }

  reset () {
    this.setState ({books: data})
    console.log(this.state.books)
  }

  render () {
    return (
      <section>
        <section className='topBox'>
          <h1 className='topText'>bookist</h1>
        </section>
        <section className='searchBox'>
          <SearchBox 
            search = {this.filterBooks}
            reset = {this.reset}
            bookList = {this.state.books}
          />
        </section>
        <section className='displayBox'>
          <DisplayBox
          bookList = {this.state.books}
          />
        </section>
      </section>
    )
  }
}

export default Home;