import React, { Component } from "react";
import API from "../utils/API";
import Table from "../components/Table";
import SearchBar from "../components/Search";


const sorters = {
  byName(a,b){
    return a.fullName > b.fullName ? 1: -1
  }
}

class Directory extends Component {
  
    state = {
      search: "",
      employees: [],
      sortAscending: true,
      sortBy: 'byName',
      error: ""
      
    };

    componentDidMount() {
      API.getEmployees()
      .then(res => {
          console.log(res.data);
          this.setState({ ...this.state,
            employees: res.data.results.map(e => {
              return {
                ...e,
                searchable: Object.values(e.name).map( n => n.toLowerCase()).join(''),
                fullName: e.name.first + ' ' + e.name.last,
              }
            }),
          });
          console.log(this.state);
        })
      .catch(err => console.log(err));
    };

    handleInputChange = event => {
      this.setState({
        ...this.state,
        search: event.target.value,
      });
      console.log(this.state.search);
    };

    handleSort = () => {
      let listName = this.state.employees.sort(sorters[this.state.sortBy]);
      if (this.state.sortAscending) {
        this.setState({
          ...this.state,
          sortAscending: false,
        });
        this.setState({
          ...this.state,
          employees: listName,
        });
      }
    };

    handleSortReverse = () => {
      let listName = this.state.employees.sort(sorters[this.state.sortBy]);
      if (this.state.sortAscending) {
        this.setState({
          ...this.state,
          sortAscending: true,
        });
        this.setState({
          ...this.state,
          employees: listName.reverse(),
        });
      }
    };
    
  
    render() {
      const list = this.state.employees.filter(employee => {
        return employee.searchable.includes(this.state.search);
      });
      
        return (
          <>
          <SearchBar
          handleInputChange={this.handleInputChange} 
        />
          <Table
          employees={list} 
          handleSort={this.handleSort} 
          handleSortReverse={this.handleSortReverse}
          />
          </>
        )
    };
};
export default Directory;