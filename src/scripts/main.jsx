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

var masterStyle = {
  backgroundColor: '#2AB6C9',
  fontFamily: 'sans-serif',
  maxWidth: '1125px',
  margin: '0 auto'
};

var QuestionCard = React.createClass({
  render: function() {
    return (
        <div>Hello</div>
    );
  }
});

var CoverCard = React.createClass({

  handleStartClick: function(event) {
    target.preventDefault();
    React.render(
        <QuestionCard
            survey={wyQuiz.survey}
            serial={0}
        />,
        document.getElementById('content')
    )
  },

  render: function() {
    var cardStyle = {
    };
    cardStyle = extend(masterStyle, cardStyle);

    var textBoxStyle = {
      color: '#EEE',
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
      marginLeft: '15em'
    };


    return (
        <div style={cardStyle}>
          <img src={this.props.coverImagePath} style={imageStyle} />
          <div id='textBox' style={textBoxStyle}>
            <h1 style={titleStyle}>{this.props.title}</h1>
            <a href=''
               style={startTextStyle}
               onClick={this.handleStartClick}>
              {this.props.startText + "▶"}
            </a>
          </div>
        </div>
    )
  }
});

(function(window, document, React, wyQuiz){
  document.title = wyQuiz.title;
  wyQuiz.setNewUUID();
  React.render(
      <CoverCard
          title={wyQuiz.title}
          startText={wyQuiz.startText}
          coverImagePath={wyQuiz.coverImgRelativePath}
      />,
      document.getElementById('content')
  );

  post('render', wyQuiz.lang+'-rendered');
}(window, window.document, window.React, window.wyQuiz));


