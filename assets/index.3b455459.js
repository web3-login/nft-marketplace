var U=Object.defineProperty;var q=(r,e,t)=>e in r?U(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var u=(r,e,t)=>(q(r,typeof e!="symbol"?e+"":e,t),t);import{_ as $,o as d,c as p,p as F,a as S,b as i,d as b,e as v,R as G,W as V,C as W,f as L,g as N,h as j,u as K,w as y,i as o,j as T,k as h,t as x,F as w,r as P,l as c,m,S as R,M as z,n as J,q as O,s as Q,v as X,x as B,y as Y,z as Z,A as ee}from"./vendor.f78d7d54.js";const te=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}};te();const ne={},ae=r=>(F("data-v-e5993138"),r=r(),S(),r),se={class:"footer"},re=ae(()=>i("p",null,"(c) chriamue",-1)),de=[re];function oe(r,e){return d(),p("div",se,de)}var ie=$(ne,[["render",oe],["__scopeId","data-v-e5993138"]]);const g=b({setup(r){const e=!0,t="#4289b9";return(a,n)=>(d(),v(G,{loading:e,color:t}))}}),pe=[{inputs:[{internalType:"string",name:"name",type:"string"},{internalType:"string",name:"symbol",type:"string"},{internalType:"string",name:"baseTokenURI",type:"string"},{internalType:"uint256",name:"basePrice",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"previousAdminRole",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"newAdminRole",type:"bytes32"}],name:"RoleAdminChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleGranted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleRevoked",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[],name:"DEFAULT_ADMIN_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"MINTER_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"buy",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"}],name:"getRoleAdmin",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"uint256",name:"index",type:"uint256"}],name:"getRoleMember",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"}],name:"getRoleMemberCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"grantRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"hasRole",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"isForSale",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"priceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"renounceRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"revokeRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"price",type:"uint256"}],name:"setPrice",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"toggleForSale",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"count",type:"uint256"}],name:"mintMultiple",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"}],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"}],ce={"42":{events:{"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925":{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},"0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31":{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},"0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff":{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"previousAdminRole",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"newAdminRole",type:"bytes32"}],name:"RoleAdminChanged",type:"event"},"0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d":{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleGranted",type:"event"},"0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b":{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleRevoked",type:"event"},"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef":{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"}},links:{},address:"0x3B8270447b913d0b935e09d1C2daEc3F5CDD968f",transactionHash:"0x9e04cc827f062286f88cc1039d6cb2a7368179de12dc29dede56c1ac36f326e5"},"65":{events:{"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925":{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},"0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31":{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},"0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff":{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"previousAdminRole",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"newAdminRole",type:"bytes32"}],name:"RoleAdminChanged",type:"event"},"0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d":{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleGranted",type:"event"},"0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b":{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleRevoked",type:"event"},"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef":{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"}},links:{},address:"0xf0263c1D56A167cDCF72086071f96CbB8a077AE9",transactionHash:"0xa5e691b1c1f9466d6d788827ef9d01eb949f4cb3c127c19ccdcffdcc6a984343"},"256":{events:{"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925":{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},"0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31":{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},"0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff":{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"previousAdminRole",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"newAdminRole",type:"bytes32"}],name:"RoleAdminChanged",type:"event"},"0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d":{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleGranted",type:"event"},"0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b":{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleRevoked",type:"event"},"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef":{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"}},links:{},address:"0xa0d4E5CdD89330ef9d0d1071247909882f0562eA",transactionHash:"0x743ce5abf297be93fcd6eacaa5716b544bdaa9720245fbcdbd9e738b902961b5"},"588":{events:{"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925":{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},"0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31":{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},"0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff":{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"previousAdminRole",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"newAdminRole",type:"bytes32"}],name:"RoleAdminChanged",type:"event"},"0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d":{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleGranted",type:"event"},"0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b":{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleRevoked",type:"event"},"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef":{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"}},links:{},address:"0x8866afd737201d9Fcc16438b65f1E3db7A3A5Ddb",transactionHash:"0x6e6fcdf05ed6ccf7f8eaa78d97a5e37fdab1cc63097002ebb59317e277a455ad"},"1337":{events:{},links:{},address:"0x393467F50bE8BF6615627F3cFb2C91Ca205Ec438",transactionHash:"0xed53de8d2e9a7ef5b3a1848540cd1ee9d313a9d24419075d25c7a98e96f60788"},"80001":{events:{"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925":{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},"0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31":{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},"0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff":{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"previousAdminRole",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"newAdminRole",type:"bytes32"}],name:"RoleAdminChanged",type:"event"},"0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d":{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleGranted",type:"event"},"0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b":{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleRevoked",type:"event"},"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef":{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"}},links:{},address:"0x8866afd737201d9Fcc16438b65f1E3db7A3A5Ddb",transactionHash:"0x8bbb90e8dcf092b77cca6832ba4a63b4ba081e62e2d2eb60381f5028dcf759b7"}};function le(){const r=window.location.search,e=new URLSearchParams(r).get("contract");return console.log("?contract=",e),e}class ue{constructor(){u(this,"provider");u(this,"contract");u(this,"init",async()=>{var e;this.provider=window.ethereum,await((e=window.ethereum)==null?void 0:e.request({method:"eth_requestAccounts"})),this.provider?(console.log("Ethereum successfully detected!"),this.provider.on("network",(t,a)=>{a&&window.location.reload()})):console.error("Please install MetaMask!")});u(this,"loadContract",async e=>{var n;await((n=window.ethereum)==null?void 0:n.request({method:"eth_requestAccounts"}));const a=new V(window.ethereum).getSigner();this.contract=await new W(e,pe,a)});u(this,"chainId",async()=>{var e;return parseInt(await((e=this.provider)==null?void 0:e.request({method:"eth_chainId"})),16).toString()});u(this,"contractAddress",async()=>{const e=await this.chainId(),a=ce[e];return a?le()||a.address:!1});u(this,"account",async()=>{var t;return(await((t=this.provider)==null?void 0:t.request({method:"eth_requestAccounts"})))[0]});u(this,"balance",async()=>{var t;const e=await((t=this.provider)==null?void 0:t.request({method:"eth_getBalance",params:[await this.account(),"latest"]}));return L(e,"ether")});u(this,"nftName",async()=>{var e;return await((e=this.contract)==null?void 0:e.name())});u(this,"nftSymbol",async()=>{var e;return await((e=this.contract)==null?void 0:e.symbol())});u(this,"balanceOf",async e=>{var a;return(await((a=this.contract)==null?void 0:a.balanceOf(e))).toNumber()});u(this,"baseURI",async()=>await this.contract.baseURI());u(this,"tokenCount",async()=>(await this.contract.totalSupply()).toNumber());u(this,"getToken",async e=>{const t=this.contract;let a=await t.priceOf(e);return a=L(a,"ether"),{id:e,uri:await t.tokenURI(e),price:a,owner:await t.ownerOf(e),forSale:await t.isForSale(e)}});u(this,"buyToken",async(e,t)=>new Promise(async(a,n)=>{this.contract.buy(e,{from:await this.account(),value:N(t)}).then(s=>{s.wait().then(a)}).catch(n)}));u(this,"toggleForSale",async e=>new Promise(async(t,a)=>{this.contract.toggleForSale(e,{from:await this.account()}).then(n=>{n.wait().then(t)}).catch(a)}));u(this,"changeTokenPrice",async(e,t)=>{const a=N(t);return new Promise(async(n,s)=>{this.contract.setPrice(e,a,{from:await this.account()}).then(l=>{l.wait().then(n)}).catch(s)})});this.init()}}const ye={setAccount(r,e){r.account=e},setBalance(r,e){r.balance=e},setBlockchainLoaded(r,e){r.blockchainLoaded=e,r.blockchain=r.blockchain}},E=Symbol(),me=j({state:{account:"",balance:0,blockchain:new ue,blockchainLoaded:!1},mutations:ye});function k(){return K(E)}const be={key:0},fe={key:1},_e=b({async setup(r){let e,t;const a=k(),n=window.ethereum;var s="";return n?(console.log("Ethereum successfully detected!"),s=([e,t]=y(()=>a.state.blockchain.chainId()),e=await e,t(),e)):console.error("Please install MetaMask!"),(l,f)=>(d(),p(w,null,[o(n)?(d(),p("div",be,"Metamask successfully detected")):T("",!0),o(n)?T("",!0):(d(),p("div",fe,"Please install MetaMask!")),h(" Chain ID: "+x(o(s)),1)],64))}});const Te={class:"row"},he={class:"col-12"},xe={class:"navbar navbar-expand-lg navbar-light bg-light"},ve=h("Home"),we=h("Marketplace"),ke=h("My Tokens"),ge=h("About"),Ae={class:"col-12 bg-light border p-3"},Re={key:1},Me={style:{"text-align":"center","padding-top":"20px"}},Ie=h(" Loading please wait ... "),$e={class:"col-12 bg-info"},Ce=b({setup(r){const e=k();return e.state.blockchain.init().then(async()=>{await e.state.blockchain.loadContract(await e.state.blockchain.contractAddress()),e.commit("setBlockchainLoaded",!0)}),(t,a)=>{const n=P("router-link"),s=P("router-view");return d(),p(w,null,[i("div",Te,[i("div",he,[i("div",xe,[c(n,{to:"/",class:"btn btn-info"},{default:m(()=>[ve]),_:1}),c(n,{to:"/marketplace",class:"btn btn-info"},{default:m(()=>[we]),_:1}),c(n,{to:"/mytokens",class:"btn btn-info"},{default:m(()=>[ke]),_:1}),c(n,{to:"/about",class:"btn btn-info"},{default:m(()=>[ge]),_:1})])]),i("div",Ae,[o(e).state.blockchainLoaded?T("",!0):(d(),v(g,{key:0})),o(e).state.blockchainLoaded?(d(),p("div",Re,[c(s)])):T("",!0),(d(),v(R,null,{default:m(()=>[c(_e)]),fallback:m(()=>[i("div",Me,[c(g),Ie])]),_:1}))])]),i("div",$e,[c(ie)])],64)}}}),Fe={key:0},Se=b({async setup(r){let e,t;const a=k();var n=([e,t]=y(()=>a.state.blockchain.contractAddress()),e=await e,t(),e),s=([e,t]=y(()=>a.state.blockchain.nftName()),e=await e,t(),e),l=([e,t]=y(()=>a.state.blockchain.nftSymbol()),e=await e,t(),e);return(f,_)=>o(a).state.blockchainLoaded?(d(),p("div",Fe,[h(x(o(s))+" "+x(o(l))+" ",1),i("p",null,"Contract "+x(o(n)),1)])):T("",!0)}}),Le=b({async setup(r){let e,t;const a=k(),n=([e,t]=y(()=>a.state.blockchain.account()),e=await e,t(),e),s=([e,t]=y(()=>a.state.blockchain.balance()),e=await e,t(),e),l=([e,t]=y(()=>a.state.blockchain.balanceOf(n)),e=await e,t(),e);return(f,_)=>(d(),p(w,null,[i("h1",null,x(o(n)),1),i("p",null,"Balance "+x(o(s)),1),i("p",null,"Tokens "+x(o(l)),1)],64))}}),Ne=b({async setup(r){let e,t;const a=k(),n=([e,t]=y(()=>a.state.blockchain.baseURI()),e=await e,t(),e);console.log(n);const s=([e,t]=y(async()=>([e,t]=y(()=>fetch(n)),e=await e,t(),e).text()),e=await e,t(),e);return console.log(s),(l,f)=>(d(),p("div",null,[c(o(z),{source:o(s)},null,8,["source"])]))}}),Pe=i("h1",null,"Home",-1),Oe={style:{"text-align":"center","padding-top":"20px"}},Be={style:{"text-align":"center","padding-top":"20px"}},Ee={style:{"text-align":"center","padding-top":"20px"}},De=b({setup(r){return(e,t)=>(d(),p(w,null,[Pe,(d(),v(R,null,{default:m(()=>[c(Se)]),fallback:m(()=>[i("div",Oe,[c(g)])]),_:1})),(d(),v(R,null,{default:m(()=>[c(Le)]),fallback:m(()=>[i("div",Be,[c(g)])]),_:1})),(d(),v(R,null,{default:m(()=>[c(Ne)]),fallback:m(()=>[i("div",Ee,[c(g)])]),_:1}))],64))}}),He=["innerHTML"],Ue=b({props:{uri:null},setup(r){const t=J(r.uri,144);return(a,n)=>(d(),p("div",{innerHTML:o(t)},null,8,He))}});const qe=r=>(F("data-v-0c16adf3"),r=r(),S(),r),Ge=qe(()=>i("button",{class:"btn btn-secondary",type:"submit"},"Change Price",-1)),Ve=b({props:{token:null,account:null},setup(r){const e=r,t=k(),a=e.token.owner.toLowerCase()===e.account.toLowerCase(),n=e.token.forSale,s=O(!1),l=O(e.token.price),f=()=>{s.value=!0,t.state.blockchain.buyToken(e.token.id,e.token.price).then(()=>{s.value=!1,window.location.reload()}).catch(()=>{s.value=!1})},_=()=>{s.value=!0,t.state.blockchain.toggleForSale(e.token.id).then(()=>{s.value=!1,window.location.reload()}).catch(()=>{s.value=!1})},A=I=>{I.preventDefault(),s.value=!0,t.state.blockchain.changeTokenPrice(e.token.id,l.value).then(()=>{s.value=!1,window.location.reload()}).catch(()=>{s.value=!1})};return(I,M)=>(d(),p(w,null,[s.value?(d(),v(g,{key:0})):T("",!0),!a&&o(n)?(d(),p("button",{key:1,type:"button",onclick:f,class:"btn btn-success"}," Buy ")):T("",!0),a&&!o(n)?(d(),p("button",{key:2,type:"button",onclick:_,class:"btn btn-danger",title:"Place for sale!"}," Sell ")):T("",!0),a&&o(n)?(d(),p("button",{key:3,type:"button",onclick:_,class:"btn btn-primary",title:"Remove from sale!"}," Keep ")):T("",!0),a&&o(n)?(d(),p("form",{key:4,onSubmit:A,class:"mx-3 mt-2 row form-inline"},[Q(i("input",{id:"newPrice","onUpdate:modelValue":M[0]||(M[0]=H=>l.value=H),type:"text",name:"newPrice",min:"0",class:"form-control"},null,512),[[X,l.value]]),Ge],32)):T("",!0)],64))}});var We=$(Ve,[["__scopeId","data-v-0c16adf3"]]);const je=i("span",{className:"font-weight-bold"},"Token Id",-1),Ke=i("span",{className:"font-weight-bold"},"Owner",-1),ze=i("span",{className:"font-weight-bold"},"Price",-1),D=b({props:{id:null},async setup(r){let e,t;const a=r,n=k(),s=([e,t]=y(()=>n.state.blockchain.getToken(Number(a.id))),e=await e,t(),e),l=([e,t]=y(()=>n.state.blockchain.account()),e=await e,t(),e);return(f,_)=>(d(),p("div",{key:r.id,className:"mt-4"},[c(Ue,{uri:o(s).uri},null,8,["uri"]),i("p",null,[je,h(" : "+x(r.id),1)]),i("p",null,[Ke,h(" : "+x(o(s).owner.substr(0,5)+"..."+o(s).owner.slice(o(s).owner.length-5)),1)]),i("p",null,[ze,h(" : "+x(o(s).price)+" \u039E",1)]),c(We,{token:o(s),account:o(l)},null,8,["token","account"])]))}}),Je={className:"d-flex flex-wrap mb-2"},Qe=b({async setup(r){let e,t;const a=k(),n=([e,t]=y(()=>a.state.blockchain.tokenCount()),e=await e,t(),e);return(s,l)=>(d(),p("div",Je,[(d(!0),p(w,null,B(o(n),f=>(d(),p("div",{key:f,className:"w-30 p-3 mt-1 border"},[c(D,{id:f-1},null,8,["id"])]))),128))]))}}),Xe=i("h1",null,"Marketplace",-1),Ye={style:{"text-align":"center","padding-top":"20px"}},Ze=b({setup(r){return(e,t)=>(d(),p(w,null,[Xe,(d(),v(R,null,{default:m(()=>[c(Qe)]),fallback:m(()=>[i("div",Ye,[c(g)])]),_:1}))],64))}}),et={className:"d-flex flex-wrap mb-2"},tt=b({async setup(r){let e,t;const a=k(),n=([e,t]=y(()=>a.state.blockchain.account()),e=await e,t(),e),s=([e,t]=y(()=>a.state.blockchain.tokenCount()),e=await e,t(),e);let f=Array.from(Array(s).keys()).map(A=>a.state.blockchain.getToken(Number(A))),_=([e,t]=y(()=>Promise.all(f)),e=await e,t(),e);return console.table(_),_=_.filter(A=>A.owner.toLowerCase()===n.toLowerCase()),(A,I)=>(d(),p("div",et,[(d(!0),p(w,null,B(o(_),M=>(d(),p("div",{key:M.id,className:"w-40 p-3 mt-1 border"},[c(D,{id:M.id},null,8,["id"])]))),128))]))}}),nt=i("h1",null,"MyTokens",-1),at={style:{"text-align":"center","padding-top":"20px"}},st=b({setup(r){return(e,t)=>(d(),p(w,null,[nt,(d(),v(R,null,{default:m(()=>[c(tt)]),fallback:m(()=>[i("div",at,[c(g)])]),_:1}))],64))}}),rt={};function dt(r,e){return d(),p("h1",null,"NFT Marketplace")}var ot=$(rt,[["render",dt]]);const it=[{path:"/",component:De},{path:"/marketplace",component:Ze},{path:"/mytokens",component:st},{path:"/about",component:ot}],pt=Y({history:Z(),routes:it}),C=ee(Ce);C.use(pt);C.use(me,E);C.mount("#app");