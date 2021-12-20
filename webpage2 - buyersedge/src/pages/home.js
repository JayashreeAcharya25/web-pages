/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";
import "../core-ui/home.css";
import "../core-ui/additional.css";

export default class home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: "",
      image: null,
      searchItem: "",
      itemData: [],
      newArray: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleImage = this.handleImage.bind(this);

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleImage(e) {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ image: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    console.log(this.state.image);
  }

  handleRemove = (index) => {
    const { itemData } = this.state;
    itemData.splice(index, 1);
    this.setState({ itemData: this.state.itemData });
    // const removeItem = [...itemData];
    // var index = removeItem.indexOf(e.target.value);
    // removeItem.splice(index);
    // this.setState({ itemData: removeItem });
  };

  handleSearch(e) {
    this.setState({ searchItem: e.target.value });
  }

  handleOnClick(e) {
    e.preventDefault();

    var { newArray, item, image } = this.state;

    newArray.push({ item, image });

    var arrayItem = newArray;

    this.setState({ itemData: arrayItem });
    console.log("ArrayItem", arrayItem);

    this.setState({ item: "" });
  }

  render() {
    const { itemData, searchItem } = this.state;

    return (
      <div className="home">
        <div className="header">
          <img src={process.env.PUBLIC_URL + "./assets/logo512.png"} alt="" />
          <h2>Buyer's Edge</h2>
        </div>
        <div className="article">
          <div className="article-container">
            <div className="article-col">
              <form className="uk-search uk-search-default">
                <a className="uk-search-icon" uk-icon="icon: search"></a>
                <input
                  value={searchItem}
                  onChange={this.handleSearch}
                  className="uk-search-input"
                  type="search"
                  placeholder="Search here.."
                />
              </form>
            </div>

            <div className="article-col">
              <div className="uk-inline">
                <a className="uk-form-icon" uk-icon="icon: pencil"></a>
                <input
                  className="uk-input uk-input-bg"
                  type="text"
                  placeholder="Enter some text..."
                  name="item"
                  value={this.state.item}
                  onChange={this.handleChange}
                />
              </div>

              <div uk-form-custom="target: true">
                <input
                  className="uk-input uk-input-bg"
                  type="file"
                  name="image"
                  value={this.image}
                  onChange={this.handleImage}
                />
                <input
                  className="uk-input uk-form-width-medium"
                  type="text"
                  placeholder="Select file"
                  disabled
                />
              </div>

              <button
                className="jy-button uk-button-bg"
                type="submit"
                value="submit"
                onClick={this.handleOnClick}
              >
                Add Product
              </button>
            </div>
          </div>
          <div className="article-section">
            {itemData
              .filter(
                (data) => !searchItem || data.item.indexOf(searchItem) !== -1
              )
              .map((data, i) => {
                return (
                  <div
                    className="uk-card uk-card-default uk-card-hover uk-cursor-poiner"
                    key={i}
                  >
                    <div className="uk-card-media-top">
                      <img src={data.image} alt="" />
                    </div>
                    <div className="uk-card-body">
                      <h3 className="uk-card-title">{data.item}</h3>
                      <a
                        className="uk-trash-icon"
                        uk-icon="icon: trash"
                        onClick={this.handleRemove.bind(this, data.i)}
                      ></a>
                    </div>
                  </div>
                );
              })}
          </div>
          <footer>
            <small>Copyright &copy; 2021 JHA</small>
          </footer>
        </div>
      </div>
    );
  }
}
