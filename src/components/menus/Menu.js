import React, { Component } from "react";

class Menu extends Component {
  render() {
    // console.log(this.props.item);
    const { item } = this.props;
    return (
      <div className="menu-container">
        <div className="menu-list">
          {<h5 className="">{item.name}</h5>}
          <ol className="menu">
            {item.menu_items.map(menuItem => {
              return (
                <li key={menuItem.id} className="my-2">
                  <div>
                    <p className="m-0">
                      <i>{menuItem.name}</i>
                    </p>
                    <p className="m-0">
                      <i>
                        <span>&#8377;</span> {menuItem.sub_items[0].price}
                      </i>
                    </p>
                  </div>
                  <div className="add-to-cart">
                    <input
                      type="button"
                      value="Add"
                      className="btn btn-success add-btn"
                    />
                    <button className="btn prod-item-count">
                      <i class="fas fa-minus" />
                      <span>1</span>
                      <i class="fas fa-plus" />
                    </button>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default Menu;
