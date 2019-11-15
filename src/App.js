import React, { Component } from 'react';
import ReactSelect from 'react-select';

class App extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        name: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
        gender: null,
        language: [],
        country: null,
        zipCode: ""
      }
    };
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

  validateNumber = evt => {
    var theEvent = evt || window.event;

    // Handle paste
    if (theEvent.type === "paste") {
      key = theEvent.clipboardData.getData("text/plain");
    } else {
      // Handle key press
      var key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
    }
  };

  handleChange = e => {
    const { name, value, checked } = e.target;
    const { form } = this.state;
    let formObj = {};
    if (name === "language") {
      // handle the change event of language field
      if (checked) {
        // push selected value in list
        formObj = { ...form };
        formObj[name].push(value);
      } else {
        // remove unchecked value from the list
        formObj = {
          ...form,
          [name]: form[name].filter(x => x !== value)
        };
      }
    } else {
      // handle change event except language field
      formObj = {
        ...form,
        [name]: value
      };
    }
    this.setState({ form: formObj });
  }

  handleSubmit = () => {
    console.log('Data: ', this.state.form);
  };

  render() {
    const { form } = this.state;
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
                value={form.name}
                onChange={this.handleChange}
                onBlur={this.handleChange}
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
                value={form.email}
                onChange={this.handleChange}
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
                value={form.password}
                onChange={this.handleChange}
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
                value={form.confirmPassword}
                onChange={this.handleChange}
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
                        checked={form.language.includes(x.value)}
                        onChange={this.handleChange}
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
                value={form.mobile}
                onChange={this.handleChange}
                onKeyPress={this.validateNumber}
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
                    checked={form.gender === "male"}
                    onChange={this.handleChange}
                  /> Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={form.gender === "female"}
                    onChange={this.handleChange}
                  /> Female
                </label>
              </div>
            </div>
            <div className="form-group">
              <label>Zip Code:</label>
              <input
                className="form-control"
                type="text"
                name="zipCode"
                value={form.zipCode}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>
                Country:<span className="asterisk">*</span>
              </label>
              <ReactSelect
                name="country"
                options={this.countryList}
                value={this.countryList.find(x => x.value == form.country)}
                onChange={e =>
                  this.handleChange({
                    target: {
                      name: "country",
                      value: e.value
                    }
                  })
                }
              />
            </div>
          </div>
        </div>

  <div className="form-group">
    <input
      type="button"
      className="btn btn-primary"
      value="Submit"
      onClick={this.handleSubmit}
    />
  </div>
      </div>
    );
  }
}

export default App;
