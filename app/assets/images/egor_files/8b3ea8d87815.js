__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});var s=r(d[3]).connect(function(s,t){return{users:r(d[0]).getFeedAysfUsers(s,t),shouldRenderContactImportUpsell:r(d[1]).shouldRenderContactImportUpsell(s,'CHAINING_LIST_ITEM')}},function(s){return{onSuggestionDismissed(t){s(r(d[2]).dismissFeedAysfSuggestion(t))}}})(i(d[4]));e.default=s},13172736,[9961552,9961553,12910595,5,13041666]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});const t=r(d[0]).createSelector(t=>t.contactImport.ids,t=>t.toArray());e.getContactUserIDs=t,e.getContactUsers=(s=>(r(d[1]).getUsersByIds(s,t(s))||[]).map(t=>({user:t,relationship:r(d[2]).getRelationship(s.relationships,t.id)}))),e.shouldRenderContactImportUpsell=((t,s)=>{var c;const n=t.contactImport.canImportContacts,o=!t.contactImport.upsellStatus.get('chainingListUpsellDismissed'),l=!t.contactImport.upsellStatus.get('emptyFeedCarouselCardDismissed'),u=null===(c=t.settings.privacyAndSecurityData)||void 0===c?void 0:c.allowContactsSync.value;switch(s){case'CONTACTS_LIST':case'NO_CONTACTS':case'NUX':return n;case'LIST_ITEM':return n&&!u;case'EMPTY_FEED_CAROUSEL_CARD':return l&&n&&!u;case'CHAINING_LIST_ITEM':return o&&n&&!u;default:return!1}})},9961553,[9,9633931,9830405]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]);const s=r(d[1])(1280),o=o=>{a(d[2]).useEffect(()=>{const{position:s,trackingToken:t,type:n}=o;null!=s&&r(d[3]).logNetEgoEvent({containerModule:r(d[3]).NETEGO_CONTAINER_MODULES.feed,eventName:'instagram_netego_impression',isFromNeedyUser:!0,position:s,trackingToken:t,type:n})},[o.position]);const{className:t,impressionModule:n,onSuggestionDismissed:l,users:c,shouldRenderContactImportUpsell:_,variant:u}=o;return a(d[2]).createElement(i(d[4]),{analyticsContext:r(d[5]).CONNECTIONS_CONTAINER_MODULES.feed_timeline,chainingSuggestions:c,className:i(d[6])(t,`${u===r(d[7]).VARIANTS.narrow?"bq3Mi":""} ${u===r(d[7]).VARIANTS.wide?"vboSt":""} ${r(d[8]).isMobile()?"D_6tu":""} ${r(d[8]).isMobile()?"":"_6E_wP"}`),clickPoint:'feed_h_scroll_suggested_user_list',impressionModule:n,isSmallScreen:u===r(d[7]).VARIANTS.narrow,onSuggestionDismissed:l,seeAllHref:r(d[9]).DISCOVER_PEOPLE_PATH,shouldRenderContactImportUpsell:_,showDescription:!0,title:s})};o.defaultProps={impressionModule:r(d[5]).VIEW_MODULES.hscroll_feed};var t=o;e.default=t},13041666,[13041667,9633796,3,13041668,13041669,9830546,9633813,12255233,9633836,9633899]);
__d(function() {},13041667,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});e.NETEGO_CONTAINER_MODULES={feed:"feed"},e.logNetEgoEvent=function({containerModule:t,eventName:o,isFromNeedyUser:n,position:c,trackingToken:_,type:s}){const l={is_from_needy_user:Boolean(n),position:c,device_model:r(d[0]).getBrowserString(),device_os:'Web',gap_to_last_netego:-1,primary_locale:r(d[1]).getLocale(),deviceid:r(d[2]).getDeviceOrMachineId(),tracking_token:_,type:s};r(d[3]).logPigeonEvent(r(d[4]).createEvent(o,r(d[3]).getExtra(l),{module:t}))}},13041668,[9633836,9633805,9830707,9633888,9633889]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]);const t=r(d[1])(2226),n={cardWidth:156,gapWidth:5,gutterWidth:20,height:202},o={cardWidth:176,gapWidth:24,gutterWidth:24,height:202};class s extends a(d[3]).Component{constructor(t){super(t),this.$FollowChainingList3=(()=>{this.$FollowChainingList1=!0,this.$FollowChainingList4(),this.props.onScrollEnter&&this.props.onScrollEnter()}),this.$FollowChainingList5=(()=>{this.$FollowChainingList1=!1,this.props.onScrollLeave&&this.props.onScrollLeave()}),this.$FollowChainingList6=((t,n)=>{this.$FollowChainingList7=t,this.$FollowChainingList8=n,this.$FollowChainingList4()}),this.$FollowChainingList1=!1,this.$FollowChainingList2={}}$FollowChainingList4(){if(this.$FollowChainingList1&&null!=this.$FollowChainingList7&&null!=this.$FollowChainingList8&&null!=this.props.chainingSuggestions)for(let t=this.$FollowChainingList7;t<=this.$FollowChainingList8;++t){const n=this.props.chainingSuggestions[t];if(null!=n&&!this.$FollowChainingList2[n.id]){const{impressionModule:o}=this.props,s={targetId:n.id,containerModule:this.props.analyticsContext,position:t,viewModule:o};o===r(d[2]).VIEW_MODULES.web_profile_chaining?r(d[2]).logConnectionAction({eventName:'similar_user_impression',...s}):o!==r(d[2]).VIEW_MODULES.hscroll_feed&&o!==r(d[2]).VIEW_MODULES.end_of_feed||r(d[2]).logConnectionAction({eventName:'recommended_user_impression',...s}),this.$FollowChainingList2[n.id]=!0}}}render(){const{analyticsContext:s,chainingFailed:l,chainingSuggestions:h,className:c,clickPoint:p,impressionModule:C,isSmallScreen:u,onRetryClicked:w,onSuggestionDismissed:L,seeAllHref:$,shouldRenderContactImportUpsell:E,showDescription:F,title:_}=this.props,S=u?n:o,W=h&&h.map((t,n)=>a(d[3]).createElement(i(d[4]),{analyticsContext:s,clickPoint:p,impressionModule:C,isSmallScreen:u,key:t.id,onDismissed:L,position:n,showDescription:F,user:t}));return null!=W&&E&&i(d[5])._("19","0")&&W.splice(2,0,a(d[3]).createElement(i(d[6]),{analyticsContext:s,key:"contactImport",variant:"CHAINING_LIST_ITEM"})),a(d[3]).createElement(i(d[7]),{className:i(d[8])(c,`ccgHY ${u?"l9Ww0":""} ${u?"":"GZkEI"}`),onScrollEnter:this.$FollowChainingList3,onScrollLeave:this.$FollowChainingList5},!0!==l&&!h&&a(d[3]).createElement("div",{className:"_7AQG4"},a(d[3]).createElement("p",null,t)),!0===l&&a(d[3]).createElement(i(d[9]),{className:"fNpwd",errorText:r(d[1])(53),onRetry:i(d[10])(w)}),!0!==l&&h&&a(d[3]).createElement("div",{className:"EM8Od"},a(d[3]).createElement("span",{className:"Rebts"},_),null!=$&&''!==$&&a(d[3]).createElement(i(d[11]),{href:$,onClick:this.props.onSeeAllClicked})),!0!==l&&h&&null!=W&&a(d[3]).createElement(r(d[12]).Box,{height:S.height},a(d[3]).createElement(i(d[13]),{cardWidth:S.cardWidth,gapWidth:S.gapWidth,gutterWidth:S.gutterWidth,onVisibilityChange:this.$FollowChainingList6,type:"collapsible"},W)))}}s.defaultProps={shouldRenderContactImportUpsell:!1,showDescription:!1};var l=s;e.default=l},13041669,[13041670,9633796,9830546,3,13041671,9633874,9961557,12320775,9633813,11993125,9633799,9961555,9633855,12517486]);
__d(function() {},13041670,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]);const o=77,t=54;var l=r(d[12]).withRouter(class extends a(d[5]).Component{constructor(...o){super(...o),this.$FollowCard4=(o=>{this.$FollowCard3('avatar'),o.stopPropagation()}),this.$FollowCard5=(o=>{this.$FollowCard3('username'),this.$FollowCard1(this.$FollowCard2()?'similar_username_tapped':'recommended_username_tapped'),o.stopPropagation()}),this.$FollowCard6=(o=>{this.$FollowCard3('follow'),this.$FollowCard1(this.$FollowCard2()?'similar_user_follow_button_tapped':'recommended_follow_button_tapped'),o.stopPropagation()}),this.$FollowCard7=(()=>{const{onDismissed:o,user:{id:t}}=this.props;this.$FollowCard1(this.$FollowCard2()?'similar_user_dismiss_tapped':'recommended_user_dismissed'),o&&o(t)}),this.$FollowCard8=(()=>{const{user:{username:o}}=this.props;null!=o&&''!==o||i(d[1])(0);const t=r(d[2]).buildUserLink(o);this.props.history.push(t)})}$FollowCard1(o){const{analyticsContext:t,impressionModule:l,position:s,user:n}=this.props;r(d[3]).logConnectionAction({eventName:o,position:s,targetId:n.id,containerModule:t,viewModule:l})}$FollowCard2(){return this.props.impressionModule===r(d[3]).VIEW_MODULES.web_profile_chaining}$FollowCard3(o){r(d[4]).logAction_DEPRECATED('chainingClick',{source:this.props.analyticsContext,target:o})}$FollowCard9(o){return o.length<33?o:o.substr(0,30)+'…'}$FollowCard10(){const{showDescription:o,user:{suggestionDescription:t}}=this.props;return o&&null!=t}$FollowCard11(){const{isSmallScreen:l,user:{profilePictureUrl:s,username:n}}=this.props;return null!=s&&''!==s||i(d[1])(0),a(d[5]).createElement(i(d[6]),{isLink:!0,onClick:this.$FollowCard4,profilePictureUrl:s,username:n,size:l?o:t})}$FollowCard12(){const{user:{fullName:o,isVerified:t,username:l}}=this.props;return null!=l&&''!==l||i(d[1])(0),null!=t||i(d[1])(0),a(d[5]).createElement(a(d[5]).Fragment,null,a(d[5]).createElement(i(d[7]),{className:"Qj3-a",username:l,onClick:this.$FollowCard5},!0===this.$FollowCard10()&&null!=o&&''!==o&&o.length>0?o:l),t&&a(d[5]).createElement(r(d[8]).Box,{marginStart:1},a(d[5]).createElement(i(d[9]),null)))}$FollowCard13(){const{user:{fullName:o,suggestionDescription:t}}=this.props;return!0!==this.$FollowCard10()?a(d[5]).createElement("span",{className:"_7cyhW notranslate",title:o},o):a(d[5]).createElement("span",{className:"_0p1Te",title:t},this.$FollowCard9(t))}$FollowCard14(){const{clickPoint:o,user:{id:t,username:l},analyticsContext:s}=this.props;return a(d[5]).createElement(i(d[10]),{analyticsContext:s,analyticsExtra:{chn:1},clickPoint:o,fullWidth:!0,onClick:this.$FollowCard6,userId:t,username:l})}render(){const{analyticsContext:o,isSmallScreen:t,onDismissed:l}=this.props;return a(d[5]).createElement(i(d[11]),{analyticsContext:o,icon:this.$FollowCard11(),isSmallScreen:t,onClick:this.$FollowCard8,onDismissed:l?this.$FollowCard7:null,primaryCta:this.$FollowCard14(),primaryText:this.$FollowCard12(),secondaryText:this.$FollowCard13()})}});e.default=l},13041671,[13041672,9502826,9633814,9830546,9633888,3,9633802,9633803,9633855,9830682,9830545,9961564,6]);
__d(function() {},13041672,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]),r(d[1]);var t=class extends a(d[3]).Component{constructor(...t){super(...t),this.$FollowChainingListItem2=(t=>{const{onDismissed:n}=this.props;this.$FollowChainingListItem1('dismiss'),n&&n(),t.stopPropagation()}),this.$FollowChainingListItem3=(()=>{const{onClick:t}=this.props;this.$FollowChainingListItem1('other'),t&&t()})}$FollowChainingListItem1(t){this.props.analyticsContext&&r(d[2]).logAction_DEPRECATED('chainingClick',{source:this.props.analyticsContext,target:t})}render(){const{isSmallScreen:t,icon:n,onDismissed:o,primaryCta:s,primaryText:l,secondaryText:c}=this.props;return a(d[3]).createElement("div",{className:`_41KYi ${t?"FQuRW":""} ${t?"":"LQtnO"}`,onClick:this.$FollowChainingListItem3,role:"button",tabIndex:"0"},a(d[3]).createElement(r(d[4]).Box,{alignItems:"center",width:"100%",padding:t?4:5},o&&a(d[3]).createElement("button",{alt:r(d[5])(2718),className:"fUzmR",onClick:this.$FollowChainingListItem2,tabIndex:-1},a(d[3]).createElement("div",{className:`${t?"coreSpriteDismissSmall":""} ${t?"":"coreSpriteDismissLarge"}`})),a(d[3]).createElement(r(d[4]).Box,{marginBottom:t?2:5},n),a(d[3]).createElement(r(d[4]).Box,{alignItems:"center",direction:"row",justifyContent:"center",marginBottom:1,width:"100%"},l),a(d[3]).createElement(r(d[4]).Box,{alignItems:"center",direction:"row",justifyContent:"center",marginBottom:t?2:3,width:"100%"},c),s))}};e.default=t},9961564,[9633794,9961570,9633888,3,9633855,9633796]);
__d(function() {},9961570,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});const t=r(d[0])(1626),s=r(d[0])(2508),o=r(d[0])(731),n=r(d[0])(1220),c=r(d[0])(44),C=r(d[0])(2146),I=r(d[0])(1426),l=r(d[0])(2327),E=r(d[0])(2222),T=r(d[0])(741),_=()=>i(d[1])._("24")&&a(d[2]).createElement(r(d[3]).Text.Footnote,{color:"ig-secondary-text",textAlign:"left"},T,a(d[2]).createElement(i(d[4]),{href:r(d[5]).CONTACT_IMPORT_DATA_POLICY_PATH},' ',r(d[6]).LEARN_MORE,'.'));class p extends a(d[2]).Component{constructor(t){super(t),this.$ImportContacts1=(()=>{i(d[7])(this.props.history).push(r(d[5]).DISCOVER_PEOPLE_SUGGESTTED_PATH)}),this.$ImportContacts4=(()=>{i(d[7])(this.props.history).push(r(d[5]).DISCOVER_PEOPLE_CONTACTS_PATH)}),this.$ImportContacts5=(()=>{const{onDismissed:t,variant:s}=this.props;'CHAINING_LIST_ITEM'===s?r(d[8]).getUserPreferences().setItem('showContactImportFeedUnitUpsell',!1):'EMPTY_FEED_CAROUSEL_CARD'===s&&r(d[8]).getUserPreferences().setItem('showContactImportEmptyFeedCarouselUpsell',!1),t&&t()}),this.state={showLegalDialog:!1}}$ImportContacts2(){const{shouldRender:t,variant:s}=this.props;switch(s){case'CHAINING_LIST_ITEM':case'CONTACTS_LIST':case'EMPTY_FEED_CAROUSEL_CARD':case'NO_CONTACTS':case'NUX':return t;case'LIST_ITEM':return t&&this.$ImportContacts3();default:return!1}}$ImportContacts3(){const{analyticsContext:t}=this.props;switch(t){case r(d[9]).CONNECTIONS_CONTAINER_MODULES.discover_people:case r(d[9]).CONNECTIONS_CONTAINER_MODULES.newsfeed_you:case r(d[9]).CONNECTIONS_CONTAINER_MODULES.self_following:return i(d[10])._("19","0");case r(d[9]).CONNECTIONS_CONTAINER_MODULES.follow_requests:case r(d[9]).CONNECTIONS_CONTAINER_MODULES.self_followers:case r(d[9]).CONNECTIONS_CONTAINER_MODULES.feed_timeline:default:return!1}}$ImportContacts6(){const{variant:t}=this.props;switch(t){case'LIST_ITEM':return a(d[2]).createElement(r(d[3]).BorderedIcon,{alt:r(d[0])(1958),icon:r(d[3]).ICONS.CONTACT_IMPORT_SM,size:r(d[3]).CORE_CONSTANTS.AVATAR_SIZES.medium});case'CHAINING_LIST_ITEM':case'CONTACTS_LIST':case'EMPTY_FEED_CAROUSEL_CARD':case'NUX':return a(d[2]).createElement(r(d[3]).BorderedIcon,{alt:r(d[0])(1958),icon:r(d[3]).ICONS.CONTACT_IMPORT,size:62});case'NO_CONTACTS':return a(d[2]).createElement(r(d[3]).BorderedIcon,{alt:r(d[0])(784),icon:r(d[3]).ICONS.USER_OUTLINE_24_GREY9,size:62});default:return null}}$ImportContacts7(){const{variant:s}=this.props;switch(s){case'CHAINING_LIST_ITEM':case'EMPTY_FEED_CAROUSEL_CARD':case'LIST_ITEM':return I;case'CONTACTS_LIST':case'NUX':return t;case'NO_CONTACTS':return n;default:return null}}$ImportContacts8(){const{variant:t}=this.props;switch(t){case'CHAINING_LIST_ITEM':case'EMPTY_FEED_CAROUSEL_CARD':case'LIST_ITEM':return l;case'CONTACTS_LIST':case'NUX':return o;case'NO_CONTACTS':return c;default:return null}}$ImportContacts9(){const{isProcessing:t,variant:o}=this.props;switch(o){case'CHAINING_LIST_ITEM':case'EMPTY_FEED_CAROUSEL_CARD':case'LIST_ITEM':return a(d[2]).createElement(r(d[3]).Button,{fullWidth:'CHAINING_LIST_ITEM'===o,loading:t,onClick:()=>{this.setState({showLegalDialog:!0})}},E);case'CONTACTS_LIST':case'NUX':return a(d[2]).createElement(r(d[3]).Button,{fullWidth:!0,large:!0,loading:t,onClick:this.props.onImportContacts},s);case'NO_CONTACTS':return a(d[2]).createElement(r(d[3]).Button,{borderless:!0,onClick:this.$ImportContacts1},C);default:return null}}$ImportContacts10(){const{analyticsContext:t,hideAction:o,isProcessing:n,isSmallScreen:c,variant:C}=this.props;switch(C){case'NUX':return a(d[2]).createElement(i(d[11]),{bodyText:this.$ImportContacts8(),buttonText:s,headerText:this.$ImportContacts7(),hideAction:o,icon:this.$ImportContacts6(),isProcessing:n,onButtonClick:this.props.onImportContacts});case'LIST_ITEM':return a(d[2]).createElement(r(d[3]).Box,{marginBottom:1},a(d[2]).createElement(r(d[3]).ListItem,{action:this.$ImportContacts9(),icon:this.$ImportContacts6(),subtitle:this.$ImportContacts8(),title:a(d[2]).createElement(r(d[3]).Text.BodyEmphasized,null,this.$ImportContacts7())}));case'CHAINING_LIST_ITEM':return a(d[2]).createElement(i(d[12]),{analyticsContext:t,icon:this.$ImportContacts6(),isSmallScreen:i(d[7])(c),onClick:this.$ImportContacts4,onDismissed:this.$ImportContacts5,primaryCta:this.$ImportContacts9(),primaryText:a(d[2]).createElement(r(d[3]).Box,{marginBottom:2},a(d[2]).createElement(r(d[3]).Text.BodyEmphasized,null,this.$ImportContacts7())),secondaryText:a(d[2]).createElement(r(d[3]).Box,{marginBottom:3},a(d[2]).createElement(r(d[3]).Text.Footnote,{color:"ig-secondary-text"},this.$ImportContacts8()))});case'EMPTY_FEED_CAROUSEL_CARD':return a(d[2]).createElement(r(d[13]).UpsellCard,{body:this.$ImportContacts8(),button:this.$ImportContacts9(),header:this.$ImportContacts7(),icon:this.$ImportContacts6(),onDismiss:this.$ImportContacts5});default:return a(d[2]).createElement(r(d[3]).Box,{alignItems:"center",justifyContent:"center",marginTop:15},a(d[2]).createElement(r(d[3]).Box,{alignItems:"center",justifyContent:"center",padding:9},a(d[2]).createElement(r(d[3]).Box,{paddingY:3},this.$ImportContacts6()),a(d[2]).createElement(r(d[3]).Box,{paddingY:3},a(d[2]).createElement(r(d[3]).Text.Headline2,null,this.$ImportContacts7())),a(d[2]).createElement(r(d[3]).Box,{paddingY:3},a(d[2]).createElement(r(d[3]).Text.Body,{color:"ig-secondary-text",textAlign:"center"},this.$ImportContacts8())),a(d[2]).createElement(r(d[3]).Box,{paddingY:3,width:"100%"},this.$ImportContacts9()),a(d[2]).createElement(r(d[3]).Box,{paddingY:4},a(d[2]).createElement(_,null))))}}render(){return this.$ImportContacts2()?a(d[2]).createElement(a(d[2]).Fragment,null,this.$ImportContacts10(),this.state.showLegalDialog&&a(d[2]).createElement(i(d[14]),{hideIcon:!1,onClose:()=>{this.setState({showLegalDialog:!1})},onConfirm:this.props.onImportContacts})):null}}p.defaultProps={hideAction:!1,redirectToContactsPage:!0,isSmallScreen:!1,variant:'CONTACTS_LIST'};var S=r(d[18]).withRouter(r(d[19]).connect(function(t,s){return{isProcessing:t.contactImport.requestInFlight,shouldRender:r(d[15]).shouldRenderContactImportUpsell(t,i(d[7])(s.variant))}},function(t,s){const{redirectToContactsPage:o,variant:n}=s;return{onDismissed(){'CHAINING_LIST_ITEM'===n?t({type:r(d[16]).CI_CHAINING_LIST_UPSELL_DISMISSED}):'EMPTY_FEED_CAROUSEL_CARD'===n&&t({type:r(d[16]).CI_EMPTY_FEED_CAROUSEL_UPSELL_DISMISSED})},onImportContacts(){t(r(d[17]).importContacts({redirectToContactsPage:void 0===o||o}))}}})(p));e.default=S,e.IMPORT_CONTACTS_LEGAL_DISCLAIMER=T,e.LegalDisclaimer=_},9961557,[9633796,9633922,3,9633855,9633902,9633899,9633809,9633799,9961562,9830546,9633874,9961563,9961564,9961565,9961566,9961553,9961567,9961568,6,5]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]);const t={AVATAR:{HEIGHT:88,WIDTH:88},CARD:{HEIGHT:344,WIDTH:236},IMAGE:{HEIGHT:74,WIDTH:74}},n=({children:n,dangerouslySetClassName:l,onClick:o})=>a(d[1]).createElement("div",{className:null===l||void 0===l?void 0:l.__className,onClick:o,role:"link",tabIndex:"0"},a(d[1]).createElement(r(d[2]).Box,{alignItems:"center",color:"ig-background",dangerouslySetClassName:{__className:"R-Yxq"},flex:"grow",height:t.CARD.HEIGHT,padding:1,width:t.CARD.WIDTH},n)),l=i(d[3])(({body:l,button:o,dangerouslySetClassName:s,header:c,icon:E,onDismiss:I})=>a(d[1]).createElement(n,{dangerouslySetClassName:s},a(d[1]).createElement(r(d[2]).Box,{alignItems:"center",dangerouslySetClassName:{__className:"_6d4V5"},height:t.AVATAR.HEIGHT,justifyContent:"center",marginTop:11,shape:"circle",width:t.AVATAR.WIDTH},E),a(d[1]).createElement(r(d[2]).Box,{padding:3},a(d[1]).createElement(r(d[2]).Text.Headline2,{textAlign:"center"},c)),I&&a(d[1]).createElement(r(d[2]).Box,{position:"absolute",right:!0},a(d[1]).createElement(r(d[2]).IconButton,{alt:r(d[4])(1971),icon:r(d[2]).ICONS.GREY_CLOSE,onClick:I})),a(d[1]).createElement(r(d[2]).Box,{flex:"grow",paddingX:3},a(d[1]).createElement(r(d[2]).Text.Body,{color:"ig-secondary-text",textAlign:"center"},l)),a(d[1]).createElement(r(d[2]).Box,{marginBottom:5},o)));var o=i(d[3])(n);e.default=o,e.SIZES=t,e.UpsellCard=l},9961565,[9961571,3,9633855,9961572,9633796]);
__d(function() {},9961571,[]);
__d(function(g,r,i,a,m,e,d){"use strict";function t(){r(d[0]).openURL(r(d[1]).CONTACT_IMPORT_DATA_POLICY_PATH)}function o(){const{pixelRatio:t}=i(d[2])();return t>=1.5?"/static/images/ci/contacts-facepile-2x.jpg/ca81c1e43461.jpg 2x":"/static/images/ci/contacts-facepile-1x.jpg/df9b3f3bde41.jpg"}Object.defineProperty(e,'__esModule',{value:!0});const n=n=>a(d[3]).createElement(r(d[4]).Dialog,{body:r(d[5])(2356),media:!n.hideIcon&&a(d[3]).createElement(r(d[4]).Box,{alignItems:"center",justifyContent:"center",width:"100%"},a(d[3]).createElement("img",{alt:r(d[5])(2768),srcSet:o()})),onModalClose:n.onClose,title:r(d[5])(799)},n.onConfirm&&a(d[3]).createElement(r(d[4]).DialogItem,{color:"ig-primary-action",onClick:n.onConfirm},r(d[6]).GET_STARTED),a(d[3]).createElement(r(d[4]).DialogItem,{color:n.onConfirm?'ig-secondary-action':'ig-primary-action',onClick:t},r(d[6]).LEARN_MORE),a(d[3]).createElement(r(d[4]).DialogItem,{onClick:n.onClose},r(d[6]).CLOSE_TEXT));n.defaultProps={hideIcon:!0};var c=n;e.default=c},9961566,[9633927,9633899,9830594,3,9633855,9633796,9633809]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function(){const[t,n]=r(d[0]).useState(r(d[1]).fetchWindowOrientation()),[o,w]=r(d[0]).useState(window.devicePixelRatio),[s,u]=r(d[0]).useState(window.innerHeight),[c,l]=r(d[0]).useState(window.innerWidth);return r(d[0]).useEffect(()=>{const t=()=>{n(r(d[1]).fetchWindowOrientation),w(window.devicePixelRatio),u(window.innerHeight),l(window.innerWidth)};let o=!1,s=null;if(r(d[3]).isDesktop()){const t=()=>{w(window.devicePixelRatio),s=setTimeout(t,1e3)};t()}const c=i(d[4]).add(window,'resize',()=>{o||(o=!0,r(d[2]).measure(()=>{try{t()}finally{o=!1}}))});return()=>{r(d[3]).isDesktop()&&clearTimeout(s),c.remove()}},[]),{orientation:t,pixelRatio:o,viewportHeight:s,viewportWidth:c}}},9830594,[3,9830598,9633822,9633836,9830431]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});const t=30;class o extends a(d[5]).Component{constructor(...o){super(...o),this.$ScrollWatchedComponent1=(()=>{const t=this.$ScrollWatchedComponent2;if(t){const o=this.context.scrollableContainer;let n;return n=o?{left:t.offsetLeft,width:t.offsetWidth,right:t.offsetLeft+t.offsetWidth,top:t.offsetTop,height:t.offsetHeight,bottom:t.offsetTop+t.offsetHeight}:a(d[0]).getTranslated(t.getBoundingClientRect(),o?{x:o.scrollLeft,y:o.scrollTop}:{x:window.pageXOffset,y:window.pageYOffset}),a(d[0]).getScaled(n,this.props.boundScaleFactor)}return{bottom:0,height:0,left:0,right:0,top:0,width:0}}),this.$ScrollWatchedComponent3=(t=>{this.$ScrollWatchedComponent2=t}),this.getMeasuredAreaRect=(()=>(this.setRect(this.$ScrollWatchedComponent1()),i(d[1])(this.rect))),this.forceRecompute=(()=>{this.$ScrollWatchedComponent4()}),this.handleResize=((t,o)=>{this.setRect(this.$ScrollWatchedComponent1()),this.$ScrollWatchedComponent5(),'function'==typeof this.props.onResize&&this.props.onResize(t,o)}),this.setRect=(t=>{this.rect=t}),this.$ScrollWatchedComponent5=(()=>{null==this.$ScrollWatchedComponent6&&(this.$ScrollWatchedComponent6=i(d[2]).addVisibilityListener(this.getMeasuredAreaRect,this.handleVisibilityChange,this.context.scrollableContainer))}),this.handleVisibilityChange=(t=>{const o=this.rect,n=null!==t;n!==this.$ScrollWatchedComponent7&&(n?this.props.onScrollEnter():this.props.onScrollLeave());let l;(l=t&&o?a(d[0]).getArea(t)/a(d[0]).getArea(o)*100:0)!==this.$ScrollWatchedComponent8&&this.props.onScrollChange(l),this.$ScrollWatchedComponent7=n,this.$ScrollWatchedComponent8=l}),this.$ScrollWatchedComponent4=i(d[3])(()=>{const t=this.$ScrollWatchedComponent1();if(!this.rect||!a(d[0]).isEqual(t,this.rect)){this.setRect(t),this.$ScrollWatchedComponent5();const o=i(d[2]).listeners[i(d[1])(this.$ScrollWatchedComponent6)];i(d[2]).updateListenerVisibility(o)}},t)}componentDidMount(){this.$ScrollWatchedComponent9=i(d[4]).add(window,'orientationchange',this.$ScrollWatchedComponent4),this.$ScrollWatchedComponent10=i(d[4]).add(window,'resize',this.$ScrollWatchedComponent4)}componentWillUnmount(){this.$ScrollWatchedComponent6&&i(d[2]).removeVisibilityListener(this.$ScrollWatchedComponent6),this.$ScrollWatchedComponent9&&this.$ScrollWatchedComponent9.remove(),this.$ScrollWatchedComponent10&&this.$ScrollWatchedComponent10.remove(),this.$ScrollWatchedComponent4.cancel()}render(){return a(d[5]).createElement(i(d[6]),{className:this.props.className,onResize:this.handleResize,ref:this.$ScrollWatchedComponent3},this.props.children)}}o.defaultProps={boundScaleFactor:{x:1,y:1},onScrollEnter:i(d[7]),onScrollLeave:i(d[7]),onScrollChange:i(d[7])},o.contextType=r(d[8]).ScrollableContainerContext;var n=o;e.default=n},12320775,[12320776,9633799,12320777,9764870,9830431,3,9830452,9633821,12320778]);
__d(function(g,r,i,a,m,e,d){"use strict";function t(t,o){return{top:t.top+o.y,right:t.right+o.x,bottom:t.bottom+o.y,left:t.left+o.x,width:t.width,height:t.height}}function o(t,o){return!(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left)}Object.defineProperty(e,'__esModule',{value:!0}),e.getForViewport=function(){return{top:window.pageYOffset,right:window.pageXOffset+window.innerWidth,bottom:window.pageYOffset+window.innerHeight,left:window.pageXOffset,width:window.innerWidth,height:window.innerHeight}},e.getInParentCoordSystem=function(o,h){return t(o,{x:-h.left,y:-h.top})},e.getScaled=function(t,o){const h=t.width*o.x,n=t.height*o.y,f=(h-t.width)/2,w=(n-t.height)/2;return{top:t.top-w,right:t.right+f,bottom:t.bottom+w,left:t.left-f,width:h,height:n}},e.getTranslated=t,e.isIntersection=o,e.getIntersection=function(t,h){if(!o(t,h))return null;const n=Math.max(t.top,h.top),f=Math.min(t.right,h.right),w=Math.min(t.bottom,h.bottom),u=Math.max(t.left,h.left);return{top:n,right:f,bottom:w,left:u,width:f-u,height:w-n}},e.getArea=function(t){return t.width*t.height},e.isEqual=function(t,o){return Math.abs(t.left-o.left)<1&&Math.abs(t.top-o.top)<1&&Math.abs(t.width-o.width)<1&&Math.abs(t.height-o.height)<1&&Math.abs(t.right-o.right)<1&&Math.abs(t.bottom-o.bottom)<1}},12320776,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});const t=['scroll','resize','orientationchange'],s=30;class l{constructor(t,s,l,c){this.measureFn=t,this.listenerFn=s,this.container=l,this.extraListener=c,this.isVisible=null}}var c=new class{constructor(){this.$ScrollWatcher9=(()=>{this.$ScrollWatcher4()}),this.$ScrollWatcher12=(t=>{this.$ScrollWatcher4(t)}),this.$ScrollWatcher1=!1,this.listeners={},this.$ScrollWatcher2=0,this.$ScrollWatcher3=1,this.$ScrollWatcher4=i(d[0])(this.$ScrollWatcher5,s,this),this.$ScrollWatcher6=new Map,this.$ScrollWatcher7()}$ScrollWatcher7(){i(d[1]).canUseEventListeners&&(this.$ScrollWatcher8=t.map(t=>i(d[2]).add(window,t,this.$ScrollWatcher9.bind(this))))}$ScrollWatcher10(){this.$ScrollWatcher8&&this.$ScrollWatcher8.forEach(t=>t.remove())}$ScrollWatcher11(t){const s=t.clientWidth,l=t.clientHeight,c=t.scrollTop,h=t.scrollLeft;return{left:h,width:s,right:h+s,top:c,height:l,bottom:c+l}}updateListenerVisibility(t,s){const l=t.measureFn();let c;const h=t.container;c=h?this.$ScrollWatcher11(h):s||a(d[3]).getForViewport();const o=a(d[3]).getIntersection(l,c);t.visibleRect!==o&&(t.visibleRect=o,t.listenerFn(o))}$ScrollWatcher5(t){const s=a(d[3]).getForViewport(),l=(t?Array.from(this.$ScrollWatcher6.get(t)||[]):Object.keys(this.listeners)).reduce((t,s)=>(t.push(this.listeners[s]),t),[]).filter(t=>null!=t);for(const t of l)this.updateListenerVisibility(t,s)}addVisibilityListener(t,s,c){const h='L'+this.$ScrollWatcher3++;let o=null;c&&(this.$ScrollWatcher6.set(c,(this.$ScrollWatcher6.get(c)||new Set).add(h)),o=i(d[2]).add(c,'scroll',this.$ScrollWatcher12.bind(this,c)));const n=new l(t,s,c,o);return this.listeners[h]=n,this.$ScrollWatcher2++,setTimeout(()=>{h in this.listeners&&this.updateListenerVisibility(n)},0),this.$ScrollWatcher1||this.$ScrollWatcher7(),h}removeVisibilityListener(t){if(!this.listeners.hasOwnProperty(t))return;const s=this.listeners[t];if(s.extraListener&&s.extraListener.remove(),s.container){const l=this.$ScrollWatcher6.get(s.container);null!=l||i(d[4])(0),l.delete(t),0===l.size&&this.$ScrollWatcher6.delete(s.container)}delete this.listeners[t],this.$ScrollWatcher2--,0===this.$ScrollWatcher2&&this.$ScrollWatcher1&&(this.$ScrollWatcher10(),this.$ScrollWatcher1=!1)}};e.default=c},12320777,[9764870,9502828,9830431,12320776,9502826]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});const t=a(d[0]).createContext({scrollableContainer:null});var l=function(l){const n=r(d[0]).useRef(null);return a(d[0]).createElement(t.Provider,{value:{scrollableContainer:n.current}},a(d[0]).createElement("div",{className:l.className,ref:n,style:l.style},l.children))};e.default=l,e.ScrollableContainerContext=t},12320778,[3]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]),r(d[1]);e.default=(({className:t,errorText:l,onRetry:c,...n})=>a(d[2]).createElement("div",{className:i(d[3])(t,"TqMen")},a(d[2]).createElement("button",{"aria-label":r(d[4]).RETRY_TEXT,className:"_1n6a3",onClick:c,tabIndex:"0"},a(d[2]).createElement("div",{className:"mEFkC coreSpriteReload"}),a(d[2]).createElement("div",{className:"JMO_o"},l||r(d[4]).FAILED_TO_LOAD_TEXT))))},11993125,[9633794,11993146,3,9633813,9633809]);
__d(function() {},11993146,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]),r(d[1]);var t=t=>a(d[2]).createElement(i(d[3]),{className:"HUW1v hUQXy",href:t.href,onClick:t.onClick,params:t.params},r(d[4])(803));e.default=t},9961555,[9633793,9961560,3,9633800,9633796]);
__d(function() {},9961560,[]);
__d(function(g,r,i,a,m,e,d){"use strict";function s(s){return!s.suggestedUsers.viewerHasFBConnect}Object.defineProperty(e,'__esModule',{value:!0});const t=r(d[0]).createSelector(s,r(d[1]).isFBConnectEligible,(s,t)=>!s&&t),n=r(d[0]).createSelector(s=>s.suggestedUsers.ids,s=>s.suggestedUsers.dismissedAysfIds,(s,t)=>s.subtract(t).toArray()),o=r(d[0]).createSelector(s=>s.suggestedUsers.dismissedAysfIds,(s,t)=>i(d[2])(t.userIds).map(t=>r(d[3]).getUserById(s,t)),(s,t)=>t.filter(t=>!s.has(t.id)).toArray()),u=r(d[0]).createSelector(s=>s.suggestedUsers.ids,s=>s.toArray());e.isViewerFacebookConnected=s,e.shouldDisplayFacebookConnect=t,e.getNonDismissedAysfIds=n,e.getProfileChainingFailure=function(s,t){return!!s.suggestedUsers.profileChainingFailures.get(t)},e.getProfileChainingSuggestions=function(s,t){return s.suggestedUsers.profileChainingSuggestions.get(t)},e.getFeedAysfUsers=o,e.getSuggestions=u,e.isInitialLoad=function(s){return s.suggestedUsers.isLoadingSuggestions&&0===s.suggestedUsers.ids.size}},9961552,[9,9961558,9633799,9633931]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.isFBConnectEligible=function(n){return n.fb.status!==r(d[0]).STATUS.ineligible},e.isConnected=function(n){return n.fb.status===r(d[0]).STATUS.connected}},9961558,[9633857]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]);const t=t=>a(d[1]).createElement("section",{className:i(d[2])("ABCxa",t.className)},a(d[1]).createElement("div",{className:"JErX0"},a(d[1]).createElement("div",{className:"ig3mj"},t.icon),a(d[1]).createElement("div",{className:"olLwo"},t.headerText),a(d[1]).createElement("div",{className:"f5C5x"},t.bodyText),!t.hideAction&&a(d[1]).createElement(r(d[3]).Button,{disabled:t.buttonDisabled,loading:t.isProcessing,onClick:t.onButtonClick},t.buttonText),t.footer));t.defaultProps={hideAction:!1};var c=t;e.default=c},9961563,[9961569,3,9633813,9633855]);
__d(function() {},9961569,[]);