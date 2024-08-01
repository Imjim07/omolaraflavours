<script src="/socket.io/socket.io.js"></script>
<script type="text/javascript" src="jquery.js"></script>
<script type="text/javascript" src="bootstrap.js"></script>
<link rel="stylesheet" type="text/css" href="bootstrap.css" />

<div id="progressbar">
</div>

<script>
  var socket = io('http://localhost:8085');
  socket.on('connect', function(){});
  socket.on('message', function(data){
    $('#progressbar').progressbar({
    maximum: 100,
    step: JSON.parse(data).percent
    });
  });
  socket.on('disconnect', function(){});
</script>