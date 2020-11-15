import React, { Component } from 'react';
import { requestApiData, selectedBook, getcartItemsList } from "./actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";



class HomePage extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
     
    }

    bookDetails = async (e,book) => {
        console.log(book)

    await this.props.selectedBook(book)

     this.props.history.push("/bookdetails")
    }

    myOrders = () => {
        this.props.history.push("/myorders")  
    }

    buyNow = async(e,book) => {
        console.log(book)
        await this.props.getcartItemsList( book)
        await this.props.history.push("/mycarts")
    }

    async componentDidMount(){
    await this.props.requestApiData();
    console.log(this.props.data)
    }

    async componentWillReceiveProps(nextProps){
        console.log(nextProps.data)
        if(nextProps.data){
           await  this.setState({data:nextProps.data})
        }
    }

  render() {
   const {data} = this.state;
    
    return  data.length ? (
        <React.Fragment>
       
            (<div className="dashlet-container">
            {this.state.data.map((book) => 
<div className="dashlet-value" key={book.id}  >

 <img src= {`images/${book.sku}.jpg`}  
className= "imageClass"  alt={book.title} onClick={(e) => this.bookDetails(e,book)}   /> 

<h5 style={{paddingLeft:"30px"}}> {book.title} </h5>
<span style={{paddingLeft:"30px"}}>
<button className="buyButton"  onClick={(e) => this.buyNow(e,book)} > Buy </button>
</span>

</div>)}
            </div>
</React.Fragment>)
: 
<h1>loading...</h1>;
    
  }
}

const mapStateToProps = state => ({ data: state.data.data,
 });

const mapDispatchToProps = dispatch =>
  

  bindActionCreators({ requestApiData , selectedBook, getcartItemsList}, dispatch);


  

export default connect(mapStateToProps, mapDispatchToProps )(HomePage);
