import React, { Component } from 'react'

export default class RecipeSearch extends Component {
  render() {
    const { value, handleSubmit, handleChange } = this.props;
    return (
      <div>
        <React.Fragment>
          <div className="container">
            <div className="row">
              <div className="col-10 col-md-8 mx-auto mt-5 text-center">
                <h1 className="text-slunted text-capitalize">
                  search for recipe with <strong className="text-danger">Food2Fork</strong>
                </h1>
                <form className="mt-4" onSubmit={handleSubmit}>
                  <label className="text-capitalize text-muted" htmlFor="search">type recipes seperated by coma</label>
                  <div className="input-group">
                    <input
                      type="text"
                      name="search"
                      placeholder="onions, chicken, carrots"
                      className="form-control"
                      value={value}
                      onChange={handleChange}
                    />
                    <div className="input-group-append">
                      <button type="submit" className="input-group-text bg-primary text-white">
                        <i className="fas fa-search"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </React.Fragment>
      </div>
    )
  }
}
