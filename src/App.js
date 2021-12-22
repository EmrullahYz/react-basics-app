import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

const GET_USERS_URL = "https://jsonplaceholder.typicode.com/users";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchField: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch(GET_USERS_URL)
      .then((response) => response.json())
      .then((users) => this.setState({ users: users }));
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { users, searchField } = this.state;
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1> User List</h1>
        <SearchBox
          placeholder="search users"
          handleChange={(e) => this.handleChange}
        />

        <CardList users={filteredUsers}></CardList>
      </div>
    );
  }
}

export default App;
