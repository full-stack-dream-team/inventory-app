import React, { Component } from "react";

class Card extends Component {
  render() {
    const { categories } = this.props;

    return (
      <div className="row">
        {categories.map((category) => (
          <div key={category.name} className="col s12 m6">
            <div className="card">
              <div className="card-content">
                <span className="card-title">{category.name}</span>
                <table>
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Amount</th>
                      <th>Bar Code</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.items.length ? (
                      category.items.map((item) => (
                        <tr key={item.name}>
                          <td>{item.name}</td>
                          <td>{item.amount}</td>
                          <td>
                            <i
                              className="iconify"
                              data-icon="mdi:barcode-scan"
                              data-inline="false"
                              style={{ width: "24px", height: "24px" }}
                            ></i>
                          </td>
                          <td>
                            <i
                              className="iconify red-text"
                              data-icon="el:remove-circle"
                              data-inline="false"
                              style={{ width: "24px", height: "24px" }}
                            ></i>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4">No existing items!</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Card;
