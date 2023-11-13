const recaptchaHtml = `<!DOCTYPE html>
<html>

<head>
  <style>
    body {
      display: flex;
      justify-content: left;
      align-items: top;
    }
  </style>
</head>

<body>
  <div id="inline-badge"></div>

  <script src="https://www.google.com/recaptcha/api.js?render=explicit&onload=onRecaptchaLoadCallback"></script>
  <script>
    function onRecaptchaLoadCallback() {
      var clientId = grecaptcha.render('inline-badge', {
        'sitekey': '[SITEKEY]',
        'badge': 'inline',
        'size': 'invisible'
      });

      grecaptcha.ready(function () {
        grecaptcha.execute(clientId, {
          action: '[ACTION_NAME]'
        })
          .then(function (token) {
            window.ReactNativeWebView.postMessage(token, '*')
          });
      });
    }
  </script>
</body>

</html>`;

export default recaptchaHtml;
