(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{436:function(t,e,s){"use strict";s.r(e);var a=s(14),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"a09-❯-journalctl-persistent-installation-guide"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#a09-❯-journalctl-persistent-installation-guide"}},[t._v("#")]),t._v(" A09 ❯ Journalctl Persistent Installation Guide")]),t._v(" "),e("p",[e("small",[t._v("ℹ️ This article is part of AlmaLinux "),e("RouterLink",{attrs:{to:"/series/"}},[t._v("System Series")]),t._v(".")],1)]),e("hr"),e("p"),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("💡")]),t._v(" "),e("th",[t._v("Experience Level")]),t._v(" "),e("th",[t._v("⭐☆☆☆☆")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("📆")]),t._v(" "),e("td",[e("small",[t._v("Last modified ")])]),t._v(" "),e("td",[t._v("2024-02-02")])]),t._v(" "),e("tr",[e("td",[t._v("🔧")]),t._v(" "),e("td",[e("small",[t._v("Tested by "),e("br"),t._v(" ↳ version | platform | date ")])]),t._v(" "),e("td",[t._v("NOT TESTED YET")])])])]),t._v(" "),e("p",[t._v("Jounalctl Man page: https://man7.org/linux/man-pages/man1/journalctl.1.html")]),t._v(" "),e("h1",{attrs:{id:"check-if-the-journal-directory-exists"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#check-if-the-journal-directory-exists"}},[t._v("#")]),t._v(" Check if the journal directory exists:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("stat")]),t._v(" /var/log/journal\n")])])]),e("h1",{attrs:{id:"create-the-journal-directory-if-it-doesn-t-exist"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-the-journal-directory-if-it-doesn-t-exist"}},[t._v("#")]),t._v(" Create the journal directory if it doesn't exist:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" /var/log/journal\n")])])]),e("h1",{attrs:{id:"configure-systemd-journal-settings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configure-systemd-journal-settings"}},[t._v("#")]),t._v(" Configure systemd journal settings:")]),t._v(" "),e("p",[e("strong",[t._v("Edit the /etc/systemd/journald.conf file using a text editor like nano or vi. Ensure the following content is set:")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This file is part of systemd.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# systemd is free software; you can redistribute it and/or modify it")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# under the terms of the GNU Lesser General Public License as published by")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# the Free Software Foundation; either version 2.1 of the License, or")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# (at your option) any later version.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Entries in this file show the compile time defaults.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# You can change settings by editing this file.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Defaults can be restored by simply deleting this file.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# See journald.conf(5) for details.")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Journal"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Storage=auto")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Compress=yes")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Seal=yes")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#SplitMode=uid")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#SyncIntervalSec=5m")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#RateLimitIntervalSec=30s")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#RateLimitBurst=10000")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SystemMaxUse")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("200M\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SystemKeepFree")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("100M\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SystemMaxFileSize")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("20M\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SystemMaxFiles")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#RuntimeMaxUse=")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#RuntimeKeepFree=")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#RuntimeMaxFileSize=")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#RuntimeMaxFiles=100")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#MaxRetentionSec=")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#MaxFileSec=1month")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#ForwardToSyslog=no")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#ForwardToKMsg=no")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#ForwardToConsole=no")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#ForwardToWall=yes")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#TTYPath=/dev/console")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#MaxLevelStore=debug")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#MaxLevelSyslog=debug")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#MaxLevelKMsg=notice")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#MaxLevelConsole=info")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#MaxLevelWall=emerg")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#LineMax=48K")]),t._v("\n")])])]),e("p",[t._v("**This file can be modified to your preference, please see the Man page for all possible options: https://man7.org/linux/man-pages/man1/journalctl.1.html")]),t._v(" "),e("h1",{attrs:{id:"ensure-the-systemd-journald-service-is-running"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ensure-the-systemd-journald-service-is-running"}},[t._v("#")]),t._v(" Ensure the systemd-journald service is running:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("systemctl start systemd-journald\n")])])]),e("h1",{attrs:{id:"restart-systemd-journald"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#restart-systemd-journald"}},[t._v("#")]),t._v(" Restart systemd-journald:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("systemctl restart systemd-journald\n")])])]),e("p",[e("strong",[t._v("After enabling persistent Journalctl, the files will be in a rolling state up to the maximum size specfied and in the location specified")])])])}),[],!1,null,null,null);e.default=n.exports}}]);