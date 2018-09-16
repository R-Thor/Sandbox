// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__5416){
var map__5441 = p__5416;
var map__5441__$1 = ((((!((map__5441 == null)))?((((map__5441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5441.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5441):map__5441);
var m = map__5441__$1;
var n = cljs.core.get.call(null,map__5441__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__5441__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__5443_5465 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__5444_5466 = null;
var count__5445_5467 = (0);
var i__5446_5468 = (0);
while(true){
if((i__5446_5468 < count__5445_5467)){
var f_5469 = cljs.core._nth.call(null,chunk__5444_5466,i__5446_5468);
cljs.core.println.call(null,"  ",f_5469);

var G__5470 = seq__5443_5465;
var G__5471 = chunk__5444_5466;
var G__5472 = count__5445_5467;
var G__5473 = (i__5446_5468 + (1));
seq__5443_5465 = G__5470;
chunk__5444_5466 = G__5471;
count__5445_5467 = G__5472;
i__5446_5468 = G__5473;
continue;
} else {
var temp__4657__auto___5474 = cljs.core.seq.call(null,seq__5443_5465);
if(temp__4657__auto___5474){
var seq__5443_5475__$1 = temp__4657__auto___5474;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5443_5475__$1)){
var c__3675__auto___5476 = cljs.core.chunk_first.call(null,seq__5443_5475__$1);
var G__5477 = cljs.core.chunk_rest.call(null,seq__5443_5475__$1);
var G__5478 = c__3675__auto___5476;
var G__5479 = cljs.core.count.call(null,c__3675__auto___5476);
var G__5480 = (0);
seq__5443_5465 = G__5477;
chunk__5444_5466 = G__5478;
count__5445_5467 = G__5479;
i__5446_5468 = G__5480;
continue;
} else {
var f_5481 = cljs.core.first.call(null,seq__5443_5475__$1);
cljs.core.println.call(null,"  ",f_5481);

var G__5482 = cljs.core.next.call(null,seq__5443_5475__$1);
var G__5483 = null;
var G__5484 = (0);
var G__5485 = (0);
seq__5443_5465 = G__5482;
chunk__5444_5466 = G__5483;
count__5445_5467 = G__5484;
i__5446_5468 = G__5485;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_5486 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3289__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3289__auto__)){
return or__3289__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_5486);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_5486)))?cljs.core.second.call(null,arglists_5486):arglists_5486));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__5447_5487 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__5448_5488 = null;
var count__5449_5489 = (0);
var i__5450_5490 = (0);
while(true){
if((i__5450_5490 < count__5449_5489)){
var vec__5451_5491 = cljs.core._nth.call(null,chunk__5448_5488,i__5450_5490);
var name_5492 = cljs.core.nth.call(null,vec__5451_5491,(0),null);
var map__5454_5493 = cljs.core.nth.call(null,vec__5451_5491,(1),null);
var map__5454_5494__$1 = ((((!((map__5454_5493 == null)))?((((map__5454_5493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5454_5493.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5454_5493):map__5454_5493);
var doc_5495 = cljs.core.get.call(null,map__5454_5494__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_5496 = cljs.core.get.call(null,map__5454_5494__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_5492);

cljs.core.println.call(null," ",arglists_5496);

if(cljs.core.truth_(doc_5495)){
cljs.core.println.call(null," ",doc_5495);
} else {
}

var G__5497 = seq__5447_5487;
var G__5498 = chunk__5448_5488;
var G__5499 = count__5449_5489;
var G__5500 = (i__5450_5490 + (1));
seq__5447_5487 = G__5497;
chunk__5448_5488 = G__5498;
count__5449_5489 = G__5499;
i__5450_5490 = G__5500;
continue;
} else {
var temp__4657__auto___5501 = cljs.core.seq.call(null,seq__5447_5487);
if(temp__4657__auto___5501){
var seq__5447_5502__$1 = temp__4657__auto___5501;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5447_5502__$1)){
var c__3675__auto___5503 = cljs.core.chunk_first.call(null,seq__5447_5502__$1);
var G__5504 = cljs.core.chunk_rest.call(null,seq__5447_5502__$1);
var G__5505 = c__3675__auto___5503;
var G__5506 = cljs.core.count.call(null,c__3675__auto___5503);
var G__5507 = (0);
seq__5447_5487 = G__5504;
chunk__5448_5488 = G__5505;
count__5449_5489 = G__5506;
i__5450_5490 = G__5507;
continue;
} else {
var vec__5456_5508 = cljs.core.first.call(null,seq__5447_5502__$1);
var name_5509 = cljs.core.nth.call(null,vec__5456_5508,(0),null);
var map__5459_5510 = cljs.core.nth.call(null,vec__5456_5508,(1),null);
var map__5459_5511__$1 = ((((!((map__5459_5510 == null)))?((((map__5459_5510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5459_5510.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5459_5510):map__5459_5510);
var doc_5512 = cljs.core.get.call(null,map__5459_5511__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_5513 = cljs.core.get.call(null,map__5459_5511__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_5509);

cljs.core.println.call(null," ",arglists_5513);

if(cljs.core.truth_(doc_5512)){
cljs.core.println.call(null," ",doc_5512);
} else {
}

var G__5514 = cljs.core.next.call(null,seq__5447_5502__$1);
var G__5515 = null;
var G__5516 = (0);
var G__5517 = (0);
seq__5447_5487 = G__5514;
chunk__5448_5488 = G__5515;
count__5449_5489 = G__5516;
i__5450_5490 = G__5517;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__5461 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__5462 = null;
var count__5463 = (0);
var i__5464 = (0);
while(true){
if((i__5464 < count__5463)){
var role = cljs.core._nth.call(null,chunk__5462,i__5464);
var temp__4657__auto___5518__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___5518__$1)){
var spec_5519 = temp__4657__auto___5518__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_5519));
} else {
}

var G__5520 = seq__5461;
var G__5521 = chunk__5462;
var G__5522 = count__5463;
var G__5523 = (i__5464 + (1));
seq__5461 = G__5520;
chunk__5462 = G__5521;
count__5463 = G__5522;
i__5464 = G__5523;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__5461);
if(temp__4657__auto____$1){
var seq__5461__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5461__$1)){
var c__3675__auto__ = cljs.core.chunk_first.call(null,seq__5461__$1);
var G__5524 = cljs.core.chunk_rest.call(null,seq__5461__$1);
var G__5525 = c__3675__auto__;
var G__5526 = cljs.core.count.call(null,c__3675__auto__);
var G__5527 = (0);
seq__5461 = G__5524;
chunk__5462 = G__5525;
count__5463 = G__5526;
i__5464 = G__5527;
continue;
} else {
var role = cljs.core.first.call(null,seq__5461__$1);
var temp__4657__auto___5528__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___5528__$2)){
var spec_5529 = temp__4657__auto___5528__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_5529));
} else {
}

var G__5530 = cljs.core.next.call(null,seq__5461__$1);
var G__5531 = null;
var G__5532 = (0);
var G__5533 = (0);
seq__5461 = G__5530;
chunk__5462 = G__5531;
count__5463 = G__5532;
i__5464 = G__5533;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
