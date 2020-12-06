function copy1() {
  var copyText = document.getElementById("input1");
  copyText.select();
  document.execCommand("copy");
  showAlert("Username successfully copied");
}
function copy2() {
  var copyText = document.getElementById("input2");
  copyText.select();
  document.execCommand("copy");
  showAlert("Email successfully copied!");
}
function copy3() {
  var copyText = document.getElementById("input3");
  copyText.select();
  document.execCommand("copy");
  showAlert("Password successfully copied!");
}
function copy4() {
  var copyText = document.getElementById("input4");
  copyText.select();
  document.execCommand("copy");
  showAlert("Account successfully copied!");
}
var alertBox = function(id, option) {
  this.show = function(msg) {
    if (msg === ''  || typeof msg === 'undefined' || msg === null) {
      throw '"msg parameter is empty"';
    }
    else {
      var alertArea = document.querySelector(id);
      var alertBox = document.createElement('DIV');
      var alertContent = document.createElement('DIV');
      var alertClose = document.createElement('A');
      var alertClass = this;
      alertContent.classList.add('alert-content');
      alertContent.innerText = msg;
      alertClose.classList.add('alert-close');
      alertClose.setAttribute('href', '#');
      alertBox.classList.add('alert-box');
      alertBox.appendChild(alertContent);
      if (!option.hideCloseButton || typeof option.hideCloseButton === 'undefined') {
        alertBox.appendChild(alertClose);
      }
      alertArea.appendChild(alertBox);
      alertClose.addEventListener('click', function(event) {
        event.preventDefault();
        alertClass.hide(alertBox);
      });
      if (!option.persistent) {
        var alertTimeout = setTimeout(function() {
          alertClass.hide(alertBox);
          clearTimeout(alertTimeout);
        }, option.closeTime);
      }
    }
  };

  this.hide = function(alertBox) {
    alertBox.classList.add('hide');
    var disperseTimeout = setTimeout(function() {
      alertBox.parentNode.removeChild(alertBox);
      clearTimeout(disperseTimeout);
    }, 500);
  };
};

var alertbox = new alertBox('#alert-area', {
  closeTime: 5000,
  persistent: false,
  hideCloseButton: false
});

function showAlert(text) {
  alertbox.show(text);
}

function getCookie(name) {
  var dc = document.cookie;
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
      begin = dc.indexOf(prefix);
      if (begin != 0) return null;
  }
  else
  {
      begin += 2;
      var end = document.cookie.indexOf(";", begin);
      if (end == -1) {
      end = dc.length;
      }
  }
  // because unescape has been deprecated, replaced with decodeURI
  //return unescape(dc.substring(begin + prefix.length, end));
  return decodeURI(dc.substring(begin + prefix.length, end));
} 

function setCookie(name,value,hours) {
  var expires = "";
  if (hours) {
      var date = new Date();
      date.setTime(date.getTime() + (hours*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

var myCookie = getCookie("linkvertise");

if(myCookie == null) {
  $.ajax({
    type: 'GET',
    url: 'https://publisher.linkvertise.com/api/v1/redirect/link/41934/41934270717667/countdown_impression?trafficOrigin=sharing',
    dataType: 'json',
  });
  $.ajax({
    type: 'GET',
    url: 'https://publisher.linkvertise.com/api/v1/redirect/link/41934/41934314168888/countdown_impression?trafficOrigin=sharing',
    dataType: 'json',
  });
  $.ajax({
    type: 'GET',
    url: 'https://publisher.linkvertise.com/api/v1/redirect/link/41934/41934189689816/countdown_impression?trafficOrigin=sharing',
    dataType: 'json',
  });
  $.ajax({
    type: 'GET',
    url: 'https://publisher.linkvertise.com/api/v1/redirect/link/41934/41934189689816/click?trafficOrigin=sharing',
    dataType: 'json',
  });
  setCookie("linkvertise", "true", 12);
}