(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{641:function(e,t,n){"use strict";n.r(t);var a=n(1),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),n("p",{attrs:{synopsis:""}},[e._v("Learn about what the token Transfer module is")]),e._v(" "),n("h2",{attrs:{id:"what-is-the-transfer-module"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-transfer-module"}},[e._v("#")]),e._v(" What is the Transfer module?")]),e._v(" "),n("p",[e._v("Transfer is the Cosmos SDK implementation of the "),n("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS-20"),n("OutboundLink")],1),e._v(" protocol, which enables cross-chain fungible token transfers.")]),e._v(" "),n("h2",{attrs:{id:"concepts"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#concepts"}},[e._v("#")]),e._v(" Concepts")]),e._v(" "),n("h3",{attrs:{id:"acknowledgements"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#acknowledgements"}},[e._v("#")]),e._v(" Acknowledgements")]),e._v(" "),n("p",[e._v("ICS20 uses the recommended acknowledgement format as specified by "),n("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#acknowledgement-envelope",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS 04"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("A successful receive of a transfer packet will result in a Result Acknowledgement being written\nwith the value "),n("code",[e._v("[]byte{byte(1)}")]),e._v(" in the "),n("code",[e._v("Response")]),e._v(" field.")]),e._v(" "),n("p",[e._v("An unsuccessful receive of a transfer packet will result in an Error Acknowledgement being written\nwith the error message in the "),n("code",[e._v("Response")]),e._v(" field.")]),e._v(" "),n("h3",{attrs:{id:"denomination-trace"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#denomination-trace"}},[e._v("#")]),e._v(" Denomination trace")]),e._v(" "),n("p",[e._v("The denomination trace corresponds to the information that allows a token to be traced back to its\norigin chain. It contains a sequence of port and channel identifiers ordered from the most recent to\nthe oldest in the timeline of transfers.")]),e._v(" "),n("p",[e._v("This information is included on the token denomination field in the form of a hash to prevent an\nunbounded denomination length. For example, the token "),n("code",[e._v("transfer/channelToA/uatom")]),e._v(" will be displayed\nas "),n("code",[e._v("ibc/7F1D3FCF4AE79E1554D670D1AD949A9BA4E4A3C76C63093E17E446A46061A7A2")]),e._v(".")]),e._v(" "),n("p",[e._v('Each send to any chain other than the one it was previously received from is a movement forwards in\nthe token\'s timeline. This causes trace to be added to the token\'s history and the destination port\nand destination channel to be prefixed to the denomination. In these instances the sender chain is\nacting as the "source zone". When the token is sent back to the chain it previously received from, the\nprefix is removed. This is a backwards movement in the token\'s timeline and the sender chain is\nacting as the "sink zone".')]),e._v(" "),n("p",[e._v("It is strongly recommended to read the full details of "),n("RouterLink",{attrs:{to:"/architecture/adr-001-coin-source-tracing.html"}},[e._v("ADR 001: Coin Source Tracing")]),e._v(" to understand the implications and context of the IBC token representations.")],1),e._v(" "),n("h2",{attrs:{id:"ux-suggestions-for-clients"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ux-suggestions-for-clients"}},[e._v("#")]),e._v(" UX suggestions for clients")]),e._v(" "),n("p",[e._v("For clients (wallets, exchanges, applications, block explorers, etc) that want to display the source of the token, it is recommended to use the following alternatives for each of the cases below:")]),e._v(" "),n("h3",{attrs:{id:"direct-connection"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#direct-connection"}},[e._v("#")]),e._v(" Direct connection")]),e._v(" "),n("p",[e._v("If the denomination trace contains a single identifier prefix pair (as in the example above), then\nthe easiest way to retrieve the chain and light client identifier is to map the trace information\ndirectly. In summary, this requires querying the channel from the denomination trace identifiers,\nand then the counterparty client state using the counterparty port and channel identifiers from the\nretrieved channel.")]),e._v(" "),n("p",[e._v("A general pseudo algorithm would look like the following:")]),e._v(" "),n("ol",[n("li",[e._v("Query the full denomination trace.")]),e._v(" "),n("li",[e._v("Query the channel with the "),n("code",[e._v("portID/channelID")]),e._v(" pair, which corresponds to the first destination of the\ntoken.")]),e._v(" "),n("li",[e._v("Query the client state using the identifiers pair. Note that this query will return a "),n("code",[e._v('"Not Found"')]),e._v(" response if the current chain is not connected to this channel.")]),e._v(" "),n("li",[e._v("Retrieve the client identifier or chain identifier from the client state (eg: on\nTendermint clients) and store it locally.")])]),e._v(" "),n("p",[e._v("Using the gRPC gateway client service the steps above would be, with a given IBC token "),n("code",[e._v("ibc/7F1D3FCF4AE79E1554D670D1AD949A9BA4E4A3C76C63093E17E446A46061A7A2")]),e._v(" stored on "),n("code",[e._v("chainB")]),e._v(":")]),e._v(" "),n("ol",[n("li",[n("code",[e._v("GET /ibc/apps/transfer/v1/denom_traces/7F1D3FCF4AE79E1554D670D1AD949A9BA4E4A3C76C63093E17E446A46061A7A2")]),e._v(" -> "),n("code",[e._v('{"path": "transfer/channelToA", "base_denom": "uatom"}')])]),e._v(" "),n("li",[n("code",[e._v('GET /ibc/apps/transfer/v1/channels/channelToA/ports/transfer/client_state"')]),e._v(" -> "),n("code",[e._v('{"client_id": "clientA", "chain-id": "chainA", ...}')])]),e._v(" "),n("li",[n("code",[e._v('GET /ibc/apps/transfer/v1/channels/channelToA/ports/transfer"')]),e._v(" -> "),n("code",[e._v('{"channel_id": "channelToA", port_id": "transfer", counterparty: {"channel_id": "channelToB", port_id": "transfer"}, ...}')])]),e._v(" "),n("li",[n("code",[e._v('GET /ibc/apps/transfer/v1/channels/channelToB/ports/transfer/client_state" -> {"client_id": "clientB", "chain-id": "chainB", ...}')])])]),e._v(" "),n("p",[e._v("Then, the token transfer chain path for the "),n("code",[e._v("uatom")]),e._v(" denomination would be: "),n("code",[e._v("chainA")]),e._v(" -> "),n("code",[e._v("chainB")]),e._v(".")]),e._v(" "),n("h3",{attrs:{id:"multiple-hops"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#multiple-hops"}},[e._v("#")]),e._v(" Multiple hops")]),e._v(" "),n("p",[e._v("The multiple channel hops case applies when the token has passed through multiple chains between the original source and final destination chains.")]),e._v(" "),n("p",[e._v("The IBC protocol doesn't know the topology of the overall network (i.e connections between chains and identifier names between them). For this reason, in the multiple hops case, a particular chain in the timeline of the individual transfers can't query the chain and client identifiers of the other chains.")]),e._v(" "),n("p",[e._v("Take for example the following sequence of transfers "),n("code",[e._v("A -> B -> C")]),e._v(" for an IBC token, with a final prefix path (trace info) of "),n("code",[e._v("transfer/channelChainC/transfer/channelChainB")]),e._v(". What the paragraph above means is that even in the case that chain "),n("code",[e._v("C")]),e._v(" is directly connected to chain "),n("code",[e._v("A")]),e._v(", querying the port and channel identifiers that chain "),n("code",[e._v("B")]),e._v(" uses to connect to chain "),n("code",[e._v("A")]),e._v(" (eg: "),n("code",[e._v("transfer/channelChainA")]),e._v(") can be completely different from the one that chain "),n("code",[e._v("C")]),e._v(" uses to connect to chain "),n("code",[e._v("A")]),e._v(" (eg: "),n("code",[e._v("transfer/channelToChainA")]),e._v(").")]),e._v(" "),n("p",[e._v("Thus the proposed solution for clients that the IBC team recommends are the following:")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("Connect to all chains")]),e._v(": Connecting to all the chains in the timeline would allow clients to\nperform the queries outlined in the "),n("a",{attrs:{href:"#direct-connection"}},[e._v("direct connection")]),e._v(" section to each\nrelevant chain. By repeatedly following the port and channel denomination trace transfer timeline,\nclients should always be able to find all the relevant identifiers. This comes at the tradeoff\nthat the client must connect to nodes on each of the chains in order to perform the queries.")]),e._v(" "),n("li",[n("strong",[e._v("Relayer as a Service (RaaS)")]),e._v(": A longer term solution is to use/create a relayer service that\ncould map the denomination trace to the chain path timeline for each token (i.e "),n("code",[e._v("origin chain -> chain #1 -> ... -> chain #(n-1) -> final chain")]),e._v("). These services could provide merkle proofs in\norder to allow clients to optionally verify the path timeline correctness for themselves by\nrunning light clients. If the proofs are not verified, they should be considered as trusted third\nparties services. Additionally, client would be advised in the future to use RaaS that support the\nlargest number of connections between chains in the ecosystem. Unfortunately, none of the existing\npublic relayers (in "),n("a",{attrs:{href:"https://github.com/cosmos/relayer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Golang"),n("OutboundLink")],1),e._v(" and\n"),n("a",{attrs:{href:"https://github.com/informalsystems/ibc-rs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rust"),n("OutboundLink")],1),e._v("), provide this service to clients.")])]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",[e._v("The only viable alternative for clients (at the time of writing) to tokens with multiple connection hops, is to connect to all chains directly and perform relevant queries to each of them in the sequence.")])]),e._v(" "),n("h2",{attrs:{id:"locked-funds"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#locked-funds"}},[e._v("#")]),e._v(" Locked funds")]),e._v(" "),n("p",[e._v("In some "),n("RouterLink",{attrs:{to:"/architecture/adr-026-ibc-client-recovery-mechanisms.html#exceptional-cases"}},[e._v("exceptional cases")]),e._v(", a client state associated with a given channel cannot be updated. This causes that funds from fungible tokens in that channel will be permanently locked and thus can no longer be transferred.")],1),e._v(" "),n("p",[e._v("To mitigate this, a client update governance proposal can be submitted to update the frozen client\nwith a new valid header. Once the proposal passes the client state will be unfrozen and the funds\nfrom the associated channels will then be unlocked. This mechanism only applies to clients that\nallow updates via governance, such as Tendermint clients.")]),e._v(" "),n("p",[e._v("In addition to this, it's important to mention that a token must be sent back along the exact route\nthat it took originally in order to return it to its original form on the source chain (eg: the\nCosmos Hub for the "),n("code",[e._v("uatom")]),e._v("). Sending a token back to the same chain across a different channel will\n"),n("strong",[e._v("not")]),e._v(" move the token back across its timeline. If a channel in the chain history closes before the\ntoken can be sent back across that channel, then the token will not be returnable to its original\nform.")]),e._v(" "),n("h2",{attrs:{id:"security-considerations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#security-considerations"}},[e._v("#")]),e._v(" Security considerations")]),e._v(" "),n("p",[e._v("For safety, no other module must be capable of minting tokens with the "),n("code",[e._v("ibc/")]),e._v(" prefix. The IBC\ntransfer module needs a subset of the denomination space that only it can create tokens in.")])])}),[],!1,null,null,null);t.default=o.exports}}]);