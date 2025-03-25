(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{355:function(e,t,a){"use strict";a.r(t);var s=a(14),n=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"almalinux-8-openscap-guide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#almalinux-8-openscap-guide"}},[e._v("#")]),e._v(" AlmaLinux 8 OpenSCAP Guide")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("This guide was developed for AlmaLinux 8 OS. Running OpenSCAP for AlmaLinux 9 OS may work differently, please, refer to "),t("a",{attrs:{href:"/documentation/openscap-guide-for-9"}},[e._v("AlmaLinux 9 OpenSCAP Guide")]),e._v(".")])]),e._v(" "),t("h2",{attrs:{id:"about-openscap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#about-openscap"}},[e._v("#")]),e._v(" About OpenSCAP")]),e._v(" "),t("p",[e._v("SCAP - The Security Content Automation Protocol - is an automated method that uses standards to enable vulnerability management, measurement, and policy compliance evaluation of systems. SCAP is a U.S. standard maintained by the National Institute of Standards and Technology.")]),e._v(" "),t("p",[e._v("The AlmaLinux OpenSCAP Guide describes how to use OpenSCAP software to audit your AlmaLinux 8 system for security compliance.")]),e._v(" "),t("h3",{attrs:{id:"about-scap-packages-and-how-to-enable-them"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#about-scap-packages-and-how-to-enable-them"}},[e._v("#")]),e._v(" About SCAP packages and how to Enable them")]),e._v(" "),t("p",[e._v("AlmaLinux provides the following SCAP packages for AlmaLinux 8:")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("SCAP package")]),e._v(" "),t("th",[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("openscap")]),e._v(" "),t("td",[e._v("Provides the OpenSCAP library and tool for evaluating a system generating reports.")])]),e._v(" "),t("tr",[t("td",[e._v("openscap-utils")]),e._v(" "),t("td",[e._v("Includes command-line tools that use the OpenSCAP library.")])]),e._v(" "),t("tr",[t("td",[e._v("openscap-scanner")]),e._v(" "),t("td",[e._v("Enables many SCAP options, like vulnerability and configuration scanning, along with the SCAP Security Guide.")])]),e._v(" "),t("tr",[t("td",[e._v("scap-security-guide")]),e._v(" "),t("td",[e._v("Contains SCAP-format system-hardening guide. The guide has links to government requirements and provides security profiles.")])])])]),e._v(" "),t("p",[e._v("SCAP packages are available in the AlmaLinux 8 AppStream repository. Use the dnf command to install the SCAP packages. The openscap-scanner package will be installed as a dependency.")]),e._v(" "),t("p",[t("code",[e._v("sudo dnf install openscap openscap-utils scap-security-guide")])]),e._v(" "),t("p",[e._v("After installation, all SCAP security policies are located in the "),t("em",[e._v("/usr/share/xml/scap/ssg/content/")]),e._v(" directory.")]),e._v(" "),t("h2",{attrs:{id:"about-the-oscap-command"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#about-the-oscap-command"}},[e._v("#")]),e._v(" About the "),t("code",[e._v("oscap")]),e._v(" Command")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("oscap")]),e._v(" command is a utility that helps evaluate the system, check compliance, and perform various functions like showing information and generating reports.")]),e._v(" "),t("p",[e._v("This utility has many options, but uses the following general structure:")]),e._v(" "),t("p",[t("code",[e._v("oscap [options] module operation [operation_options_and_arguments]")])]),e._v(" "),t("p",[e._v("Module types that are supported by the oscap command are mentioned in the list:")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Module type")]),e._v(" "),t("th",[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("cpe")]),e._v(" "),t("td",[e._v("Uses a Common Platform Enumeration (CPE) file to perform operations.")])]),e._v(" "),t("tr",[t("td",[e._v("cve")]),e._v(" "),t("td",[e._v("Uses a Common Vulnerabilities and Exposures (CVE) file to perform operations.")])]),e._v(" "),t("tr",[t("td",[e._v("cvss")]),e._v(" "),t("td",[e._v("Uses a Common Vulnerability Scoring System (CVSS) file to perform operations.")])]),e._v(" "),t("tr",[t("td",[e._v("ds")]),e._v(" "),t("td",[e._v("Uses a SCAP Data Stream (DS) to perform operations.")])]),e._v(" "),t("tr",[t("td",[e._v("info")]),e._v(" "),t("td",[e._v("Determines a file's type and prints information about the file.")])]),e._v(" "),t("tr",[t("td",[e._v("oval")]),e._v(" "),t("td",[e._v("Uses an Open Vulnerability and Assessment Language (OVAL) file to perform operations.")])]),e._v(" "),t("tr",[t("td",[e._v("xccdf")]),e._v(" "),t("td",[e._v("Uses a file in eXtensible Configuration Checklist Description Format (XCCDF) to perform operations.")])]),e._v(" "),t("tr",[t("td",[e._v("eval")]),e._v(" "),t("td",[e._v("For an OVAL file, oscap probes the system, evaluates each definition in the file and then prints the results to standard output. "),t("br"),e._v(" For a specified profile in an XCCDF file, oscap tests the system against each rule in the file and prints the results to standard output.")])]),e._v(" "),t("tr",[t("td",[e._v("generate")]),e._v(" "),t("td",[e._v("For an OVAL XML results file, generate converts the specified file into an HTML report. "),t("br"),e._v("For an XCCDF file, generate outputs a full security guide for a specified profile.")])]),e._v(" "),t("tr",[t("td",[e._v("validate")]),e._v(" "),t("td",[e._v("Validates an OVAL or XCCDF file against an XML schema to check for errors.")])])])]),e._v(" "),t("p",[e._v("These modules such as info, oval, xccdf are effective for scanning the system.\nAlso, keep in mind, that sometimes the "),t("code",[e._v("oscap")]),e._v(" command performs different operations depending on the module type. Pay attention to the eval and generate module types.")]),e._v(" "),t("p",[e._v("Now, let's take a look at some more detailed examples with the oscap command.")]),e._v(" "),t("h3",{attrs:{id:"displaying-information-using-oscap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#displaying-information-using-oscap"}},[e._v("#")]),e._v(" Displaying information, using "),t("code",[e._v("oscap")])]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("oscap -V")]),e._v(" command displays information such as the specifications which the version of oscap supports; capabilities of the oscap version; where schema, CPE, and probe files are stored; inbuilt CPE names; supported OVAL objects and associated SCAP probes.")]),e._v(" "),t("p",[e._v("As an example of an output you will see this:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("OpenSCAP command line tool (oscap) 1.3.6\nCopyright 2009--2021 Red Hat Inc., Durham, North Carolina.\n\n==== Supported specifications ====\nSCAP Version: 1.3\nXCCDF Version: 1.2\nOVAL Version: 5.11.1\nCPE Version: 2.3\nCVSS Version: 2.0\nCVE Version: 2.0\nAsset Identification Version: 1.1\nAsset Reporting Format Version: 1.1\nCVRF Version: 1.1\n\n==== Capabilities added by auto-loaded plugins ====\nNo plugins have been auto-loaded...\n\n==== Paths ====\nSchema files: /usr/share/openscap/schemas\nDefault CPE files: /usr/share/openscap/cpe\n\n==== Inbuilt CPE names ====\nRed Hat Enterprise Linux - cpe:/o:redhat:enterprise_linux:-\n...\nCommunity Enterprise Operating System 8 - cpe:/o:centos:centos:8\nAlmaLinux 8 - cpe:/o:almalinux:almalinux:8\n...\nFedora 35 - cpe:/o:fedoraproject:fedora:35\n\n==== Supported OVAL objects and associated OpenSCAP probes ====\nOVAL family   OVAL object                  OpenSCAP probe              \n----------    ----------                   ----------                  \nindependent   environmentvariable          probe_environmentvariable\nindependent   environmentvariable58        probe_environmentvariable58\n...\nunix          uname                        probe_uname\nunix          xinetd                       probe_xinetd\n")])])]),t("h3",{attrs:{id:"displaying-available-profiles"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#displaying-available-profiles"}},[e._v("#")]),e._v(" Displaying Available Profiles")]),e._v(" "),t("p",[e._v("A profile consists of common security suggestions that are related to any AlmaLinux installation. Profiles also have supplementary recommendations for the system to use. So, the "),t("code",[e._v("oscap info")]),e._v(" command is used to see available profiles that are currently supported by the SCAP Security Guide which is a checklist file.")]),e._v(" "),t("p",[t("code",[e._v("oscap info /usr/share/xml/scap/ssg/content/ssg-almalinux8-xccdf.xml")])]),e._v(" "),t("p",[e._v("The part in quotes is the full path to the security content file being examined.")]),e._v(" "),t("p",[e._v("As an example of displaying available profiles output you'll see next:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Document type: XCCDF Checklist\nChecklist version: 1.1\nImported: 2022-05-03T13:52:24\nStatus: draft\nGenerated: 2022-05-03\nResolved: true\nProfiles:\n\tTitle: ANSSI-BP-028 (enhanced)\n\t\tId: anssi_bp28_enhanced\n\tTitle: ANSSI-BP-028 (high)\n\t\tId: anssi_bp28_high\n\tTitle: ANSSI-BP-028 (intermediary)\n\t\tId: anssi_bp28_intermediary\n\tTitle: ANSSI-BP-028 (minimal)\n\t\tId: anssi_bp28_minimal\n\tTitle: CIS AlmaLinux OS 8 Benchmark for Level 2 - Server\n\t\tId: cis\n\tTitle: CIS AlmaLinux OS 8 Benchmark for Level 1 - Server\n\t\tId: cis_server_l1\n\tTitle: CIS AlmaLinux OS 8 Benchmark for Level 1 - Workstation\n\t\tId: cis_workstation_l1\n\tTitle: CIS AlmaLinux OS 8 Benchmark for Level 2 - Workstation\n\t\tId: cis_workstation_l2\n\tTitle: Unclassified Information in Non-federal Information Systems and Organizations (NIST 800-171)\n\t\tId: cui\n\tTitle: Australian Cyber Security Centre (ACSC) Essential Eight\n\t\tId: e8\n\tTitle: Health Insurance Portability and Accountability Act (HIPAA)\n\t\tId: hipaa\n\tTitle: Australian Cyber Security Centre (ACSC) ISM Official\n\t\tId: ism_o\n\tTitle: Protection Profile for General Purpose Operating Systems\n\t\tId: ospp\n\tTitle: PCI-DSS v3.2.1 Control Baseline for Red Hat Enterprise Linux 8\n\t\tId: pci-dss\n\tTitle: DISA STIG for Red Hat Enterprise Linux 8\n\t\tId: stig\n\tTitle: DISA STIG with GUI for Red Hat Enterprise Linux 8\n\t\tId: stig_gui\nReferenced check files:\n\tssg-almalinux8-oval.xml\n\t\tsystem: http://oval.mitre.org/XMLSchema/oval-definitions-5\n\tssg-almalinux8-ocil.xml\n\t\tsystem: http://scap.nist.gov/schema/ocil/2\n\thttps://security.almalinux.org/oval/org.almalinux.alsa-8.xml\n\t\tsystem: http://oval.mitre.org/XMLSchema/oval-definitions-5\n")])])]),t("p",[e._v("We'd like to mention, that the profiles in the example list may not be the same with your system.")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("--profile")]),e._v(" option is useful to get information about a specific profile.")]),e._v(" "),t("p",[t("code",[e._v("oscap info --profile hipaa /usr/share/xml/scap/ssg/content/ssg-almalinux8-xccdf.xml")])]),e._v(" "),t("p",[e._v("There's an output example:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Document type: XCCDF Checklist\nProfile\n\tTitle: Health Insurance Portability and Accountability Act (HIPAA)\n\tId: hipaa\n\nDescription: The HIPAA Security Rule establishes U.S. national standards to protect individuals’ electronic personal health information that is created, received, used, or maintained by a covered entity. The Security Rule requires appropriate administrative, physical and technical safeguards to ensure the confidentiality, integrity, and security of electronic protected health information.  This profile configures AlmaLinux 8 to the HIPAA Security Rule identified for securing of electronic protected health information. Use of this profile in no way guarantees or makes claims against legal compliance against the HIPAA Security Rule(s).\n")])])]),t("h3",{attrs:{id:"scanning-the-system"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scanning-the-system"}},[e._v("#")]),e._v(" Scanning the system")]),e._v(" "),t("p",[e._v("The most effective use of the oscap utility is the feature to perform configuration and vulnerability scans of a local system. The "),t("code",[e._v("oscap xccdf eval")]),e._v(" command is useful to scan a system against an XCCDF profile.")]),e._v(" "),t("p",[e._v("The output of this command shows a scan operation. It uses the "),t("em",[e._v("ssg-almalinux8-cpe-dictionary.xml")]),e._v(" CPE dictionary to run against the HIPAA profile of the "),t("em",[e._v("ssg-almalinux8-xccdf.xml")]),e._v(" checklist. The results are shown in a terminal window, as well as saved in XML and HTML formats in the two directories. One directory is /tmp, and the other is the "),t("strong",[e._v("~home/user")]),e._v(" catalog that you choose by yourself where you'd like to save the results. Any rule in a profile that results in a fail potentially requires the system to be reconfigured.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("oscap xccdf eval --profile hipaa \\\n--results /tmp/`hostname`-ssg-results.xml \\\n--report ~/report/`hostname`-ssg-results.html \\ \n--cpe /usr/share/xml/scap/ssg/content/ssg-almalinux8-cpe-dictionary.xml \\\n/usr/share/xml/scap/ssg/content/ssg-almalinux8-xccdf.xml\n")])])]),t("p",[e._v("Here is an example output of this command:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Title   Verify File Hashes with RPM\nRule    rpm_verify_hashes\nResult  pass\n\nTitle   Verify and Correct File Permissions with RPM\nRule    rpm_verify_permissions\nResult  fail\n\nTitle   Configure SSH to use System Crypto Policy\nRule    configure_ssh_crypto_policy\nResult  pass\n...\nTitle   Remove Rsh Trust Files\nRule    no_rsh_trust_files\nResult  pass\n\nTitle   Disable KDump Kernel Crash Analyzer (kdump)\nRule    service_kdump_disabled\nResult  fail\n")])])]),t("p",[e._v("The HTML report which you can view in a browser looks like as follows:")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/openscap_evaluation-report.png",alt:"image"}})]),e._v(" "),t("h3",{attrs:{id:"generating-a-full-security-guide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#generating-a-full-security-guide"}},[e._v("#")]),e._v(" Generating a Full Security Guide")]),e._v(" "),t("p",[e._v("To create a full security guide for a system based on an XCCDF profile, use the "),t("code",[e._v("oscap xccdf generate guide")]),e._v(" command. Pay attention, that like in the previous command you choose your home path "),t("strong",[e._v("~home/user")]),e._v(" to save the HTML security guide.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("oscap xccdf generate guide --profile hipaa \\\n--cpe /usr/share/xml/scap/ssg/content/ssg-almalinux8-cpe-dictionary.xml \\\n/usr/share/xml/scap/ssg/content/ssg-almalinux8-xccdf.xml > ~/report/security_guide.html\n")])])]),t("p",[e._v("You can view the HTML report in a browser. Here is an example:")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/openscap_security-guide-1.png",alt:"image"}}),e._v(" "),t("img",{attrs:{src:"/images/openscap_security-guide-2.png",alt:"image"}})]),e._v(" "),t("h3",{attrs:{id:"oval-scan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#oval-scan"}},[e._v("#")]),e._v(" OVAL Scan")]),e._v(" "),t("h4",{attrs:{id:"about-oval"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#about-oval"}},[e._v("#")]),e._v(" About OVAL")]),e._v(" "),t("p",[e._v("The OVAL definition file is used to scan the system in order to verify if applicable errata have been installed.\nTo see the information about supported AlmaLinux OS versions and their public OVAL streams, please, visit the "),t("a",{attrs:{href:"https://wiki.almalinux.org/documentation/oval-streams.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("AlmaLinux OVAL streams"),t("OutboundLink")],1),e._v(" wiki page.")]),e._v(" "),t("p",[e._v("There are two types of OVAL files: "),t("em",[e._v("org.almalinux.alsa-8.xml")]),e._v(" and "),t("em",[e._v("org.almalinux.alsa-8.xml.bz2")]),e._v(", which contain the same information but archived.")]),e._v(" "),t("h4",{attrs:{id:"performing-a-scan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#performing-a-scan"}},[e._v("#")]),e._v(" Performing a scan")]),e._v(" "),t("p",[e._v("The first thing to run the OVAL scan is to download a file from an AlmaLinux OVAL stream using the browser or the "),t("code",[e._v("wget")]),e._v(" command.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("Don't forget to extract the OVAL file if you downloaded the compressed file:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("bzip2 -d org.almalinux.alsa-8.xml.bz2\n")])])])]),e._v(" "),t("ul",[t("li",[e._v("The following command to perform an audit scan of the AlmaLinux:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("oscap oval eval --results /tmp/alsa-results-oval.xml \\\n--report ~/report/alsa-report-oval.html org.almalinux.alsa-8.xml\n")])])]),t("p",[e._v("Here is an example output you can see:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Definition oval:org.almalinux.alsa:def:20224887: false\nDefinition oval:org.almalinux.alsa:def:20224872: true\nDefinition oval:org.almalinux.alsa:def:20224855: false\n...\nDefinition oval:org.almalinux.alsa:def:20224769: false\n...\nEvaluation done.\n")])])]),t("p",[e._v("A result of "),t("em",[e._v("false")]),e._v(" means that the patch has been applied. A result of "),t("em",[e._v("true")]),e._v(" means that the system is vulnerable and the patch is yet to be applied.")]),e._v(" "),t("ul",[t("li",[e._v("Run the following command to generate the HTML report to view in a browser:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("oscap oval generate report /tmp/alsa-results-oval.xml \\ \n~/report/alsa-report-oval.html\n")])])]),t("p",[e._v("Here is the example of the HTML report:\n"),t("img",{attrs:{src:"/images/openscap-oval-report.png",alt:"image"}})]),e._v(" "),t("h2",{attrs:{id:"scap-workbench"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scap-workbench"}},[e._v("#")]),e._v(" SCAP Workbench")]),e._v(" "),t("p",[e._v("One more way to scan a local or a remote system is SCAP Workbench. The SCAP Workbench utility also allows generating reports based on scan evaluations.")]),e._v(" "),t("p",[e._v("To install SCAP Workbench run the following command as root:")]),e._v(" "),t("p",[t("code",[e._v("sudo dnf install scap-workbench")])]),e._v(" "),t("p",[e._v("If the "),t("code",[e._v("scap-security-guide")]),e._v(" package wasn't installed from the package repository before, you need to install it too, to use SCAP Workbench effectively. All the other packages and dependencies are installed and updated automatically.")]),e._v(" "),t("p",[e._v("After SCAP Workbench is installed, it should appear in your desktop environments application menu and you can run it.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/openscap_workbench.png",alt:"image"}})]),e._v(" "),t("p",[e._v("After you start Workbench, a dialog window will offer you to choose which SCAP Security Guide to open.")]),e._v(" "),t("p",[e._v("When one of the guides is chosen, the next SCAP Workbench window appears. There is a menu, which offers you some more options to select before scanning the system.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/openscap_workbench-menu.png",alt:"image"}})]),e._v(" "),t("p",[t("em",[t("strong",[e._v("File")])]),e._v("\nThis option offers to load or save SCAP-related content. The "),t("em",[e._v("Save Customization Only")]),e._v(" item is useful if you selected 'Customization Only' and you want to save it as an XCCDF XML file. The "),t("em",[e._v("Save All")]),e._v(" item is useful to save SCAP files to the selected directory or as an RPM package.")]),e._v(" "),t("p",[t("em",[t("strong",[e._v("Customization")])]),e._v("\nThis option informs you about the customization used for the given security policy. The default is no customization.")]),e._v(" "),t("p",[t("em",[t("strong",[e._v("Profile")])]),e._v("\nThis option allows choosing the security profile by clicking this menu. You can create a new profile by clicking the Customize button.")]),e._v(" "),t("p",[e._v("Here is the list of available profiles that can be used to evaluate the system:")]),e._v(" "),t("ul",[t("li",[e._v("ANSSI-BP-028 (enhanced)")]),e._v(" "),t("li",[e._v("ANSSI-BP-028 (high)")]),e._v(" "),t("li",[e._v("ANSSI-BP-028 (intermediary)")]),e._v(" "),t("li",[e._v("ANSSI-BP-028 (minimal)")]),e._v(" "),t("li",[e._v("CIS AlmaLinux 8 Benchmark for Level 2 - Server")]),e._v(" "),t("li",[e._v("CIS AlmaLinux 8 Benchmark for Level 1 - Server")]),e._v(" "),t("li",[e._v("CIS AlmaLinux 8 Benchmark for Level 1 - Workstation")]),e._v(" "),t("li",[e._v("CIS AlmaLinux 8 Benchmark for Level 2 - Workstation")]),e._v(" "),t("li",[e._v("Unclassified Information in Non-federal Information Systems and Organizations (NIST 800-171)")]),e._v(" "),t("li",[e._v("Australian Cyber Security Centre (ACSC) Essential Eight")]),e._v(" "),t("li",[e._v("Health Insurance Portability and Accountability Act (HIPAA)")]),e._v(" "),t("li",[e._v("Australian Cyber Security Centre (ACSC) ISM Official")]),e._v(" "),t("li",[e._v("Protection Profile for General Purpose Operating Systems")]),e._v(" "),t("li",[e._v("PCI-DSS v3.2.1 Control Baseline for Red Hat Enterprise Linux 8")]),e._v(" "),t("li",[e._v("DISA STIG for Red Hat Enterprise Linux 8")]),e._v(" "),t("li",[e._v("DISA STIG with GUI for Red Hat Enterprise Linux 8")])]),e._v(" "),t("p",[t("em",[t("strong",[e._v("Target")])]),e._v("\nHere you can select the system you want to be evaluated - a local or a remote one.")]),e._v(" "),t("p",[t("em",[t("strong",[e._v("Selected Rules")])]),e._v("\nThis field shows you a list of security rules that security policy applies to.")]),e._v(" "),t("p",[t("em",[t("strong",[e._v("Fetch remote resources")])]),e._v("\nYou need to check this box in case you want the scanner to download remote OVAL content defined in an XML file.")]),e._v(" "),t("p",[t("em",[t("strong",[e._v("Remediate")])]),e._v("\nIf you check this box, SCAP Workbench will attempt to correct system settings that would fail to match the state defined by the policy.")]),e._v(" "),t("p",[e._v("After the profile is chosen, press the SCAN button. You will see how the process is going on the status bar.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/openscap-workbench-scanning.png",alt:"image"}})]),e._v(" "),t("p",[e._v("After the scanning is finished, you'll have a diagnostics window.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/openscap-workbench-message.png",alt:"image"}})]),e._v(" "),t("p",[e._v("You can "),t("em",[e._v("Save Results")]),e._v(" as  XCCDF Result file, ARF, or HTML Report, in case you need them. If you press the "),t("em",[e._v("Show Report")]),e._v(" button, it'll be displayed in a browser:")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/openscap-workbench-report.png",alt:"image"}})]),e._v(" "),t("h3",{attrs:{id:"applying-security-policy-during-installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#applying-security-policy-during-installation"}},[e._v("#")]),e._v(" Applying Security Policy during Installation")]),e._v(" "),t("p",[e._v("Note that you can also choose one of the earlier mentioned profiles while running AlmaLinux Installation. To do this, go to the Security Policy option to choose the profile you need.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/openscap_security-policy.png",alt:"image"}})]),e._v(" "),t("p",[e._v("No profile is chosen by default, as applying a security policy is not necessary. The applied security policy will be installed to the system using the compliance policies defined by SCAP.")])])}),[],!1,null,null,null);t.default=n.exports}}]);