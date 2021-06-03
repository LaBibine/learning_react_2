import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import './App.css';

class Field extends React.Component {
  render () {
    const {name, value, onChange, children} = this.props
    return <div className="form-group">
      <label htmlFor={name}>{children}</label>
      <input type="text" value={value} onChange={onChange} name={name} className="form-controller"/>
    </div>
  }
}

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      nom: '',
      prenom: '',
      newsletter: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    const name = e.target.name
    const type = e.target.type
    const value = type == 'checkbox' ? e.target.checked : e.target.value
    this.setState({
      [name]: value
    })
  }
  // handleChange (e) {
  //   this.setState({
  //     checked: e.target.checked
  //   })
  // }

  render () {
    return <div className="container">
      <Field name="nom" value={this.state.nom} onChange={this.handleChange}>Nom</Field>
      <Field name="prenom" value={this.state.prenom} onChange={this.handleChange}>Prénom</Field>
      {/* <div>
        <label htmlFor="nom">Nom</label>
        <input type="text" value={this.state.nom} onChange={this.handleChange} id="nom" name="nom"/>
      </div>
      <div> 
        <label htmlFor="prenom">Prénom</label>
        <input type="text" value={this.state.prenom} onChange={this.handleChange} id="prenom" name="prenom"/>
      </div>
      <div>
        <label htmlFor="prenom">S'abonner à la newsletter</label>
        <input type="checkbox" value={this.state.newsletter} onChange={this.handleChange} id="newsletter" name="newsletter"/>
      </div>
      {JSON.stringify(this.state)} */}
      {/* {JSON.stringify(this.state.nom)}
      <label htmlFor="nom">Nom</label>
      <input type="checkbox" checked={this.state.checked} onChange={this.handleChange}/>
      {this.state.checked ? <div>Vous avez coché cette case</div> : null} */}
      {/* <select value={this.state.nom} onChange={this.handleChange}>
        <option value="demo1">Demo1</option>
        <option value="demo2">Demo2</option>
        <option value="demo3">Demo3</option>
      </select> */}
      {/* <textarea type="text" id="nom" name="nom" value={this.state.nom} onChange={this.handleChange}/> */}
      </div>
    }
}

ReactDOM.render(<Home/>, document.querySelector("#root"))