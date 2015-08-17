xdomain.slaves({
  "http://s.init.im:8081": "/proxy.html"
});

window.React = require('react');

wyQuiz.setNewUUID = function() {

  // If localStorage contains an existing UUID, use it as the UUID of the app.
  // Otherwise, get a UUID from server.

  "use strict";
  if (localStorage.getItem('uuid')) {
    this.uuid = localStorage.getItem('uuid');
  } else {
    var url = 'http://s.init.im:8081/utility/uuid/';
    var uuid = 'DEFAULT'+Math.random().toString(); // In case UUID server fails
    this.uuid = uuid;
    localStorage.setItem('uuid', uuid);
    var request = new XMLHttpRequest();

    request.open('GET', url, true);
    request.onload = function () {
      console.log('UUID server responded');
      if (request.status >= 200 && request.status < 400) {
        var response = JSON.parse(request.responseText);
        if (response.success) {
          uuid = response.data.uuid;
        }
      }
      this.uuid = uuid;
      localStorage.setItem('uuid', uuid);
    }.bind(this);
    request.send();
  }
};

function post(keyToPost, valueToPost) {
  "use strict";
  var url = "http://s.init.im:8081/remember/wyIndexQuiz/";
  var request = new XMLHttpRequest();
  var message = {
    username: wyQuiz.uuid,
    key: keyToPost,
    value: valueToPost,
    raw: '',
    datetime: Date.now()
  };

  request.open('POST', url, true);
  request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  var jsonString = JSON.stringify(message);
  request.send(jsonString);
  console.log('Tried to post '+jsonString);
}

function extend(object1, object2) {

  // Parameters are not modified

  var result = {},
      prop;

  for (prop in object1) if (object1.hasOwnProperty(prop)) {
    result[prop] = object1[prop];
  }

  for (prop in object2) if (object2.hasOwnProperty(prop)) {
    result[prop] = object2[prop];
  }

  return result;
}

var themeColor = "#2AB6C9";

var masterStyle = {
  backgroundColor: themeColor,
  fontFamily: 'sans-serif',
  maxWidth: '1125px',
  margin: '0 auto',
  color: '#EEE',
  fontSize: '2em',
  padding: '1em'
};

var ResultPage = React.createClass({
  render: function() {
    return (null);
    //TODO
  }
});

var QuestionCard = React.createClass({

  getInitialState: function() {
    return {
      questionSerial: this.props.questionSerial,
      totalScore: 0
    }
  },

  handleOptionClick: function(event) {

    console.log(this.state.questionSerial);
    console.log(this.props.survey.length);

    if (this.state.questionSerial < this.props.survey.length - 1) {
      this.setState({
        questionSerial: this.state.questionSerial + 1,
        totalScore: this.state.totalScore + event.target.getAttribute("data-score")
      });
    } else {
      // Last Question
      this.setState({
        totalScore: this.state.totalScore + event.target.getAttribute("data-score")
      });
      React.render(
          <ResultPage totalScore={this.state.totalScore} />,
          document.getElementById('content')
      )
    }

  },

  render: function() {

    var question = this.props.survey[this.state.questionSerial];

    // === Styles ===
    var cardStyle = {
      position: "relative"
    };
    cardStyle = extend(masterStyle, cardStyle);

    var listItemStyle = {
      marginTop: "0.5em",
      cursor: "pointer",
      maxWidth: "5em",
    };

    var imageStyle = {
      position: "absolute",
      bottom: 0,
      right: 0,
      maxHeight: "8em",
    };

    var progressBarBoxStyle = {
      position: "relative",
      overflow: "hidden",
      whiteSpace: "nowrap",
    };

    var progressBarStyle = {
      border: "2px solid white",
      height: "1em",
      display: 'inline-block',
      width: '95%',
      textAlign: "center",
    };

    var questionTextStyle = {
      fontSize: "1.5em"
    };

    var optionBoxStyle = {
      overflow: "hidden",
      position: "relative"
    };

    var progressPercentage = (this.state.questionSerial / this.props.survey.length);
    var finishedBarStyle = {
      position: "relative",
      height: "1em",
      backgroundColor: "#EEE",
      width: (5 + (95 - 5) * progressPercentage).toString() + '%',
    };

    var finishedQuestionCountStyle = {
      float: "right",
      paddingBottom: "0.1em",
      paddingRight: "0.2em",
      color: themeColor,
    };

    var totalQuestionCountStyle = {
      float: "right",
      width: "1.5em"
    };
    // === End of Styles ===

    // Generate list items
    var optionListItems = question.options.map(function(option){
      return (
          <li key={option.optionText}
              onClick={this.handleOptionClick}
              data-score={option.optionScore}
              style={listItemStyle}
          >
            {option.optionText}
          </li>
      );
    }, this);

    return (
        <div id="QuestionCard" style={cardStyle}>
          <div id="QuestionText"
               style={questionTextStyle}
          >
            {question.questionText}
          </div>
          <div id="OptionBox"
              style={optionBoxStyle}>
            <ul id="OptionList">
              {optionListItems}
            </ul>
            {question.imagePath ?
              <img id="OptionImage"
                   src={question.imagePath}
                   style={imageStyle}
                  /> :
              <div></div>
            }
          </div>

          <div id="ProgressBarBox"
               style={progressBarBoxStyle}>
            <div id="ProgressBar"
                 style={progressBarStyle}>
              <div id="divFinishedBar"
                   style={finishedBarStyle}>
                <div id="spanFinishedQuestionCount"
                      style={finishedQuestionCountStyle}>
                  {this.state.questionSerial}
                </div>
              </div>
            </div>

            <span id="spanTotalQuestionCount"
                  style={totalQuestionCountStyle}>
              {this.props.survey.length}
            </span>
          </div>
        </div>
    );
  }
});

var CoverCard = React.createClass({

  handleStartClick: function(event) {
    React.render(
        <QuestionCard
            survey={wyQuiz.survey}
            questionSerial={0}
        />,
        document.getElementById('content')
    )
  },

  render: function() {
    var cardStyle = {
    };
    cardStyle = extend(masterStyle, cardStyle);

    var textBoxStyle = {
    };

    var imageStyle = {
      display: 'inline-block',
      float: 'left',
    };

    var titleStyle = {
      fontSize: '5em',
      paddingTop: '1em'
    };

    var startTextStyle = {
      fontColor: 'inherit',
      fontSize: '2em',
      textDecoration: 'none',
      marginLeft: '15em',
      cursor: 'pointer',
    };


    return (
        <div style={cardStyle}>
          <img src={this.props.coverImagePath} style={imageStyle} />
          <div id='textBox' style={textBoxStyle}>
            <h1 style={titleStyle}>{this.props.title}</h1>
            <span
               style={startTextStyle}
               onClick={this.handleStartClick}>
              {this.props.startText + "▶"}
            </span>
          </div>
        </div>
    )
  }
});

(function(window, document, React, wyQuiz){
  document.title = wyQuiz.title;
  wyQuiz.setNewUUID();
  React.render(
      //<CoverCard
      //    title={wyQuiz.title}
      //    startText={wyQuiz.startText}
      //    coverImagePath={wyQuiz.coverImgRelativePath}
      ///>,
      <QuestionCard survey={wyQuiz.survey} questionSerial={0} />,
      document.getElementById('content')
  );

  post('render', wyQuiz.lang+'-rendered');
}(window, window.document, window.React, window.wyQuiz));
