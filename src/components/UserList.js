import React from "react";
import Card from "./UI/Cards";
const UserList = (props) => {
  let userContent = (
    <tr>
      <th colSpan="5" className="text-danger text-center">
        not found users
      </th>
    </tr>
  );

  if (props.isLoading) {
    userContent = (
      <tr>
        <th colSpan="5" className="text-center">
          <div className="spinner-border text-info" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </th>
      </tr>
    );
  }
  if (props.isError) {
    userContent = (
      <tr>
        <th colSpan="5" className="text-danger text-center">
          Error
        </th>
      </tr>
    );
  }
  if (props.users.length > 0) {
    userContent = props.users.map((item, index) => (
      <tr key={item.id}>
        <th scope="row">{index + 1}</th>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>{item.email}</td>
        <td>{item.status}</td>
      </tr>
    ));
  }

  return (
    <Card>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">Email</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>{userContent}</tbody>
      </table>
    </Card>
  );
};

export default UserList;
