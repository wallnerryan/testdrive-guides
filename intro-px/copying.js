$('.copy-step1-button').tooltip({
  trigger: 'click',
  placement: 'bottom'
});

function setTooltip(message) {
  $('.copy-step1-button').tooltip('hide')
    .attr('data-original-title', message)
    .tooltip('show');
}

function hideTooltip() {
  setTimeout(function() {
    $('.copy-step1-button').tooltip('hide');
  }, 1000);
}


var clipboard = new ClipboardJS('.copy-step1-button');

clipboard.on('success', function(e) {
  setTooltip('Copied!');
  hideTooltip();
  console.log(e);
});

clipboard.on('error', function(e) {
  console.log(e);
});
