import React, { Component } from 'react';
import Select from 'react-select'

export default class Coviddashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
          countryOptions :[]       
        }

        this.handleEvent = this.handleEvent.bind(this)
    }

    componentDidMount() {
       let countryOptions = [
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
          ]
        this.setState({countryOptions});
    }

    componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

    componentWillUnmount() {
        
    }

    // Prototype methods, Bind in Constructor (ES2015)
    handleEvent() {}

    // Class Properties (Stage 3 Proposal)
    handler = () => { this.setState() }

    renderSideBar = ()=>
    {
      return (
     <div>

<div className="btn-group dropright">
  <button type="button" className="btn btn-secondary">
    Home
  </button>
  <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span className="sr-only">Toggle Dropright</span>
  </button>
  <div className="dropdown-menu">
    
  </div>
</div>
     </div>

      );

    }

    render() {
        const {countryOptions} =this.state; 
        return (
            <div className="container-fluid">
            <div className="row">
                <div className="col-xl-1">
                   {this.renderSideBar()}
                </div>
                <div className="col-xl-11">
                <div className="container-fluid row">
                    <div className ="col-xl-4">
                 <Select  options={countryOptions}></Select>
                 </div>
                 <div className ="col-xl-4">
                 <button type="button" class="btn btn-success">Fetch Report</button>
                 </div>
                 <div className="col-xl-4">
                 </div>
                </div>
                <hr/>
                &nbsp;&nbsp;    
                 <div className="container-fluid row">
                 <div className="col-xl-3">
                    Total Cases
                 </div>
                 <div className="col-xl-3">
                     Total Active cases
                 </div>
                 <div className="col-xl-3">
                      Total Resolved Cases
                 </div>
                 <div className="col-xl-3">
                       
                      Total deceased cases  
                      </div>
                 </div>

                </div>
               
             </div>   
             </div>        
        )
    }
}
