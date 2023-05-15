(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{653:function(e,a,t){"use strict";t.r(a);var o=t(0),n=Object(o.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"migrating-from-ibc-go-v2-to-v3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#migrating-from-ibc-go-v2-to-v3"}},[e._v("#")]),e._v(" Migrating from ibc-go v2 to v3")]),e._v(" "),t("p",[e._v("This document is intended to highlight significant changes which may require more information than presented in the CHANGELOG.\nAny changes that must be done by a user of ibc-go should be documented here.")]),e._v(" "),t("p",[e._v("There are four sections based on the four potential user groups of this document:")]),e._v(" "),t("ul",[t("li",[e._v("Chains")]),e._v(" "),t("li",[e._v("IBC Apps")]),e._v(" "),t("li",[e._v("Relayers")]),e._v(" "),t("li",[e._v("IBC Light Clients")])]),e._v(" "),t("p",[t("strong",[e._v("Note:")]),e._v(" ibc-go supports golang semantic versioning and therefore all imports must be updated to bump the version number on major releases.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Z2l0aHViLmNvbS9jb3Ntb3MvaWJjLWdvL3YyIC0mZ3Q7IGdpdGh1Yi5jb20vY29zbW9zL2liYy1nby92Mwo="}}),e._v(" "),t("p",[e._v("No genesis or in-place migrations are required when upgrading from v1 or v2 of ibc-go.")]),e._v(" "),t("h2",{attrs:{id:"chains"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chains"}},[e._v("#")]),e._v(" Chains")]),e._v(" "),t("h3",{attrs:{id:"is04-channel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#is04-channel"}},[e._v("#")]),e._v(" IS04 - Channel")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("WriteAcknowledgement")]),e._v(" API now takes the "),t("code",[e._v("exported.Acknowledgement")]),e._v(" type instead of passing in the acknowledgement byte array directly.\nThis is an API breaking change and as such IBC application developers will have to update any calls to "),t("code",[e._v("WriteAcknowledgement")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"ics20"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ics20"}},[e._v("#")]),e._v(" ICS20")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("transferkeeper.NewKeeper(...)")]),e._v(" now takes in an ICS4Wrapper.\nThe ICS4Wrapper should be the IBC Channel Keeper unless ICS 20 is being connected to a middleware application.")]),e._v(" "),t("h3",{attrs:{id:"ics27"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ics27"}},[e._v("#")]),e._v(" ICS27")]),e._v(" "),t("p",[e._v("ICS27 Interchain Accounts has been added as a supported IBC application of ibc-go.\nPlease see the "),t("RouterLink",{attrs:{to:"/apps/interchain-accounts/overview.html"}},[e._v("ICS27 documentation")]),e._v(" for more information.")],1),e._v(" "),t("h3",{attrs:{id:"upgrade-proposal"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-proposal"}},[e._v("#")]),e._v(" Upgrade Proposal")]),e._v(" "),t("p",[e._v("If the chain will adopt ICS27, it must set the appropriate params during the execution of the upgrade handler in "),t("code",[e._v("app.go")]),e._v(":")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"YXBwLlVwZ3JhZGVLZWVwZXIuU2V0VXBncmFkZUhhbmRsZXIoJnF1b3Q7djMmcXVvdDssCiAgICBmdW5jKGN0eCBzZGsuQ29udGV4dCwgXyB1cGdyYWRldHlwZXMuUGxhbiwgZnJvbVZNIG1vZHVsZS5WZXJzaW9uTWFwKSAobW9kdWxlLlZlcnNpb25NYXAsIGVycm9yKSB7CiAgICAgICAgLy8gc2V0IHRoZSBJQ1MyNyBjb25zZW5zdXMgdmVyc2lvbiBzbyBJbml0R2VuZXNpcyBpcyBub3QgcnVuCiAgICAgICAgZnJvbVZNW2ljYXR5cGVzLk1vZHVsZU5hbWVdID0gaWNhbW9kdWxlLkNvbnNlbnN1c1ZlcnNpb24oKQogICAgICAgIAogICAgICAgIC8vIGNyZWF0ZSBJQ1MyNyBDb250cm9sbGVyIHN1Ym1vZHVsZSBwYXJhbXMKICAgICAgICBjb250cm9sbGVyUGFyYW1zIDo9IGljYWNvbnRyb2xsZXJ0eXBlcy5QYXJhbXN7CiAgICAgICAgICAgIENvbnRyb2xsZXJFbmFibGVkOiB0cnVlLCAKICAgICAgICB9CgogICAgICAgIC8vIGNyZWF0ZSBJQ1MyNyBIb3N0IHN1Ym1vZHVsZSBwYXJhbXMKICAgICAgICBob3N0UGFyYW1zIDo9IGljYWhvc3R0eXBlcy5QYXJhbXN7CiAgICAgICAgICAgIEhvc3RFbmFibGVkOiB0cnVlLCAKICAgICAgICAgICAgQWxsb3dNZXNzYWdlczogW11zdHJpbmd7JnF1b3Q7L2Nvc21vcy5iYW5rLnYxYmV0YTEuTXNnU2VuZCZxdW90OywgLi4ufSwgCiAgICAgICAgfQogICAgICAgIAogICAgICAgIC8vIGluaXRpYWxpemUgSUNTMjcgbW9kdWxlCiAgICAgICAgaWNhbW9kdWxlLkluaXRNb2R1bGUoY3R4LCBjb250cm9sbGVyUGFyYW1zLCBob3N0UGFyYW1zKQogICAgICAgIAogICAgICAgIC4uLgoKICAgICAgICByZXR1cm4gYXBwLm1tLlJ1bk1pZ3JhdGlvbnMoY3R4LCBhcHAuY29uZmlndXJhdG9yLCBmcm9tVk0pCiAgICB9KQoK"}}),e._v(" "),t("p",[e._v("The host and controller submodule params only need to be set if the chain integrates those submodules.\nFor example, if a chain chooses not to integrate a controller submodule, it may pass empty params into "),t("code",[e._v("InitModule")]),e._v(".")]),e._v(" "),t("h4",{attrs:{id:"add-storeupgrades-for-ics27-module"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-storeupgrades-for-ics27-module"}},[e._v("#")]),e._v(" Add "),t("code",[e._v("StoreUpgrades")]),e._v(" for ICS27 module")]),e._v(" "),t("p",[e._v("For ICS27 it is also necessary to "),t("a",{attrs:{href:"https://docs.cosmos.network/v0.44/core/upgrade.html#add-storeupgrades-for-new-modules",target:"_blank",rel:"noopener noreferrer"}},[e._v("manually add store upgrades"),t("OutboundLink")],1),e._v(" for the new ICS27 module and then configure the store loader to apply those upgrades in "),t("code",[e._v("app.go")]),e._v(":")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aWYgdXBncmFkZUluZm8uTmFtZSA9PSAmcXVvdDt2MyZxdW90OyAmYW1wOyZhbXA7ICFhcHAuVXBncmFkZUtlZXBlci5Jc1NraXBIZWlnaHQodXBncmFkZUluZm8uSGVpZ2h0KSB7CiAgICBzdG9yZVVwZ3JhZGVzIDo9IHN0b3JlLlN0b3JlVXBncmFkZXN7CiAgICAgICAgQWRkZWQ6IFtdc3RyaW5ne2ljYWNvbnRyb2xsZXJ0eXBlcy5TdG9yZUtleSwgaWNhaG9zdHR5cGVzLlN0b3JlS2V5fSwKICAgIH0KCiAgICBhcHAuU2V0U3RvcmVMb2FkZXIodXBncmFkZXR5cGVzLlVwZ3JhZGVTdG9yZUxvYWRlcih1cGdyYWRlSW5mby5IZWlnaHQsICZhbXA7c3RvcmVVcGdyYWRlcykpCn0K"}}),e._v(" "),t("p",[e._v("This ensures that the new module's stores are added to the multistore before the migrations begin.\nThe host and controller submodule keys only need to be added if the chain integrates those submodules.\nFor example, if a chain chooses not to integrate a controller submodule, it does not need to add the controller key to the "),t("code",[e._v("Added")]),e._v(" field.")]),e._v(" "),t("h3",{attrs:{id:"genesis-migrations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#genesis-migrations"}},[e._v("#")]),e._v(" Genesis migrations")]),e._v(" "),t("p",[e._v("If the chain will adopt ICS27 and chooses to upgrade via a genesis export, then the ICS27 parameters must be set during genesis migration.")]),e._v(" "),t("p",[e._v("The migration code required may look like:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ICAgIGNvbnRyb2xsZXJHZW5lc2lzU3RhdGUgOj0gaWNhdHlwZXMuRGVmYXVsdENvbnRyb2xsZXJHZW5lc2lzKCkKICAgIC8vIG92ZXJ3cml0ZSBwYXJhbWV0ZXJzIGFzIGRlc2lyZWQKICAgIGNvbnRyb2xsZXJHZW5lc2lzU3RhdGUuUGFyYW1zID0gaWNhY29udHJvbGxlcnR5cGVzLlBhcmFtc3sKICAgICAgICBDb250cm9sbGVyRW5hYmxlZDogdHJ1ZSwgCiAgICB9IAoKICAgIGhvc3RHZW5lc2lzU3RhdGUgOj0gaWNhdHlwZXMuRGVmYXVsdEhvc3RHZW5lc2lzKCkKICAgIC8vIG92ZXJ3cml0ZSBwYXJhbWV0ZXJzIGFzIGRlc2lyZWQKICAgIGhvc3RHZW5lc2lzU3RhdGUuUGFyYW1zID0gaWNhaG9zdHR5cGVzLlBhcmFtc3sKICAgICAgICBIb3N0RW5hYmxlZDogdHJ1ZSwgCiAgICAgICAgQWxsb3dNZXNzYWdlczogW11zdHJpbmd7JnF1b3Q7L2Nvc21vcy5iYW5rLnYxYmV0YTEuTXNnU2VuZCZxdW90OywgLi4ufSwgCiAgICB9CgogICAgaWNhR2VuZXNpc1N0YXRlIDo9IGljYXR5cGVzLk5ld0dlbmVzaXNTdGF0ZShjb250cm9sbGVyR2VuZXNpc1N0YXRlLCBob3N0R2VuZXNpc1N0YXRlKQoKICAgIC8vIHNldCBuZXcgaWNzMjcgZ2VuZXNpcyBzdGF0ZQogICAgYXBwU3RhdGVbaWNhdHlwZXMuTW9kdWxlTmFtZV0gPSBjbGllbnRDdHguSlNPTkNvZGVjLk11c3RNYXJzaGFsSlNPTihpY2FHZW5lc2lzU3RhdGUpCg=="}}),e._v(" "),t("h3",{attrs:{id:"ante-decorator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ante-decorator"}},[e._v("#")]),e._v(" Ante decorator")]),e._v(" "),t("p",[e._v("The field of type "),t("code",[e._v("channelkeeper.Keeper")]),e._v(" in the "),t("code",[e._v("AnteDecorator")]),e._v(" structure has been replaced with a field of type "),t("code",[e._v("*keeper.Keeper")]),e._v(":")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"dHlwZSBBbnRlRGVjb3JhdG9yIHN0cnVjdCB7Ci0gICAgayBjaGFubmVsa2VlcGVyLktlZXBlcgorICAgIGsgKmtlZXBlci5LZWVwZXIKfQoKLSBmdW5jIE5ld0FudGVEZWNvcmF0b3IoayBjaGFubmVsa2VlcGVyLktlZXBlcikgQW50ZURlY29yYXRvciB7CisgZnVuYyBOZXdBbnRlRGVjb3JhdG9yKGsgKmtlZXBlci5LZWVwZXIpIEFudGVEZWNvcmF0b3IgewogICAgcmV0dXJuIEFudGVEZWNvcmF0b3J7azoga30KfQo="}}),e._v(" "),t("h2",{attrs:{id:"ibc-apps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ibc-apps"}},[e._v("#")]),e._v(" IBC Apps")]),e._v(" "),t("h3",{attrs:{id:"onchanopentry-must-return-negotiated-application-version"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#onchanopentry-must-return-negotiated-application-version"}},[e._v("#")]),e._v(" "),t("code",[e._v("OnChanOpenTry")]),e._v(" must return negotiated application version")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("OnChanOpenTry")]),e._v(" application callback has been modified.\nThe return signature now includes the application version.\nIBC applications must perform application version negoitation in "),t("code",[e._v("OnChanOpenTry")]),e._v(" using the counterparty version.\nThe negotiated application version then must be returned in "),t("code",[e._v("OnChanOpenTry")]),e._v(" to core IBC.\nCore IBC will set this version in the TRYOPEN channel.")]),e._v(" "),t("h3",{attrs:{id:"onchanopenack-will-take-additional-counterpartychannelid-argument"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#onchanopenack-will-take-additional-counterpartychannelid-argument"}},[e._v("#")]),e._v(" "),t("code",[e._v("OnChanOpenAck")]),e._v(" will take additional "),t("code",[e._v("counterpartyChannelID")]),e._v(" argument")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("OnChanOpenAck")]),e._v(" application callback has been modified.\nThe arguments now include the counterparty channel id.")]),e._v(" "),t("h3",{attrs:{id:"negotiateappversion-removed-from-ibcmodule-interface"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#negotiateappversion-removed-from-ibcmodule-interface"}},[e._v("#")]),e._v(" "),t("code",[e._v("NegotiateAppVersion")]),e._v(" removed from "),t("code",[e._v("IBCModule")]),e._v(" interface")]),e._v(" "),t("p",[e._v("Previously this logic was handled by the "),t("code",[e._v("NegotiateAppVersion")]),e._v(" function.\nRelayers would query this function before calling "),t("code",[e._v("ChanOpenTry")]),e._v(".\nApplications would then need to verify that the passed in version was correct.\nNow applications will perform this version negotiation during the channel handshake, thus removing the need for "),t("code",[e._v("NegotiateAppVersion")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"channel-state-will-not-be-set-before-application-callback"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#channel-state-will-not-be-set-before-application-callback"}},[e._v("#")]),e._v(" Channel state will not be set before application callback")]),e._v(" "),t("p",[e._v("The channel handshake logic has been reorganized within core IBC.\nChannel state will not be set in state after the application callback is performed.\nApplications must rely only on the passed in channel parameters instead of querying the channel keeper for channel state.")]),e._v(" "),t("h3",{attrs:{id:"ibc-application-callbacks-moved-from-appmodule-to-ibcmodule"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ibc-application-callbacks-moved-from-appmodule-to-ibcmodule"}},[e._v("#")]),e._v(" IBC application callbacks moved from "),t("code",[e._v("AppModule")]),e._v(" to "),t("code",[e._v("IBCModule")])]),e._v(" "),t("p",[e._v("Previously, IBC module callbacks were apart of the "),t("code",[e._v("AppModule")]),e._v(" type.\nThe recommended approach is to create an "),t("code",[e._v("IBCModule")]),e._v(" type and move the IBC module callbacks from "),t("code",[e._v("AppModule")]),e._v(" to "),t("code",[e._v("IBCModule")]),e._v(" in a separate file "),t("code",[e._v("ibc_module.go")]),e._v(".")]),e._v(" "),t("p",[e._v("The mock module go API has been broken in this release by applying the above format.\nThe IBC module callbacks have been moved from the mock modules "),t("code",[e._v("AppModule")]),e._v(" into a new type "),t("code",[e._v("IBCModule")]),e._v(".")]),e._v(" "),t("p",[e._v("As apart of this release, the mock module now supports middleware testing. Please see the "),t("RouterLink",{attrs:{to:"/testing/#middleware-testing"}},[e._v("README")]),e._v(" for more information.")],1),e._v(" "),t("p",[e._v("Please review the "),t("a",{attrs:{href:"../../testing/mock/ibc_module.go"}},[e._v("mock")]),e._v(" and "),t("a",{attrs:{href:"../../modules/apps/transfer/ibc_module.go"}},[e._v("transfer")]),e._v(" modules as examples. Additionally, "),t("a",{attrs:{href:"../../testing/simapp/app.go"}},[e._v("simapp")]),e._v(" provides an example of how "),t("code",[e._v("IBCModule")]),e._v(" types should now be added to the IBC router in favour of "),t("code",[e._v("AppModule")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"ibc-testing-package"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ibc-testing-package"}},[e._v("#")]),e._v(" IBC testing package")]),e._v(" "),t("p",[t("code",[e._v("TestChain")]),e._v("s are now created with chainID's beginning from an index of 1. Any calls to "),t("code",[e._v("GetChainID(0)")]),e._v(" will now fail. Please increment all calls to "),t("code",[e._v("GetChainID")]),e._v(" by 1.")]),e._v(" "),t("h2",{attrs:{id:"relayers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#relayers"}},[e._v("#")]),e._v(" Relayers")]),e._v(" "),t("p",[t("code",[e._v("AppVersion")]),e._v(" gRPC has been removed.\nThe "),t("code",[e._v("version")]),e._v(" string in "),t("code",[e._v("MsgChanOpenTry")]),e._v(" has been deprecated and will be ignored by core IBC.\nRelayers no longer need to determine the version to use on the "),t("code",[e._v("ChanOpenTry")]),e._v(" step.\nIBC applications will determine the correct version using the counterparty version.")]),e._v(" "),t("h2",{attrs:{id:"ibc-light-clients"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ibc-light-clients"}},[e._v("#")]),e._v(" IBC Light Clients")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("GetProofSpecs")]),e._v(" function has been removed from the "),t("code",[e._v("ClientState")]),e._v(" interface. This function was previously unused by core IBC. Light clients which don't use this function may remove it.")])],1)}),[],!1,null,null,null);a.default=n.exports}}]);