(ns email-cleaner.javax-mail-interop
  (:gen-class)
  (:import 
    [java.util Properties]
    [javax.mail Session]
  )
)
;(defn props-set [key value]
(defn props-set [key value]
  (let 
    [props (doto (Properties. )(.setProperty key, value))] props))
(defn session-set "Session session = Session.getInstance(props, null);"
[props]
(let [session (. Session getInstance props nil)] session))
(defn store-get [session] (.getStore session))
