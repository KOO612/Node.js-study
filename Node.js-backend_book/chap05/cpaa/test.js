window.onload = function () {
  // TODO:: Do your initialization job

  // add eventListener for tizenhwkey
  document.addEventListener('tizenhwkey', function (e) {
    if (e.keyName === 'back') {
      try {
        tizen.application.getCurrentApplication().exit();
      } catch (ignore) {}
    }
  });

  // Sample code
  var mainPage = document.querySelector('#main');

  mainPage.addEventListener('click', function () {
    var contentText = document.querySelector('#content-text');

    contentText.innerHTML = contentText.innerHTML === 'Basic' ? 'Tizen' : 'Basic';
  });

  ///////////// 아래서 부터 추가한 내용
  var button = document.querySelector('#contents_div button');
  button.addEventListener('click', function () {
    var requestData = {
      body: {
        prodNm: '',
      },
      header: {
        traceNo: '202305080001110025',
        version: '1.0.0',
      },
    };

    $.ajax({
      url: 'http://192.168.1.145:3333',
      type: 'POST',
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      data: JSON.stringify(requestData),
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Accept', 'application/json');
      },
      success: function (response) {
        alert('success:', response);
      },
      error: function (xhr, status, error) {
        alert('Error:', error);
      },
    });
  });
};
