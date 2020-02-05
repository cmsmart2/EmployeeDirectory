import React, { Component } from "react";
import API from "../utils/API";
import Table from "../components/Table";
import SearchBar from "../components/Search";


const sort = {
  byName(a,b){
    return a.fullName > b.fullName ? 1: -1
  }
}

class Directory extends Component {
  
    state = {
      search: "",
      employees: [],
      employeeList: [],
      sortAscending: true,
      sortBy: 'byName',
      error: ""
      
    };

    componentDidMount() {
      API.getEmployees()
      .then(res => {
          this.setState({ ...this.state,
            employees: res.data.results.map(e => {
              return {
                ...e,
                searchable: Object.values(e.name).map( n => n.toString()).join(''),
                fullName: e.name.first + ' ' + e.name.last,
              }
            }),
          });
        })
      .catch(err => console.log(err));
    };

    handleInputChange = event => {
      this.setState({search: event.target.value,});
    };

    handleSort = () => {
      let listName = this.state.employees.sort(sort[this.state.sortBy]);
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
      let listName = this.state.employees.sort(sort[this.state.sortBy]);
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

    // sortByName (){
    //   const {employeeList} = this.state
    //   let newemployeesList = employeeList
    //   if (this.state.sortAscending){
    //     newemployeesList = employeeList.sort((a, b) => a.fullname > b.date)
    //   } else {
    //     newemployeesList = employeeList.sort((a, b) => a.fullname < b.date)
    //   }
    //   this.setState({
    //     sortAscending: !this.state.sortAscending,
    //     employeeList: newemployeesList
    //   })
    // }

    // toggleSortName(event){
    //   this.sortByName()
    // }
    
  
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
          // handleToggle = {this.toggleSortName}
          handleSort={this.handleSort} 
          handleSortReverse={this.handleSortReverse}
          />
          </>
        )
    };
};
export default Directory;