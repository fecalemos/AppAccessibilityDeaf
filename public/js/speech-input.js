var final_transcript = '';
var recognizing = false;
if (!('webkitSpeechRecognition' in window)) {
  upgrade();
} else {
  start_button.style.display = 'inline-block';

  var recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onstart = function() {
    console.log('starting....');
    recognizing = true;
    start_img.src = '/img/mic-animate.gif';
  };

  recognition.onerror = function(event) {
    console.log('error');
  };

  recognition.onend = function() {
    console.log('ending...');
    recognizing = false;
    start_img.src = '/img/mic.gif';
  };

  recognition.onresult = function(event) {
    console.log('resulting....');
    var interim_transcript = '';
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        final_transcript += event.results[i][0].transcript;
      } else {
        interim_transcript += event.results[i][0].transcript;
      }
    }


    final_transcript = capitalize(final_transcript);
    final_span.innerHTML = linebreak(final_transcript);
    interim_span.innerHTML = linebreak(interim_transcript);

    document.getElementById(results).value = final_transcript;
    document.getElementById(results).scrollTop = document.getElementById(results).scrollHeight;
  };
}

function upgrade() {
  start_button.style.visibility = 'hidden';
}

var two_line = /\n\n/g;
var one_line = /\n/g;
function linebreak(s) {
  return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
}

var first_char = /\S/;
function capitalize(s) {
  return s.replace(first_char, function(m) { return m.toUpperCase(); });
}

function startButton(event) {
  if (recognizing) {
    recognition.stop();
    return;
  }
  final_transcript = '';
  recognition.lang = 'pt-BR';
  recognition.start();
  final_span.innerHTML = '';
  interim_span.innerHTML = '';
  start_img.src = '/img/mic-slash.gif';
}
