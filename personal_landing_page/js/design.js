alertSize();
function alertSize() {
  var myWidth = 0,
    myHeight = 0;
  if (typeof window.innerWidth == "number") {
    //No-IE
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
  } else if (
    document.documentElement &&
    (document.documentElement.clientWidth ||
      document.documentElement.clientHeight)
  ) {
    //IE 6+
    myWidth = document.documentElement.clientWidth;
    myHeight = document.documentElement.clientHeight;
  } else if (
    document.body &&
    (document.body.clientWidth || document.body.clientHeight)
  ) {
    //IE 4 compatible
    myWidth = document.body.clientWidth;
    myHeight = document.body.clientHeight;
  }

  var display;
  var menu = document.getElementById("card_menu");

  display = menu.style.display;

  if (myWidth < 767) {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

function displayMenu() {
  var start, end;
  var menu = document.getElementById("card_menu");
  var display = menu.style.display;

  if (display == "none") {
    start = -233;
    end = 0;
    menu.style.display = "block";
  } else {
    start = 0;
    end = -233;
    menu.style.display = "none";
  }
}

function displaySection(nav) {
  var sections = new Array(5);
  sections[0] = "home";
  sections[1] = "aboutme";
  sections[2] = "skills";
  sections[3] = "portfolio";
  sections[4] = "blog";

  var show;
  var search;
  var bkgr_body;
  var bkgr_menu;

  for (var i = 0; i < 5; i++) {
    /*
        if (document.getElementById("home").style.display == "block"){
          document.getElementById("home").style.display = "none";
        }
    */
    search = document.getElementById(sections[i]);
    //alert("buscando " + sections[i]);
    show = search.style.display;
    //alert(show);

    if (search.style.display == "block") {
      //alert("section encontrada!!!");
      search.style.display = "none";
      if (nav == "next") {
        i++;
        if (i > 4) i = 0;
      }
      if (nav == "prev") {
        i--;
        if (i < 0) i = 4;
      }
      search = document.getElementById(sections[i]);
      search.style.display = "block";
      break;
    }
  }

  if (sections[i] == "home") {
    bkgr_body = "#233D58";
    bkgr_menu = "#233D58";
  } else {
    bkgr_body = "#f1f1f1";
    bkgr_menu = "#29abe2";
  }
  search.style.background = bkgr_body;
  var menu = document.getElementsByTagName("header")[0];
  menu.style.background = bkgr_menu;

  var contact = document.getElementById("contact_form");
  contact.style.display = "none";
}
