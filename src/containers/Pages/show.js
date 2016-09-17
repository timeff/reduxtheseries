import React,{Component} from 'react'
import ShowPage from '../../components/Pages/show'





export default class ShowPageContainer extends Component {
state = {
    page: {
      title: '',
      content: ''
    }
  }

 shouldComponentUpdate(_nextProps, nextState) {
    return this.state.page !== nextState.page;
  }


componentDidMount(){
    fetch('http://localhost:5000/api/v1/pages/'+this.props.params.id)
      .then((response) => response.json())
      .then((page) => this.setState({ page }))
  }

  render() {
    const { id, title, content } = this.state.page

    return <ShowPage
      id={id}
      title={title}
      content={content} />
  }
}