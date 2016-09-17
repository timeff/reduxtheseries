import React,{Component} from 'react'
import fetch from 'isomorphic-fetch'
import Pages from '../../components/Pages'

export default class PagesContainer extends Component{
    state={
        pages:[]
    }

  componentDidMount(){
      this.onReloadPages()
  }

  shouldComponentUpdate(_nextProps,nextState){
      return this.state.pages!==nextState.pages;
  }

  onReloadPages=()=>{
    fetch('http://localhost:5000/api/v1/pages')
    .then((response) => response.json())
    .then((pages) => {
        console.log(pages)
      this.setState({pages})})
  }

  render(){
      return <Pages pages={this.state.pages} 
      onReloadPages={this.onReloadPages}/>
  }
}