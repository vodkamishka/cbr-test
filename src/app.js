import  React, {Component} from 'react';
import CreatNode from './components/create-node';
import {connect} from 'react-redux';
import {addItem,addLocalStorage}  from './actions';


class App extends Component {
  state = {
    parentId: 0
}

  render(){
    let {data} =  this.props.jsonTree;
    let {addItem, addLocalStorage} = this.props;
  return (
   <div>
     <CreatNode 
     parentId = {this.state.parentId}
     addItem = {addItem}
     addLocalStorage = {addLocalStorage}
     data={data}
     />
    </div>
  )
}
}

const mapStateToProps = ({ jsonTree }) => {
  return { jsonTree };
}
const mapDispatchToProps = {
  addItem,
  addLocalStorage
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
