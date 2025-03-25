(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{301:function(e,t,a){"use strict";a.r(t);var n=a(14),s=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h6",{attrs:{id:"last-updated-2024-03-25"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#last-updated-2024-03-25"}},[e._v("#")]),e._v(" last updated: 2024-03-25")]),e._v(" "),t("h1",{attrs:{id:"contribute-to-almalinux-documentation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contribute-to-almalinux-documentation"}},[e._v("#")]),e._v(" Contribute to AlmaLinux Documentation")]),e._v(" "),t("p",[e._v("If you are interested in contributing to AlmaLinux Wiki Documentation, we recommend you follow these guidelines.")]),e._v(" "),t("h2",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),t("h3",{attrs:{id:"starting-the-process"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#starting-the-process"}},[e._v("#")]),e._v(" Starting the process")]),e._v(" "),t("p",[e._v("Before you start writing a wiki page/instruction or modifying an existing one, we strongly recommend:")]),e._v(" "),t("ul",[t("li",[e._v("Look through existing open and closed "),t("a",{attrs:{href:"https://github.com/AlmaLinux/wiki/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("issues"),t("OutboundLink")],1),e._v(" for similar content, to prevent duplication.")]),e._v(" "),t("li",[e._v("Open an "),t("a",{attrs:{href:"https://github.com/AlmaLinux/wiki/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("issue"),t("OutboundLink")],1),e._v(" on the repo to propose your content before you begin writing it to ensure that is appropriate for the AlmaLinux Wiki and to collaborate with the AlmaLinux OS Foundation, Team and Community.")])]),e._v(" "),t("p",[e._v("You are also welcome to discuss the content and share your feedback and thoughts in the "),t("a",{attrs:{href:"https://chat.almalinux.org/almalinux/channels/sigdocumentation",target:"_blank",rel:"noopener noreferrer"}},[e._v("Documentation Chat Channel"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"setting-up-the-environment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-the-environment"}},[e._v("#")]),e._v(" Setting up the environment")]),e._v(" "),t("p",[e._v("The Wiki is powered by "),t("a",{attrs:{href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("VuePress"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("The general process to contribute to the wiki includes these steps:")]),e._v(" "),t("ul",[t("li",[e._v("Fork the Wiki "),t("a",{attrs:{href:"https://github.com/AlmaLinux/wiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("repository"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("li",[e._v("Clone your forked repository and navigate to its directory.")]),e._v(" "),t("li",[e._v("Create a new branch.")]),e._v(" "),t("li",[e._v("Edit or create a page.")]),e._v(" "),t("li",[e._v("Check your changes on the local wiki - see the steps below.")]),e._v(" "),t("li",[e._v("Commit your changes.")]),e._v(" "),t("li",[e._v("Create a pull-request to the master branch as described in the GitHub "),t("a",{attrs:{href:"https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentation"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("p",[e._v("There are two ways to run the wiki locally to check your changes:")]),e._v(" "),t("p",[t("strong",[e._v("Please, note, most steps are suitable for all three Linux, Windows and macOS systems, but some commands may need some adjustments.")])]),e._v(" "),t("h4",{attrs:{id:"install-yarn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-yarn"}},[e._v("#")]),e._v(" Install yarn")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("For Windows and macOS, you may need to install "),t("a",{attrs:{href:"https://nodejs.org/en",target:"_blank",rel:"noopener noreferrer"}},[e._v("nodejs"),t("OutboundLink")],1),e._v(" first.")])]),e._v(" "),t("ul",[t("li",[e._v("Install necessary dependencies:"),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n")])])])]),e._v(" "),t("li",[e._v("Run a development web-server:"),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" docs:dev\n")])])])]),e._v(" "),t("li",[e._v("Your local Wiki instance should be up and running on\n"),t("a",{attrs:{href:"http://localhost:8080/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:8080/"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("h4",{attrs:{id:"use-a-container"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use-a-container"}},[e._v("#")]),e._v(" Use a container")]),e._v(" "),t("p",[e._v("You can use a container engine like Podman or Docker to deploy a local development version of wiki inside a container.")]),e._v(" "),t("p",[t("strong",[e._v("Requirements:")]),e._v(" Docker or Podman")]),e._v(" "),t("ul",[t("li",[e._v("The wiki repository contains the "),t("code",[e._v("Containerfile")]),e._v(" file that is used to create a container image with development dependencies installed. The command to create the container image requires setting a container name which, for example, is "),t("em",[e._v("wiki_dev")]),e._v(":"),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("podman")]),e._v(" build "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-t")]),e._v(" wiki_dev "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n")])])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("It's recommended to rebuild the container image if there is a change in the "),t("strong",[e._v("package.json")]),e._v(" file to make sure it matches the deployed version of "),t("code",[e._v("vuepress")]),e._v(".\nYou can do it either by removing the current one and building the new one documented above or by creating a new one with a different name without removing the old one.")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("podman")]),e._v(" rmi localhost/wiki_dev\n")])])])])]),e._v(" "),t("li",[e._v("Clean up the first stage container image:"),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("podman")]),e._v(" image prune "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--filter")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("label")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("stage"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("auto-clean-stage1\n")])])])]),e._v(" "),t("li",[e._v("Now you can create a container from this image whenever is needed from the image that was built above and mount "),t("em",[e._v("docs")]),e._v(" to "),t("em",[e._v("/wiki/docs")]),e._v(" inside the container:"),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("podman")]),e._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--name")]),e._v(" wiki_dev "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--rm")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-t")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-p")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("8080")]),e._v(":8080 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-v")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("pwd")]),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v('"')]),e._v(":/wiki:ro,z localhost/wiki_dev\n")])])]),e._v("The options of the command are:\n"),t("ul",[t("li",[t("code",[e._v("podman/docker")]),e._v(" - container engine")]),e._v(" "),t("li",[t("code",[e._v("run")]),e._v(" - create a container")]),e._v(" "),t("li",[t("code",[e._v("--name wiki_dev")]),e._v(" - name a container "),t("em",[e._v("wiki_dev")])]),e._v(" "),t("li",[t("code",[e._v("--rm")]),e._v(" - remove the container once it is stopped")]),e._v(" "),t("li",[t("code",[e._v("-i -t")]),e._v(" - an interactive terminal session where you can track the deployment process and check the logs. Stop it with "),t("code",[e._v("Ctrl+C")]),e._v(".")]),e._v(" "),t("li",[t("code",[e._v("-p 8080:8080")]),e._v(" - map the port number 8080 inside the container to 8080 on the host")]),e._v(" "),t("li",[t("code",[e._v('-v "$(pwd)":/wiki:ro,z')]),e._v(" - mount the current directory (the repository root) on "),t("code",[e._v("/wiki")]),e._v(" inside the container read-only (ro). "),t("strong",[t("code",[e._v(",z")]),e._v(" is needed only for systems that have SELinux.")])]),e._v(" "),t("li",[t("code",[e._v("localhost/wiki_dev")]),e._v(" - the name of the container image")])])]),e._v(" "),t("li",[e._v("The wiki instance should be up and running on "),t("a",{attrs:{href:"http://localhost:8080/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:8080/"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("li",[e._v("Don't forget to stop the container when you've finished.")])]),e._v(" "),t("h2",{attrs:{id:"working-with-almalinux-documentation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#working-with-almalinux-documentation"}},[e._v("#")]),e._v(" Working with AlmaLinux documentation")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("We kindly ask that all members respect each other's diverse skills and abilities by acknowledging and appreciating the unique contributions each person brings to the team. Remember to provide as much detail as possible when sharing your expertise to enhance understanding and collaboration among all members.")])]),e._v(" "),t("p",[e._v("AlmaLinux Wiki documentation is written with "),t("a",{attrs:{href:"https://www.markdownguide.org/basic-syntax/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Markdown"),t("OutboundLink")],1),e._v(". Some HTML elements can also be used.\nPlease, refer to the template in the "),t("em",[e._v("details")]),e._v(" and to this "),t("a",{attrs:{href:"/elevate/ELevate-quickstart-guide"}},[e._v("page")]),e._v(" as the example.")]),e._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[e._v("DETAILS")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("  ---\n  title: ' '\n  ---\n  \n  # Title of the Guide\n  \n  ###### last updated: YYYY-MM-DD\n  \n  or \n  \n  | Experience Level   | ⭑⭑⭒⭒⭒ (Intermediate) |\n  |--------------------|---------------------- |\n  | Last modified date | YYYY-MM-DD            | \n\n  ## About\n\n  A brief description, purpose of the guide. What will users achieve by following it?\n\n  ## Prerequisites\n\n  List all necessary prerequisites, such as:\n  * Software or hardware required.\n  * User permissions needed.\n  * Prior knowledge or skills.\n\n  Example:\n  * Operating System: Linux (Windows/MacOS if applicable) \n  * Software: Git, Docker, etc.\n  * Access Level: Admin rights required, etc.\n\n  ## Step-by-Step Instructions\n\n  ### Part 1\n\n  Describe steps in detail. Use code blocks, tables, lists, and images as necessary. \n  Highlight any important notes or warnings if applicable using markdown tips/warnings.\n\n  * Step 1\n  * Step 2\n\n  **Example:**\n  (Code block or output example)\n\n  ### Part 2\n\n  Describe the next step in detail. Use code blocks, tables, lists, and images as necessary. \n  Highlight any important notes or warnings if applicable.\n\n  * Step 1\n  * Step 2\n\n  **Example:**\n  (Code block or output example)\n\n  ## Additional Resources\n\n  Provide links to external documentation, tutorials, or resources for further learning.\n\n  * Resource 1\n  * Resource 2\n  * Official Documentation\n\n  ## Troubleshooting/Known Issues\n  Include any common/known issues that users can face and how to resolve them.\n\n  ### Issue 1: Description of issue.\n\n  Solution: Steps to solve the issue.\n\n  ### Issue 2: Another issue.\n\n  Solution: Another solution.\n\n  ## Get Help\n\n  Provide any links to forums/chats where users can report their bugs, ask for any help, assistance or reach out with their feedback.\n")])])])]),e._v(" "),t("p",[e._v("All the content is located in the "),t("code",[e._v("/wiki/docs")]),e._v(" directory.")]),e._v(" "),t("p",[e._v("To create a new page:")]),e._v(" "),t("ul",[t("li",[e._v("Navigate to the "),t("code",[e._v("/wiki/docs")]),e._v(" directory.")]),e._v(" "),t("li",[e._v("Create a markdown file "),t("code",[e._v("page-name.md")]),e._v(" with a clear name that corresponds to the topic of the page.")]),e._v(" "),t("li",[e._v("In order to get a page displayed, enlist it in the "),t("strong",[e._v("config.js")]),e._v(" file that is located in the "),t("code",[e._v("/wiki/docs/.vuepress")]),e._v(" directory.")])]),e._v(" "),t("h3",{attrs:{id:"pages-style-guide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pages-style-guide"}},[e._v("#")]),e._v(" Pages style guide")]),e._v(" "),t("p",[e._v("When editing an existing page or writing a new one, we recommend you follow this style guide.")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("The top of the page should include meta data with the page title. It should match the file/page name and topic.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("---\ntitle: ' '\n---\n")])])])]),e._v(" "),t("li",[t("p",[e._v("If applicable (for example, when creating a new guide), fill out the form below and place it as a table at the top of the page right after the title.")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Experience Level")]),e._v(" "),t("th",[e._v("⭑⭑⭒⭒⭒ (Intermediate)")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("Last modified date")]),e._v(" "),t("td",[e._v("YYYY-MM-DD")])])])]),e._v(" "),t("ul",[t("li",[e._v("If possible, evaluate the level of skills and experience needed based on the target audience. Experience level options: Beginner, Intermediate, Advanced, Fluent and Proficient")]),e._v(" "),t("li",[e._v("Put the last modified or updated date below the experience level. The date format should go as "),t("strong",[e._v("YYYY-MM-DD")]),e._v(".")])])]),e._v(" "),t("li",[t("p",[e._v("If using this form is not applicable here, it's preferable to write right after the page title the date when the page was last modified. Please, stick, to the following format:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("###### last updated: YYYY-MM-DD\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Write the content of the page using "),t("a",{attrs:{href:"https://www.markdownguide.org/basic-syntax/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Markdown syntax"),t("OutboundLink")],1),e._v(". Some HTML elements are also allowed.")]),e._v(" "),t("ul",[t("li",[e._v("It's recommended to use clear and simple language.")]),e._v(" "),t("li",[e._v("It's preferable to divide the content into sections, including these basic ones:\n"),t("ul",[t("li",[e._v("Introduction: stating what the page is about.")]),e._v(" "),t("li",[e._v("Body: describing all the instructions.")]),e._v(" "),t("li",[e._v("Version specific directions: Remember that AlmaLinux currently more than one supported major version. If the directions differ for each release, consider dividing your instructions for each supported version into separate sections.")]),e._v(" "),t("li",[e._v("Known caveats: If there are any known or popular issues, write them as a separate section.\nWe encourage images in guides, but please follow the below guidelines")])])]),e._v(" "),t("li",[e._v("If the page includes images, put them in the "),t("code",[e._v("/wiki/docs/.vuepress/public/images")]),e._v(" directory where all images are stored.")]),e._v(" "),t("li",[e._v("The image name should be clear to understand and match the topic subject it's related to.")]),e._v(" "),t("li",[e._v("The image should not violate any trademarks or copyrights and should be relevant to the content.")]),e._v(" "),t("li",[e._v("The image should not contain any personal information for security reasons.")]),e._v(" "),t("li",[e._v("The image should be a proper size that is clear to read.")]),e._v(" "),t("li",[e._v("The image will serve from "),t("code",[e._v("/images/")]),e._v(", so do not change the beginning of this path.")])])]),e._v(" "),t("li",[t("p",[e._v("All the commands (even separate ones) and code blocks should be formatted as code blocks, not as inline code:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("{your command(s)/code}\n")])])]),t("ul",[t("li",[e._v("If there's any example output/code/result, consider mentioning it right after according to the format below. Also, consider formatting it as a code block or as an image.")])]),e._v(" "),t("p",[t("strong",[e._v("An example output you may see:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("example\n")])])])]),e._v(" "),t("li",[t("p",[e._v("If there's anything to warn about or provide a tip, highlight it with markdown tips and warnings.")])]),e._v(" "),t("li",[t("p",[e._v("If there are trademarks mentioned on the page, we recommend writing "),t("strong",[e._v("Trademark notices")]),e._v(" at the bottom of the page.")])]),e._v(" "),t("li",[t("p",[e._v("Before committing the changes and creating a pull request, we also recommend to:")]),e._v(" "),t("ul",[t("li",[e._v("Make sure the page is displayed on the wiki correctly by running it on "),t("a",{attrs:{href:"http://localhost:8080/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:8080/"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("li",[e._v("Look through the page to see if any cosmetic changes (typos, minor styling, etc) are needed.")])])])]),e._v(" "),t("h3",{attrs:{id:"review-process"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#review-process"}},[e._v("#")]),e._v(" Review process")]),e._v(" "),t("p",[e._v("Any member of the AlmaLinux OS Foundation, Team and Community can take part in the review process and request any changes or updates.\nMerging the content is under the AlmaLinux OS Foundation and Team responsibility.")])])}),[],!1,null,null,null);t.default=s.exports}}]);