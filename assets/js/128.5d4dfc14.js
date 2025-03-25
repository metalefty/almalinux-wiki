(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{405:function(t,v,_){"use strict";_.r(v);var a=_(14),e=Object(a.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h6",{attrs:{id:"last-updated-2024-04-15"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#last-updated-2024-04-15"}},[t._v("#")]),t._v(" last updated: 2024-04-15")]),t._v(" "),v("h1",{attrs:{id:"almalinux-9-4-beta-release-notes"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#almalinux-9-4-beta-release-notes"}},[t._v("#")]),t._v(" AlmaLinux 9.4 Beta Release Notes")]),t._v(" "),v("p",[t._v("These are the release notes for AlmaLinux OS 9.4 Beta for all supported architectures:")]),t._v(" "),v("ul",[v("li",[t._v("x86_64")]),t._v(" "),v("li",[t._v("aarch64")]),t._v(" "),v("li",[t._v("ppc64le")]),t._v(" "),v("li",[t._v("s390x")])]),t._v(" "),v("p",[t._v("Codename: Seafoam Ocelot.")]),t._v(" "),v("p",[t._v("Distributed kernel version: 5.14.0-427.el9")]),t._v(" "),v("h2",{attrs:{id:"beta-release"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#beta-release"}},[t._v("#")]),t._v(" Beta Release")]),t._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),v("p",[t._v("This is a "),v("strong",[t._v("BETA")]),t._v(" release and should not be used for production installations. The provided upgrade instructions should not be used on production machines unless you have backups and a recovery option. 😉")])]),t._v(" "),v("h2",{attrs:{id:"providing-feedback-and-getting-help"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#providing-feedback-and-getting-help"}},[t._v("#")]),t._v(" Providing Feedback and Getting Help")]),t._v(" "),v("p",[t._v("Please report any issues you may encounter during tests on the "),v("a",{attrs:{href:"https://bugs.almalinux.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("AlmaLinux Bug Tracker"),v("OutboundLink")],1),t._v(". Additionally, if you feel like providing feedback, talking about anything or asking any questions you might want to check out "),v("a",{attrs:{href:"https://chat.almalinux.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("The AlmaLinux Community Chat"),v("OutboundLink")],1),t._v(", "),v("a",{attrs:{href:"https://forums.almalinux.org/c/93-beta/5",target:"_blank",rel:"noopener noreferrer"}},[t._v("The AlmaLinux Forums"),v("OutboundLink")],1),t._v(" and "),v("a",{attrs:{href:"https://reddit.com/r/almalinux",target:"_blank",rel:"noopener noreferrer"}},[t._v("The AlmaLinux Community on Reddit"),v("OutboundLink")],1),t._v(".")]),t._v(" "),v("h2",{attrs:{id:"changelog"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[t._v("#")]),t._v(" Changelog")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("Updated module streams:")]),t._v(" "),v("ul",[v("li",[t._v("Python 3.12")]),t._v(" "),v("li",[t._v("Ruby 3.3")]),t._v(" "),v("li",[t._v("PHP 8.2")]),t._v(" "),v("li",[t._v("nginx 1.24")]),t._v(" "),v("li",[t._v("MariaDB 10.11")]),t._v(" "),v("li",[t._v("PostgreSQL 16")])])]),t._v(" "),v("li",[v("p",[t._v("Updated components:")]),t._v(" "),v("ul",[v("li",[t._v("Git to version 2.43.0")]),t._v(" "),v("li",[t._v("Git LFS to version 3.4.1")])])]),t._v(" "),v("li",[v("p",[t._v("Security updates:")]),t._v(" "),v("ul",[v("li",[t._v("The SELinux userspace release 3.6 introduces deny rules for further customizing SELinux policies.")]),t._v(" "),v("li",[t._v("The Keylime server components, the verifier and registrar, are available as containers.")]),t._v(" "),v("li",[t._v("The Rsyslog log processing system introduces customizable TLS/SSL encryption settings and additional options that relate to capability dropping.")]),t._v(" "),v("li",[t._v("The OpenSSL TLS toolkit adds a drop-in directory for provider-specific configuration files.")]),t._v(" "),v("li",[t._v("The Linux kernel cryptographic API (libkcapi) 1.4.0 introduces new tools and options. Notably, with the new "),v("code",[t._v("-T")]),t._v(" option, you can specify target file names in hash-sum calculations.")]),t._v(" "),v("li",[t._v("The stunnel TLS/SSL tunneling service 5.71 changes the behavior of OpenSSL 1.1 and later versions in FIPS mode. Besides this change, version 5.71 provides many new features such as support for modern PostgreSQL clients.")])])]),t._v(" "),v("li",[v("p",[t._v("The following device drivers were modified to re-add PCI IDs for hardware that was previously disabled in our upstream:")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("aacraid")]),t._v(" -  Dell PERC2, 2/Si, 3/Si, 3/Di, Adaptec Advanced Raid Products, HP NetRAID-4M, IBM ServeRAID & ICP SCSI")]),t._v(" "),v("li",[v("strong",[t._v("be2iscsi")]),t._v(" - Emulex OneConnectOpen-iSCSI for BladeEngine 2 and 3 adapters")]),t._v(" "),v("li",[v("strong",[t._v("hpsa")]),t._v(" - HP Smart Array Controller")]),t._v(" "),v("li",[v("strong",[t._v("lpfc")]),t._v(" - Emulex LightPulse Fibre Channel SCSI")]),t._v(" "),v("li",[v("strong",[t._v("megaraid_sas")]),t._v(" - Broadcom MegaRAID SAS")]),t._v(" "),v("li",[v("strong",[t._v("mpt3sas")]),t._v(" - LSI MPT Fusion SAS 3.0")]),t._v(" "),v("li",[v("strong",[t._v("mptsas")]),t._v(" - Fusion MPT SAS Host")]),t._v(" "),v("li",[v("strong",[t._v("qla2xxx")]),t._v(" - QLogic Fibre Channel HBA")]),t._v(" "),v("li",[v("strong",[t._v("qla4xxx")]),t._v(" - QLogic iSCSI HBA")])])])]),t._v(" "),v("p",[t._v("For a complete list of hardware support for which was added in this release, see the  "),v("a",{attrs:{href:"#extended-hardware-support"}},[t._v("Extended hardware support")]),t._v(" section.")]),t._v(" "),v("h2",{attrs:{id:"upgrade-instructions"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-instructions"}},[t._v("#")]),t._v(" Upgrade Instructions")]),t._v(" "),v("p",[v("strong",[t._v("Please do not use these update instructions on production machines unless you don't mind if something breaks")]),t._v(" 😉")]),t._v(" "),v("p",[t._v("Upgrade the almalinux-release packages to the 9.4-0.2.el9 version from the beta repositories:")]),t._v(" "),v("div",{staticClass:"language-bash extra-class"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[t._v("$ dnf "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v(" https://repo.almalinux.org/vault/almalinux-"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("release,repos,gpg-keys"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("-latest-9-beta.x86_64.rpm\n$ dnf clean all\n")])])]),v("p",[t._v("the new package contains updated repository URLs so that you can just run:")]),t._v(" "),v("div",{staticClass:"language-bash extra-class"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[t._v("$ dnf upgrade "),v("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v("\n")])])]),v("p",[t._v("to update the rest of the packages.")]),t._v(" "),v("h2",{attrs:{id:"installation-instructions"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#installation-instructions"}},[t._v("#")]),t._v(" Installation instructions")]),t._v(" "),v("p",[t._v("There are three installation ISO images available:")]),t._v(" "),v("p",[v("code",[t._v("AlmaLinux-9.4-beta-1-x86_64-boot.iso")]),t._v(" - a single network installation CD image that downloads packages over the Internet.")]),t._v(" "),v("p",[v("code",[t._v("AlmaLinux-9.4-beta-1-x86_64-minimal.iso")]),t._v(" - a minimal self-containing DVD image that makes possible offline installation.")]),t._v(" "),v("p",[v("code",[t._v("AlmaLinux-9.4-beta-1-x86_64-dvd.iso")]),t._v(" - a full installation DVD image that contains mostly all AlmaLinux packages.")]),t._v(" "),v("p",[t._v("Download a suitable ISO image from the 9.4-beta/isos/$arch/ directory, for example:")]),t._v(" "),v("div",{staticClass:"language-bash extra-class"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[t._v("$ "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://repo.almalinux.org/almalinux/9.4-beta/isos/x86_64/AlmaLinux-9.4-beta-1-x86_64-boot.iso\n")])])]),v("p",[t._v("Download and import the AlmaLinux public key:")]),t._v(" "),v("div",{staticClass:"language-bash extra-class"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[t._v("$ "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://repo.almalinux.org/almalinux/RPM-GPG-KEY-AlmaLinux-9\n$ gpg "),v("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--import")]),t._v(" RPM-GPG-KEY-AlmaLinux\n")])])]),v("p",[t._v("Download and verify a checksums list:")]),t._v(" "),v("div",{staticClass:"language-bash extra-class"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[t._v("$ "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://repo.almalinux.org/almalinux/9.4-beta/isos/x86_64/CHECKSUM\n\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# we are looking for “Good signature”")]),t._v("\n$ gpg "),v("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--verify")]),t._v(" CHECKSUM\ngpg: Signature made Wed "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" Apr "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("2024")]),t._v(" 04:21:57 PM EDT\ngpg:                using RSA key BF18AC2876178908D6E71267D36CB86CB86B3716\ngpg: Good signature from "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AlmaLinux OS 9 <packager@almalinux.org>"')]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("unknown"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\ngpg: WARNING: This key is not certified with a trusted signature"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\ngpg:          There is no indication that the signature belongs to the owner.\nPrimary key fingerprint: BF18 AC28 "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("7617")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("8908")]),t._v(" D6E7  "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("1267")]),t._v(" D36C B86C B86B "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("3716")]),t._v("\n")])])]),v("p",[t._v("Verify the downloaded ISO image checksum:")]),t._v(" "),v("div",{staticClass:"language-bash extra-class"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# calculate the downloaded ISO SHA256 checksum")]),t._v("\n$ sha256sum AlmaLinux-9.4-beta-1-x86_64-boot.iso\nd8ae806840a615d6cd02d9f2bb4b838bb01fc1e444e9d8e73512c8b0c4dcef0e  AlmaLinux-9.4-beta-1-x86_64-boot.iso\n\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# compare it with expected checksum, it should be the same")]),t._v("\n$ "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" CHECKSUM "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-E")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SHA256.*AlmaLinux-9.4-beta-1-x86_64-boot.iso'")]),t._v("\nSHA256 "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AlmaLinux-9.4-beta-1-x86_64-boot.iso"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" d8ae806840a615d6cd02d9f2bb4b838bb01fc1e444e9d8e73512c8b0c4dcef0e\n")])])]),v("p",[t._v("If you decide to use the "),v("code",[t._v("AlmaLinux-9.4-beta-1-x86_64-boot.iso")]),t._v(" image, you may need to provide the "),v("code",[t._v("https://repo.almalinux.org/vault/9.4-beta/BaseOS/x86_64/kickstart/")]),t._v(" URL repository from the selected mirror as the Installation Source in the event that the installer is not able to find the closest mirror for some reason.")]),t._v(" "),v("p",[t._v("There are no extra Installation Sources required if you decided to go with either the minimal or DVD ISO images.")]),t._v(" "),v("h2",{attrs:{id:"additional-packages"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#additional-packages"}},[t._v("#")]),t._v(" Additional packages")]),t._v(" "),v("p",[t._v("Here is a list of packages that are AlmaLinux-specific, and will not be found in compatible versions of RHEL.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Package")]),t._v(" "),v("th",[t._v("Description")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("almalinux-backgrounds")]),t._v(" "),v("td",[t._v("AlmaLinux background images."),v("br"),t._v("Replaces "),v("code",[t._v("redhat-backgrounds")])])]),t._v(" "),v("tr",[v("td",[t._v("almalinux-indexhtml")]),t._v(" "),v("td",[t._v("AlmaLinux default browser page"),v("br"),t._v("Replaces "),v("code",[t._v("redhat-indexhtml")])])]),t._v(" "),v("tr",[v("td",[t._v("almalinux-logos")]),t._v(" "),v("td",[t._v("AlmaLinux graphics for OS"),v("br"),t._v("Replaces "),v("code",[t._v("redhat-logos")])])]),t._v(" "),v("tr",[v("td",[t._v("almalinux-logos-httpd")]),t._v(" "),v("td",[t._v("AlmaLinux graphics for HTTPD server"),v("br"),t._v("Replaces "),v("code",[t._v("redhat-logos-httpd")])])]),t._v(" "),v("tr",[v("td",[t._v("almalinux-logos-ipa")]),t._v(" "),v("td",[t._v("AlmaLinux graphics for IPA server"),v("br"),t._v("Replaces "),v("code",[t._v("redhat-logos-ipa")])])]),t._v(" "),v("tr",[v("td",[t._v("almalinux-release")]),t._v(" "),v("td",[t._v("AlmaLinux release package, repos, and EULA"),v("br"),t._v("Replaces "),v("code",[t._v("redhat-release")]),t._v(" and "),v("code",[t._v("redhat-release-eula")])])])])]),t._v(" "),v("h2",{attrs:{id:"removed-packages"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#removed-packages"}},[t._v("#")]),t._v(" Removed packages")]),t._v(" "),v("p",[t._v("Here is a list of packages you will not find in AlmaLinux when comparing with the compatible version of RHEL.")]),t._v(" "),v("p",[t._v("AlmaLinux OS is a community distribution so all changes are subject to discussion. If you would like to do so, please join "),v("a",{attrs:{href:"https://chat.almalinux.org/almalinux/channels/engineeringpackaging",target:"_blank",rel:"noopener noreferrer"}},[t._v("AlmaLinux Chat"),v("OutboundLink")],1),t._v(" as well as filing a bug report at "),v("a",{attrs:{href:"https://bugs.almalinux.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("AlmaLinux Bug Tracker"),v("OutboundLink")],1),t._v(" to discuss if you think any of the packages below should be included into the repos.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Package")]),t._v(" "),v("th",[t._v("Description")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("insights-client")]),t._v(" "),v("td",[t._v("RHEL specific package to connect to upstream vendor resources")])]),t._v(" "),v("tr",[v("td",[t._v("kmod-redhat-*")]),t._v(" "),v("td",[t._v("RHEL specific modules from Driver Update Program")])]),t._v(" "),v("tr",[v("td",[t._v("kpatch*")]),t._v(" "),v("td",[t._v("RHEL specific live patches for kernel")])]),t._v(" "),v("tr",[v("td",[t._v("openssl-fips-provider")]),t._v(" "),v("td",[t._v("RHEL specific package with FIPS certified openssl binaries")])]),t._v(" "),v("tr",[v("td",[t._v("redhat-backgrounds")]),t._v(" "),v("td",[t._v("RHEL specific background images")])]),t._v(" "),v("tr",[v("td",[t._v("redhat-indexhtml")]),t._v(" "),v("td",[t._v("RHEL specific default browser page")])]),t._v(" "),v("tr",[v("td",[t._v("redhat-logos")]),t._v(" "),v("td",[t._v("RHEL specific graphics for OS")])]),t._v(" "),v("tr",[v("td",[t._v("redhat-logos-httpd")]),t._v(" "),v("td",[t._v("RHEL specific graphics for HTTPD server")])]),t._v(" "),v("tr",[v("td",[t._v("redhat-logos-ipa")]),t._v(" "),v("td",[t._v("RHEL specific graphics for IPA server")])]),t._v(" "),v("tr",[v("td",[t._v("redhat-release")]),t._v(" "),v("td",[t._v("RHEL specific release package and repos")])]),t._v(" "),v("tr",[v("td",[t._v("redhat-release-eula")]),t._v(" "),v("td",[t._v("RHEL specific EULA")])]),t._v(" "),v("tr",[v("td",[t._v("redhat-support-lib-python")]),t._v(" "),v("td",[t._v("RHEL specific package to connect to upstream vendor resources")])]),t._v(" "),v("tr",[v("td",[t._v("redhat-support-tool")]),t._v(" "),v("td",[t._v("RHEL specific package to connect to upstream vendor resources")])]),t._v(" "),v("tr",[v("td",[t._v("rhc")]),t._v(" "),v("td",[t._v("RHEL specific package to connect to upstream vendor resources")])]),t._v(" "),v("tr",[v("td",[t._v("rhc-worker-playbook")]),t._v(" "),v("td",[t._v("RHEL specific package to connect to upstream vendor resources")])]),t._v(" "),v("tr",[v("td",[t._v("rhsm-gtk")]),t._v(" "),v("td",[t._v("RHEL specific GUI for Subscription Manager")])]),t._v(" "),v("tr",[v("td",[t._v("rhsm-icons")]),t._v(" "),v("td",[t._v("RHEL specific GUI for Subscription Manager")])]),t._v(" "),v("tr",[v("td",[t._v("spice-client-win-x64")]),t._v(" "),v("td",[t._v("Contains binaries built by upstream vendor")])]),t._v(" "),v("tr",[v("td",[t._v("spice-client-win-x86")]),t._v(" "),v("td",[t._v("Contains binaries built by upstream vendor")])]),t._v(" "),v("tr",[v("td",[t._v("spice-qxl-wddm-dod")]),t._v(" "),v("td",[t._v("Contains binaries built by upstream vendor")])]),t._v(" "),v("tr",[v("td",[t._v("spice-vdagent-win-x64")]),t._v(" "),v("td",[t._v("Contains binaries built by upstream vendor")])]),t._v(" "),v("tr",[v("td",[t._v("spice-vdagent-win-x86")]),t._v(" "),v("td",[t._v("Contains binaries built by upstream vendor")])]),t._v(" "),v("tr",[v("td",[t._v("subscription-manager-cockpit")]),t._v(" "),v("td",[t._v("RHEL specific Cockpit module for Subscription Manager")])]),t._v(" "),v("tr",[v("td",[t._v("subscription-manager-initial-setup-addon")]),t._v(" "),v("td",[t._v("RHEL specific initial setup addon for Subscription Manager")])]),t._v(" "),v("tr",[v("td",[t._v("subscription-manager-plugin-container")]),t._v(" "),v("td",[t._v("RHEL specific Subscription Manager plugin for upstream vendor containers")])]),t._v(" "),v("tr",[v("td",[t._v("virt-who")]),t._v(" "),v("td",[t._v("RHEL specific package to connect to upstream vendor resources")])]),t._v(" "),v("tr",[v("td",[t._v("virtio-win")]),t._v(" "),v("td",[t._v("Contain binaries built by upstream vendor")])])])]),t._v(" "),v("h2",{attrs:{id:"extended-hardware-support"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#extended-hardware-support"}},[t._v("#")]),t._v(" Extended hardware support")]),t._v(" "),v("p",[t._v("The following devices support is added in this release, when compared with the RHEL 9.4 Beta:")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Device PCI ID")]),t._v(" "),v("th",[t._v("Device name")]),t._v(" "),v("th",[t._v("Driver name")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("0x0E11:"),v("em",[t._v(":")]),t._v(": *:01:04")]),t._v(" "),v("td",[t._v("Compaq")]),t._v(" "),v("td",[t._v("hpsa")])]),t._v(" "),v("tr",[v("td",[t._v("0x1000:0x0050")]),t._v(" "),v("td",[t._v("LSI SAS1064")]),t._v(" "),v("td",[t._v("mptsas")])]),t._v(" "),v("tr",[v("td",[t._v("0x1000:0x0054")]),t._v(" "),v("td",[t._v("LSI SAS1068")]),t._v(" "),v("td",[t._v("mptsas")])]),t._v(" "),v("tr",[v("td",[t._v("0x1000:0x0056")]),t._v(" "),v("td",[t._v("LSI SAS1064E")]),t._v(" "),v("td",[t._v("mptsas")])]),t._v(" "),v("tr",[v("td",[t._v("0x1000:0x0058")]),t._v(" "),v("td",[t._v("LSI SAS1068E")]),t._v(" "),v("td",[t._v("mptsas")])]),t._v(" "),v("tr",[v("td",[t._v("0x1000:0x0059")]),t._v(" "),v("td",[t._v("LSI SAS1068_820XELP")]),t._v(" "),v("td",[t._v("mptsas")])]),t._v(" "),v("tr",[v("td",[t._v("0x1000:0x0060")]),t._v(" "),v("td",[t._v("LSI MegaRAID SAS1078R")]),t._v(" "),v("td",[t._v("megaraid_sas")])]),t._v(" "),v("tr",[v("td",[t._v("0x1000:0x0062")]),t._v(" "),v("td",[t._v("LSI SAS1078")]),t._v(" "),v("td",[t._v("mptsas")])]),t._v(" "),v("tr",[v("td",[t._v("0x1000:0x0064")]),t._v(" "),v("td",[t._v("LSI SAS2116_1")]),t._v(" "),v("td",[t._v("mpt3sas")])]),t._v(" "),v("tr",[v("td",[t._v("0x1000:0x0065")]),t._v(" "),v("td",[t._v("LSI SAS2116_2")]),t._v(" "),v("td",[t._v("mpt3sas")])]),t._v(" "),v("tr",[v("td",[t._v("0x1000:0x0070")]),t._v(" "),v("td",[t._v("LSI SAS2004")]),t._v(" "),v("td",[t._v("mpt3sas")])]),t._v(" "),v("tr",[v("td",[t._v("0x1000:0x0072")]),t._v(" "),v("td",[t._v("LSI SAS2008")]),t._v(" "),v("td",[t._v("mpt3sas")])]),t._v(" "),v("tr",[v("td",[t._v("0x1000:0x0074")]),t._v(" "),v("td",[t._v("LSI SAS2108_1")]),t._v(" "),v("td",[t._v("mpt3sas")])]),t._v(" "),v("tr",[v("td",[t._v("0x1000:0x0076")]),t._v(" "),v("td",[t._v("LSI SAS2108_2")]),t._v(" "),v("td",[t._v("mpt3sas")])]),t._v(" "),v("tr",[v("td",[t._v("0x1000:0x0077")]),t._v(" "),v("td",[t._v("LSI SAS2108_3")]),t._v(" "),v("td",[t._v("mpt3sas")])]),t._v(" "),v("tr",[v("td",[t._v("0x1000:0x0078")]),t._v(" "),v("td",[t._v("LSI MegaRAID SAS1078 Gen2")]),t._v(" "),v("td",[t._v("megaraid_sas")])]),t._v(" "),v("tr",[v("td",[t._v("0x1000:0x007C")]),t._v(" "),v("td",[t._v("LSI MegaRAID SAS1078DE")]),t._v(" "),v("td",[t._v("megaraid_sas")])]),t._v(" "),v("tr",[v("td",[t._v("0x1000:0x007E")]),t._v(" "),v("td",[t._v("LSI SSS6200")]),t._v(" "),v("td",[t._v("mpt3sas")])]),t._v(" "),v("tr",[v("td",[t._v("0x1000:0x0411")]),t._v(" "),v("td",[t._v("LSI MegaRAID SAS1064R")]),t._v(" "),v("td",[t._v("megaraid_sas")])]),t._v(" "),v("tr",[v("td",[t._v("0x1000:0x0413")]),t._v(" "),v("td",[t._v("LSI MegaRAID SAS1068 Verde ZCR")]),t._v(" "),v("td",[t._v("megaraid_sas")])]),t._v(" "),v("tr",[v("td",[t._v("0x1011:0x0046:0x103C:0x10C2")]),t._v(" "),v("td",[t._v("HP NetRAID-4M")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x1011:0x0046:0x9005:0x0364")]),t._v(" "),v("td",[t._v("Adaptec 5400S (Mustang)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x1011:0x0046:0x9005:0x0365")]),t._v(" "),v("td",[t._v("Adaptec 5400S (Mustang)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x1011:0x0046:0x9005:0x1364")]),t._v(" "),v("td",[t._v("Dell PERC 2/QC")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x1028:0x0001:0x1028:0x0001")]),t._v(" "),v("td",[t._v("DELL PERC 2/Si (Iguana)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x1028:0x0002:0x1028:0x0002")]),t._v(" "),v("td",[t._v("DELL PERC 3/Di (Opal)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x1028:0x0002:0x1028:0x00D1")]),t._v(" "),v("td",[t._v("DELL PERC 3/Di (Viper)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x1028:0x0002:0x1028:0x00D9")]),t._v(" "),v("td",[t._v("DELL PERC 3/Di (Lexus)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x1028:0x0003:0x1028:0x0003")]),t._v(" "),v("td",[t._v("DELL PERC 3/Si (SlimFast)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x1028:0x0004:0x1028:0x00D0")]),t._v(" "),v("td",[t._v("DELL PERC 3/Di (Iguana FlipChip)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x1028:0x000A:0x1028:0x0106")]),t._v(" "),v("td",[t._v("DELL PERC 3/Di (Jaguar)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x1028:0x000A:0x1028:0x011B")]),t._v(" "),v("td",[t._v("DELL PERC 3/Di (Dagger)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x1028:0x000A:0x1028:0x0121")]),t._v(" "),v("td",[t._v("DELL PERC 3/Di (Boxster)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x1028:0x0015")]),t._v(" "),v("td",[t._v("Dell PERC5")]),t._v(" "),v("td",[t._v("megaraid_sas")])]),t._v(" "),v("tr",[v("td",[t._v("0x103C::: *:01:04")]),t._v(" "),v("td",[t._v("HP")]),t._v(" "),v("td",[t._v("hpsa")])]),t._v(" "),v("tr",[v("td",[t._v("0x1077:0x2100")]),t._v(" "),v("td",[t._v("QLogic ISP2100")]),t._v(" "),v("td",[t._v("qla2xxx")])]),t._v(" "),v("tr",[v("td",[t._v("0x1077:0x2200")]),t._v(" "),v("td",[t._v("QLogic ISP2200")]),t._v(" "),v("td",[t._v("qla2xxx")])]),t._v(" "),v("tr",[v("td",[t._v("0x1077:0x2300")]),t._v(" "),v("td",[t._v("QLogic ISP2300")]),t._v(" "),v("td",[t._v("qla2xxx")])]),t._v(" "),v("tr",[v("td",[t._v("0x1077:0x2312")]),t._v(" "),v("td",[t._v("QLogic ISP2312")]),t._v(" "),v("td",[t._v("qla2xxx")])]),t._v(" "),v("tr",[v("td",[t._v("0x1077:0x2322")]),t._v(" "),v("td",[t._v("QLogic ISP2322")]),t._v(" "),v("td",[t._v("qla2xxx")])]),t._v(" "),v("tr",[v("td",[t._v("0x1077:0x2422")]),t._v(" "),v("td",[t._v("QLogic ISP2422")]),t._v(" "),v("td",[t._v("qla2xxx")])]),t._v(" "),v("tr",[v("td",[t._v("0x1077:0x2432")]),t._v(" "),v("td",[t._v("QLogic ISP2432")]),t._v(" "),v("td",[t._v("qla2xxx")])]),t._v(" "),v("tr",[v("td",[t._v("0x1077:0x5422")]),t._v(" "),v("td",[t._v("QLogic ISP5422")]),t._v(" "),v("td",[t._v("qla2xxx")])]),t._v(" "),v("tr",[v("td",[t._v("0x1077:0x5432")]),t._v(" "),v("td",[t._v("QLogic ISP5432 / QLE220")]),t._v(" "),v("td",[t._v("qla2xxx")])]),t._v(" "),v("tr",[v("td",[t._v("0x1077:0x6312")]),t._v(" "),v("td",[t._v("QLogic ISP6312")]),t._v(" "),v("td",[t._v("qla2xxx")])]),t._v(" "),v("tr",[v("td",[t._v("0x1077:0x6322")]),t._v(" "),v("td",[t._v("QLogic ISP6322")]),t._v(" "),v("td",[t._v("qla2xxx")])]),t._v(" "),v("tr",[v("td",[t._v("0x1077:0x8001")]),t._v(" "),v("td",[t._v("QLogic ISP8001 / QLE81xx")]),t._v(" "),v("td",[t._v("qla2xxx")])]),t._v(" "),v("tr",[v("td",[t._v("0x1077:0x8021")]),t._v(" "),v("td",[t._v("QLogic ISP8021 / QLE82xx")]),t._v(" "),v("td",[t._v("qla2xxx")])]),t._v(" "),v("tr",[v("td",[t._v("0x1077:0x8022")]),t._v(" "),v("td",[t._v("QLogic ISP8022")]),t._v(" "),v("td",[t._v("qla4xxx")])]),t._v(" "),v("tr",[v("td",[t._v("0x1077:0x8032")]),t._v(" "),v("td",[t._v("QLogic ISP8324")]),t._v(" "),v("td",[t._v("qla4xxx")])]),t._v(" "),v("tr",[v("td",[t._v("0x1077:0x8042")]),t._v(" "),v("td",[t._v("QLogic ISP8042")]),t._v(" "),v("td",[t._v("qla4xxx")])]),t._v(" "),v("tr",[v("td",[t._v("0x1077:0x8044")]),t._v(" "),v("td",[t._v("QLogic ISP8044 / QLE84xx")]),t._v(" "),v("td",[t._v("qla2xxx")])]),t._v(" "),v("tr",[v("td",[t._v("0x1077:0x8432")]),t._v(" "),v("td",[t._v("QLogic ISP8432 / QLE8000")]),t._v(" "),v("td",[t._v("qla2xxx")])]),t._v(" "),v("tr",[v("td",[t._v("0x1077:0xF001")]),t._v(" "),v("td",[t._v("QLogic ISPF001 / QLE10000")]),t._v(" "),v("td",[t._v("qla2xxx")])]),t._v(" "),v("tr",[v("td",[t._v("0x10DF:0x1AE5")]),t._v(" "),v("td",[t._v("FIREFLY")]),t._v(" "),v("td",[t._v("lpfc")])]),t._v(" "),v("tr",[v("td",[t._v("0x10DF:0xE100")]),t._v(" "),v("td",[t._v("PROTEUS VF")]),t._v(" "),v("td",[t._v("lpfc")])]),t._v(" "),v("tr",[v("td",[t._v("0x10DF:0xE131")]),t._v(" "),v("td",[t._v("BALIUS")]),t._v(" "),v("td",[t._v("lpfc")])]),t._v(" "),v("tr",[v("td",[t._v("0x10DF:0xE180")]),t._v(" "),v("td",[t._v("PROTEUS PF")]),t._v(" "),v("td",[t._v("lpfc")])]),t._v(" "),v("tr",[v("td",[t._v("0x10DF:0xE208")]),t._v(" "),v("td",[t._v("LANCER_FC_VF")]),t._v(" "),v("td",[t._v("lpfc")])]),t._v(" "),v("tr",[v("td",[t._v("0x10DF:0xE260")]),t._v(" "),v("td",[t._v("Emulex OneConnect OCe15102-FM/OCe15104-FM/OCm15108-F-P")]),t._v(" "),v("td",[t._v("lpfc")])]),t._v(" "),v("tr",[v("td",[t._v("0x10DF:0xE268")]),t._v(" "),v("td",[t._v("LANCER_FCOE_VF")]),t._v(" "),v("td",[t._v("lpfc")])]),t._v(" "),v("tr",[v("td",[t._v("0x10DF:0xF095")]),t._v(" "),v("td",[t._v("RFLY")]),t._v(" "),v("td",[t._v("lpfc")])]),t._v(" "),v("tr",[v("td",[t._v("0x10DF:0xF098")]),t._v(" "),v("td",[t._v("PFLY")]),t._v(" "),v("td",[t._v("lpfc")])]),t._v(" "),v("tr",[v("td",[t._v("0x10DF:0xF0A1")]),t._v(" "),v("td",[t._v("LP101")]),t._v(" "),v("td",[t._v("lpfc")])]),t._v(" "),v("tr",[v("td",[t._v("0x10DF:0xF0A5")]),t._v(" "),v("td",[t._v("TFLY")]),t._v(" "),v("td",[t._v("lpfc")])]),t._v(" "),v("tr",[v("td",[t._v("0x10DF:0xF0D1")]),t._v(" "),v("td",[t._v("BSMB")]),t._v(" "),v("td",[t._v("lpfc")])]),t._v(" "),v("tr",[v("td",[t._v("0x10DF:0xF0F5")]),t._v(" "),v("td",[t._v("NEPTUNE")]),t._v(" "),v("td",[t._v("lpfc")])]),t._v(" "),v("tr",[v("td",[t._v("0x10DF:0xF0F6")]),t._v(" "),v("td",[t._v("NEPTUNE SCSP")]),t._v(" "),v("td",[t._v("lpfc")])]),t._v(" "),v("tr",[v("td",[t._v("0x10DF:0xF0F7")]),t._v(" "),v("td",[t._v("NEPTUNE DCSP")]),t._v(" "),v("td",[t._v("lpfc")])]),t._v(" "),v("tr",[v("td",[t._v("0x10DF:0xF700")]),t._v(" "),v("td",[t._v("SUPERFLY")]),t._v(" "),v("td",[t._v("lpfc")])]),t._v(" "),v("tr",[v("td",[t._v("0x10DF:0xF800")]),t._v(" "),v("td",[t._v("DRAGONFLY")]),t._v(" "),v("td",[t._v("lpfc")])]),t._v(" "),v("tr",[v("td",[t._v("0x10DF:0xF900")]),t._v(" "),v("td",[t._v("CENTAUR")]),t._v(" "),v("td",[t._v("lpfc")])]),t._v(" "),v("tr",[v("td",[t._v("0x10DF:0xF980")]),t._v(" "),v("td",[t._v("PEGASUS")]),t._v(" "),v("td",[t._v("lpfc")])]),t._v(" "),v("tr",[v("td",[t._v("0x10DF:0xFA00")]),t._v(" "),v("td",[t._v("THOR")]),t._v(" "),v("td",[t._v("lpfc")])]),t._v(" "),v("tr",[v("td",[t._v("0x10DF:0xFB00")]),t._v(" "),v("td",[t._v("VIPER")]),t._v(" "),v("td",[t._v("lpfc")])]),t._v(" "),v("tr",[v("td",[t._v("0x10DF:0xFC00")]),t._v(" "),v("td",[t._v("LP10000S")]),t._v(" "),v("td",[t._v("lpfc")])]),t._v(" "),v("tr",[v("td",[t._v("0x10DF:0xFC10")]),t._v(" "),v("td",[t._v("LP11000S")]),t._v(" "),v("td",[t._v("lpfc")])]),t._v(" "),v("tr",[v("td",[t._v("0x10DF:0xFC20")]),t._v(" "),v("td",[t._v("LPE11000S")]),t._v(" "),v("td",[t._v("lpfc")])]),t._v(" "),v("tr",[v("td",[t._v("0x10DF:0xFC50")]),t._v(" "),v("td",[t._v("PROTEUS S")]),t._v(" "),v("td",[t._v("lpfc")])]),t._v(" "),v("tr",[v("td",[t._v("0x10DF:0xFD00")]),t._v(" "),v("td",[t._v("HELIOS")]),t._v(" "),v("td",[t._v("lpfc")])]),t._v(" "),v("tr",[v("td",[t._v("0x10DF:0xFD11")]),t._v(" "),v("td",[t._v("HELIOS SCSP")]),t._v(" "),v("td",[t._v("lpfc")])]),t._v(" "),v("tr",[v("td",[t._v("0x10DF:0xFD12")]),t._v(" "),v("td",[t._v("HELIOS DCSP")]),t._v(" "),v("td",[t._v("lpfc")])]),t._v(" "),v("tr",[v("td",[t._v("0x19A2:0x0212")]),t._v(" "),v("td",[t._v("Emulex BladeEngine 2 10Gb iSCSI Initiator")]),t._v(" "),v("td",[t._v("be2iscsi")])]),t._v(" "),v("tr",[v("td",[t._v("0x19A2:0x0222")]),t._v(" "),v("td",[t._v("Emulex BladeEngine 3 iSCSI")]),t._v(" "),v("td",[t._v("be2iscsi")])]),t._v(" "),v("tr",[v("td",[t._v("0x19A2:0x0702")]),t._v(" "),v("td",[t._v("Emulex OneConnect OCe10101/OCm10101/OCe10102/OCm10102")]),t._v(" "),v("td",[t._v("be2iscsi")])]),t._v(" "),v("tr",[v("td",[t._v("0x19A2:0x0703")]),t._v(" "),v("td",[t._v("Emulex OneConnect OCe10100")]),t._v(" "),v("td",[t._v("be2iscsi")])]),t._v(" "),v("tr",[v("td",[t._v("0x19A2:0x0704")]),t._v(" "),v("td",[t._v("Emulex OneConnect Tigershark FCoE")]),t._v(" "),v("td",[t._v("lpfc")])]),t._v(" "),v("tr",[v("td",[t._v("0x19A2:0x0712")]),t._v(" "),v("td",[t._v("Emulex OneConnect Tomcat iSCSI")]),t._v(" "),v("td",[t._v("be2iscsi")])]),t._v(" "),v("tr",[v("td",[t._v("0x19A2:0x0714")]),t._v(" "),v("td",[t._v("Emulex OneConnect Tomcat FCoE")]),t._v(" "),v("td",[t._v("lpfc")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0200:0x9005:0x0200")]),t._v(" "),v("td",[t._v("Themisto Jupiter Platform")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0283:0x9005:0x0283")]),t._v(" "),v("td",[t._v("Catapult")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0284:0x9005:0x0284")]),t._v(" "),v("td",[t._v("Tomcat")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0285")]),t._v(" "),v("td",[t._v("Adaptec Catch All")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0285:0x1014:0x02F2")]),t._v(" "),v("td",[t._v("IBM 8i (AvonPark)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0285:0x1014:0x0312")]),t._v(" "),v("td",[t._v("IBM 8i (AvonPark Lite)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0285:0x1028")]),t._v(" "),v("td",[t._v("Dell Catchall")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0285:0x1028:0x0287")]),t._v(" "),v("td",[t._v("Perc 320/DC")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0285:0x1028:0x0291")]),t._v(" "),v("td",[t._v("CERC SATA RAID 2 PCI SATA 6ch (DellCorsair)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0285:0x103C:0x3227")]),t._v(" "),v("td",[t._v("AAR-2610SA PCI SATA 6ch")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0285:0x17AA")]),t._v(" "),v("td",[t._v("Legend Catchall")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0285:0x17AA:0x0286")]),t._v(" "),v("td",[t._v("Legend S220 (Legend Crusader)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0285:0x17AA:0x0287")]),t._v(" "),v("td",[t._v("Legend S230 (Legend Vulcan)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0285:0x9005:0x0285")]),t._v(" "),v("td",[t._v("Adaptec 2200S (Vulcan)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0285:0x9005:0x0286")]),t._v(" "),v("td",[t._v("Adaptec 2120S (Crusader)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0285:0x9005:0x0287")]),t._v(" "),v("td",[t._v("Adaptec 2200S (Vulcan-2m)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0285:0x9005:0x0288")]),t._v(" "),v("td",[t._v("Adaptec 3230S (Harrier)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0285:0x9005:0x0289")]),t._v(" "),v("td",[t._v("Adaptec 3240S (Tornado)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0285:0x9005:0x028A")]),t._v(" "),v("td",[t._v("ASR-2020ZCR SCSI PCI-X ZCR (Skyhawk)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0285:0x9005:0x028B")]),t._v(" "),v("td",[t._v("ASR-2025ZCR SCSI SO-DIMM PCI-X ZCR (Terminator)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0285:0x9005:0x028E")]),t._v(" "),v("td",[t._v("ASR-2020SA SATA PCI-X ZCR (Skyhawk)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0285:0x9005:0x028F")]),t._v(" "),v("td",[t._v("ASR-2025SA SATA SO-DIMM PCI-X ZCR (Terminator)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0285:0x9005:0x0290")]),t._v(" "),v("td",[t._v("AAR-2410SA PCI SATA 4ch (Jaguar II)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0285:0x9005:0x0292")]),t._v(" "),v("td",[t._v("AAR-2810SA PCI SATA 8ch (Corsair-8)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0285:0x9005:0x0293")]),t._v(" "),v("td",[t._v("AAR-21610SA PCI SATA 16ch (Corsair-16)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0285:0x9005:0x0294")]),t._v(" "),v("td",[t._v("ESD SO-DIMM PCI-X SATA ZCR (Prowler)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0285:0x9005:0x0296")]),t._v(" "),v("td",[t._v("ASR-2240S (SabreExpress)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0285:0x9005:0x0297")]),t._v(" "),v("td",[t._v("ASR-4005")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0285:0x9005:0x0298")]),t._v(" "),v("td",[t._v("ASR-4000 (BlackBird)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0285:0x9005:0x0299")]),t._v(" "),v("td",[t._v("ASR-4800SAS (Marauder-X)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0285:0x9005:0x029A")]),t._v(" "),v("td",[t._v("ASR-4805SAS (Marauder-E)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0285:0x9005:0x02A4")]),t._v(" "),v("td",[t._v("ICP9085LI (Marauder-X)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0285:0x9005:0x02A5")]),t._v(" "),v("td",[t._v("ICP5085BR (Marauder-E)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0286")]),t._v(" "),v("td",[t._v("Adaptec Rocket Catch All")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0286:0x1014:0x9540")]),t._v(" "),v("td",[t._v("IBM 8k/8k-l4 (Aurora Lite)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0286:0x1014:0x9580")]),t._v(" "),v("td",[t._v("IBM 8k/8k-l8 (Aurora)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0286:0x9005:0x028C")]),t._v(" "),v("td",[t._v("ASR-2230S/ASR-2230SLP PCI-X (Lancer)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0286:0x9005:0x028D")]),t._v(" "),v("td",[t._v("ASR-2130S (Lancer)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0286:0x9005:0x029B")]),t._v(" "),v("td",[t._v("AAR-2820SA (Intruder)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0286:0x9005:0x029C")]),t._v(" "),v("td",[t._v("AAR-2620SA (Intruder)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0286:0x9005:0x029D")]),t._v(" "),v("td",[t._v("AAR-2420SA (Intruder)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0286:0x9005:0x029E")]),t._v(" "),v("td",[t._v("ICP9024RO (Lancer)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0286:0x9005:0x029F")]),t._v(" "),v("td",[t._v("ICP9014RO (Lancer)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0286:0x9005:0x02A0")]),t._v(" "),v("td",[t._v("ICP9047MA (Lancer)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0286:0x9005:0x02A1")]),t._v(" "),v("td",[t._v("ICP9087MA (Lancer)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0286:0x9005:0x02A2")]),t._v(" "),v("td",[t._v("ASR-3800 (Hurricane44)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0286:0x9005:0x02A3")]),t._v(" "),v("td",[t._v("ICP5445AU (Hurricane44)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0286:0x9005:0x02A6")]),t._v(" "),v("td",[t._v("ICP9067MA (Intruder-6)")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0286:0x9005:0x0800")]),t._v(" "),v("td",[t._v("Callisto Jupiter Platform")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0287:0x9005:0x0800")]),t._v(" "),v("td",[t._v("Themisto Jupiter Platform")]),t._v(" "),v("td",[t._v("aacraid")])]),t._v(" "),v("tr",[v("td",[t._v("0x9005:0x0288")]),t._v(" "),v("td",[t._v("Adaptec NEMER/ARK Catch All")]),t._v(" "),v("td",[t._v("aacraid")])])])]),t._v(" "),v("h5",{attrs:{id:"trademarks"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#trademarks"}},[t._v("#")]),t._v(" Trademarks")]),t._v(" "),v("p",[t._v("Red Hat and RHEL are trademarks or registered trademarks of Red Hat, Inc. or its subsidiaries in the United States and other countries.")])])}),[],!1,null,null,null);v.default=e.exports}}]);