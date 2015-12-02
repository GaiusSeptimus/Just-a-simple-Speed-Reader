var index = 0;
var words = [""];
var speed = 0;

$(function() {
    $('.restart').click(function() {
        index = 0;
        start();
    });
    $('.start').click(function() {
        start();
    });
    $('.pause').click(function() {
        $('.notrunning').removeClass('hide');
        $('.running').addClass('hide');
        stop();
    });
    $('.demo').click(function() {
        $('#copy').html($('#demo').html());
        $('.demo').removeClass('notrunning').addClass('hide');
    });
});

function start() {
    words = $('#copy').text().replace(/\n/g, " --- ") .split(" ").clean("");
    if(words.length > 0)
    {
        $('.notrunning').addClass('hide');
        $('.running').removeClass('hide');
        speed = 60000 / $('.speed').val();
        nextWord();
    }
}

function stop() {
    words = [""];
}

function nextWord() {
    if(index < words.length) {
        $('.word').text(words[index]);
        index++;
        sleep(speed, function() {
            nextWord();
        });
    }
};

function replaceAllNewlines(replace, str) {
  return str.replace(new RegExp('\n', 'g'), replace);
}

Array.prototype.clean = function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == deleteValue) {         
      this.splice(i, 1);
      i--;
    }
  }
  return this;
};

function sleep(millis, callback) {
    setTimeout(function()
            { callback(); }
    , millis);
}