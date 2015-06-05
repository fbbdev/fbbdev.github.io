(function(exports) {
  "use strict";

  function getCookie() {
    var cookie = document.cookie.replace(/(?:(?:^|.*;\s* )cookie-consent\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    if (cookie === "false") {
      return false;
    } else if (cookie === "true") {
      return true;
    } else {
      return undefined;
    }
  }

  function setCookie(domain, value) {
    document.cookie = "cookie-consent=" + value.toString() + "; domain=" + domain + "; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  }

  exports.getCookieConsent = function(banner, domain, onAsk, onConfirm, onDeny) {
    var confirmed = getCookie();

    if (confirmed) {
      onConfirm(banner);
      return;
    } else if (confirmed === false) {
      onDeny(banner);
      return;
    }

    if (onAsk) {
      onAsk(banner);
    }

    var btn = banner.querySelector('a.confirm');

    if (btn) {
      btn.addEventListener('click', function(ev) {
        ev.stopPropagation();
        ev.preventDefault();

        setCookie(domain, true);
        banner.style.display = "";

        if (onConfirm) {
          onConfirm(banner);
        }
      });
    }

    btn = banner.querySelector('a.deny');

    if (btn) {
      btn.addEventListener('click', function(ev) {
        ev.stopPropagation();
        ev.preventDefault();

        setCookie(domain, false);
        banner.style.display = "";

        if (onDeny) {
          onDeny(banner);
        }
      });
    }

    banner.style.display = "block";
  };
}(window));
