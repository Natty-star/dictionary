var timer = null;

$(document).ready(function () {
  $("#find").on("click", findWords);
});

function findWords() {
  $.ajax({
    url: "/word",
    type: "GET",
    data: {
      word: $("#word").val(),
    },
    dataType: "json",
    success: loadDefination,
    error: cantFind,
  });
}

function loadDefination(data) {
  removeDom();
  if (data.length == 0) {
    $(".defination").html("<p>This word not found</p>");
  } else {
    for (let i in data) {
      let output = `<em>${data[i].wordtype}</em> ${data[i].definition}`;
      let result = $("<p></p>").html(output);
      $(".defination").append(result);
      //console.log(data[i].definition);
    }
  }

  // console.log(data.definition);
}

function cantFind(error) {
  console.log(error);
}

function removeDom() {
  $(".defination").children().empty();
}
