import React,{Component, PropTypes} from 'react'
import Pages from '../../components/Pages'

//action
import {loadPages} from '../../actions/page'

//redux store
import {connect} from 'react-redux'

class PagesContainer extends Component{

    static propTypes ={
        pages: PropTypes.array.isRequired,
        onLoadPages:PropTypes.func.isRequired
    }

  componentDidMount(){
      this.onReloadPages()
  }

shouldComponentUpdate(nextProps) {
    return this.props.pages !== nextProps.pages;
  }

  onReloadPages=()=>{
      this.props.onLoadPages()
  }

  render(){
      return <div><Pages pages={this.props.pages} 
      onReloadPages={this.onReloadPages}/></div>
  }
}

const mapStateToProps = (state) =>({
    pages: state.pages
})



export default connect(
  mapStateToProps,
  {onLoadPages:loadPages}
)(PagesContainer)