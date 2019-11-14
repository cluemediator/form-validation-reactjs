import React, { Component } from 'react';
import ReactSelect from 'react-select';

class App extends Component {
  constructor() {
    super();
    this.countryList = [
      { value: "india", label: "India" },
      { value: "us", label: "US" },
      { value: "australia", label: "Australia" }
    ];
    this.languageList = [
      { value: "english", label: "English" },
      { value: "hindi", label: "Hindi" },
      { value: "spanish", label: "Spanish" },
      { value: "arabic", label: "Arabic" }
    ];
  }
  render() {
    return (
      <div className="signup-box">
        <p className="title">Sign up</p>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>
                Name:<span className="asterisk">*</span>
              </label>
              <input
                className="form-control"
                type="text"
                name="name"
              />
            </div>
            <div className="form-group">
              <label>
                Email:<span className="asterisk">*</span>
              </label>
              <input
                className="form-control"
                type="text"
                name="email"
              />
            </div>
            <div className="form-group">
              <label>
                Password:<span className="asterisk">*</span>
              </label>
              <input
                className="form-control"
                type="password"
                name="password"
              />
            </div>
            <div className="form-group">
              <label>
                Confirm Password:<span className="asterisk">*</span>
              </label>
              <input
                className="form-control"
                type="password"
                name="confirmPassword"
              />
            </div>
            <div className="form-group">
              <label className="mr-3">
                Language:<span className="asterisk">*</span>
              </label>
              <div className="form-control border-0 p-0 pt-1">
                {this.languageList.map((x, i) => {
                  return (
                    <label key={i} className="mr-2">
                      <input
                        type="checkbox"
                        name="language"
                        value={x.value}
                      /> {x.label}
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>
                Mobile:<span className="asterisk">*</span>
              </label>
              <input
                className="form-control"
                type="text"
                name="mobile"
              />
            </div>
            <div className="form-group">
              <label className="mr-3">
                Gender:<span className="asterisk">*</span>
              </label>
              <div className="form-control border-0 p-0 pt-1">
                <label className="mr-2">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                  /> Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                  /> Female
                </label>
              </div>
            </div>
            <div className="form-group">
              <label>Zipcode:</label>
              <input
                className="form-control"
                type="text"
                name="zipcode"
              />
            </div>
            <div className="form-group">
              <label>
                Country:<span className="asterisk">*</span>
              </label>
              <ReactSelect
                name="country"
                options={this.countryList}
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <input
            type="button"
            className="btn btn-primary"
            value="Submit"
          />
        </div>
      </div>
    );
  }
}

export default App;
