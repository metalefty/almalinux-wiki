(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{398:function(e,a,t){"use strict";t.r(a);var r=t(14),s=Object(r.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"almalinux-9-0-release-notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#almalinux-9-0-release-notes"}},[e._v("#")]),e._v(" AlmaLinux 9.0 Release Notes")]),e._v(" "),a("p",[e._v("These are the release notes for AlmaLinux OS 9.0 for x86_64, aarch64, ppc64le and s390x architectures, codename Emerald Puma.")]),e._v(" "),a("p",[e._v("Distributed kernel version: 5.14.0-70.13.1.el9_0.")]),e._v(" "),a("img",{attrs:{src:"/images/9-0.png",width:"75%",height:"75%"}}),e._v(" "),a("h2",{attrs:{id:"providing-feedback-and-getting-help"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#providing-feedback-and-getting-help"}},[e._v("#")]),e._v(" Providing Feedback and Getting Help")]),e._v(" "),a("p",[e._v("The AlmaLinux Community maintains many avenues for helping, supporting and assisting you. If you find an issue, please report it on the "),a("a",{attrs:{href:"https://bugs.almalinux.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("AlmaLinux Bug Tracker"),a("OutboundLink")],1),e._v(". Additionally, if you feel like providing feedback, talking about anything or asking any questions you might want to check out "),a("a",{attrs:{href:"https://chat.almalinux.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("The AlmaLinux Community Chat"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://forums.almalinux.org/c/",target:"_blank",rel:"noopener noreferrer"}},[e._v("The AlmaLinux Forums"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://reddit.com/r/almalinux",target:"_blank",rel:"noopener noreferrer"}},[e._v("The AlmaLinux Community on Reddit"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Please note our Community Chat is bridged to several services including "),a("a",{attrs:{href:"https://web.libera.chat/#almalinux",target:"_blank",rel:"noopener noreferrer"}},[e._v("IRC"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://matrix.to/#/#almalinux:matrix.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Matrix"),a("OutboundLink")],1),e._v(" and Discord.")]),e._v(" "),a("h2",{attrs:{id:"upstream-release-notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upstream-release-notes"}},[e._v("#")]),e._v(" Upstream Release Notes")]),e._v(" "),a("p",[e._v("The upstream Red Hat Enterprise Linux release notes can be accessed via the "),a("a",{attrs:{href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/9.0_release_notes/index",target:"_blank",rel:"noopener noreferrer"}},[e._v("Red Hat Enterprise Linux 9 Release Notes"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("AlmaLinux 9 packages and repositories are signed with the new "),a("a",{attrs:{href:"http://repo.almalinux.org/almalinux/RPM-GPG-KEY-AlmaLinux-9",target:"_blank",rel:"noopener noreferrer"}},[e._v("RPM-GPG-KEY-AlmaLinux-9"),a("OutboundLink")],1),e._v(" GPG key")])]),e._v(" "),a("li",[a("p",[e._v("The use of SHA-1 for signatures is restricted in the default crypto policy. Please be aware that this may cause issues using "),a("strong",[e._v("SSH")]),e._v(" to access older systems, such as RHEL/CentOS 6. To allow SHA-1 you can run:")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("update-crypto-policies --set DEFAULT:SHA1\n")])])]),a("p",[e._v("Please see this "),a("a",{attrs:{href:"https://access.redhat.com/solutions/6816771",target:"_blank",rel:"noopener noreferrer"}},[e._v("Red Hat Knowledge Article"),a("OutboundLink")],1),e._v(" (subscription required) for more information.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("New repositories added:")]),e._v(" "),a("ul",[a("li",[e._v("SAP")]),e._v(" "),a("li",[e._v("SAPHANA")])])]),e._v(" "),a("li",[a("p",[e._v("Updated dynamic programming languages, web and database servers:")]),e._v(" "),a("ul",[a("li",[e._v("Perl 5.32")]),e._v(" "),a("li",[e._v("PHP 8.0")]),e._v(" "),a("li",[e._v("Git 2.31")]),e._v(" "),a("li",[e._v("Apache HTTP Server 2.4.51")]),e._v(" "),a("li",[e._v("Varnish Cache 6.6")]),e._v(" "),a("li",[e._v("Squid 5.2")]),e._v(" "),a("li",[e._v("MySQL 8.0")]),e._v(" "),a("li",[e._v("Redis 6.2")])])]),e._v(" "),a("li",[a("p",[e._v("Updated components:")]),e._v(" "),a("ul",[a("li",[e._v("GCC 11.2.1")]),e._v(" "),a("li",[e._v("glibc 2.34")]),e._v(" "),a("li",[e._v("binutils 2.35.2")])])]),e._v(" "),a("li",[a("p",[e._v("Compiler updates:")]),e._v(" "),a("ul",[a("li",[e._v("Go Toolset 1.17.7")])])]),e._v(" "),a("li",[a("p",[e._v("Performance tools and debuggers updates:")]),e._v(" "),a("ul",[a("li",[e._v("PCP 5.3.5")]),e._v(" "),a("li",[e._v("Grafana 7.5.11")]),e._v(" "),a("li",[e._v("GDB 10.2")]),e._v(" "),a("li",[e._v("Valgrind 3.18.1")]),e._v(" "),a("li",[e._v("SystemTap 4.6")]),e._v(" "),a("li",[e._v("Dyninst 11.0.0")]),e._v(" "),a("li",[e._v("elfutils 0.186")])])]),e._v(" "),a("li",[a("p",[e._v("Java tools updates:")]),e._v(" "),a("ul",[a("li",[e._v("Maven 3.6")]),e._v(" "),a("li",[e._v("Ant 1.10")])])])]),e._v(" "),a("h2",{attrs:{id:"installation-instructions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-instructions"}},[e._v("#")]),e._v(" Installation Instructions")]),e._v(" "),a("p",[e._v("There are three installation ISO images available:")]),e._v(" "),a("p",[a("code",[e._v("AlmaLinux-9.0-x86_64-boot.iso")]),e._v(" - a single network installation CD image that downloads packages over the Internet.")]),e._v(" "),a("p",[a("code",[e._v("AlmaLinux-9.0-x86_64-minimal.iso")]),e._v(" - a minimal self-containing DVD image for local/offline installation.")]),e._v(" "),a("p",[a("code",[e._v("AlmaLinux-9.0-x86_64-dvd.iso")]),e._v(" - a full installation DVD image that contains almost all AlmaLinux packages.")]),e._v(" "),a("p",[e._v("The recommended way to download ISO images is using the "),a("a",{attrs:{href:"https://repo.almalinux.org/almalinux/9.0/isos/x86_64/AlmaLinux-9.0-x86_64.torrent",target:"_blank",rel:"noopener noreferrer"}},[e._v("torrent"),a("OutboundLink")],1),e._v(" links. Alternatively, you can select a mirror closest to your geographic area listed on the "),a("a",{attrs:{href:"https://mirrors.almalinux.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("mirrors.almalinux.org"),a("OutboundLink")],1),e._v(" website. A local mirror will be a lot quicker than using "),a("code",[e._v("repo.almalinux.org")]),e._v(" directly. Then, download a suitable ISO image from the 9/isos/$arch/ directory of your source, for example:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://mirror.interserver.net/almalinux/9.0/isos/x86_64/AlmaLinux-9.0-x86_64-boot.iso\n")])])]),a("p",[e._v("Download and import the AlmaLinux public key:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://repo.almalinux.org/almalinux/RPM-GPG-KEY-AlmaLinux-9\n$ gpg "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--import")]),e._v(" RPM-GPG-KEY-AlmaLinux-9\n")])])]),a("p",[e._v("Download and verify a checksums list:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://repo.almalinux.org/almalinux/9.0/isos/x86_64/CHECKSUM\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# we are looking for “Good signature”")]),e._v("\n$ gpg "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--verify")]),e._v(" CHECKSUM\ngpg: Signature made Wed "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("25")]),e._v(" May "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2022")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("11")]),e._v(":08:37 PM UTC\ngpg:                using RSA key D36CB86CB86B3716\ngpg: Good signature from "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"AlmaLinux OS 9 <packager@almalinux.org>"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("unknown"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\ngpg: WARNING: This key is not certified with a trusted signature"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("\ngpg:          There is no indication that the signature belongs to the owner.\nPrimary key fingerprint: BF18 AC28 "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("7617")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("8908")]),e._v(" D6E7  "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1267")]),e._v(" D36C B86C B86B "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3716")]),e._v("\n")])])]),a("p",[e._v("Verify the downloaded ISO image checksum:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# calculate the downloaded ISO SHA256 checksum")]),e._v("\n$ sha256sum AlmaLinux-9.0-x86_64-boot.iso\nc41ce7bc2f4ab27a3597b3e160fc8b01c56a6b58e1046a4a23b8518fb9e9a61f  AlmaLinux-9.0-x86_64-boot.iso\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# compare it with expected checksum, it should be the same")]),e._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" CHECKSUM "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-E")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'SHA256.*AlmaLinux-9.0-x86_64-boot.iso'")]),e._v("\nSHA256 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("AlmaLinux-9.0-1-x86_64-boot.iso"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" c41ce7bc2f4ab27a3597b3e160fc8b01c56a6b58e1046a4a23b8518fb9e9a61f\n")])])]),a("p",[e._v("If you decide to use the "),a("code",[e._v("AlmaLinux-9.0-x86_64-boot.iso")]),e._v(" image, you will need to provide the "),a("code",[e._v("9.0/BaseOS/x86_64/kickstart/")]),e._v(" repository from the selected mirror as the Installation Source if the installer will not be able to find closest mirror for some reason.")]),e._v(" "),a("p",[e._v("There are no extra Installation Sources required if you decided to go with either the minimal or DVD ISO images.")]),e._v(" "),a("h2",{attrs:{id:"upgrade-instructions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-instructions"}},[e._v("#")]),e._v(" Upgrade Instructions")]),e._v(" "),a("p",[e._v("Run the following command twice to upgrade from 9.0 beta:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ dnf upgrade -y\n")])])]),a("h2",{attrs:{id:"added-packages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#added-packages"}},[e._v("#")]),e._v(" Added Packages")]),e._v(" "),a("p",[e._v("Here is a list of added packages in comparison with upstream distribution.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Package")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("almalinux-backgrounds")]),e._v(" "),a("td",[e._v("AlmaLinux background images."),a("br"),e._v("Replaces "),a("code",[e._v("redhat-backgrounds")])])]),e._v(" "),a("tr",[a("td",[e._v("almalinux-indexhtml")]),e._v(" "),a("td",[e._v("AlmaLinux default browser page"),a("br"),e._v("Replaces "),a("code",[e._v("redhat-indexhtml")])])]),e._v(" "),a("tr",[a("td",[e._v("almalinux-logos")]),e._v(" "),a("td",[e._v("AlmaLinux graphics for OS"),a("br"),e._v("Replaces "),a("code",[e._v("redhat-logos")])])]),e._v(" "),a("tr",[a("td",[e._v("almalinux-logos-httpd")]),e._v(" "),a("td",[e._v("AlmaLinux graphics for HTTPD server"),a("br"),e._v("Replaces "),a("code",[e._v("redhat-logos-httpd")])])]),e._v(" "),a("tr",[a("td",[e._v("almalinux-logos-ipa")]),e._v(" "),a("td",[e._v("AlmaLinux graphics for IPA server"),a("br"),e._v("Replaces "),a("code",[e._v("redhat-logos-ipa")])])]),e._v(" "),a("tr",[a("td",[e._v("almalinux-release")]),e._v(" "),a("td",[e._v("AlmaLinux release package, repos, and EULA"),a("br"),e._v("Replaces "),a("code",[e._v("redhat-release")]),e._v(" and "),a("code",[e._v("redhat-release-eula")])])])])]),e._v(" "),a("h2",{attrs:{id:"removed-packages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#removed-packages"}},[e._v("#")]),e._v(" Removed Packages")]),e._v(" "),a("p",[e._v("Here is a list of removed packages in comparison with the upstream distribution."),a("br"),e._v("\nAlmaLinux OS is a community distribution so all changes are subject to discussion. If you would like to do so, please join "),a("a",{attrs:{href:"https://chat.almalinux.org/almalinux/channels/engineeringpackaging",target:"_blank",rel:"noopener noreferrer"}},[e._v("AlmaLinux Chat"),a("OutboundLink")],1),e._v(" as well as filing a bug report at "),a("a",{attrs:{href:"https://bugs.almalinux.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("AlmaLinux Bug Tracker"),a("OutboundLink")],1),e._v(" to discuss if you think any of the packages below should be included into the repos.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Package")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("insights-client")]),e._v(" "),a("td",[e._v("RHEL specific package to connect to upstream vendor resources")])]),e._v(" "),a("tr",[a("td",[e._v("kmod-redhat-*")]),e._v(" "),a("td",[e._v("RHEL specific modules from Driver Update Program")])]),e._v(" "),a("tr",[a("td",[e._v("kpatch*")]),e._v(" "),a("td",[e._v("RHEL specific live patches for kernel")])]),e._v(" "),a("tr",[a("td",[e._v("redhat-backgrounds")]),e._v(" "),a("td",[e._v("RHEL specific background images")])]),e._v(" "),a("tr",[a("td",[e._v("redhat-indexhtml")]),e._v(" "),a("td",[e._v("RHEL specific default browser page")])]),e._v(" "),a("tr",[a("td",[e._v("redhat-logos")]),e._v(" "),a("td",[e._v("RHEL specific graphics for OS")])]),e._v(" "),a("tr",[a("td",[e._v("redhat-logos-httpd")]),e._v(" "),a("td",[e._v("RHEL specific graphics for HTTPD server")])]),e._v(" "),a("tr",[a("td",[e._v("redhat-logos-ipa")]),e._v(" "),a("td",[e._v("RHEL specific graphics for IPA server")])]),e._v(" "),a("tr",[a("td",[e._v("redhat-release")]),e._v(" "),a("td",[e._v("RHEL specific release package and repos")])]),e._v(" "),a("tr",[a("td",[e._v("redhat-release-eula")]),e._v(" "),a("td",[e._v("RHEL specific EULA")])]),e._v(" "),a("tr",[a("td",[e._v("redhat-support-lib-python")]),e._v(" "),a("td",[e._v("RHEL specific package to connect to upstream vendor resources")])]),e._v(" "),a("tr",[a("td",[e._v("redhat-support-tool")]),e._v(" "),a("td",[e._v("RHEL specific package to connect to upstream vendor resources")])]),e._v(" "),a("tr",[a("td",[e._v("rhc")]),e._v(" "),a("td",[e._v("RHEL specific package to connect to upstream vendor resources")])]),e._v(" "),a("tr",[a("td",[e._v("rhc-worker-playbook")]),e._v(" "),a("td",[e._v("RHEL specific package to connect to upstream vendor resources")])]),e._v(" "),a("tr",[a("td",[e._v("rhsm-gtk")]),e._v(" "),a("td",[e._v("RHEL specific GUI for Subscription Manager")])]),e._v(" "),a("tr",[a("td",[e._v("rhsm-icons")]),e._v(" "),a("td",[e._v("RHEL specific GUI for Subscription Manager")])]),e._v(" "),a("tr",[a("td",[e._v("spice-client-win-x64")]),e._v(" "),a("td",[e._v("Contains binaries built by upstream vendor")])]),e._v(" "),a("tr",[a("td",[e._v("spice-client-win-x86")]),e._v(" "),a("td",[e._v("Contains binaries built by upstream vendor")])]),e._v(" "),a("tr",[a("td",[e._v("spice-qxl-wddm-dod")]),e._v(" "),a("td",[e._v("Contains binaries built by upstream vendor")])]),e._v(" "),a("tr",[a("td",[e._v("spice-vdagent-win-x64")]),e._v(" "),a("td",[e._v("Contains binaries built by upstream vendor")])]),e._v(" "),a("tr",[a("td",[e._v("spice-vdagent-win-x86")]),e._v(" "),a("td",[e._v("Contains binaries built by upstream vendor")])]),e._v(" "),a("tr",[a("td",[e._v("subscription-manager-cockpit")]),e._v(" "),a("td",[e._v("RHEL specific Cockpit module for Subscription Manager")])]),e._v(" "),a("tr",[a("td",[e._v("subscription-manager-initial-setup-addon")]),e._v(" "),a("td",[e._v("RHEL specific initial setup addon for Subscription Manager")])]),e._v(" "),a("tr",[a("td",[e._v("subscription-manager-plugin-container")]),e._v(" "),a("td",[e._v("RHEL specific Subscription Manager plugin for upstream vendor containers")])]),e._v(" "),a("tr",[a("td",[e._v("virt-who")]),e._v(" "),a("td",[e._v("RHEL specific package to connect to upstream vendor resources")])]),e._v(" "),a("tr",[a("td",[e._v("virtio-win")]),e._v(" "),a("td",[e._v("Contain binaries built by upstream vendor")])])])]),e._v(" "),a("p",[e._v("Red Hat and RHEL are trademarks or registered trademarks of Red Hat, Inc. or its subsidiaries in the United States and other countries.")])])}),[],!1,null,null,null);a.default=s.exports}}]);