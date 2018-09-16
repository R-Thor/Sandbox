// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__1202){
var map__1227 = p__1202;
var map__1227__$1 = ((((!((map__1227 == null)))?((((map__1227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1227.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1227):map__1227);
var m = map__1227__$1;
var n = cljs.core.get.call(null,map__1227__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__1227__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__1229_1251 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1230_1252 = null;
var count__1231_1253 = (0);
var i__1232_1254 = (0);
while(true){
if((i__1232_1254 < count__1231_1253)){
var f_1255 = cljs.core._nth.call(null,chunk__1230_1252,i__1232_1254);
cljs.core.println.call(null,"  ",f_1255);

var G__1256 = seq__1229_1251;
var G__1257 = chunk__1230_1252;
var G__1258 = count__1231_1253;
var G__1259 = (i__1232_1254 + (1));
seq__1229_1251 = G__1256;
chunk__1230_1252 = G__1257;
count__1231_1253 = G__1258;
i__1232_1254 = G__1259;
continue;
} else {
var temp__4657__auto___1260 = cljs.core.seq.call(null,seq__1229_1251);
if(temp__4657__auto___1260){
var seq__1229_1261__$1 = temp__4657__auto___1260;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1229_1261__$1)){
var c__3675__auto___1262 = cljs.core.chunk_first.call(null,seq__1229_1261__$1);
var G__1263 = cljs.core.chunk_rest.call(null,seq__1229_1261__$1);
var G__1264 = c__3675__auto___1262;
var G__1265 = cljs.core.count.call(null,c__3675__auto___1262);
var G__1266 = (0);
seq__1229_1251 = G__1263;
chunk__1230_1252 = G__1264;
count__1231_1253 = G__1265;
i__1232_1254 = G__1266;
continue;
} else {
var f_1267 = cljs.core.first.call(null,seq__1229_1261__$1);
cljs.core.println.call(null,"  ",f_1267);

var G__1268 = cljs.core.next.call(null,seq__1229_1261__$1);
var G__1269 = null;
var G__1270 = (0);
var G__1271 = (0);
seq__1229_1251 = G__1268;
chunk__1230_1252 = G__1269;
count__1231_1253 = G__1270;
i__1232_1254 = G__1271;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_1272 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3289__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3289__auto__)){
return or__3289__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_1272);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_1272)))?cljs.core.second.call(null,arglists_1272):arglists_1272));
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
var seq__1233_1273 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1234_1274 = null;
var count__1235_1275 = (0);
var i__1236_1276 = (0);
while(true){
if((i__1236_1276 < count__1235_1275)){
var vec__1237_1277 = cljs.core._nth.call(null,chunk__1234_1274,i__1236_1276);
var name_1278 = cljs.core.nth.call(null,vec__1237_1277,(0),null);
var map__1240_1279 = cljs.core.nth.call(null,vec__1237_1277,(1),null);
var map__1240_1280__$1 = ((((!((map__1240_1279 == null)))?((((map__1240_1279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1240_1279.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1240_1279):map__1240_1279);
var doc_1281 = cljs.core.get.call(null,map__1240_1280__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1282 = cljs.core.get.call(null,map__1240_1280__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1278);

cljs.core.println.call(null," ",arglists_1282);

if(cljs.core.truth_(doc_1281)){
cljs.core.println.call(null," ",doc_1281);
} else {
}

var G__1283 = seq__1233_1273;
var G__1284 = chunk__1234_1274;
var G__1285 = count__1235_1275;
var G__1286 = (i__1236_1276 + (1));
seq__1233_1273 = G__1283;
chunk__1234_1274 = G__1284;
count__1235_1275 = G__1285;
i__1236_1276 = G__1286;
continue;
} else {
var temp__4657__auto___1287 = cljs.core.seq.call(null,seq__1233_1273);
if(temp__4657__auto___1287){
var seq__1233_1288__$1 = temp__4657__auto___1287;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1233_1288__$1)){
var c__3675__auto___1289 = cljs.core.chunk_first.call(null,seq__1233_1288__$1);
var G__1290 = cljs.core.chunk_rest.call(null,seq__1233_1288__$1);
var G__1291 = c__3675__auto___1289;
var G__1292 = cljs.core.count.call(null,c__3675__auto___1289);
var G__1293 = (0);
seq__1233_1273 = G__1290;
chunk__1234_1274 = G__1291;
count__1235_1275 = G__1292;
i__1236_1276 = G__1293;
continue;
} else {
var vec__1242_1294 = cljs.core.first.call(null,seq__1233_1288__$1);
var name_1295 = cljs.core.nth.call(null,vec__1242_1294,(0),null);
var map__1245_1296 = cljs.core.nth.call(null,vec__1242_1294,(1),null);
var map__1245_1297__$1 = ((((!((map__1245_1296 == null)))?((((map__1245_1296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1245_1296.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1245_1296):map__1245_1296);
var doc_1298 = cljs.core.get.call(null,map__1245_1297__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1299 = cljs.core.get.call(null,map__1245_1297__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1295);

cljs.core.println.call(null," ",arglists_1299);

if(cljs.core.truth_(doc_1298)){
cljs.core.println.call(null," ",doc_1298);
} else {
}

var G__1300 = cljs.core.next.call(null,seq__1233_1288__$1);
var G__1301 = null;
var G__1302 = (0);
var G__1303 = (0);
seq__1233_1273 = G__1300;
chunk__1234_1274 = G__1301;
count__1235_1275 = G__1302;
i__1236_1276 = G__1303;
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

var seq__1247 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__1248 = null;
var count__1249 = (0);
var i__1250 = (0);
while(true){
if((i__1250 < count__1249)){
var role = cljs.core._nth.call(null,chunk__1248,i__1250);
var temp__4657__auto___1304__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___1304__$1)){
var spec_1305 = temp__4657__auto___1304__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_1305));
} else {
}

var G__1306 = seq__1247;
var G__1307 = chunk__1248;
var G__1308 = count__1249;
var G__1309 = (i__1250 + (1));
seq__1247 = G__1306;
chunk__1248 = G__1307;
count__1249 = G__1308;
i__1250 = G__1309;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__1247);
if(temp__4657__auto____$1){
var seq__1247__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1247__$1)){
var c__3675__auto__ = cljs.core.chunk_first.call(null,seq__1247__$1);
var G__1310 = cljs.core.chunk_rest.call(null,seq__1247__$1);
var G__1311 = c__3675__auto__;
var G__1312 = cljs.core.count.call(null,c__3675__auto__);
var G__1313 = (0);
seq__1247 = G__1310;
chunk__1248 = G__1311;
count__1249 = G__1312;
i__1250 = G__1313;
continue;
} else {
var role = cljs.core.first.call(null,seq__1247__$1);
var temp__4657__auto___1314__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___1314__$2)){
var spec_1315 = temp__4657__auto___1314__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_1315));
} else {
}

var G__1316 = cljs.core.next.call(null,seq__1247__$1);
var G__1317 = null;
var G__1318 = (0);
var G__1319 = (0);
seq__1247 = G__1316;
chunk__1248 = G__1317;
count__1249 = G__1318;
i__1250 = G__1319;
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

//# sourceMappingURL=repl.js.map