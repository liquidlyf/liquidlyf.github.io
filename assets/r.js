// The request-link page (/r/): its "Open the request" button. The only script on the site (C25 = a,
// the maintainer, 20 Nov 2026); only /r/'s layout allows it.
//
// It reads the request's ID from the page's own address: /r/#ID, as the app shares it, or /r/?id=ID.
// It accepts only the app's 20-letter-and-digit form, and puts the ID into the button's link to the
// app (liquidlyf://request/ID, as an Android intent). It sends nothing, stores nothing, and loads
// nothing. Without a valid ID the button stays hidden, and step 3 says to tap the link again.
(function () {
  "use strict";
  var VALID = /^[A-Za-z0-9]{20}$/;

  // Coming back from the button without the app (the intent's fallback): go to the install steps.
  if (location.search === "?noapp") {
    var steps = document.getElementById("no-app");
    if (steps) { steps.scrollIntoView(); steps.focus({ preventScroll: true }); }
  }

  var id = location.hash.slice(1);
  if (!VALID.test(id)) {
    var q = /^\?id=([A-Za-z0-9]{20})$/.exec(location.search);
    id = q ? q[1] : "";
  }
  if (!VALID.test(id)) return;

  // Without the app, Chrome opens this page again (with the ID after "#", so GitHub doesn't get it).
  var fallback = location.origin + location.pathname + "?noapp#" + id;
  document.getElementById("open").href = "intent://request/" + id +
    "#Intent;scheme=liquidlyf;package=io.github.liquidlyf;S.browser_fallback_url=" +
    encodeURIComponent(fallback) + ";end";
  document.getElementById("have").hidden = false;
  var on = document.querySelectorAll("[data-with-button]");
  var off = document.querySelectorAll("[data-without-button]");
  for (var i = 0; i < on.length; i++) on[i].hidden = false;
  for (var j = 0; j < off.length; j++) off[j].hidden = true;
})();
