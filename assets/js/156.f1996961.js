(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{433:function(a,s,t){"use strict";t.r(s);var e=t(14),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"a06-❯-multimedia-codecs-libraries-for-vfx-workstation-installation-guide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a06-❯-multimedia-codecs-libraries-for-vfx-workstation-installation-guide"}},[a._v("#")]),a._v(" A06 ❯ Multimedia Codecs & Libraries for VFX Workstation Installation Guide")]),a._v(" "),s("p",[s("small",[a._v("ℹ️ This article is part of AlmaLinux "),s("RouterLink",{attrs:{to:"/series/"}},[a._v("System Series")]),a._v(".")],1)]),s("hr"),s("p"),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("💡")]),a._v(" "),s("th",[a._v("Experience Level")]),a._v(" "),s("th",[a._v("⭐⭐☆☆☆")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("📆")]),a._v(" "),s("td",[s("small",[a._v("Last modified ")])]),a._v(" "),s("td",[a._v("2024-02-02")])]),a._v(" "),s("tr",[s("td",[a._v("🔧")]),a._v(" "),s("td",[s("small",[a._v("Tested by "),s("br"),a._v(" ↳ version | platform | date ")])]),a._v(" "),s("td",[a._v("NOT TESTED YET")])])])]),a._v(" "),s("p",[a._v('These packages have been needed for multiple software, such has "Thinkbox Deadline" and were either backported, requested, or discovered as alternatives for AlmaLinux 9 for users migrating from enterprise Linux 8.')]),a._v(" "),s("h1",{attrs:{id:"enable-crb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enable-crb"}},[a._v("#")]),a._v(" Enable CRB:")]),a._v(" "),s("div",{staticClass:"language-Bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" dnf config-manager --set-enabled crb\n")])])]),s("h1",{attrs:{id:"add-epel9"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-epel9"}},[a._v("#")]),a._v(" Add EPEL9:")]),a._v(" "),s("div",{staticClass:"language-Bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" dnf "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" epel-release\n")])])]),s("h1",{attrs:{id:"add-rpmfusion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-rpmfusion"}},[a._v("#")]),a._v(" Add RPMFusion:")]),a._v(" "),s("div",{staticClass:"language-Bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" dnf "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--nogpgcheck")]),a._v(" https://mirrors.rpmfusion.org/free/el/rpmfusion-free-release-"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-E")]),a._v(" %rhel"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(".noarch.rpm\n")])])]),s("h1",{attrs:{id:"add-almalinux-release-devel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-almalinux-release-devel"}},[a._v("#")]),a._v(" Add almalinux-release-devel:")]),a._v(" "),s("div",{staticClass:"language-Bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" dnf almalinux-release-devel\n")])])]),s("h1",{attrs:{id:"add-almalinux-extras"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-almalinux-extras"}},[a._v("#")]),a._v(" Add almalinux Extras:")]),a._v(" "),s("div",{staticClass:"language-Bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" dnf config-manager --set-enabled extras\n")])])]),s("h1",{attrs:{id:"update-system-packages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update-system-packages"}},[a._v("#")]),a._v(" Update System Packages :")]),a._v(" "),s("div",{staticClass:"language-Bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" dnf update "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v("\n")])])]),s("h1",{attrs:{id:"reboot-to-apply-updates"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reboot-to-apply-updates"}},[a._v("#")]),a._v(" Reboot to apply updates :")]),a._v(" "),s("div",{staticClass:"language-Bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("reboot")]),a._v("\n")])])]),s("h1",{attrs:{id:"network-share-essentials"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#network-share-essentials"}},[a._v("#")]),a._v(" Network Share essentials :")]),a._v(" "),s("div",{staticClass:"language-Bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" dnf "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" samba "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" dnf insall cifs-utils "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" dnf "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" nfs-utils "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v("\n")])])]),s("h1",{attrs:{id:"packages-groups-essentials"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#packages-groups-essentials"}},[a._v("#")]),a._v(" Packages groups essentials :")]),a._v(" "),s("div",{staticClass:"language-Bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" dnf groupinstall Workstation "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" dnf groupinstall "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Development Tools"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" dnf groupinstall "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"RPM Development Tools"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" dnf groupinstall "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"System Tools"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v("\n")])])]),s("h1",{attrs:{id:"install-multimedia-codecs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-multimedia-codecs"}},[a._v("#")]),a._v(" Install multimedia codecs:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" dnf "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" groupinstall multimedia --with-optional\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" dnf "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" ffmpeg\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" dnf "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" x264\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" dnf "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" x264-devel\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" dnf "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" SDL2\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" dnf "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" ffmpeg-devel\n")])])]),s("h1",{attrs:{id:"install-multimedia-codecs-required-if-using-thinkbox-deadline"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-multimedia-codecs-required-if-using-thinkbox-deadline"}},[a._v("#")]),a._v(" Install multimedia codecs "),s("strong",[a._v("(Required if using Thinkbox Deadline)")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" dnf "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" libcrypto.so.1.1\n")])])]),s("h1",{attrs:{id:"libraries-and-codec-needed-for-vfx-software"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#libraries-and-codec-needed-for-vfx-software"}},[a._v("#")]),a._v(" Libraries and codec needed for VFX software :")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" dnf "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" ncurses-compat-libs\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" dnf "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" gstreamer1-libav\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" dnf "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" libnsl\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" dnf "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" vulkan\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" dnf "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" libglvnd-devel\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" dnf "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" mesa-libGL\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" dnf "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" mesa-libGLU\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" dnf "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" gstreamer1-libav\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" dnf "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" libnsl\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" dnf "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" xmessage\n")])])]),s("h1",{attrs:{id:"fix-for-locale-language-not-being-applied-with-gdm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fix-for-locale-language-not-being-applied-with-gdm"}},[a._v("#")]),a._v(" Fix for locale language not being applied with GDM :")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" localectl set-locale "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("LANG")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("en_US.UTF-8\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);