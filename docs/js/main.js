var welcomeTextArray = ['<h1 id="titleText">SAGE ADVISORS &nbsp;| &nbsp;ABOUT</h1><br><div class="bottom-div"><p class="bottom-text"><span style="color: #ff8800;">Experience</span> &nbsp;| &nbsp; We are consultants with expertise in the areas of data science and technical and information systems.</p></div>',
'<h1 id="titleText">SAGE ADVISORS &nbsp;| &nbsp;CONTACT</h1><br><div class="bottom-div"><p class="bottom-text"><span style="color: #ff8800;">E&dash;Mail</span> &nbsp;| &nbsp; <a href="mailto:sageadvisorsllc@gmail.com">sageadvisorsllc@gmail.com</a></p></div>'
];

function updateMainText(inputVariable) {
  $("#welcomeText").html(welcomeTextArray[inputVariable]);

  if (inputVariable == 1) {
    $(".textBoxes").css("opacity", "1");
  } else {
    $(".textBoxes").css("opacity", "0");
  }

  for (var i = 0; i <= 1; i++){
    $("#navbar" + i.toString()).attr('class', '');
  }

  $("#navbar" + inputVariable.toString()).attr('class', 'selected');
}
