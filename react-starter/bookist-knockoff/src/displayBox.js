import React, {Component} from 'react';

class DisplayBox extends Component {
  constructor (props) {
    super (props)
    this.state = {
      bookList: this.props.bookList,
      shelvedBooks: '',
    }
    this.shelf = this.shelf.bind(this)
    this.clearShelf = this.clearShelf.bind(this)
    // this.state.mapped = this.state.mapped.bind(this)
  }

  

  shelf (input) {
    if (this.state.shelvedBooks === []) {
      this.setState ({shelvedBooks: this.state.shelvedBooks.concat(`${input}, `)})
      console.log(input)
    } else if (this.state.shelvedBooks.indexOf(input) !== -1) {
      alert `This book is already in your shelf!`
    } else {
      this.setState ({shelvedBooks: this.state.shelvedBooks.concat(`${input}, `)})
      console.log(input)
    }
  }

  clearShelf () {
    this.setState ({shelvedBooks: []})
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({ bookList: nextProps});  
  // }

  render () {
    return (
      <section className='bigDisplay'>
        <section className='bookBox'>{this.state.bookList.map((element, index) => {
        return (
          <button className='bookView' onClick={() => this.shelf(element.title)}>
            <img className='imageFormat' src={element.img}></img>
            <div>{`${element.title} by ${element.author}`}</div>
          </button>
        );
      })}
        </section>
        <div className='dividerLine'></div>
        <section className='bookShelf'>
            <h1 className='yourShelf'>Your Shelf</h1>
            <button className='clearShelf' onClick={() => this.clearShelf()}>Clear Shelf</button>
            <div className='shelfDisplay'>{this.state.shelvedBooks}</div>
        </section>
      </section>
    )
  }
}

export default DisplayBox;

// stupidest thing I have ever done right here!

{/* <div id={`${this.state.bookList[0].title} by ${this.state.bookList[0].author}`}>
<button className='bookView'>
<img className='imageFormat' src={this.state.bookList[0].img}></img>
<p className='titleText'>{`${this.state.bookList[0].title} by ${this.state.bookList[0].author}`}</p>
</button> 
</div>
<div id={`${this.state.bookList[1].title} by ${this.state.bookList[1].author}`}>
<button className='bookView' onClick={() => this.shelf(this.state.bookList[1].title)}>
<img className='imageFormat' src={this.state.bookList[1].img}></img>
<p className='titleText'>{`${this.state.bookList[1].title} by ${this.state.bookList[1].author}`}</p>
</button>
</div>
<div id={`${this.state.bookList[2].title} by ${this.state.bookList[2].author}`}>
<button className='bookView' onClick={() => this.shelf(this.state.bookList[2].title)}>
<img className='imageFormat' src={this.state.bookList[2].img}></img>
<p className='titleText'>{`${this.state.bookList[2].title} by ${this.state.bookList[2].author}`}</p>
</button>
</div>
<div id={`${this.state.bookList[3].title} by ${this.state.bookList[3].author}`}>
<button className='bookView' onClick={() => this.shelf(this.state.bookList[3].title)}>
<img className='imageFormat' src={this.state.bookList[3].img}></img>
<p className='titleText'>{`${this.state.bookList[3].title} by ${this.state.bookList[3].author}`}</p>
</button>
</div>
<div id={`${this.state.bookList[4].title} by ${this.state.bookList[4].author}`}>
<button className='bookView' onClick={() => this.shelf(this.state.bookList[4].title)}>
<img className='imageFormat' src={this.state.bookList[4].img}></img>
<p className='titleText'>{`${this.state.bookList[4].title} by ${this.state.bookList[4].author}`}</p>
</button>
</div>
<div id={`${this.state.bookList[5].title} by ${this.state.bookList[5].author}`}>
<button className='bookView' onClick={() => this.shelf(this.state.bookList[5].title)}>
<img className='imageFormat' src={this.state.bookList[5].img}></img>
<p className='titleText'>{`${this.state.bookList[5].title} by ${this.state.bookList[5].author}`}</p>
</button>
</div>
<div id={`${this.state.bookList[6].title} by ${this.state.bookList[6].author}`}>
<button className='bookView' onClick={() => this.shelf(this.state.bookList[6].title)}>
<img className='imageFormat' src={this.state.bookList[6].img}></img>
<p className='titleText'>{`${this.state.bookList[6].title} by ${this.state.bookList[6].author}`}</p>
</button>
</div>
<div id={`${this.state.bookList[7].title} by ${this.state.bookList[7].author}`}>
<button className='bookView' onClick={() => this.shelf(this.state.bookList[7].title)}>
<img className='imageFormat' src={this.state.bookList[7].img}></img>
<p className='titleText'>{`${this.state.bookList[7].title} by ${this.state.bookList[7].author}`}</p>
</button>
</div>
<div id={`${this.state.bookList[8].title} by ${this.state.bookList[8].author}`}>
<button className='bookView' onClick={() => this.shelf(this.state.bookList[8].title)}>
<img className='imageFormat' src={this.state.bookList[8].img}></img>
<p className='titleText'>{`${this.state.bookList[8].title} by ${this.state.bookList[8].author}`}</p>
</button>
</div>
<div id={`${this.state.bookList[9].title} by ${this.state.bookList[9].author}`}>
<button className='bookView' onClick={() => this.shelf(this.state.bookList[9].title)}>
<img className='imageFormat' src={this.state.bookList[9].img}></img>
<p className='titleText'>{`${this.state.bookList[9].title} by ${this.state.bookList[9].author}`}</p>
</button>
</div>
<div id={`${this.state.bookList[10].title} by ${this.state.bookList[10].author}`}>
<button className='bookView' onClick={() => this.shelf(this.state.bookList[10].title)}>
<img className='imageFormat' src={this.state.bookList[10].img}></img>
<p className='titleText'>{`${this.state.bookList[10].title} by ${this.state.bookList[10].author}`}</p>
</button>
</div>
<div id={`${this.state.bookList[11].title} by ${this.state.bookList[11].author}`}>
<button className='bookView' onClick={() => this.shelf(this.state.bookList[11].title)}>
<img className='imageFormat' src={this.state.bookList[11].img}></img>
<p className='titleText'>{`${this.state.bookList[11].title} by ${this.state.bookList[11].author}`}</p>
</button>
</div>
</section>
<div className='dividerLine'></div>
<section className='bookShelf'>
<h1 className='yourShelf'>Your Shelf</h1>
<button className='clearShelf' onClick={() => this.clearShelf()}>Clear Shelf</button>
<div className='shelfDisplay'>{this.state.shelvedBooks}</div> */}