(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{651:function(e,s,t){"use strict";t.r(s);var o=t(0),a=Object(o.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"migrating-from-not-supporting-base-denoms-with-slashes-to-supporting-base-denoms-with-slashes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#migrating-from-not-supporting-base-denoms-with-slashes-to-supporting-base-denoms-with-slashes"}},[e._v("#")]),e._v(" Migrating from not supporting base denoms with slashes to supporting base denoms with slashes")]),e._v(" "),t("p",[e._v("This document is intended to highlight significant changes which may require more information than presented in the CHANGELOG.\nAny changes that must be done by a user of ibc-go should be documented here.")]),e._v(" "),t("p",[e._v("There are four sections based on the four potential user groups of this document:")]),e._v(" "),t("ul",[t("li",[e._v("Chains")]),e._v(" "),t("li",[e._v("IBC Apps")]),e._v(" "),t("li",[e._v("Relayers")]),e._v(" "),t("li",[e._v("IBC Light Clients")])]),e._v(" "),t("p",[e._v("This document is necessary when chains are upgrading from a version that does not support base denoms with slashes (e.g. v3.0.0) to a version that does (e.g. v3.2.0). All versions of ibc-go smaller than v1.5.0 for the v1.x release line, v2.3.0 for the v2.x release line, and v3.1.0 for the v3.x release line do "),t("strong",[e._v("NOT")]),e._v(" support IBC token transfers of coins whose base denoms contain slashes. Therefore the in-place of genesis migration described in this document are required when upgrading.")]),e._v(" "),t("p",[e._v("If a chain receives coins of a base denom with slashes before it upgrades to supporting it, the receive may pass however the trace information will be incorrect.")]),e._v(" "),t("p",[e._v("E.g. If a base denom of "),t("code",[e._v("testcoin/testcoin/testcoin")]),e._v(" is sent to a chain that does not support slashes in the base denom, the receive will be successful. However, the trace information stored on the receiving chain will be: "),t("code",[e._v('Trace: "transfer/{channel-id}/testcoin/testcoin", BaseDenom: "testcoin"')]),e._v(".")]),e._v(" "),t("p",[e._v("This incorrect trace information must be corrected when the chain does upgrade to fully supporting denominations with slashes.")]),e._v(" "),t("p",[e._v("To do so, chain binaries should include a migration script that will run when the chain upgrades from not supporting base denominations with slashes to supporting base denominations with slashes.")]),e._v(" "),t("h2",{attrs:{id:"chains"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chains"}},[e._v("#")]),e._v(" Chains")]),e._v(" "),t("h3",{attrs:{id:"ics20-transfer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ics20-transfer"}},[e._v("#")]),e._v(" ICS20 - Transfer")]),e._v(" "),t("p",[e._v("The transfer module will now support slashes in base denoms, so we must iterate over current traces to check if any of them are incorrectly formed and correct the trace information.")]),e._v(" "),t("h3",{attrs:{id:"upgrade-proposal"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-proposal"}},[e._v("#")]),e._v(" Upgrade Proposal")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"YXBwLlVwZ3JhZGVLZWVwZXIuU2V0VXBncmFkZUhhbmRsZXIoJnF1b3Q7TWlncmF0ZVRyYWNlcyZxdW90OywKICAgIGZ1bmMoY3R4IHNkay5Db250ZXh0LCBfIHVwZ3JhZGV0eXBlcy5QbGFuLCBmcm9tVk0gbW9kdWxlLlZlcnNpb25NYXApIChtb2R1bGUuVmVyc2lvbk1hcCwgZXJyb3IpIHsKICAgICAgICAvLyB0cmFuc2ZlciBtb2R1bGUgY29uc2Vuc3VzIHZlcnNpb24gaGFzIGJlZW4gYnVtcGVkIHRvIDIKICAgICAgICByZXR1cm4gYXBwLm1tLlJ1bk1pZ3JhdGlvbnMoY3R4LCBhcHAuY29uZmlndXJhdG9yLCBmcm9tVk0pCiAgICB9KQo="}}),e._v(" "),t("p",[e._v("This is only necessary if there are denom traces in the store with incorrect trace information from previously received coins that had a slash in the base denom. However, it is recommended that any chain upgrading to support base denominations with slashes runs this code for safety.")]),e._v(" "),t("p",[e._v("For a more detailed sample, please check out the code changes in "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/pull/1680",target:"_blank",rel:"noopener noreferrer"}},[e._v("this pull request"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"genesis-migration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#genesis-migration"}},[e._v("#")]),e._v(" Genesis Migration")]),e._v(" "),t("p",[e._v("If the chain chooses to add support for slashes in base denoms via genesis export, then the trace information must be corrected during genesis migration.")]),e._v(" "),t("p",[e._v("The migration code required may look like:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBtaWdyYXRlR2VuZXNpc1NsYXNoZWREZW5vbXNVcGdyYWRlKGFwcFN0YXRlIGdlbnV0aWx0eXBlcy5BcHBNYXAsIGNsaWVudEN0eCBjbGllbnQuQ29udGV4dCwgZ2VuRG9jICp0bXR5cGVzLkdlbmVzaXNEb2MpIChnZW51dGlsdHlwZXMuQXBwTWFwLCBlcnJvcikgewoJaWYgYXBwU3RhdGVbaWJjdHJhbnNmZXJ0eXBlcy5Nb2R1bGVOYW1lXSAhPSBuaWwgewoJCXRyYW5zZmVyR2VuU3RhdGUgOj0gJmFtcDtpYmN0cmFuc2ZlcnR5cGVzLkdlbmVzaXNTdGF0ZXt9CgkJY2xpZW50Q3R4LkNvZGVjLk11c3RVbm1hcnNoYWxKU09OKGFwcFN0YXRlW2liY3RyYW5zZmVydHlwZXMuTW9kdWxlTmFtZV0sIHRyYW5zZmVyR2VuU3RhdGUpCgoJCXN1YnN0aXR1dGVUcmFjZXMgOj0gbWFrZShbXWliY3RyYW5zZmVydHlwZXMuRGVub21UcmFjZSwgbGVuKHRyYW5zZmVyR2VuU3RhdGUuRGVub21UcmFjZXMpKQoJCWZvciBpLCBkdCA6PSByYW5nZSB0cmFuc2ZlckdlblN0YXRlLkRlbm9tVHJhY2VzIHsKCQkJLy8gcmVwbGFjZSBhbGwgcHJldmlvdXMgdHJhY2VzIHdpdGggdGhlIGxhdGVzdCB0cmFjZSBpZiB2YWxpZGF0aW9uIHBhc3NlcwoJCQkvLyBub3RlIG1vc3QgdHJhY2VzIHdpbGwgaGF2ZSBzYW1lIHZhbHVlCgkJCW5ld1RyYWNlIDo9IGliY3RyYW5zZmVydHlwZXMuUGFyc2VEZW5vbVRyYWNlKGR0LkdldEZ1bGxEZW5vbVBhdGgoKSkKCgkJCWlmIGVyciA6PSBuZXdUcmFjZS5WYWxpZGF0ZSgpOyBlcnIgIT0gbmlsIHsKCQkJCXN1YnN0aXR1dGVUcmFjZXNbaV0gPSBkdAoJCQl9IGVsc2UgewoJCQkJc3Vic3RpdHV0ZVRyYWNlc1tpXSA9IG5ld1RyYWNlCgkJCX0KCQl9CgoJCXRyYW5zZmVyR2VuU3RhdGUuRGVub21UcmFjZXMgPSBzdWJzdGl0dXRlVHJhY2VzCgoJCS8vIGRlbGV0ZSBvbGQgZ2VuZXNpcyBzdGF0ZQoJCWRlbGV0ZShhcHBTdGF0ZSwgaWJjdHJhbnNmZXJ0eXBlcy5Nb2R1bGVOYW1lKQoKCQkvLyBzZXQgbmV3IGliYyB0cmFuc2ZlciBnZW5lc2lzIHN0YXRlCgkJYXBwU3RhdGVbaWJjdHJhbnNmZXJ0eXBlcy5Nb2R1bGVOYW1lXSA9IGNsaWVudEN0eC5Db2RlYy5NdXN0TWFyc2hhbEpTT04odHJhbnNmZXJHZW5TdGF0ZSkKCX0KCglyZXR1cm4gYXBwU3RhdGUsIG5pbAp9Cg=="}}),e._v(" "),t("p",[e._v("For a more detailed sample, please check out the code changes in "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/pull/1528",target:"_blank",rel:"noopener noreferrer"}},[e._v("this pull request"),t("OutboundLink")],1),e._v(".")])],1)}),[],!1,null,null,null);s.default=a.exports}}]);